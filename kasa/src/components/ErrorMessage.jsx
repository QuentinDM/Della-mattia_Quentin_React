import React from "react"
import { Link } from "react-router-dom";

function ErrorMessage() {
    return (
        <div>
            <h1 className="error-type">404</h1>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">
            <p className="back-home">Retourner sur la page d’accueil</p>
            </Link>
        </div>
    )
}

export default ErrorMessage ;