import { User } from "../types/UserType"

function useUsers() {
  const getUsers = () => {
    const localUsers = localStorage.getItem('users')
    if ( localUsers ) {
      const users = JSON.parse(localUsers) as User[]
      return users
    } else {
      localStorage.setItem('users', JSON.stringify([]))
      return []
    }
  }

  const addUser = (username: string, display: string, password :string) => {
    let users = getUsers()
    const user = users.find(u => u.username === username)
    if ( !user ) {
      const newUser: User = {
        username,
        display,
        password,
      }
      users = [...users, newUser]
      localStorage.setItem('users', JSON.stringify(users))
      return newUser
    } else {
      return null
    }
  }

  const getUser = (username:string, password: string) => {
    const users = getUsers()
    const user = users.find(u => u.username === username && u.password === password)
    if ( user ) {
      return user
    } else {
      return null
    }
  }

  return {
    addUser,
    getUser,
  }
}

export default useUsers