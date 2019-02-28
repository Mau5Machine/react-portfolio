import React from 'react';
import Clock from './Clock';


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const email = e.target.elements.email.value.trim();
        const subject = e.target.elements.subject.value.trim();
        const message = e.target.elements.message.value.trim();
        const submit = this.props.handleSubmit(name, email, subject, message);

        if (!submit) {
            e.target.elements.name.value = '';
            e.target.elements.email.value = '';
            e.target.elements.subject.value = '';
            e.target.elements.message.value = '';
        }
    }

    render() {
        return (
            <section className="contact padding-style1" id="contact" data-scroll-index="6">
                <div className="contact-header">
                    <p className="title-small">CONTACT ME</p>
                    <h4 className="section-title">Get In Touch</h4>
                </div>
                <div className="contact-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="contact-detail">
                                    <h6>Contact</h6>
                                    <p className="contact-text">I'm based out of South Florida and I am always interested in taking on new projects/contracts. Get in touch with me and let's work together!</p>
                                    <span className="clock">{<Clock />} </span>
                                    <p className="status-text">
                                        Christian is currently {this.props.currentStatus}
                                    </p>
                                    <p className="adress">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span className="adress-loc">Boca Raton, FL</span>
                                    </p>
                                    <p className="phone">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <a href="tel:15618593597">+1.561.859.3597</a>
                                    </p>
                                    <p className="email">
                                        <i className="fas fa-envelope" aria-hidden="true"></i>
                                        <a href="mailto:christian@afkdeveloper.com">christian@afkdeveloper.com</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-globe" aria-hidden="true"></i>
                                        <a href="#">http://afkdeveloper.com</a>
                                    </p>
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/christian.martins.906" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/christianz_world/" target="_blank"><i className="fab fa-instagram"></i></a>
                                        <a href="https://github.com/Mau5Machine" target="_blank"><i className="fab fa-github"></i></a>
                                        <a href="skype:live:cmartins629_1?userinfo" target="_blank"><i className="fab fa-skype"></i></a>
                                        <a href="https://www.linkedin.com/in/christian-martins-65b393a9/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="contact-form">
                                    <form
                                        className="contact-form-area"
                                        id="contact-form"
                                        onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="validate"
                                                    id="name"
                                                    placeholder="Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="validate"
                                                    id="email"
                                                    placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    id="subject" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <textarea
                                                    placeholder="Type here"
                                                    name="message"
                                                    id="message"></textarea>
                                                <input
                                                    type="submit"
                                                    className="submit-btn btn-style1 clearfix"
                                                    value="Submit"
                                                    id="submit" />
                                                <div className="result"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
