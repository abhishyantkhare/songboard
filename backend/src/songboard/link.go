package main

import "github.com/samsarahq/thunder/graphql/schemabuilder"

type Link struct {
	Url     string
	UrlType URLTYPE
}

func (s *Server) registerLink(schema *schemabuilder.Schema) {
	object := schema.Object("link", Link{})
	object.FieldFunc("url", s.getUrl)
	object.FieldFunc("urlType", s.getUrlType)
}

func (s *Server) getUrl(l *Link) string {
	return l.Url
}

func (s *Server) getUrlType(l *Link) URLTYPE {
	return l.UrlType
}
