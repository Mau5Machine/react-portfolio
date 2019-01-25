import React from 'react'

const Attributes = (props) => {
    return (
        <section className="services">
            <div className="services__container">

                <div className="row service__row">

                    <div className="service__column col s12 m3">
                        <div className="service__icon align-center">
                            <img src="images/custom-responsive-icon.png" className="responsive-img" />
                        </div>
                        <div className="service__content">
                            <h1 className="service__title text-center">Websites</h1>
                            <p className="text-center">Build responsive websites and web applications</p>
                        </div>
                    </div>

                    <div className="service__column col s12 m3">
                        <div className="service__icon">
                            <img src="images/branding-logo.png" className="responsive-img" />
                        </div>
                        <div className="service__content">
                            <h1 className="service__title text-center">Graphics</h1>
                            <p className="text-center">Experienced in designing and creating web graphics</p>
                        </div>
                    </div>

                    <div className="service__column col s12 m3">
                        <div className="service__icon">
                            <img src="images/full-stack-icon.png" className="responsive-img" />
                        </div>
                        <div className="service__content">
                            <h1 className="service__title text-center">Full Stack</h1>
                            <p className="text-center">Front and back end programming experience</p>
                        </div>
                    </div>


                </div>
            </div >
        </section >
    )
}

export default Attributes;



