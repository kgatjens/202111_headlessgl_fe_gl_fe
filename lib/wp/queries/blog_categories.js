const BlogCategories = `
query categoy {
    categories(first: 100,where: {hideEmpty: true, exclude: ["74", "27"]}) {
      edges {
        node {
          name
          categoryId
          description
          slug
        }
      }
    }
}`
export default BlogCategories