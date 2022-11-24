import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./componentPages/cartPage.js";
import HomePage from "./componentPages/homePage.js";
import LoginPage from "./componentPages/loginPage.js";
import SignUpPage from "./componentPages/signupPage.js";
import GlobalStyle from "./Constants/globalStyles.js"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/home" element={ <HomePage/>} />
          <Route path="/sign-up" element={ <SignUpPage/>} />
          <Route path="/" element={ <LoginPage/>} />
          <Route path="/carrinho" element={ <CartPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
