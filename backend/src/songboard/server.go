package main

import (
	"net/http"

	"github.com/samsarahq/go/oops"
	"github.com/samsarahq/thunder/graphql"
	"github.com/samsarahq/thunder/graphql/graphiql"
	"github.com/samsarahq/thunder/graphql/introspection"
	"github.com/samsarahq/thunder/graphql/schemabuilder"
)

type Server struct {
	users  []User
	boards []Board
}

type userArgs struct {
	Id int64
}

type boardArgs struct {
	Id int64
}

// registerQuery registers the root query type.
func (s *Server) registerQuery(schema *schemabuilder.Schema) {
	obj := schema.Query()
	obj.FieldFunc("users", s.getUsers)
	obj.FieldFunc("user", s.getUser)
	obj.FieldFunc("board", s.getBoard)
}

func (s *Server) getUsers() []User {
	return s.users
}

func (s *Server) getUser(args userArgs) (User, error) {
	for _, u := range s.users {
		if u.Id == args.Id {
			return u, nil
		}
	}
	return User{}, oops.Errorf("User not found")
}

func (s *Server) getBoard(args boardArgs) (Board, error) {
	for _, b := range s.boards {
		if b.Id == args.Id {
			return b, nil
		}
	}
	return Board{}, oops.Errorf("Board not found")
}

// schema builds the graphql schema.
func (s *Server) schema() *graphql.Schema {
	builder := schemabuilder.NewSchema()
	s.registerQuery(builder)
	s.registerUser(builder)
	s.registerBoard(builder)
	s.registerLink(builder)
	return builder.MustBuild()
}

func main() {
	boards := []Board{
		{
			Id: 0,
			Links: []Link{
				{
					Url:     "https://open.spotify.com/embed/track/5JtPGzRgrWxkXX9LoROq3d",
					UrlType: SPOTIFY,
				},
			},
		},
	}
	server := &Server{
		users: []User{
			{
				Id:     0,
				Boards: boards,
			},
		},
		boards: boards,
	}
	schema := server.schema()
	introspection.AddIntrospectionToSchema(schema)

	http.Handle("/graphql", graphql.Handler(schema))
	http.Handle("/graphiql/", http.StripPrefix("/graphiql/", graphiql.Handler()))
	http.ListenAndServe(":3030", nil)
}
