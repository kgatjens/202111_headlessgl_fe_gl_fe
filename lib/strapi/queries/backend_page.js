const BackendPage = `
query{
    capability(id:2){
      data{
        attributes{
          HeaderSecondaryText
          HeaderMainTitle
          CapabilitiesItems{
            MainText
            ImageLeftAlignment
            Title
            Image{
              data{
                attributes{
                  url
                }
              }
            }
            
          }
          HeaderImage{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }

`
export default BackendPage