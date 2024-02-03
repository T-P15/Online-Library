const typeDefs = `
type Auth {
    token: ID!
    user: User
  }

  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String! email: String! password: String!): Auth
    login(username: String email: String password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: String!): User
  }

`

module.exports = typeDefs