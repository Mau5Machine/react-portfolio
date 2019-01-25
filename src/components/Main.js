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
import OptionModal from './OptionModal';
import Trigger from './Trigger';
import Footer from './Footer';


class Main extends React.Component {
    state = {
        selectedOption: undefined,
        skills: [
            'hey',
            'what',
            'how'
        ]
    };
    handleAlert = () => {
        const randomNum = Math.floor(Math.random() * 20);
        this.setState(() => ({
            selectedOption: randomNum
        }));
        console.log(this.state.selectedOption)
    };
    closeModal = () => {
        this.setState(() => ({
            selectedOption: undefined
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
                <div className="container">
                    <Ticker />
                </div>
                <div className="container__large">

                    <Contact />
                </div>
                <Footer />
            </div>
        );
    }
}
export default Main;