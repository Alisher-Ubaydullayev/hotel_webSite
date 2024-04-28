import React from 'react'
import gym from '../../assets/gym.png'
import bar from '../../assets/PoolsidBars.png'
import swiming from '../../assets/swimmingpool.png'
import restourant from '../../assets/restaurant.png'
import spa from '../../assets/spa.png'
import laundry from '../../assets/laundry.png'
import { Induction, Wrepper_Img } from './factilities_style'
import { Text} from '../dates_hotel_wepper/dates_hotel_style'
import { Title } from '../testimonials/testimonials_style'

const Facilities_img = () => {
  return (
    <>
          <Title>
          FACILITIES
          </Title>
          <Text >
          We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
          that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
          and our modern luxury resort facilities will help you enjoy the best of all. 
          </Text>
        <Wrepper_Img>
          <img src={gym} alt="" />
          <div><Induction>THE GYM</Induction></div>
        </Wrepper_Img>
        <Wrepper_Img>
          <img src={bar} alt="" />
          <div><Induction>POOLSIDE BAR</Induction></div>
        </Wrepper_Img>
        <Wrepper_Img>
          <img src={swiming} alt="" />
          <div><Induction>SWIMMING POOL</Induction></div>
        </Wrepper_Img>
        <Wrepper_Img>
          <img src={restourant} alt="" />
          <div><Induction>RESTAURANT</Induction></div>
        </Wrepper_Img>
       < Wrepper_Img>
          <img src={spa} alt="" />
          <div><Induction>LAUNDRY</Induction></div>
        </Wrepper_Img>
        <Wrepper_Img>
          <img src={laundry} alt="" />
          <div><Induction>LAUNDRY</Induction></div>
        </Wrepper_Img>
    </>
  )
}

export default Facilities_img