import { Card, ImgProduct, SubTitleProduct } from "./styles"

export const CardSection = ({product,addToCart}) => {

    return(
        <Card>
            
            <ImgProduct>
                <img src={product.img} alt="imagem do produto" />
            </ImgProduct>
            <SubTitleProduct>
                <h1>{product.name}</h1>
                <p> {product.category}</p> 
                <span> {`R$ ${product.price.toFixed(2)}`}</span>     
                <button onClick={() => addToCart(product)} type="button" id={product.id}>adicionar</button>
            </SubTitleProduct>
       
        </Card >
    )

    
}