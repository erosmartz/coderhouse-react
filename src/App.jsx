/* REACT */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* MUI */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

/* COMPONENTS */
import Navbar from "./components/Navbar/NavBar"
import Footer from "./components/Footer/footer"


/* PAGES */
import Home from "./pages/Home/home"
import About from "./pages/About/about"
import Item from "./pages/Item/item"





/* DARK THEME */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  

  return (
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
                <Route path="/item/:id" element={<Item />} />
              </Routes>

              <Footer />

            </Router>
          }

      </React.Fragment>
      </ThemeProvider>
    </div>    
    
  )
}

export default App;
