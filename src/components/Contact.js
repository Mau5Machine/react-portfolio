import React from 'react';
import Clock from './Clock';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__header row">
                <h1 className="col s12" id="funnyText2">Contact Me</h1>
            </div>

            <div className="clock row">
                <div className="col s12 m6 offset-m3">
                    <Clock />
                </div>
            </div>

            <div className="row">
                <form className="col s12 m8 offset-m2 l4 offset-l4" id="contact-form">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">person</i>
                            <input type="text" id="name" className="validate" />
                            <label htmlFor="name">Full Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input type="text" id="email" className="validate" />
                            <label htmlFor="email">Email Address</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="message" className="materialize-textarea"></textarea>
                            <label htmlFor="message">Your Message Here</label>
                        </div>
                    </div>

                    <div className="row">
                        <button className="btn waves-effect waves-light col s5 offset-s4" type="submit" name="action" id="submit">Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>

            <div className="row social__row">
                <div className="col s12 m8 offset-m2">
                    <a href="https://github.com/Mau5Machine">
                        <img src='http://konpa.github.io/devicon/devicon.git/icons/github/github-original-wordmark.svg' alt="" />
                    </a>
                    <a href="https://www.facebook.com/christian.martins.906">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ei-sc-facebook.svg/2000px-Ei-sc-facebook.svg.png' alt="" />
                    </a>
                    <a href="https://www.instagram.com/christianz_world/">
                        <img src='https://image.flaticon.com/icons/svg/54/54040.svg' alt="" />
                    </a>
                </div>
            </div>

            <div className="row contact__card">
                <div className="col s12 m6 offset-m3 l4 offset-l4">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/card-img.jpg" alt="" />
                            <span className="card-title">Christian Martins</span>
                        </div>

                        <div className="card-content">
                            <a href="mailto:christian@afkdeveloper.com" className="hvr-grow">
                                <i className="material-icons prefix">email</i>
                                <span className="email">christian@afkdeveloper.com</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;