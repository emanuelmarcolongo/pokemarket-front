import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage.js";
import HomePage from "./Pages/HomePage.js";
import LoginPage from "./Pages/LoginPage.js";
import SignUpPage from "./Pages/SignUpPage.js";
import GlobalStyle from "./Components/globalStyles.js"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={ <HomePage/>} />
          <Route path="/cadastro" element={ <SignUpPage/>} />
          <Route path="/login" element={ <LoginPage/>} />
          <Route path="/carrinho" element={ <CartPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
