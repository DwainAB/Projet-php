import React from "react";
import MenuCentral from "../Components/Menu-central/Menu-central";
import MenuLeft from "../Components/Menu-left/Menu-left"
import './Home.css'
import Navbar from "../Components/Navbar/Navbar";

function Home(){
    return(
      <div>
          <Navbar/>
          <div className="container-global">
            <MenuLeft/>
            <MenuCentral/>
          </div>
      </div>
    )
}

export default Home