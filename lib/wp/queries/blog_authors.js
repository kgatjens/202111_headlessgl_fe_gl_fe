const BlogAuthors = `
query FirstPosts {
    users(where: {hasPublishedPosts: POST}, first: 100) {
      edges {
        node {
          id
          name
          userId
        }
      }
    }
  }
  `
export default BlogAuthors