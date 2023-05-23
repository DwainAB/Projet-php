import React from "react";
import Addlogo from '../../src/Assets/add-logo.svg'
import Profil1 from '../../src/Assets/profil-1.png'
import Profil2 from '../../src/Assets/profil-2.png'



function Home(){
    return(
      <div className="container-middle">

        <div className="middle-first">
            <div className="middle-profil-story">
              <img className="logo-add-svg" src={Addlogo} alt="" />
              <img className="profil-img" src={Profil1} alt="" />
              <img className="profil-img" src={Profil2} alt="" />
            </div>
        </div>





        <div className="svg-all">  
          <div className="svg-1"></div>
          <div className="svg-2"></div>
          <div className="svg-3"></div>
          <div className="svg-4"></div>
        </div>
      </div>
      
    )
}

export default Home