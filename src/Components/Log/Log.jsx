import React, { useEffect } from "react";
import line from "../../Assets/line.svg"
import logo from "../../Assets/logo.png"
import "./Log.css"

function Log(){

    useEffect(() => {
        function flip() {
          let formSignup = document.querySelector('.container-form-signup');
          let formLogin = document.querySelector('.container-form-login');
          let flipButton = document.querySelector('.flip-button')
    
          if (formSignup.classList.contains('flip-active')) {
            formSignup.classList.remove('flip-active');
            formLogin.classList.add('flip-active');
            flipButton.innerHTML = "Identifiez vous"
          } else {
            formLogin.classList.remove('flip-active');
            formSignup.classList.add('flip-active');
            flipButton.innerHTML = "Créer votre compte Restchat"
          }
        }
    
        const buttonFlip = document.querySelector('.flip-button');
        buttonFlip.addEventListener('click', flip);
    
        return () => {
          buttonFlip.removeEventListener('click', flip);
        };
      }, []);
    
    return(
        <div className="container-log">
            <img className="logo-form" src={logo} alt="" />
            <div className="container-form-signup flip-active">
                <h1>Inscription</h1>
                <form className="form-signup" action="POST">
                    <input type="text"  placeholder="Nom d'utilisateur"/>
                    <input type="email" placeholder="Adresse mail" />
                    <input type="password" placeholder="Mot de passe" />
                    <input type="password" placeholder="Confirmez votre mot de passe" />
                    <input className="btn-form" type="submit" value="Inscription"/>
                </form>
            </div>
            <div className="container-form-login">
                <h1>Connexion</h1>
                <form className="form-login" action="GET">
                    <input type="text"  placeholder="Nom d'utilisateur"/>
                    <input type="password" placeholder="Mot de passe" />
                    <input className="btn-form" type="submit" value="Connexion"/>
                </form>
            </div>

            <div className="container-flip">
                <p className="flip-text"><img src={line} alt="" />Nouveau chez Reschat<img src={line} alt="" /></p>
                <button className="flip-button">Créer votre compte Restchat</button>
            </div>
        </div>
    )
}

export default Log