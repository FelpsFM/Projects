import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --Color-primary:#27AE60;
    --Color-secondary:#EB5757;
    --color-grey:#F5F5F5;
    font-size:62.5%;
}
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    body,html{
        width:100vw;
        height:100vh;
    }

    body {
    overflow-x: hidden;
      
  }

  body::-webkit-scrollbar {
  display: none;}

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
