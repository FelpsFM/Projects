
import lixeira from "../../../assets/lixeira.svg"
import { CartContainer, ImgCart, SubtitleCart } from "./styles";

export const Cart = ({ item, deleteToCart,index }) => {

  return (
    <CartContainer>
        <ImgCart>
          <img src={item.img} alt="imagem do produto" />
        </ImgCart>
        <SubtitleCart>
          <h1>{item.name}</h1>
          <button onClick={() => deleteToCart(item.id)} type="button" ><img src={lixeira} alt="Excluir" /></button>
        </SubtitleCart> 
    </CartContainer>
  )
}