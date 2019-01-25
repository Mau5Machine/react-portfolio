import React from 'react';

const Languages = (props) => {
    return (
        <section className="languages__section">
            <div className="container skills__progress">
                <div className="row">
                    <h1 className="languages__header">Programming skills</h1>
                </div>

                <div className="row skill__row">

                    <div className="skill__icon col s5 m3 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg" data-img-size="80, 80"
                            data-fill-dir="ltr"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="css">
                        </div>
                    </div>

                    <div className="skill__icon  col s5 m3 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg" data-img-size="80, 80"
                            data-fill-dir="ltr"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="html">
                        </div>
                    </div>

                    <div className="skill__icon  col s5 m3 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg"
                            data-img-size="80, 80"
                            data-fill-dir="ltr"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="js">
                        </div>
                    </div>

                    <div className="skill__icon  col s5 m3 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/jquery/jquery-original-wordmark.svg"
                            data-img-size="80, 80"
                            data-fill-dir="ltr"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="jq">
                        </div>
                    </div>

                    <div className="skill__icon  col s5 offset-s4 m4 offset-m5 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/nodejs/nodejs-original.svg"
                            data-img-size="80, 80"
                            data-fill-dir="ltr"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="node">
                        </div>
                    </div>
                </div>

                <div className="row skill__row">
                    <div className="skill__icon  col s5 m3 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/php/php-original.svg"
                            data-img-size="80, 80"
                            data-fill-dir="rtl"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="php">
                        </div>
                    </div>

                    <div className="skill__icon  col s5 m3 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg"
                            data-img-size="80, 80"
                            data-fill-dir="rtl"
                            data-fill-background-extrude="0"
                            data-background="grey"
                            data-fill-background="white"
                            id="react">
                        </div>
                    </div>

                    <div className="skill__icon  col s5 m3 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg"
                            data-img-size="80, 80"
                            data-fill-dir="rtl"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="mysql">
                        </div>
                    </div>

                    <div className="skill__icon  col s5 m3 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/sass/sass-original.svg"
                            data-img-size="80, 80"
                            data-fill-dir="rtl"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="sass">
                        </div>
                    </div>

                    <div className="skill__icon  col s5 offset-s4 m4 offset-m5 l2">
                        <div data-type="fill"
                            data-img="http://konpa.github.io/devicon/devicon.git/icons/wordpress/wordpress-original.svg"
                            data-img-size="80,80"
                            data-fill-dir="rtl"
                            data-fill-background-extrude="0"
                            data-fill-background="white"
                            id="wp">
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Languages;