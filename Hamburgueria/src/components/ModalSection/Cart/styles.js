import styled from "styled-components";

    export const CartContainer = styled.div`
        margin-top:3rem;
        display:flex;
        height:10rem;
    
    `

    export const ImgCart = styled.div`  
        display: flex;
        align-items: flex-end;

        >img{
            background-color: #E0E0E0;
            height: 100%;
            margin-left:2rem;
    }
    @media(max-width: 700px){  
        >img{
            width: 90%;
            height: 90%;
        }

}

    `

    export const SubtitleCart = styled.div`
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        width: 100%;
        
        >h1{
            font-size:18px;
            font-weight:700;
            margin-left:2%;
        }
        
        >button{
            background-color:white ;
            border:2px solid white;
            width: 4rem;
            margin-right:5%;
            
        }

        @media(max-width: 701px){ 
           
            width: 60%;
            h1{
                
             font-size:14px;
            }
            >button{
                width: 1rem;
                height: 1rem;
                margin-right:2%;
            }

}
    `

    export const ProductCart = styled.div`
    height: 70%;
    overflow-x:auto;
    margin-bottom:5%;
    `

    export const TotalCart = styled.div`
        margin-left:2rem;
        border-top:2px solid grey;
        width: 90%;

        >button{
            width: 90%;
            margin-top:1rem;
            margin-left:2rem;
            border:2px solid #E0E0E0;
            border-radius:4px;
            background-color:#E0E0E0 ;
            
        }
        >div{
            margin-top:1rem;
            display:flex;
            justify-content: space-around;
        }
    `