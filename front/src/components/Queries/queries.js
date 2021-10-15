import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query ($username: String, $password: String) {
    login(username: $username, password: $password) {
      username
      password
    }
  }
`;

export const ADD_NEW_USER = gql`
  mutation ($username: String, $password: String) {
    addUser(username: $username, password: $password) {
      username
    }
  }
`;
