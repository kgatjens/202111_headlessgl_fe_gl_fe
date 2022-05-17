const SecondPosts = `
query SecondPosts {
    posts(where: {orderby: {field: DATE, order: DESC}}, last: 10) {
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
              avatar {
                url
              }
              name
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

export default SecondPosts