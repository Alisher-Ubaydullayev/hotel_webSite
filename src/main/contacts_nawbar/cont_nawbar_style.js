import styled from "styled-components";



export const Contacts_naw=styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 35vh;
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
.main_title{
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 30px;
font-weight: 700;
font-family: 'Garamond';
}



`
export const Button=styled.button`
border: none;
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
