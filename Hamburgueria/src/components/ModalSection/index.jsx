import { useRef } from "react";
import { useEffect } from "react";
import { Cart } from "./Cart";
import { ProductCart, TotalCart } from "./Cart/styles";
import { DivCondicional, HeaderModal, ModalBox, ModalContainer } from "./styles";
import carrinhoVazio from "../../assets/bgCarrinhoVazio.png"

export const ModalSection = ({ children, setIsOpen, setCart, cart,deleteToCart }) => {

  const modalRef = useRef(null)

  useEffect(() =>{
    const handleOutClick =(e)=>{

      if(!modalRef.current?.contains(e.target)){
        setIsOpen(false)
      }
    }
      window.addEventListener("mousedown",handleOutClick)

    return () =>{
      window.removeEventListener("mousedown",handleOutClick)
    }
  },[])

  const escRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.key === "Escape"){
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown",handleKeyDown)

    return () => {
      window.removeEventListener("keydown",handleKeyDown)

    }

  },[])

  
    const total = cart.reduce((acc, value) =>{
        
            return acc = acc +Number(value.price)
        },0)
      

        return (
          <ModalContainer role="dialog">
            <ModalBox ref={modalRef}>
              <HeaderModal>
                <h1>carrinho de compras</h1>
                <button ref={escRef} onClick={() => setIsOpen(false)}>X</button>
              </HeaderModal>
        
              {cart.length === 0 ? (
                <DivCondicional>
                  <img src={carrinhoVazio} alt="" />
                  <p>O seu carrinho ainda está vazio.</p>
                </DivCondicional>
              ) : (
                <>
                  <ProductCart> 
                    {cart.map((item, index) => (
                      <Cart key={index} item={item} deleteToCart={deleteToCart} index={index} />
                    ))}
                  </ProductCart>
        
                  <TotalCart>
                    <div>
                      <p>Total</p>
                      <p>{`R$${total.toFixed(2)}`}</p>
                    </div>
                    <button onClick={() => setCart([])}>Remover todos</button>
                  </TotalCart>
                </>
              )}
            </ModalBox>
          </ModalContainer>
        )}
