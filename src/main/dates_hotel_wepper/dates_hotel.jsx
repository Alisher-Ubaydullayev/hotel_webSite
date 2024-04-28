import React from 'react'
import { Wrappertypes, Middle, MiniMiddle, Text, Title, MiddleImg } from '../dates_hotel_wepper/dates_hotel_style';
import { Button } from '../nawbar/navbar_style'
import room from '../../assets/luxuryRedifined.png'
import beach from '../../assets/sandBeach.png'



const Homes = () => {
  return (
    
        
        <Wrappertypes>
          <h2>All our room types are including complementary breakfast</h2>
          <Middle>
        <div style={{border:"1px solid black",height:"320px", marginRight:"20px"}}></div>
            <MiniMiddle>
              <Title >Luxury redefined</Title>
              <Text style={{marginTop:"20px"}}>Our rooms are designed to transport <br />
                  you into an environment made for leisure. <br />
                  Take your mind off the day-to-day of home <br />
                  life and find a private paradise for yourself.</Text>
              <Button>EXPLORE</Button>
            </MiniMiddle>
            <MiddleImg>
              <img src={room} alt="" />
            </MiddleImg>
          </Middle>
          
          <Middle>
        <div style={{border:"1px solid black",height:"389px", marginRight:"20px"}}></div>
            <MiniMiddle>
              <Title>Leave your worries in the sand</Title>
              <Text style={{marginTop:"20px"}}>We love life at the beach. Being close <br /> to the ocean with access to endless sandy <br />
               beach ensures a relaxed state of mind. It <br /> seems like time stands still watching the <br /> ocean.</Text>
              <Button>EXPLORE</Button>
            </MiniMiddle>
            <MiddleImg>
              <img src={beach} alt="" />
            </MiddleImg>
          </Middle>

        </Wrappertypes>

      
  )
}
  

export default Homes