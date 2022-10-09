import './layout.css'

import classNames from 'classnames'
import { useLayoutEffect, useRef } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import BackgroundImage from '../../components/_images/BackgroundImage'

export default function Layout() {
  const location = useLocation()

  const navigationItems = [
    { to: '/', label: 'Home' },
    { to: '/characters', label: 'Characters' },
    { to: '/episodes', label: 'Episodes' },
  ]

  const navRef = useRef<HTMLElement>(null)
  const underlineRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const activeElement = navRef.current?.querySelector('.active')
    const dimensions = activeElement?.getBoundingClientRect()

    if (underlineRef.current && dimensions) {
      underlineRef.current.style.left = `${dimensions?.left}px`
      underlineRef.current.style.top = `${dimensions?.bottom}px`
      underlineRef.current.style.width = `${dimensions?.width}px`
    }
  }, [location.pathname])

  return (
    <>
      <header style={{ position: 'relative' }}>
        <nav
          className={classNames(
            'layout__navigation',
            location.pathname === '/' && 'layout__navigation--is-home'
          )}
          ref={navRef}
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
              </NavLink>
            )
          })}
        </nav>

        <span ref={underlineRef} className="layout__navigation-underline" />
      </header>

      <BackgroundImage />

      <main className="layout__main">
        <Outlet />
      </main>
    </>
  )
}
