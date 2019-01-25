import React from 'react';

const Header = (props) => {
    return (

        <header className="header">
            <div className="header__bg"></div>
            <div className="container">
                <div className="header__title">
                    <p
                        id="professional"
                        className="animated 1 fadeInRightBig delay-1s"
                    >
                        Professional
                    </p>

                    <p
                        id="web-services"
                        className="animated 1 fadeInRightBig delay-2s"
                    >
                        Web Services
                    </p>
                </div>
                <div className="header__services">
                    <p
                        id="by"
                        className="animated 1 fadeIn delay-3s">by</p>
                    <div
                        className="signature animated 1 fadeIn delay-3s">
                        <img src="images/signature.png" alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;