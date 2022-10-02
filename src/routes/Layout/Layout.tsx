import './Layout.css'

import { NavLink, Outlet } from 'react-router-dom'

import BackgroundImage from '../../components/_images/BackgroundImage'

export default function Layout() {
  const activeStyle = {
    textDecoration: 'underline',
  }

  return (
    <>
      <nav className="layout__navigation">
        <NavLink
          className="layout__navigation-link"
          end
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          className="layout__navigation-link"
          to="/characters"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Characters
        </NavLink>

        <NavLink
          className="layout__navigation-link"
          to="/episodes"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Episodes
        </NavLink>

        {/* <NavLink className="layout__navigation-link" to="/slow">
          Slow
        </NavLink>

        <NavLink className="layout__navigation-link" to="/slow-deferred">
          Slow deferred
        </NavLink> */}
      </nav>

      <BackgroundImage />

      <main className="layout__main">
        <Outlet />
      </main>
    </>
  )
}
