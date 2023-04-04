const { AuthenticationError } = require('apollo-server-express');
const { User, Note } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    /// GETS ONE USER ///
    user: async (parent, { userId }, context) => {
      if (context.user) {
        const userData = await (await User.findOne({ _id: userId }).select('-__v -password'));

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    /// ADD USER ///
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    /// LOGIN ///
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    /// GETS ALL POSTS ///
    notes: async () => {
      return await Note.find({}).populate({populate: {path: 'user'}}).populate({path: 'user'}).select('-__v ');
    },
    /// ADD POST ///
    addNote: async (parent, {title, content}, context) => {
      const note = await Note.create(
        {title: title, content: content, user: context.user._id}
      )
      const updatedUser = await User.findOneAndUpdate(
        {_id: context.user._id},
        {$addToSet:{notes: note._id}},
        {new: true}
        );

      return  note ;
    },
  }
};

module.exports = resolvers;
