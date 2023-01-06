import React from 'react'
import Menu from '../Menu/Menu'

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="half-1">
            <Menu />
          </div>
          <div className="half-2">
            <div className="contacts-block">
              <div className="tel-block">
                <a className="link" href="tel: +7 (8125) 555-555"><img src="../assets/icons/tel.png" alt="tel" /> +7&nbsp;(812)&nbsp;555-55-55</a>
              </div>
              <div className="geogr-block">
                <a className="link" href="https://go.2gis.com/jwezy"><img src="../assets/icons/geogr.png" alt="geogr" /> г. Санкт-Петербург, ул. Ефимова, 3</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer