import { gql } from "@apollo/client";

export const addReaction = gql`
  mutation addReaction($input: AddReactionInput!, $postId: ID!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;
