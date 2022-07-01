const MenuFragment = `
fragment MenuFragment on MenuItem {
    
        id
        databaseId
        title
        url
        cssClasses
        description
        label
        target
        path
        childItems {
          nodes {
            databaseId
            id
            path
            target
            title
            url
            parentId
            label
            parentDatabaseId
            childItems {
                edges {
                  node {
                    id
                    path
                    label
                    title
                    url
                  }
                }
            }
          }
        }
        parentId
        parentDatabaseId
      
    
}
`

export default MenuFragment;

