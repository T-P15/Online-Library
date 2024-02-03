const { Book, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })

            return userData;
            }
            throw AuthenticationError;
        },

},
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create({args});
            const token = signToken(user);
            return { token, user };
          },

          login: async (parent, args) => {
            const user = await User.findOne({ 
              $or: [{username: args.username}, {email: args.email}], });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(args.password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },

          saveBook: async (parent, args , context) => {
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: context.user._id },
                {
                  $addToSet: {
                    savedBooks: { input: args },
                  },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
            throw AuthenticationError;
          },

          removeBook: async (parent, args , context) => {
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: context.user._id },
                {
                  $pull: {
                    savedBooks: {
                      bookId: args.bookId
                    },
                  },
                },
                { new: true }
              );
            }
            throw AuthenticationError;
          },
    }
};

module.exports = resolvers