import styled from "styled-components";



export const ProductsList = styled.ul`
    max-width:100vw;
    list-style:none;
    display:flex;
    gap:3rem;
    height: 100%;
    margin-left:1rem;
    margin-top:20vh;
    overflow-y:auto;


    @media(min-width: 800px){
       margin-left:10% ;
       width: 80%;
       margin-top:10% ;
       flex-wrap:wrap;
       overflow:none;
    
    }

`