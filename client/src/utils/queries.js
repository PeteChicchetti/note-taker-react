import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query user($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    email
    courseCount
    courses {
      _id
      courseName
      startDate
      endDate
      description
      instructor
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
    user {
      username
    }
  }
}
`;