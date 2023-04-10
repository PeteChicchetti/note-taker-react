const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    notes: [Note]
  }

  type Note {
    _id: ID!
    title: String!
    content: String!
    createdAt: String
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    notes: [Note]
    note(noteid: ID!): Note
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addNote(title: String!, content: String!): Note
    deleteNote(noteid: ID!): Note
  }
`;

module.exports = typeDefs;
