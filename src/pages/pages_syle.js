import styled from "styled-components";
import home_bg from "../assets/home_BG.png";
import facilities_bg from "../assets/facilities_BG.png";
import rooms_bg from '../assets/rooms_BG.png';




export const Home_container =styled.div`
background-image:url(${home_bg});
background-size: cover;
width: 100%;
height: 100vh;
background-color:rgba(20, 39, 74, 0.50);
`;
export const Facilities_container =styled.div`
background-image:url(${facilities_bg}) ;
background-size: cover;
width: 100%;
height: 100vh;
background-color:rgba(20, 39, 74, 0.50)
`;
export const Rooms_container =styled.div`
background-image:url(${rooms_bg}) ;
background-size: cover;
width: 100%;
height: 100vh;
background-color:rgba(20, 39, 74, 0.50)
`;
export const Contacts_container =styled.div`
background-color:#14274A;
width: 100%;
height: 35vh;
`;





