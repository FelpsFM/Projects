import Logo from "../../assets/logotipo.svg"
import carrinho from "../../assets/carrinho.svg"
import lupa from "../../assets/lupa.png"
import { StyledCarrinho, LogoHeader, StyledHeader, StyledForm } from "./styles"
import { ModalSection } from "../ModalSection"
import { useState } from "react"



export const Header = ({setSearch,cart,setCart,deleteToCart}) => {
    const [isOpen,setIsOpen] = useState(false)
    
    const handleSubmit = (event)=>{
        event.preventDefault()
    }
    const tamanho = cart.length

    return(  
        <StyledHeader>
            <LogoHeader src={Logo} alt=" Icone Burguer Kenzie" />
                
               <StyledCarrinho onClick={() => setIsOpen(true)}> <img src={carrinho} alt="carrinho de compras" /><p>{tamanho}</p> </StyledCarrinho>
                    {isOpen ? <ModalSection  cart={cart} setCart={setCart} setIsOpen={setIsOpen} deleteToCart={deleteToCart} >teste</ModalSection> :null} 

                
             <StyledForm onSubmit={handleSubmit}>
                <input
                 type="text"
                  placeholder="Digitar Pesquisa"
                  onChange={(event)=>setSearch(event.target.value)} 
                  />
                    <button type="submit"><img src={lupa} alt="lupa" /></button>
             </StyledForm>

        </StyledHeader>
    )
}