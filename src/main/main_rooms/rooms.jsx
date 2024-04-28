import React from 'react'
import singlerom from '../assets/singleroom.png'
import radio from '../assets/Group 65radio.png'
import plus from '../assets/Group 58plusButon.png'
import { Buttonstyle } from '../styles/buttonstyled'
import doubleroom from '../assets/doubleroom.png'
import twinroom from'../assets/twinroom.png'
import { Middleroom, WrepRoom } from './rooms_style'
import { Text, Title } from '../dates_hotel_wepper/dates_hotel_style'

const Rooms = () => {
  return (
 <>
      <Title>
          ROOMS
          </Title>
          <Text >
          We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
          that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
          and our modern luxury resort facilities will help you enjoy the best of all. 
          </Text>
       
        <WrepRoom>
          <img src={singlerom} alt="" style={{width:'1460px'}} />
          <img src={radio} alt="" style={{width:'100px',marginTop:"-170px",marginBottom:'80px'}}/>
          <Middleroom><h1>SINGLE ROOM</h1></Middleroom>
          <WrapButton>
            <div>
              <img src={plus} alt="" />
          <h3>VIEW ROOM DETAILS</h3>
          </div>
          <div><Buttonstyle>$155  Avg/night</Buttonstyle></div>
          </WrapButton>
        </WrepRoom>

          
        <WrepRoom >
          <img src={doubleroom} alt="" style={{width:'1460px'}} />
          <img src={radio} alt="" style={{width:'100px',marginTop:"-170px",marginBottom:'80px'}}/>
          <Middleroom><h1>DOUBLE ROOM</h1></Middleroom>

          <WrapButton>
            <div>
              <img src={plus} alt="" />
          <h3>VIEW ROOM DETAILS</h3>
          </div>
          <div><Buttonstyle>$155  Avg/night</Buttonstyle></div>
          </WrapButton>
        </WrepRoom>

        <WrepRoom >
          <img src={twinroom} alt="" style={{width:'1460px'}} />
          <img src={radio} alt="" style={{width:'100px',marginTop:"-170px",marginBottom:'80px'}}/>
          <Middleroom><h1>TWIN ROOM</h1></Middleroom>

          <WrapButton>
            <div>
              <img src={plus} alt="" />
          <h3>VIEW ROOM DETAILS</h3>
          </div>
          <div><Buttonstyle>$155  Avg/night</Buttonstyle></div>
          </WrapButton>

        </WrepRoom>
 </>
  )
}

export default Rooms