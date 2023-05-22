import {Routes,Route, BrowserRouter} from "react-router-dom"
import React from "react"
import Home from "./Pages/Home"
import "./App.css"


function App(){  

	return (
    
    <BrowserRouter>
    <div className="app">
      <div className="global"> 
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
	)
}

export default App