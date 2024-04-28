import React from 'react'
import { Contacts_container } from './pages_syle'
import Cont_nawbar from '../main/contacts_nawbar/cont_nawbar'
import Footer from '../main/foter/foter'
import Contact from '../main/main_contacts/cotacts'



const Contacts = () => {
  return (
    <Contacts_container>
      <Cont_nawbar/>
      <Contact/>
      <Footer/>
    </Contacts_container>
  )
}

export default Contacts