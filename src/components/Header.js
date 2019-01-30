import React from 'react';

const Header = (props) => {
    return (
        <header id="home" className="header cover-bg" data-image-src="http://afkdeveloper.com/hosted-images/header_bg.jpg"
        data-overlay='5' data-scroll-index='0'>
        <div className="container">
            <div className="row center-align">

                <div className="col s12 caption">
                    <h6>Hello</h6>
                    <h2>I Am Christian Martins</h2>
                    <h4><span>designer</span> <span>developer</span> <span>freelancer</span></h4> <br />>
    
            <div className="scoial-icon">
                        <a href="https://www.facebook.com/christian.martins.906" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com/christianz_world/" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://github.com/Mau5Machine" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/christian-martins-65b393a9/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </header>
    );
};

export default Header;