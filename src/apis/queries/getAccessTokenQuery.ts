import { gql } from "@apollo/client";

export const getAccessTokenQuery = gql`
  query getAccessToken($networkDomain: String) {
    tokens(networkDomain: $networkDomain) {
      accessToken
    }
  }
`;
