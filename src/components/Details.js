import React from 'react';

const Details = () => {
    return (
        <section className="personal-detail" id="personal-detail" data-scroll-index="4">
            <div className="detail-container">
                <div className="personal-detail-content">
                    <div className="detail-overlay"></div>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 col-sm-12">
                                <div className="details-heading-area">
                                    <div className="detail-table-row">
                                        <div className="detail-table-cell">
                                            <h4>Providing only the Best</h4>
                                            <p>I've got a strong background in customer relations and hospitality. I understand the importance of providing great customer service and experience. Coupled with my passion for web design and development is what separates me from the rest of the competition.</p>
                                            <a href="#contact" className="btn-style3 hire-btn">HIRE ME</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="detail-content-area padding-style2">
                                    <div className="detail-header">
                                        <p className="title-small">SEE MY DETAILS</p>
                                        <a href="https://cgmsites.com/docs/resume.pdf" target="_blank" className="btn btn-info" id="resume-link">Resume</a>
                                    </div>
                                    <div className="detail-contents">
                                        <nav>
                                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                                                    href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i
                                                        className="fas fa-briefcase"></i>Experience</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                                                    role="tab" aria-controls="nav-profile" aria-selected="false"><i className="fas fa-graduation-cap"></i>Education</a>
                                            </div>
                                        </nav>

                                        <div className="tab-content detail-tab">
                                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                                aria-labelledby="nav-home-tab">
                                                <div className="detail-item">
                                                    <span className="deatil-year">2018-2019</span>
                                                    <h6 className="deatil-title">Web Developer & Designer | Fiverr</h6>
                                                    <p className="detail-text">I provide services and gigs on Fiverr.com for creating websites and programming solutions related to Javascript, PHP, CSS, HTML, MySQL, and Wordpress.</p>
                                                </div>
                                                <div className="detail-item">
                                                    <span className="deatil-year">2016-2018</span>
                                                    <h6 className="deatil-title">Freelance Developer | Self</h6>
                                                    <p className="detail-text">Freelancer, created websites for small business, personal, etc.</p>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <div className="detail-item">
                                                    <span className="deatil-year">2018</span>
                                                    <h6 className="deatil-title">Graduate | Palm Beach Code School</h6>
                                                    <p className="detail-text">Graduated from Palm Beach Code School where I gained a thorough understanding of best practices, PHP, Javascript, and jQuery.</p>
                                                </div>
                                                <div className="detail-item">
                                                    <span className="deatil-year">2015 - 2019</span>
                                                    <h6 className="deatil-title">Self Taught</h6>
                                                    <p className="detail-text">I've been passionate about programming and web design for years and I started learning on my own taking courses online and completing several education paths and online courses. Gained a deep understanding of CSS, HTML, Bootstrap, and Javascript.</p>
                                                </div>
                                            </div>
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

export default Details;