import { createContext, useContext, useState } from "react";
import { User } from "../types/UserType";
import useUsers from "../hooks/useUsers";
import AuthType from "./AuthType";
import { Navigate } from "react-router-dom";

// @ts-ignore
const context = createContext<AuthType>()

function AuthProvider(props: { children:any }) {
  const users = useUsers()
  const [user, setUser] = useState<User|null>(null)

  const signin = (username: string, display: string, password: string) => {
    const newUser = users.addUser(username, display, password)
    if (newUser) {
      setUser(newUser)
    }
  }

  const login = (username:string, password:string) => {
    const logged = users.getUser(username, password)
    if ( logged ) {
      setUser(logged)
    }
  }

  const logout = () => {
    setUser(null)
  }

  const auth = {
    user,
    signin,
    login,
    logout,
  };
  
  return (
    <context.Provider value={auth}>
      {props.children}
    </context.Provider>
  )
}

function useAuth() {
  return useContext(context)
}

function AuthRoute(props: {children:any}) {
  const auth = useAuth();
  if (!auth?.user)
    return <Navigate to='/login' />
  return props.children
}

function HomeRoute(props: {children:any}) {
  const auth = useAuth();
  if (auth?.user)
    return <Navigate to='/' />
  return props.children
}

function applyAuth(element:JSX.Element) {
  return (
    <AuthRoute>
      {element}
    </AuthRoute>
  )
}

function applyHome(element:JSX.Element) {
  return (
    <HomeRoute>
      {element}
    </HomeRoute>
  )
}

export {
  AuthProvider,
  useAuth,
  applyAuth,
  applyHome,
}