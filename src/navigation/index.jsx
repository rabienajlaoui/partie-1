import { BrowserRouter , Route , Routes} from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PayementSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";


const Navigation = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/payement-success" element={<PayementSuccess/>}/>
                <Route path="/register" element={<Register/>}/>

            </Routes>

        </BrowserRouter>
    )
}

export default Navigation;