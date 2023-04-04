import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query Query {
  user {
    username
    email
    notes {
      title
      content
      createdAt
    }
  }
}
`;

export const QUERY_NOTES = gql`
query Query {
  notes {
    title
    content
    _id
    createdAt
  }
}
`;