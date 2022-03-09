const { gql } = require('@apollo/client');

export const getRepositories = gql`
  query ($searchText: String!) {
    search(first: 10, query: $searchText, type: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          stargazers {
            totalCount
          }
        }
      }
    }
    searchText @client
  }
`;
