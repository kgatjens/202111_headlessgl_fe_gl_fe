const MainMenu = `
query{
    menusMenu(id:1){
      data{
        attributes{
          items{
            data{
              attributes{
                url
                title
                target
              }
            }
          }
        }
      }
    }
  }

`
export default MainMenu