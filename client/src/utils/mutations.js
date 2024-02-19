import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String, $email: String, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          bookId
          description
          image
          link
          title
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          bookId
          description
          image
          link
          title
      }
    }
  }}
`;

export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput) {
    saveBook(book: $book) {
      _id
      email
      bookCount
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }

    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      email
      bookCount
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
