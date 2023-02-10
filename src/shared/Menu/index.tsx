import { NavLink } from "react-router-dom"
import AuthType from "../../context/AuthType"
import { useAuth } from "../../context/useAuth"
import routes from "../../routes/routes"

import './Menu.sass'

function Menu() {
  const auth = useAuth() as AuthType
  return (
    <header className='menu'>
      <h1 className='menu-title'>
        <span>AppName</span>
      </h1>
      <nav className='menu-nav'>
        <ul className='menu-list'>
          {
            routes
            .filter( r =>
              (r.auth && auth.user) ||
              (!r.auth && !auth.user)
            )
            .map( r =>
              <li
                className='menu-item'
                key={r.to} >
                <NavLink to={r.to}>
                  <span>{r.display}</span>
                </NavLink>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Menu