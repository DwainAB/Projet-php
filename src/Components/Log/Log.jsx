import React from "react";
import "./Log.css"

function Log(){
    return(
        <div className="container-log">
            <div className="container-form-signup">
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
        </div>
    )
}

export default Log