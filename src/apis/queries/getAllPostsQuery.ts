import { gql } from "@apollo/client";

export const getAllPostsQuery = gql`
  query getAllPosts($limit: Int!, $offset: Int) {
    posts(limit: $limit, offset: $offset) {
      nodes {
        id
        title
        shortContent
      }
      edges {
        cursor
        node {
          id
          title
          shortContent
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      totalCount
    }
  }
`;
