const API_URL = process.env.WORDPRESS_API_URL

import MenuFragment from './fragments/_menus';
import AuthorOnUser from './fragments/_authorOnUser';
import PostOnPost from './fragments/_postOnPost';

import Homepage from './queries/homepage';
import Search from './queries/search';
import FirstPosts from './queries/first_post';
import SecondPosts from './queries/second_post';
import HomepageCarousel from './queries/homepage_carousel';
import BlogAuthors from './queries/blog_authors';
import BlogCategories from './queries/blog_categories';

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch("https://gorillalogic.com/graphql", {
    // const res = await fetch(process.env, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query,
          variables,
        }),
      })
      const json = await res.json()
      if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch GL - API')
      }
      return json.data
}


export async function getMenus() {

    const data = await fetchAPI(`
   
    query General {
      mainFooter: menu(id: "dGVybToyMDE=") {
        count
        id
        databaseId
        menuItems {
          nodes {
            ...MenuFragment
          }
        }
      }
      mainNav: menu(id: "dGVybToxOTk=") {
        count
        id
        databaseId
        menuItems {
          nodes {
            ...MenuFragment
          }
        }
      }
      capabilities: menu(id: "dGVybToyMDQ=") {
        count
        id
        databaseId
        menuItems {
          nodes {
            ...MenuFragment
          }
        }
      }
    }
    ${MenuFragment}
    `
    )
    console.log(data);
    console.log("API - Get Menu : ok");
    return data
}

export async function getSearchResultTotalPages() {
  const data = await fetchAPI(` }
    
  `
  )
    console.log(data);
    console.log("API - Search total : ok");
  return data
}

export async function getHomepage(){
  const data = await fetchAPI(`
    ${Homepage}
  `)
    console.log(data);
    console.log("API - Homepage Fields : ok");
  return data
}

export async function getSearchResult() {
  const data = await fetchAPI(`
  ${Search}
  `
  )
    console.log(data);
    console.log("API - Search : ok");
  return data
}

export async function getFirstBlogs() {
  const data = await fetchAPI(
    `
    ${FirstPosts}
  `
  )
  console.log("API - First Post : ok");
  return data?.posts
}

export async function blogAuthors() {
  const data = await fetchAPI(
    `
    ${BlogAuthors}
  `
  )
  console.log("API - Blog Authors : ok");
  return data?.users
}

export async function blogCategories() {
  const data = await fetchAPI(
    `
    ${BlogCategories}
  `
  )
  console.log("API - Blog Categories : ok");
  return data?.categories
}

export async function getSecondBlogs() {
  const data = await fetchAPI(
    `
    ${SecondPosts}
  `
  )
  console.log("API - Second Post : ok");
  return data?.posts
}

export async function getHomepageCarousel() {
  console.log("API in - Homepage Carousel : ok");
  const data = await fetchAPI(
    `
    ${HomepageCarousel}
  `
  )
  console.log("API - Homepage Carousel : ok");
  return data
}

export async function getPostAndMorePosts(slug) {
  
  // The slug may be the id of an unpublished post
  //const slug2 = "gorilla-logic-acquires-strategy-design-and-innovation-consultancy-modernist-studio";
  console.log("API - PREV Get Post and More post");
  console.log(slug);
  
  const data = await fetchAPI(
    `
    query PostBySlug($id: ID! ) {
      post(id: $id, idType: SLUG) {
        ...PostFields
        content
        seo {
          metaKeywords
          metaDesc
          title
          canonical
        }
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node{
                  ...AuthorFields
                  
                }
              }
              
            }
          }
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
    ${AuthorOnUser}
    ${PostOnPost}
  `,
    {
      variables: {
        id: slug
      },
    }
  )

  // data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  //if (data.posts.edges.length > 1) data.posts.edges.pop()
  console.log("API - Get Post and More post : ok");
  console.log(data);
  return data
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  console.log("API - Get All Post Slugs : ok");
  return data?.posts
}

export async function getCapabilities(slug) {
  
  console.log("API - PREV Get Capabilities page");
  console.log(slug);
  
  const data = await fetchAPI(
    `
    query CapabilitiesSlug($id: ID! ) {
      capabilities(id: $id, idType: SLUG) {
        id
        title
        date
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        seo {
          canonical
          metaDesc
          metaKeywords
          title
        }
      }
    }
  `,
    {
      variables: {
        id: slug
      },
    }
  )

  // data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  //if (data.posts.edges.length > 1) data.posts.edges.pop()
  console.log("API - Get Capabilities : ok");
  console.log(data);
  return data
}

// export async function getAllCapabilitiesWithSlug() {
//   const data = await fetchAPI(`
//   {
//     capabilitiesPages {
//       edges {
//         node {
//           slug 
//         }
//       }
//     }
//   }
//   `)
//   console.log("API - Get All Capabilities Slugs : ok");
//   return data?.capabilitiesPages
// }

export async function getPagesSlugs() {
  const data = await fetchAPI(`
  {
    pages(where: {status: PUBLISH}) {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)
  console.log("API - Get All Published Pages");
  return data?.pages
}

//---

export async function getTags() {
  const data = await fetchAPI(`
  {
    
    tags(first: 100, after: "YXJyYXljb25uZWN0aW9uOjIzMA==") {
      edges {
        cursor
        node {
          name
          tagId
          slug
        }
      }
    }
    
  }
  `)
  console.log("API - Get All Published Tags");
  return data
}





export async function getPageContent(slug) {
  
  // The slug may be the id of an unpublished post
  //const slug2 = "gorilla-logic-acquires-strategy-design-and-innovation-consultancy-modernist-studio";
  console.log("API - Page content ");
  console.log(slug);
  
  const data = await fetchAPI(
    `
    query pagesSlug($id: ID! ) {
      page(id: $id, idType: URI)  {
        id
        title
        seo {
          metaDesc
          metaKeywords
          title
          canonical
        }
        content
        contentType {
          node {
            id
          }
        }
        featuredImage {
          node {
            altText
            uri
            srcSet
            sourceUrl
            slug
          }
        }
        pagesFields {
          templateType
          mainQuote
        }
    }
  }
    
  `,
    {
      variables: {
        id: slug
      },
    }
  )

  // data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  //if (data.posts.edges.length > 1) data.posts.edges.pop()
  console.log("API - Get Post and More post : ok");
  console.log(data);
  return data.page
}
