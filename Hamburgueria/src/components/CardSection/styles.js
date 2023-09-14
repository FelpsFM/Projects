    import styled from "styled-components";



    export const Card = styled.li`
        height:30rem;
        width:25rem;
        display: flex;
        flex-direction:column;

    :hover{
            border: 2px solid var(--Color-primary);
    }

    `

    export const SubTitleProduct =styled.div`
        display: flex;  
        flex-direction:column;
        height: 90%;
        margin-left:5%;

    >h1{
        font-size:1.65rem;
        font-weight:700;
        margin-top:1rem;
        margin-bottom:1rem;
    }

    >p{
        font-size:1.2rem;
        font-weight:400;
        margin-bottom:1rem;
    }

    >span{
        color:green;
        font-size:1.4rem;
        font-weight:600;
        margin-bottom:1rem;
    }

    >button{
        width: 50%;
        background-color:#BDBDBD;
        color:var(--color-grey);
        border-radius:4px;
        border: 1px solid #BDBDBD;

    }

    >button:hover{
        background-color:var(--Color-primary);
        color:white;
        
    }

    `

    export const ImgProduct =styled.div`
    display: flex;
    justify-content:center;
    align-itens:center;
        background: #F5F5F5;
        height: 15rem;
    >img{
        display: flex;
        align-itens:center;
        height:16rem;
        width: 17rem;
            
    }

    `

 