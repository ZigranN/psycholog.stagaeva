import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__left">
                        <h1 className="header__title">Салтанат Тагаева</h1>
                        <p className="header__subtitle">психолог</p>
                    </div>
                    <nav className="nav">
                        <a href="#about" className="nav-link">Обо мне</a>
                        <a href="#methods" className="nav-link">Методы</a>
                        <a href="#reviews" className="nav-link">Отзывы</a>
                    </nav>
                    <div className="header__center">
                        <a href="tel:+77019995898" className="header__phone">(+996) 555 22 22 98</a>
                        <a href="https://api.whatsapp.com/send?phone=996555922289" className="header__icon">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://t.me/saltanat_tg" className="header__icon">
                            <i className="fab fa-telegram-plane"></i>
                        </a>
                    </div>
                    <div className="header__right">
                        <button className="header__burger" onClick="toggleNav()">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
                <div className="header__line"></div>

                <!-- Выпадающее меню -->
                <div className="dropdown" id="dropdown">
                    <div className="dropdown-header">
                        <button className="close-button" onClick="toggleNav()">✖</button>
                    </div>
                    <a href="#about" className="dropdown-link">Обо мне</a>
                    <a href="#methods" className="dropdown-link">Методы</a>
                    <a href="#reviews" className="dropdown-link">Отзывы</a>
                    <a href="tel:+77019995898" className="dropdown-link">Позвонить: (+996) 555 22 22 98</a>
                </div>
            </header>

        </div>
    );
};

export default Header;