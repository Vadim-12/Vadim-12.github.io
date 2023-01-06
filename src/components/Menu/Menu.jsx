import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { isMobileMenuActiveAtom } from '../../store/atoms'
import { links } from '../../store/constData'

function Menu() {
  const [, setIsMobileMenuActive] = useAtom(isMobileMenuActiveAtom)
  function chooseLinkMenu() {
    setIsMobileMenuActive(false)
  }
  return (
    <nav className="menu">
      {
        links.map(link => {
          return (
            <Link key={link.id} className="menu__link" to={link.href} onClick={chooseLinkMenu}>{link.name}</Link>
          )
        })
      }
    </nav>
  )
}

export default Menu