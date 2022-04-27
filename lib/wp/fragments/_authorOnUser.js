const AuthorOnUser = `
fragment AuthorFields on User {
    firstName
    lastName
    avatar {
      url
    }
    name  
}
`
export default AuthorOnUser;
