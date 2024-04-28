import React from 'react'
import Nawbar from '../main/nawbar/nawbar'
import { Home_container } from './pages_syle'
import Homes from '../main/dates_hotel_wepper/dates_hotel'
import Testimonials from '../main/testimonials/testimonials'
import Footer from '../main/foter/foter'
const Home = () => {
  return (
    
  
    <Home_container>
      <Nawbar/>
      <Homes/>
      <Testimonials/>
      <Footer/>
  </Home_container>
  )
}

export default Home