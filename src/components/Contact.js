import React from 'react';
import Clock from './Clock';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('something works!')
        const name = e.target.elements.name.value.trim();
        const email = e.target.elements.email.value.trim();
        const message = e.target.elements.message.value.trim();
        const submit = this.props.handleSubmit(name, email, message);

        if (!submit) {
            e.target.elements.name.value = '';
            e.target.elements.email.value = '';
            e.target.elements.message.value = '';
        }
    }

    render() {
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

                <div className="row contact__form">

                    <form
                        className="col s12 m8 offset-m2 l4 offset-l4"
                        id="contact-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="row">
                            <div className="input-field col s12">
                                <i
                                    className="material-icons prefix"
                                >
                                    person
                                </i>
                                <input
                                    type="text"
                                    name="name"
                                    className="validate"
                                    id="name" />
                                <label htmlFor="name">Enter Name Here</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <i
                                    className="material-icons prefix"
                                >
                                    email
                                </i>
                                <input
                                    type="text"
                                    name="email"
                                    className="validate"
                                    id="email"
                                />
                                <label htmlFor="email">Email Address</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <i
                                    className="material-icons prefix"
                                >
                                    mode_edit
                                </i>
                                <textarea
                                    name="message"
                                    className="materialize-textarea"
                                    id="message">
                                </textarea>
                                <label htmlFor="message">Message Here</label>
                            </div>
                        </div>

                        <div className="row">
                            <button
                                className="btn btn-main waves-effect waves-light col s5 offset-s4" type="submit"
                                name="action"
                                id="submit">
                                Submit
                            <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <div className="col s12 m8 offset-m2  social__row">
                        <a href="https://github.com/Mau5Machine" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://www.facebook.com/christian.martins.906" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://www.instagram.com/christianz_world/" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/christian-martins-65b393a9/" target="_blank">
                            <i className="fab fa-linkedin"></i>
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
    }
}
