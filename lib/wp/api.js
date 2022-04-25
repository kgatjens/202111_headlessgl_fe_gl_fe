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

  export async function getPostAndMorePosts(slug, preview='', previewData='') {
    const postPreview = preview && previewData?.post
    // The slug may be the id of an unpublished post
    const isId = Number.isInteger(Number(slug))
    const isSamePost = isId
      ? Number(slug) === postPreview.id
      : slug === postPreview.slug
    const isDraft = isSamePost && postPreview?.status === 'draft'
    const isRevision = isSamePost && postPreview?.status === 'publish'
    const data = await fetchAPI(
      `
      fragment AuthorFields on User {
        name
        firstName
        lastName
        avatar {
          url
        }
      }
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        featuredImage {
          sourceUrl
        }
        author {
          ...AuthorFields
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
          ${
            // Only some of the fields of a revision are considered as there are some inconsistencies
            isRevision
              ? `
          revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
            edges {
              node {
                title
                excerpt
                content
                author {
                  ...AuthorFields
                }
              }
            }
          }
          `
              : ''
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
    `,
      {
        variables: {
          id: isDraft ? postPreview.id : slug,
          idType: isDraft ? 'DATABASE_ID' : 'SLUG',
        },
      }
    )
  
    // Draft posts may not have an slug
    if (isDraft) data.post.slug = postPreview.id
    // Apply a revision (changes in a published post)
    if (isRevision && data.post.revisions) {
      const revision = data.post.revisions.edges[0]?.node
  
      if (revision) Object.assign(data.post, revision)
      delete data.post.revisions
    }
  
    // Filter out the main post
    data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
    // If there are still 3 posts, remove the last one
    if (data.posts.edges.length > 2) data.posts.edges.pop()
    console.log("API - Get Post and More post : ok");

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