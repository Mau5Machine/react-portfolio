import React from 'react';

const Footer = () => {
    return (
        <div className="row footer">
            <div className="container footer__content">
                <div className="row">
                    <div className="copyright col s12 m4">
                        <p>Copyright &copy; {new Date().getFullYear()}</p>
                    </div>
                    <div className="footer__logo col s12 m4">
                        <img src="images/afklogo.png" alt="" />
                    </div>
                    <div className="footer__name col s12 m4">
                        <p>Christian Martins</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;