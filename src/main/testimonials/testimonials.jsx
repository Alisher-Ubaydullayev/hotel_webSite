import React from 'react'
import { Desn } from '../testimonials/testimonials_style'
import { Title } from '../testimonials/testimonials_style'
import left from '../../assets/icon_left.png'
import right from '../../assets/icon_right.png'
import { Button } from '../nawbar/navbar_style';

const Testimonials = () => {
  return (
    <Desn>
    <Title wd='309px'>Testimonials</Title>   
    <h3>"Calm, Serene, Retro – What a way to relax and enjoy"</h3>
    <h5>Mr. and Mrs. Baxter, UK</h5>
    <div style={{display:"flex"}}>

    <Button wd='50px' ht='50px'>
<img src={left} alt="" />
    </Button>
    <Button  wd='50px' ht='50px' style={{marginLeft:'20px'}}>
    <img src={right} alt="" />
    </Button>
    </div>
    </Desn>



  )
}

export default Testimonials 