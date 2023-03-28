const FirstPosts = `
query FirstPosts {
    posts(first: 4, where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}) {
      edges {
        node {
          title
          tags {
            nodes {
              tagId
            }
          }
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

export default FirstPosts