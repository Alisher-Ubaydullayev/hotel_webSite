import { styled } from "styled-components";



export const Navbar_container=styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
.nawbar{
display: flex;
height: 7em;
}
.nawbar_left{
display: flex;
flex:1;
justify-content:center
}
.nawbar_right{
display: flex;
flex: 1;
justify-content:space-around;
align-items:center


}
.luxry_logo{
width: 13em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
letter-spacing:6px;
font-family: 'Garamond';
background-color:#E0B973;
border-bottom-left-radius:50px;
border-bottom-right-radius:50px;
}

`
export const Button=styled.button`
border: none;
width: 236px;
height:63px;
background: none;
color:white;
border-radius: 2px;
text-align: center;
font-family:${props=>props.page ? "montserrat" : 'Garamond'} ;
background-color:${props=>props.page ? "" : '#E0B973;'} ;
cursor: pointer;
:hover{
text-decoration:${props=>props.page ? 'underline' : 'none'} ;
}
`

export const ScrollStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
    color: #FFF;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.25px;
    margin-bottom: 5px;
    margin-top:-30px;
}
img{
    margin-bottom:80px;
    width: 40px;
height: 40px;
border-radius: 30px;
&:hover{
        cursor: pointer;
        border: 3px solid #14274A ;
    }
}
`
export const Main_title=styled.div`
display: flex;
flex-direction: column;
padding-left: 10em;
`