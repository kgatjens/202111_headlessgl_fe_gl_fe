const PostOnPost = `
fragment PostFields on Post {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
      ...AuthorFields
      }
     
    }
    categories {
      edges {
        node {
          name
        }
      }
    }
    tags {
      edges {
        node {
          name
        }
      }
    }
    seo {
      canonical
      metaDesc
      metaKeywords
      title
    }
  }
`
export default PostOnPost;
