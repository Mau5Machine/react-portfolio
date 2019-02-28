import React from 'react';

const About = () => {
    return (
        <section className="about padding-style1" id="about" data-scroll-index="1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="about-img">
                            <img src="images/about2.jpg" alt="" className="img-responsive" />
                            <div className="img-overlay"></div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12">
                        <div className="about-text">
                            <p className="title-small">ABOUT ME</p>
                            <h4 className="section-title">
                                Christian Martins | South Florida
                        </h4>
                            <p className="about-text">
                                Professional, driven, and passionate web developer and designer. I specialize in front and back end web technologies. I'm based out of South Florida and I have been coding and designing websites for a little over 4 years now.
                        </p>
                            <div className="skills">
                                <div className="progressbar-area">
                                    <h6>HTML</h6>
                                    <div className="progress">
                                        <div className="progress-bar prog1" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                            aria-valuemax="100" data-progress="80%">
                                            <span>100%</span>
                                        </div>
                                    </div>
                                    <h6>CSS</h6>
                                    <div className="progress">
                                        <div className="progress-bar prog2" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                            aria-valuemax="100" data-progress="94%">

                                            <span>90%</span>
                                        </div>
                                    </div>

                                    <h6>PHP</h6>
                                    <div className="progress">
                                        <div className="progress-bar prog2" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                            aria-valuemax="100" data-progress="94%">

                                            <span>69%</span>
                                        </div>
                                    </div>

                                    <h6>MySQL</h6>
                                    <div className="progress">
                                        <div className="progress-bar prog2" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                            aria-valuemax="100" data-progress="94%">

                                            <span>72%</span>
                                        </div>
                                    </div>

                                    <h6>JavaScript</h6>
                                    <div className="progress">
                                        <div className="progress-bar prog3" role="progressbar" aria-valuenow="86" aria-valuemin="0"
                                            aria-valuemax="100" data-progress="86%">

                                            <span>85%</span>
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

export default About;