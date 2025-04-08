import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logotipo.png';
import '../Estilos/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-header text-white">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </Link>

                    {/* Botón de menú solo en móvil */}
                    <button className="navbar-toggler d-lg-none" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menú para PC (lista centrada) */}
                    <div className="d-none d-lg-block w-100">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">
                                    Nuestros Servicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/caracteristicas">
                                    Asistencia
                                </Link>
                            </li>
                            <li className="nav-item">
                                <select
                                    className="form-select nav-link bg-transparent border-0"
                                    name='seleccion-encabezado'
                                    id='seleccion-encabezado'
                                    defaultValue="" 
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            window.location.href = e.target.value;
                                        }
                                    }}
                                >
                                    <option className='nav-link' value="">&#160; Descárgala con &#160;</option>
                                    <option className='nav-link' value="https://play.google.com/store/apps/details?id=app.tkiero">&#160; Google Play &#160;</option>
                                    <option className='nav-link' value="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone">&#160; Apple Store &#160;</option>
                                </select>
                            </li>

                        </ul>
                    </div>

                    {/* Overlay y menú circular para móvil */}
                    <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>
                    <div className={`menu-circle ${isMenuOpen ? "expand" : ""}`}>

                        <ul className="navbar-nav text-center">
                            <li className="nav-item text-center">
                                <button className="close-menu-btn" onClick={closeMenu}>
                                    &times;
                                </button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeMenu}>
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto" onClick={closeMenu}>
                                    Nuestros Servicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/caracteristicas" onClick={closeMenu}>
                                    Asistencia
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://play.google.com/store/apps/details?id=app.tkiero" onClick={closeMenu}>
                                    Descargala ya con android
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone" onClick={closeMenu}>
                                    Descargala ya con apple
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
