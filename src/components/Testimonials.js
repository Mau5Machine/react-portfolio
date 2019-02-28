import React from 'react';

const Testimonials = () => {
    return (
        <section className="client-testimonial padding-style1" id="client-testimonial" data-scroll-index="5">
            <div className="testimonial-header">
                <p className="title-small">TESTIMONIAL</p>
                <h4 className="section-title">What People Say</h4>
            </div>
            <div className="client-area">
                <div className="container">
                    <div className="row">
                        <div id="owl-demo-testimonial" className="owl-carousel owl-theme">

                            <div className="item">
                                <div className="client-img">
                                    <img src="images/testimonials/curtis.png" alt="client" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="quote-text">
                                        <p>
                                            <i className="fa fa-quote-left" aria-hidden="true">&nbsp;</i>
                                            <span>Great experience working with developer. He was responsive and took the necessary steps to create exactly what I needed. He created a JS for me to use in WP and it works as it should. Next time I need development work, he will be the first person I contact</span>&nbsp;
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </p>
                                        <div className="client-identity">
                                            <p className="name">curtizmo - Fiverr</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="client-img">
                                    <img src="images/testimonials/caravela.png" alt="client" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="quote-text">
                                        <p>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            <span>&nbsp;Christian gave us everything we were looking for and more! Very strong communication and creative skills. Definitely will be doing business with him in the future. Such a pleasure to work with.&nbsp;</span>
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </p>
                                        <div className="client-identity">
                                            <p className="name">Caravela Doral - Restaurant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="client-img">
                                    <img src="images/testimonials/fiverr.png" alt="client" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="quote-text">
                                        <p>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            <span>&nbsp;Extremely professional, high quality work. Went above and beyond to provide documentation explaining how processes work and how to tweak them. Amazing experience. I was so pleased, I am entering into an order for follow-on work!&nbsp;</span>
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </p>
                                        <div className="client-identity">
                                            <p className="name">fdrummond - Fiverr</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;