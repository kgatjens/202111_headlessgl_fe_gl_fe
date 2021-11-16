const API_URL = process.env.WORDPRESS_API_URL

import ImageFragment from '../fragments/image';
import PostFragment from '../fragments/post';

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL, {
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
    //   console.log("%%%%")
    //   console.log(json)
      return json.data
}


export async function getMainMenu() {

    const data = await fetchAPI(`
    query MyQuery {
 
        menu(id: "dGVybToxOTk=") {
            count
            id
            databaseId
            menuItems {
              nodes {
                id
                databaseId
                title
                url
                cssClasses
                description
                label
                target
              }
            }
          }
        }
    `
    )
    // console.log(data);
    // console.log("**********");
    return data?.menu
  }

  export async function getSearchResult() {
    const data = await fetchAPI(`
    query GET_SEARCH_RESULTS( $first: Int, $after: String = "", $query: String ) {
      posts(first: $first, after: $after, where: {search: $query}) {
        edges {
          node {
            id
            title
            excerpt
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    
     }

    `
    )
     console.log(data);
     console.log("**********");
    return data?.menu
  }

