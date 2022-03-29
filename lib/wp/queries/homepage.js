const Homepage = `
query MyQuery {
    allHomepage {
      edges {
        node {
          id
          slug
          content
          featuredImage {
            node {
              altText
              mediaItemUrl
              sourceUrl
              seo {
                metaKeywords
                metaDesc
              }
            }
          }
          homepageFields {
            headerImage {
              altText
              mediaItemUrl
            }
            homepageTitle
            initialDescriptionText
            sectionBackgroundImage {
              altText
              mediaItemUrl
            }
            sectionColor
          }
        }
      }
    }
  }    
`

export default Homepage
