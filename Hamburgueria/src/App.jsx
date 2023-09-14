import { Header } from "./Components/Header"
import { Feed } from "./pages/Feed"
import GlobalStyle from "./Styles/GlobalStyle"
import { ToastContainer } from"react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App =()=> {
  return(
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <Feed/>
    </>
  )
  }
export default App
