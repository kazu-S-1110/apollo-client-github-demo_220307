import { gql } from '@apollo/client';

export const changeSearchText = gql`
  mutation ($text: String!) {
    changeSearchText(text: $text) @client
  }
`;
