import React from 'react'
import Menu from '../Menu/Menu'
import { useAtom } from 'jotai'
import { queryAtom } from '../../store/atoms'

function Header() {
  let [query, setQuery] = useAtom(queryAtom)
  function searchSubmit(event) {
    event.preventDefault()
  }
  function searchChange(event) {
    let value = event.target.value
    setQuery(value)
  }
  return (
    <header>
      <div className="container">
        <div className="half-1">
          <Menu/>
        </div>
        <div className="half-2">
          <form action="#" className="search-form" onSubmit={searchSubmit}>
            <input
              className="search-input"
              type="search"
              value={query}
              name="search-input"
              autoComplete="off"
              placeholder="Поиск по названию картины"
              onChange={searchChange}
            />
            <button
              className="search-btn"
              type="submit"
            >Найти</button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header