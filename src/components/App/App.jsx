import React from 'react'
import './App.css'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import CatalogPage from '../../pages/CatalogPage'
import DeliveryPage from '../../pages/DeliveryPage'
import PaymentPage from '../../pages/PaymentPage'
import ContactsPage from '../../pages/ContactsPage'
import AboutPage from '../../pages/AboutPage'
import NotFoundPage from '../../pages/NotFoundPage'
import { useAtom } from 'jotai'
import { isMobileMenuActiveAtom } from '../../store/atoms'

function App() {
  let [isMobileMenuActive, setIsMobileMenuActive] = useAtom(isMobileMenuActiveAtom)

  function toggleMobileMenu() {
    setIsMobileMenuActive(prev => !prev)
  }
  return (
    <div className="app">
      <button
        id="blink"
        onClick={toggleMobileMenu}
        className={'menu-btn' + (isMobileMenuActive ? ' active' : '')}>
        <span></span></button>
      <div className={'menu-window' + (isMobileMenuActive ? ' active' : '')}>
        <Menu />
      </div>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<CatalogPage/>} />
          <Route path='/catalog' element={<CatalogPage/>}/>
          <Route path='/delivery' element={<DeliveryPage/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App