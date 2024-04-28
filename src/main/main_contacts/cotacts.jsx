import React from 'react';
import iconRight from '../../assets/Arrow 1right-icon.png';
import { Button } from '../nawbar/navbar_style';
import { Address, ContactStyle, ContainerUs, SectionForm, SectionInput } from './contacts_style';

const Contacts = () => {
  return (
    <ContactStyle>
    <SectionForm>
          <h5>WE ARE HERE FOR YOU</h5>          
          <p style={{fontSize:''}}> 
            At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, <br/>
            please forward it to our support desk and we will get back to you as soon as possible.
          </p>
        </SectionForm>
        <ContainerUs>
          <Address>
            <p>497 Evergreen Rd. Roseville, CA 95673</p>
            <div><h5>View map</h5> <img src={iconRight} alt="" /></div>
            <p>Phone: +44 345 678 903Email: luxury_hotels@gmail.com</p>
            </Address>

          <SectionInput><h6>Name</h6>
            <input type="text" />
            <h6>Email Address</h6>
            <input type="text" />
            <h6>Message</h6>
            <div><input type="comment" style={{width:'570px',height:'352px'}}/>
            <Button wd='145px' ht='78px'>Submit</Button></div>
          </SectionInput>
        </ContainerUs>
    </ContactStyle>
  )
}

export default Contacts