import {Routes,Route, BrowserRouter} from "react-router-dom"
import React from "react"
import Home from "./Pages/Home"
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
        <Routes>
          <Route path="/" element={<LogPage/>} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
    </div>
    </BrowserRouter>
	)
}

export default App