import { Link } from 'react-router-dom'
import React from 'react'
import { Button, Main_title, Navbar_container, ScrollStyle} from './navbar_style';
import scrol from '../../assets/scrollDown.png'

const Nawbar = () => {
  return (
    
    <Navbar_container>
      <div className='nawbar'>
        <div className='nawbar_left'>
          <div className='luxry_logo'>
            <h1>LUXRY</h1><br />
            <h4>HOTELS</h4>
          </div>
        </div>
        <div className='nawbar_right'>
          <Link to={'/'}>
          <Button page>HOME</Button>
          </Link>
          <Link to={'/facilities'}>
          <Button page>FAKTILITIES</Button>
          </Link>
          <Link to={'/rooms'}>
          <Button page >ROOMS</Button>
          </Link>
          <Link to={'/contacts'}>
          <Button page>CONTACTS-US</Button>
          </Link>
        </div>
      </div>
      <Main_title>
        <h1>WELCOME TO</h1><br />
        <h2>LUXRY</h2>
        <h3>HOTELS</h3>
        <p>Book your stay and enjoy Luxury <br />
          redefined at the most affordable rates.</p>
      </Main_title>
      <div className='main_btn'>
        <Button>BOOK NOW</Button>
      </div>
      <ScrollStyle>
        <h1>SCROLL</h1>
             <img src={scrol} alt="" />
    </ScrollStyle>
    </Navbar_container>
  
  )
}

export default Nawbar