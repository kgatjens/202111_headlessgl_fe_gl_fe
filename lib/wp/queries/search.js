const Search = `
query GET_SEARCH_RESULTS( $first: Int, $after: String = "", $query: String ) {
    posts(first: $first, after: $after, where: {search: $query}) {
      edges {
        node {
          id
          title
          excerpt
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
`

export default Search