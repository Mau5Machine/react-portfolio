import React from 'react'

const Services = (props) => {
    return (
        <section className="service" id="service" data-scroll-index="2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="service-header">
                            <p className="title-small">WHAT CAN I DO FOR YOU?</p>
                            <h4 className="section-title">My Services</h4>
                            <p className="service-text">I'm extremely passionate about what I do and am constantly sharpening my skill set to stay on the cutting edge of technology. Aside from the services that I offer, I am always willing to take on a new challenge that forces me to get out of my comfort zone and break boundaries.</p>
                            <div className="row">
                                <div className="col-xs-8 col-xs-offset-4 center-block">
                                    <a href="#portfolio" className="btn btn-lg service-btn">SEE MY WORK</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div id="owl-demo-service" className="owl-carousel owl-theme">

                            <div className="item">
                                <div className="service-item">
                                    <span><i className="fas fa-globe" aria-hidden="true"></i></span>
                                    <p className="content-title">Websites</p>
                                    <div className="content-description">
                                        <p>Let me create your new business/personal website with the latest technologies</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="service-item">
                                    <span><i className="fab fa-wordpress" aria-hidden="true"></i></span>
                                    <p className="content-title">Wordpress</p>
                                    <div className="content-description">
                                        <p>Need a website in Wordpress? No problem, I'm proficient in Wordpress and PHP</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="service-item">
                                    <span><i className="fas fa-database" aria-hidden="true"></i></span>
                                    <p className="content-title">Database</p>
                                    <div className="content-description">
                                        <p>If you need help setting up a database, I am very familiar with MySQL, and MongoDB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="service-item">
                                    <span><i className="fas fa-code" aria-hidden="true"></i></span>
                                    <p className="content-title">Programming</p>
                                    <div className="content-description">
                                        <p>If you're trying to automate something, I will create a custom script solution for you</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="service-item">
                                    <span><i className="fas fa-comments-dollar" aria-hidden="true"></i></span>
                                    <p className="content-title">Consulting</p>
                                    <div className="content-description">
                                        <p>Providing advice to people/businesses on best practices and web strategies</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;



