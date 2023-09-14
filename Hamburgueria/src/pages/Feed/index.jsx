import { Api } from "../../Services/api"
import {useState,useEffect} from "react"
import { Header } from "../../Components/Header"
import { ProductsList } from "./styles"
import { CardSection } from "../../Components/CardSection"
import { ModalSection } from "../../Components/ModalSection"
import { toast } from "react-toastify";


export const Feed = () => {
    const [products,setProduct] = useState([])
    const [isLoading, setIsLoading] = useState (true)
    const [search,setSearch] = useState("")
    const [cart, setCart] = useState([])
      
    const filteredProducts = products.filter(
    product => product.name.toUpperCase().includes(search.toUpperCase()) 

      )
 
    useEffect(() => {
      const getProducts = async () =>{
        try {
          const response = await Api.get("/products")
          setProduct(response.data)
          
        } catch (error) {
          console.error(error)
        }finally{
          setIsLoading(false)
        }
      }
      getProducts()
    }, [])

    const addToCart = (newProduct) => {
      
      const VerificaItem = cart.some((item) => item.id === newProduct.id)
    
      if (VerificaItem) {
        toast.info("Este item ja foi adicionado ao seu carrinho")
      } else {
        const newCart = [...cart, newProduct]
        toast.success( "item adicionado",setCart(newCart))
      }
    }

    const deleteToCart = (itemId) => {
      if(confirm("Deseja confirmar a exclusao?")){
      const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
      setCart(updatedCart)
      }
  }
    
  return (
    <>
     <Header cart={cart} setCart={setCart} setSearch={setSearch}  deleteToCart={deleteToCart} />
     <ProductsList>
       {
        isLoading?
        <div> Carregando......</div>:
        filteredProducts.map((product)=> 
        <CardSection 
        key={product.id} 
        product={product} 
        addToCart={addToCart}
        /> ) 
      }
       </ProductsList>
    </>
  )
}
