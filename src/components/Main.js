import React from 'react';
import Header from './Header';
import Nav from './Nav';
import SideNav from './SideNav';
import Motto from './Motto';
import TopBtn from './TopBtn';
import Attributes from './Attributes';
import Languages from './Languages';
import Parallax from './Parallax';
import Projects from './Projects';
import More from './More';
import Parallax2 from './Parallax2';
import Ticker from './Ticker';
import Contact from './Contact';
import SubmitModal from './SubmitModal';
import Trigger from './Trigger';
import Footer from './Footer';

class Main extends React.Component {
    state = {
        showModal: undefined,
        modalMessage: '',
        modalTitle: ''
    };

    handleSubmit = (name, email, msg) => {
        event.preventDefault();

        if (!name || !email || !msg) {
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
                body: `name=${name}&email=${email}&msg=${msg}`,
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
                <SideNav />
                <Header />
                <div className="container__large">
                    <TopBtn />
                    <Motto />
                </div>
                <div className="container">
                    <Attributes />
                </div>
                <div className="container__large">
                    <Parallax />
                    <Languages />
                </div>

                <div className="container">
                    <Projects />
                    <More />
                </div>
                <div className="container__large">
                    <Parallax2 />
                </div>
                <div className="bottom-half-body">
                    <div className="container">
                        <Ticker />
                    </div>
                    <div className="container__large">
                        <SubmitModal
                            showModal={this.state.showModal}
                            closeModal={this.closeModal}
                            modalTitle={this.state.modalTitle}
                            modalMessage={this.state.modalMessage}
                        />
                        <Contact
                            handleSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Main;