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
          seo {
            metaDesc
            title
            metaKeywords
            canonical
          }
        }
      }
    }
  }    
`

export default Homepage
