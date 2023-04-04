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

export const ADD_POST = gql`
mutation AddPost($title: String!, $content: String!) {
  addPost(title: $title, content: $content) {
    _id
    title
    content
    createdAt
    user {
      _id
    }
  }
}
`;