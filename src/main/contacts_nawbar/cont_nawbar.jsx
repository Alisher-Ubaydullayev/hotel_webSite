import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../contacts_nawbar/cont_nawbar_style";
import {Contacts_naw} from './cont_nawbar_style'


const Cont_nawbar = () => {
  return (
 
<Contacts_naw>
<div className='nawbar'>
<div className='nawbar_left'>
  <div className='luxry_logo'>
    <h1>LUXRY</h1><br />
    <h4>HOTELS</h4>
  </div>
</div>
<div className='nawbar_right'>
  <Link to={'/'}>
  <Button style={{backgroundColor:"#14274A"}}>HOME</Button>
  </Link>
  <Link to={'/facilities'}>
  <Button  style={{backgroundColor:"#14274A"}}>FAKTILITIES</Button>
  </Link>
  <Link to={'/rooms'}>
  <Button style={{backgroundColor:"#14274A"}}>ROOMS</Button>
  </Link>
  <Link to={'/contacts'}>
  <Button style={{backgroundColor:"#14274A"}}>CONTACTS-US</Button>
  </Link>
</div>
</div>
<div className='main_title'>
<h1>CONTACTS-US</h1>
</div>

</Contacts_naw>
)
}

export default Cont_nawbar