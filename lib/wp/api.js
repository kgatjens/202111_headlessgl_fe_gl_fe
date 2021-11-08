const API_URL = process.env.WORDPRESS_API_URL

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
