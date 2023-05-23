import {Routes,Route, BrowserRouter} from "react-router-dom"
import React from "react"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"


function App(){  

	return (
    
    <BrowserRouter>
    <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </div>
    </BrowserRouter>
	)
}

export default App