import React from "react";

export const NavBar = () => {
    const img = require('../imagenes/imagen_nav.png');
    const nombre = 'Logo Empresarial';
    return (
            <header className="header">
                    <img src={img} alt={nombre}/>
                
        </header>
    )
}