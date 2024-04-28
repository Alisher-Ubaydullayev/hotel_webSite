import React from 'react'
import Nawbar from '../main/nawbar/nawbar'
import { Facilities_container } from './pages_syle'
import Facilities_img from '../main/main_factilities/factilities'

import Footer from '../main/foter/foter'
import Testimonials from '../main/testimonials/testimonials'

const Facilities = () => {
  return (
    <Facilities_container>
      <Nawbar/>
      <Facilities_img/>
      <Testimonials/>
      <Footer/>
    </Facilities_container>
  )
}

export default Facilities