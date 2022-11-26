import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "../Pages/CartPage.js";
import CheckoutPage from "../Pages/CheckoutPage.js";
import HomePage from "../Pages/HomePage.js";
import LoginPage from "../Pages/LoginPage.js";
import SignUpPage from "../Pages/SignUpPage.js";
import MyProfilePage from "../Pages/MyProfilePage.js";
import GlobalStyle from "./globalStyles.js"

function App() {

  const saleInfo = {name: "", email: "", products: [], adress: {}, total: 0, paymentMethod: "", time: ""};

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/home" element={ <HomePage saleInfo={saleInfo}/>} />
          <Route path="/cadastro" element={ <SignUpPage/>} />
          <Route path="/" element={ <LoginPage saleInfo={saleInfo}/>} />
          <Route path="/carrinho" element={ <CartPage saleInfo={saleInfo}/> } />
          <Route path="/checkout" element={ <CheckoutPage saleInfo={saleInfo}/> } />
          <Route path="/perfil" element={ <MyProfilePage saleInfo={saleInfo}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
