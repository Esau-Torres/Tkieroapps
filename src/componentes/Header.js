import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logotipo.png';
import '../Estilos/Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {t} = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
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
                                    {t('header.txt1')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">
                                    {t('header.txt2')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/caracteristicas">
                                    {t('header.txt3')}
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
                                    <option className='nav-link' value="">&#160; {t('header.txt4')} &#160;</option>
                                    <option className='nav-link' value="https://play.google.com/store/apps/details?id=app.tkiero">&#160; Google Play &#160;</option>
                                    <option className='nav-link' value="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone">&#160; Apple Store &#160;</option>
                                </select>
                            </li>
                        </ul>
                    </div>

                    <div className="d-none d-lg-block">
                        <label className="lenguaje-toggle">
                            <input
                                type="checkbox" onChange={(e) => changeLanguage(e.target.checked ? 'en' : 'es')} checked={i18n.language === 'en'} />
                            <div className="lenguaje-track">
                                <div className="lenguaje-ball">
                                    <span className="ball-text">{i18n.language === 'en' ? 'EN' : 'ES'}</span>
                                </div>
                                <span className="lenguaje-option es"><img src="https://flagcdn.com/sv.svg " alt="El Salvador" width="23" height="19" /></span>
                                <span className="lenguaje-option en"><img src="https://flagcdn.com/us.svg " alt="Estados Unidos" width="23" height="19" /></span>
                            </div>
                        </label>
                    </div>

                    {/* Overlay y menú circular para móvil */}
                    <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>
                    <div className={`menu-circle ${isMenuOpen ? "expand" : ""}`}>

                        <div className="lenguaje-toggle-wrapper">
                            <label className="lenguaje-toggle">
                                <input
                                    type="checkbox" onChange={(e) => changeLanguage(e.target.checked ? 'en' : 'es')} checked={i18n.language === 'en'} />
                                <div className="lenguaje-track">
                                    <div className="lenguaje-ball">
                                        <span className="ball-text">{i18n.language === 'en' ? 'EN' : 'ES'}</span>
                                    </div>
                                    <span className="lenguaje-option es"><img src="https://flagcdn.com/sv.svg " alt="El Salvador" width="23" height="19" /></span>
                                    <span className="lenguaje-option en"><img src="https://flagcdn.com/us.svg " alt="Estados Unidos" width="23" height="19" /></span>
                                </div>
                            </label>
                        </div>

                        <ul className="navbar-nav text-center">
                            <li className="nav-item text-center">
                                <button className="close-menu-btn" onClick={closeMenu}>
                                    &times;
                                </button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeMenu}>
                                    {t('header.txt1')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto" onClick={closeMenu}>
                                     {t('header.txt2')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/caracteristicas" onClick={closeMenu}>
                                    {t('header.txt3')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://play.google.com/store/apps/details?id=app.tkiero" onClick={closeMenu}>
                                    {t('header.txt5')} android
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone" onClick={closeMenu}>
                                    {t('header.txt5')} apple
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
