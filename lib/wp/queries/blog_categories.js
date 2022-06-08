const BlogCategories = `
query categoy {
    categories(where: {hideEmpty: true, exclude: ["74", "27"]}) {
      edges {
        node {
          name
          id
          categoryId
        }
      }
    }
}`
export default BlogCategories