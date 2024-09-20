import { gql } from "@apollo/client";

export const authMemberQuery = gql`
  query authMember {
    authMember {
      id
      name
      status
    }
  }
`;
