import React from "react";
import MenuCentral from "../Components/Menu-central/Menu-central";
import MenuLeft from "../Components/Menu-left/Menu-left"
import './Home.css'

function Home(){
    return(
      <div className="container-global">
        <MenuLeft/>
        <MenuCentral/>
      </div>
    )
}

export default Home