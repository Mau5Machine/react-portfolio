import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo right">
                    <img src="images/afklogo.png" className="header__image" />
                </a>
                <a
                    href="#"
                    className="sidenav-trigger"
                    data-target="mobile-nav"
                >
                    <i className="material-icons">
                        menu
                </i>
                </a>

                <ul
                    id="nav-mobile"
                    className="left hide-on-med-and-down nav__list"
                >
                    <li>
                        <a className="link link--kumya" href="#about">
                            <span data-letters="About">About</span>
                        </a>
                    </li>

                    <li>
                        <a className="link link--kumya" href="#contact">
                            <span data-letters="Contact">Contact</span>
                        </a>
                    </li>

                    <li>
                        <a className="link link--kumya" href="#projects">
                            <span data-letters="My Work">My Work</span>
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};


export default Nav;