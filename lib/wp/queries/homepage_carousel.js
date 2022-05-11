const Homepage = `

query NewQuery {
    carousel(id: "homepage-carousel", idType: SLUG) {
      carouselFields {
        carouselImage1 {
          altText
          sourceUrl
          title
        }
        carouselImage2 {
          altText
          sourceUrl
          title
        }
        carouselImage3 {
          altText
          sourceUrl
          title
        }
        carouselImage4 {
          altText
          sourceUrl
          title
        }
      }
    }
  }
  `

export default Homepage