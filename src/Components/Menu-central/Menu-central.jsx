import React from "react";
import './Menu-central.css'
import Profil1 from '../../Assets/profil-1.png'
import Profil2 from '../../Assets/profil-2.png'
import Addlogo from '../../Assets/add-logo.svg'

function MenuCentral(){
    return(
        <div className="middle-first">
            <div className="middle-profil-story">
              <img className="logo-add-svg" src={Addlogo} alt="" />
              <img className="profil-img" src={Profil1} alt="" />
              <img className="profil-img" src={Profil2} alt="" />
            </div>
        </div>

    )
}

export default MenuCentral