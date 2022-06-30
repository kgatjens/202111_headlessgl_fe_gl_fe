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
            parentDatabaseId
          }
        }
        parentId
        parentDatabaseId
      
    
}
`

export default MenuFragment;

