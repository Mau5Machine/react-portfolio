import React from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Details from './Details';
import Testimonials from './Testimonials';
import Contact from './Contact';
import SubmitModal from './SubmitModal';
import Footer from './Footer';

class Main extends React.Component {
    state = {
        showModal: undefined,
        modalMessage: '',
        modalTitle: '',
        currentStatus: 'available'
    };

    handleSubmit = (name, email, subject, msg) => {
        event.preventDefault();

        if (!name || !email || !subject || !msg) {
            this.setState(() => ({
                showModal: true,
                modalMessage: 'Please fill out all the fields to submit form',
                modalTitle: 'Empty Fields!'
            }));
            return true;
        } else {
            fetch('http://afkdeveloper.com/contact.php', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `name=${name}&email=${email}&subject=${subject}&msg=${msg}`,
                mode: 'no-cors',
            })
                .then(() => {
                    this.setState(() => ({
                        showModal: true,
                        modalTitle: 'Thank You!',
                        modalMessage: 'I will contact you shortly!'
                    }));

                })
                .catch((err) => {
                    this.setState(() => ({
                        showModal: true,
                        modalTitle: 'Oops! There was an error',
                        modalMessage: 'Something went wrong, please try again later or email me directly at <a href="mailto:christian@afkdeveloper.com">christian@afkdeveloper.com</a>'
                    }));
                    return true;
                });
        }
    };

    closeModal = () => {
        this.setState(() => ({
            showModal: false
        }));
    };


    render() {

        return (
            <div>
                <Nav />
                <Header />
                <About />
                <Services />
                <Projects />
                <Details />
                <Testimonials />
                <SubmitModal
                    showModal={this.state.showModal}
                    closeModal={this.closeModal}
                    modalTitle={this.state.modalTitle}
                    modalMessage={this.state.modalMessage}
                />
                <Contact
                    currentStatus={this.state.currentStatus}
                    handleSubmit={this.handleSubmit}
                />
                <Footer />
            </div>
        );
    }
}
export default Main;