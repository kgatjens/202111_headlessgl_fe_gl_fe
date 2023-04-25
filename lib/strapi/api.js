const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL

import MainMenu from './queries/main_menu';
import BackendPage from './queries/backend_page';

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(STRAPI_API_URL, {
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

export async function getMainMenu(){
    const data = await fetchAPI(`
      ${MainMenu}
    `)

    return data?.menusMenu?.data?.attributes?.items
  }
  
  export async function getBackendPage() {
    const data = await fetchAPI(`
    ${BackendPage}
    `
    )
    return data?.capability
  }