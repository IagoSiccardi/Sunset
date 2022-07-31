import React from 'react';
import Logo from '../assets/images/logoSunset.png'
import '../components/css/General.css'
import '../components/css/Header.css'

const Header = () => {
    return (
            
            
            <header>
                <section>
                <div className="logo">
                    <a href="/">
                    <img src={Logo} alt="Logo Sunset"/>
                    </a>
                </div>

                <ul className="paginas">
                    <li>
                    <a href="/">Inicio</a>
                    </li>
                    <li>
                    <a href="/products">Productos</a>
                    </li>
                    <li>
                    <a href="/nosotros">Nosotros</a>
                    </li>
                </ul>

                <ul className="iconos">
                    <form method="get" action="/result" id="search_form">
                    <input
                        type="text"
                        name="keyword"
                        placeholder="Buscar productos"
                        autocomplete="off"
                        id="search_input"
                    />
                    <button type="submit">
                        <i className="fas fa-search"/>
                    </button>
                    </form>

                    <li>
                    <a href="/users/profile">
                        <i className="fas fa-user"></i>
                    </a>
                    </li>
                    <li>
                    <a href="/users/logout">
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                    </li>
                    <li>
                    <a href="/">
                        <i className="fas fa-heart"></i>
                    </a>
                    </li>
                    <li>
                    <a href="/products/cart">
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                    </li>

                    {/* <li><a href="/users/login"><i className="fas fa-user"></i></a></li> */}
                </ul>
                <div className="burger__menu" id="burgerMenu">
                    {" "}
                    <i className="fas fa-bars"></i>{" "}
                </div>
                </section>
                <section className="responsive__menu" id="responsiveMenu">
                <ul className="ul__responsive">
                    <li>
                    <a href="/">
                        <i className="fas fa-house"></i>Inicio
                    </a>
                    </li>
                    <li>
                    <a href="/products">
                        <i className="fas fa-box"></i>Productos
                    </a>
                    </li>
                    <li>
                    <a href="/nosotros">
                        <i className="fas fa-file-alt"></i>Nosotros
                    </a>
                    </li>

                    {/*   <li><a href="/users/profile"><i className="fas fa-user"></i>Perfil</a></li>
                                <li><a href="/users/logout"><i className="fas fa-sign-out-alt"></i>Cerrar sesión</a></li> */}

                    <li>
                    <a href="/users/login">
                        <i className="fas fa-user"></i>Iniciar sesión
                    </a>
                    </li>
                </ul>
                </section>
            </header>
            

    );
}

export default Header;
