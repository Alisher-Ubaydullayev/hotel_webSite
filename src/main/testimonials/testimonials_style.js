import styled from 'styled-components'



export const Desn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
width: 100%;
height: 520px;

h3{
    font-family: 'Montserrat', sans-serif;
font-size: 30px;
font-weight: 400;
line-height: 36.67px;
color: #14274A;
margin-top: 17px;
}
h5{
    font-family: 'Montserrat', sans-serif;
font-size: 25x;
font-weight: 400;
line-height: 30.48px;
color: #14274A;
margin-top: 12px;
margin-bottom:12px
}

`
export const Title = styled.div`
font-size: 60px;
font-family: 'Cormorant Garamond', serif;
font-weight: 800;
letter-spacing: 2%;
color: #14274A;
width: ${({wd}) => wd || '563px'};
display: flex;
justify-content: center;
align-items: center;
`