import './Layout.css'

import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import BackgroundImage from '../../components/_images/BackgroundImage'

export default function Layout() {
  const location = useLocation()

  const navigationItems = [
    { to: '/', label: 'Home' },
    { to: '/characters', label: 'Characters' },
    { to: '/episodes', label: 'Episodes' },
  ]

  return (
    <>
      <header>
        <nav
          className={classNames(
            'layout__navigation',
            location.pathname === '/' && 'layout__navigation--is-home'
          )}
        >
          {navigationItems.map((navigationItem) => {
            return (
              <NavLink
                key={navigationItem.to}
                className="layout__navigation-link"
                end
                to={navigationItem.to}
              >
                {navigationItem.label}

                {location.pathname === navigationItem.to ? (
                  <motion.span
                    className="layout__navigation-underline"
                    layoutId="underline"
                  />
                ) : null}
              </NavLink>
            )
          })}
        </nav>
      </header>

      <BackgroundImage />

      <AnimatePresence mode="wait">
        <motion.main className="layout__main">
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </>
  )
}
