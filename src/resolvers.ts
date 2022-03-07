import { gql } from '@apollo/client';

const resolvers = {
  Mutation: {
    changeSearchText: (_, { text }, { cache }) => {
      const query = gql`
        query SearchText {
          searchText @client
        }
      `;

      cache.writeQuery({
        query,
        data: {
          searchText: text,
        },
      });
    },
  },
};

export default resolvers;
