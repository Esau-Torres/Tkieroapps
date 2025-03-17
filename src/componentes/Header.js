import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logoheader.png';
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
                    <div className="d-none d-lg-block">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to="/contacto">
                                    ¿Quienes somos?
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/caracteristicas">
                                    Ayuda y seguridad
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Comercio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://play.google.com/store/apps/details?id=app.tkiero">
                                    Afiliate hoy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Overlay y menú circular para móvil */}
                    <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>
                    <div className={`menu-circle ${isMenuOpen ? "expand" : ""}`}>

                        <ul className="navbar-nav">
                            <li className="nav-item text-center">
                                <button className="close-menu-btn" onClick={closeMenu}>
                                    &times;
                                </button>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contacto" onClick={closeMenu}>
                                    ¿Quienes somos?
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/caracteristicas" onClick={closeMenu}>
                                    Ayuda y seguridad
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={closeMenu}>
                                    Comercio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={closeMenu}>
                                    Afiliate hoy
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
