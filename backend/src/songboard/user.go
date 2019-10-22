package main

import (
	"context"

	"github.com/samsarahq/thunder/graphql/schemabuilder"
)

type User struct {
	Id     int64
	Boards []Board
}

func (s *Server) registerUser(schema *schemabuilder.Schema) {
	object := schema.Object("user", User{})
	object.FieldFunc("boards", s.getUserBoards)
}

func (s *Server) getUserBoards(ctx context.Context, u *User) []Board {
	return u.Boards
}
