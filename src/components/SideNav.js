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
                <a href="https://github.com/Mau5Machine" target="_blank" >
                    <img src='http://konpa.github.io/devicon/devicon.git/icons/github/github-original-wordmark.svg' />
                </a>
                <a href="https://www.facebook.com/christian.martins.906" target="_blank" >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ei-sc-facebook.svg/2000px-Ei-sc-facebook.svg.png' />
                </a>
                <a href="https://www.instagram.com/christianz_world/" target="_blank" >
                    <img src='https://image.flaticon.com/icons/svg/54/54040.svg' />
                </a>
            </li>
        </ul>
    );
};

export default SideNav;
