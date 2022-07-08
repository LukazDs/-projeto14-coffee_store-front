import "./assets/styles/reset.css";
import "./assets/styles/defaultStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialScreen from "./components/InitialScreen";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<InitialScreen />} />
         </Routes>
      </BrowserRouter>
)
}

export default App;
