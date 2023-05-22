import React from "react";
import "./Menu-left.css"
import Point from "../../Assets/point.png"
import imgGroup from "../../Assets/imgGroup.png"
import addGroup from "../../Assets/addGroup.png"
import coffeImg from "../../Assets/coffeImg.png"
import reactImg from "../../Assets/reactImg.png"
import designerImg from "../../Assets/designerImg.png"
import figmaImg from "../../Assets/figmaImg.png"

function MenuLeft(){
    return(
        <div className="container-menu-left">
            <div className="join-community">
                <div className="join-community-title">
                    <h1>Join Community</h1>
                    <img src={Point} alt="menu" />
                </div>
                <div className="join-community-groups">
                    <div className="join-community-group">
                        <img src={imgGroup} alt="" />
                        <div className="info-community-group">
                            <h2 className="name-community-group">Camera Shoot</h2>
                            <p>12k membres</p>
                        </div>
                        <img src={addGroup} alt="" />
                    </div>
                    <div className="join-community-group">
                        <img src={coffeImg} alt="" />
                        <div className="info-community-group">
                            <h2 className="name-community-group">Coffe Shop</h2>
                            <p>9k membres</p>
                        </div>
                        <img src={addGroup} alt="" />
                    </div>
                    <div className="join-community-group">
                        <img src={reactImg} alt="" />
                        <div className="info-community-group">
                            <h2 className="name-community-group">Dev React</h2>
                            <p>14k membres</p>
                        </div>
                        <img src={addGroup} alt="" />
                    </div>
                    <div className="join-community-group">
                        <img src={designerImg} alt="" />
                        <div className="info-community-group">
                            <h2 className="name-community-group">3D Designers</h2>
                            <p>12k membres</p>
                        </div>
                        <img src={addGroup} alt="" />
                    </div>
                    <div className="join-community-group">
                        <img src={figmaImg} alt="" />
                        <div className="info-community-group">
                            <h2 className="name-community-group">Figma Pro</h2>
                            <p>12k membres</p>
                        </div>
                        <img src={addGroup} alt="" />
                    </div>
                </div>
                <p className="about">Voir tout +</p>
            </div>
        </div>
    )
}

export default MenuLeft