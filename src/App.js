import "./assets/styles/reset.css";
import "./assets/styles/defaultStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialScreen from "./components/InitialScreen";
import SignUp from "./components/Sign-up";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<InitialScreen />} />
            <Route path="/sign-up" element={<SignUp />} />
         </Routes>
      </BrowserRouter>
)
}

export default App;
