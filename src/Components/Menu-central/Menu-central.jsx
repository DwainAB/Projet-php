import React from "react";
import './Menu-central.css'
import Profil1 from '../../Assets/profil-1.png'
import Profil2 from '../../Assets/profil-2.png'
import Profil3 from '../../Assets/profil-3.png'
import Profil4 from '../../Assets/profil-4.png'
import Profil5 from '../../Assets/profil-5.png'
import Profil6 from '../../Assets/profil-6.png'
import Profil7 from '../../Assets/profil-7.png'
import Addlogo from '../../Assets/add-logo.svg'
import profil from '../../Assets/profil.png'
import logoimage from '../../Assets/logo-image.svg'
import logoemoji from '../../Assets/logo-emoji.svg'
import logoprofil from '../../Assets/logo-profil.svg'
import logolink from '../../Assets/logo-link.svg'

function MenuCentral(){
    return(
        <div className="middle">

            <div className="middle-first">
                <div className="middle-profil-story">
                    <img className="logo-add-svg" src={Addlogo} alt="" />
                    <img className="profil-img" src={Profil1} alt="" />
                    <img className="profil-img" src={Profil2} alt="" />
                    <img className="profil-img" src={Profil3} alt="" />
                    <img className="profil-img" src={Profil4} alt="" />
                    <img className="profil-img" src={Profil5} alt="" />
                    <img className="profil-img" src={Profil6} alt="" />
                    <img className="profil-img" src={Profil7} alt="" />
                </div>

                <div className="separator-middle"></div>

                <div className="middle-input">
                    <div className="middle-input-left">
                        <img src={profil} alt="" />
                        <input className="input-middle" type="text" placeholder="Racontez votre histoire d’aujourd’hui" />
                    </div>
                    <div className="middle-logo">
                        <img src={logoimage} alt="" />
                        <img src={logoemoji} alt="" />
                        <img src={logoprofil} alt="" />
                        <img src={logolink} alt="" />
                    </div>
                </div>
            
            </div>
        </div>

    )
}

export default MenuCentral