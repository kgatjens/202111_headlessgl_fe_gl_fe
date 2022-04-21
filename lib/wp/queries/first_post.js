const FirstPosts = `
query FirstPosts {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      edges {
        node {
          title
          excerpt
          slug
          date
          author {
            node {
              lastName
              firstName
            }
          }
          featuredImage {
            node {
              altText
              uri
              title
              srcSet(size: MEDIUM)
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default FirstPosts