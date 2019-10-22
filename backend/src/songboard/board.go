package main

import "github.com/samsarahq/thunder/graphql/schemabuilder"

type Board struct {
	Id    int64
	Links []Link
}

func (s *Server) registerBoard(schema *schemabuilder.Schema) {
	object := schema.Object("board", Board{})
	object.FieldFunc("links", s.getLinks)
}

func (s *Server) getLinks(b *Board) []Link {
	return b.Links
}
