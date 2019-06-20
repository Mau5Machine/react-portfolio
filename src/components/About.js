import React from 'react';
import Typed from 'react-typed';
import { LanguageText, LanguageIcons } from './Languages';
export default class About extends React.Component {
render() {
let styles = {
fontSize: '30px',
fontWeight: 700
}
return (
<section className="about padding-style1" id="about" data-scroll-index="1">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-12">
                <div className="about-img">
                    <img src="images/about3.jpg" alt="" className="img-responsive" />
                    <div className="img-overlay"></div>
                </div>
            </div>

            <div className="col-lg-8 col-md-12">
                <div className="about-text">
                    <p className="title-small">ABOUT ME</p>
                    <Typed strings={['Christian Martins', 'Professional' , 'Passionate' , 'Driven' , 'Web Developer' ]}
                        typeSpeed={40} style={styles} backSpeed={50} loop />
                    <p className="about-text">
                        Specializes in interactive web sites and applications using the latest web technologies.
                        Constantly learning and re evaluating my skill set to bring a premium, modern, and dynamic
                        experience to all of my clients.
                    </p>
                    <div className="skills">
                        <LanguageText />

                        <div className="skillIcons col-sm-12">
                            <i className="devicon-javascript-plain colored"></i>
                            <i className="devicon-react-original-wordmark colored"></i>
                            <i className="devicon-php-plain colored"></i>
                            <i className="devicon-wordpress-plain-wordmark colored"></i>
                            <i className="devicon-mysql-plain-wordmark colored"></i>
                            <i className="devicon-mongodb-plain-wordmark colored"></i>
                            <i className="devicon-html5-plain-wordmark colored"></i>
                            <i className="devicon-css3-plain-wordmark colored"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
);
}

};