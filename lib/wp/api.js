const API_URL = process.env.WORDPRESS_API_URL

import MenuFragment from './fragments/menus';
import Homepage from './queries/homepage';
import Search from './queries/search';
import FirstPosts from './queries/first_post';

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