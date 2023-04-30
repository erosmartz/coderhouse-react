/* REACT */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* MUI */
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

/* COMPONENTS */
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/footer";

/* PAGES */
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Item from "./pages/Item/item";
import Shop from "./pages/Shop/Shop";
import { CartProvider } from "./context/CartContext";

/* DARK THEME */
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <React.Fragment>
            <CssBaseline />
            {
              <Router>
                <Navbar />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/generos/:genre" element={<Home />} />
                  <Route path="/item/:id" element={<Item />} />
                  <Route path="/shop" element={<Shop />} />
                </Routes>

                <Footer />
              </Router>
            }
          </React.Fragment>
        </ThemeProvider>
      </div>
    </CartProvider>
  );
};

export default App;
