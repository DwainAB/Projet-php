import {Routes,Route, BrowserRouter} from "react-router-dom"
import React from "react"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import LogPage from "./Pages/Log-page"


function App(){  

	return (
    
    <BrowserRouter>
    <div className="app">
        <div className="svg-all">
          <div className="svg-1"></div>
          <div className="svg-2"></div>
          <div className="svg-3"></div>
          <div className="svg-4"></div>
        </div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/log" element={<LogPage/>}/>
        </Routes>
    </div>
    </BrowserRouter>
	)
}

export default App