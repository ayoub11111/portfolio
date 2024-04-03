import React from 'react'
import './header.css'
import CVC from './CVC'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ayyoub Ait Abdeslam</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CVC/>
        
        <HeaderSocials/>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header