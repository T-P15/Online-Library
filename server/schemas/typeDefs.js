const typeDefs = `
type Auth {
    token: ID!
    user: User
  }

  type Book {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  Type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
  }

  input BookInput {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: [User]!
  }

  type Mutation {
    addUser(username: String!,email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, input: BookInput): User
    removeBook(userId: ID!, bookId: String!): User
  }

`