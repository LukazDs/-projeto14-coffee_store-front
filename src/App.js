import "./assets/styles/reset.css";
import "./assets/styles/defaultStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import InitialScreen from "./components/InitialScreen";
import SignUp from "./components/Sign-up";
import Login from "./components/Login";
import UserContext from "./contexts/UserContext";
import ShoppingCart from "./components/ShoppingCart";

function App() {

   const [token, setToken] = useState("");

   return (
      <UserContext.Provider value={{ token, setToken }}>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<InitialScreen />} />
               <Route path="/sign-up" element={<SignUp />} />
               <Route path="/login" element={<Login />} />
               <Route path="/shopping-cart" element={<ShoppingCart />} />
            </Routes>
         </BrowserRouter>
      </UserContext.Provider>
   )
}

export default App;
