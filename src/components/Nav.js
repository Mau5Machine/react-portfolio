import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <a className="logo" href="#"><img src="images/afklogo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"><i className="fas fa-bars"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#0" data-scroll-nav="0" id="navbarDropdownMenuLink">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-scroll-nav="1">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-scroll-nav="2">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-scroll-nav="3">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-scroll-nav="4">Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-scroll-nav="5">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-scroll-nav="6">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};


export default Nav;