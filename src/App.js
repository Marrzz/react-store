import Shop from "./components/store_components/Shop";
import Cart from "./components/cart_components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Items } from "./data/Items";


function App() {
    
    return(

        <div>
            
            <BrowserRouter>
                
                <Routes>
                
                    <Route path="/" element={<Home />}/>  

                    <Route path="/cart" element={<Cart items={[{id:1, name: "Long Sword", price: 350, quantity: 1}, {id:2, name: "Dorans Ring", price: 300, quantity: 1}]}/>} />
                    
                    <Route path="/store" element={<Shop items={Items} />} />

                </Routes>
            
            </BrowserRouter>
           
        </div>
        
    );
}

export default App;