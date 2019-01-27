import React from 'react';

const SideNav = () => {
    return (
        <ul className="sidenav" id="mobile-nav">

            <li className="logo__sidenav">
                <a href="#">
                    <img src="images/afklogo.png" />
                </a>
            </li>

            <li><a href="#about" className="link--kumya">
                <span data-letters="About">
                    About
            </span>
            </a></li>

            <li><a href="#contact" className="link--kumya">
                <span data-letters="Contact">
                    Contact
            </span>
            </a></li>

            <li><a href="#projects" className="link--kumya">
                <span data-letters="My Work">
                    My Work
            </span>
            </a></li>

            <li className="social__row__nav row">
                <a
                    href="https://github.com/Mau5Machine"
                    target="_blank"
                    className="col s2"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://www.facebook.com/christian.martins.906"
                    target="_blank"
                    className="col s2"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    href="https://www.instagram.com/christianz_world/"
                    target="_blank"
                    className="col s2"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/christian-martins-65b393a9/"
                    target="_blank"
                    className="col s2"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        </ul>
    );
};

export default SideNav;
