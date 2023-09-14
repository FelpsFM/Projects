import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color:#F5F5F5;
    width:100%;
    height:15vh;
    margin-top:1rem;
    gap:2rem;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    position:absolute;
    top:0;
    left:0;
    right:0;

    @media(min-width: 1000px){
        justify-content: flex-end;
        height: 8vh;
        >form{
            margin-right: 5% ;
        }
        
    }
`

export const LogoHeader = styled.img`
    @media(min-width: 1040px){  
    margin-right: 55%;

}
`
export const StyledCarrinho = styled.button`
    border:none;   
    position:relative ;

    >p{
        position: absolute;
        top: -5px;
        right: -5px;
        width: 15px;
        border: 2px solid var(--Color-primary);
        border-radius:40%;
        background-color: var(--Color-primary);
        color: white;
        font-weight:900;
        font-size:14px;
    }

`

export const StyledForm = styled.form`
    position: relative;
    z-index: 1;

    >input{
        height: 5vh;
        width: 15vw;
        min-width:230px
    }

    >button{
        background-color: var(--Color-primary) ;
        position:absolute ;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 4px;
        top: 4px;
        bottom:4px;
        border: none;
        padding-left:5px ;
        padding-right:5px ;
        border-radius:4px ;
    }
`
