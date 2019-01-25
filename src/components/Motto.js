import React from 'react';

export default class Motto extends React.Component {
    render() {
        return (
            <section className="motto" id="about">
                <div className="motto__rows">

                    <div className="row motto__row agile-row d-flex">

                        <div className="motto__text-left col s12 m8 l7">
                            <h1 className="motto__header center-align">Agile</h1>
                            <p>Agile, Efficient and Professional workflow. Maintaining high standards and attention to detail is very important to me. I'm constantly evaluating my methods and regularly sharpening my skills to create cleaner, faster, readable code.</p>
                        </div>

                        <div className="col s12 m4 l3 offset-l1 motto__img-right" id="agile">
                            <img src="images/agile.png"
                                className="responsive-img" />
                        </div>

                    </div>

                    <div className="row motto__row forward-row">
                        <div className="col s12 m4 l3 offset-l1 motto__img-left" id="forward">
                            <img src="images/forward.png"
                                className="responsive-img" />
                        </div>

                        <div className="motto__text-right col s12 m8 l7">
                            <h1 className="motto__header center-align">Forward Thinking</h1>
                            <p>
                                Technology is constantly evolving on a daily basis and it's more important than ever to stay on the cutting edge of new technologies and best practices. Maintenance and scalability is always front of mind in everything I do.
                            </p>
                        </div>
                    </div>

                    <div className="row motto__row knowledge-row">
                        <div className="motto__text-left col s12 m8 l7">
                            <h1 className="motto__header center-align">Knowledgeable</h1>
                            <p>Knowledge is power! As a professional developer and designer it is essential to have a wealth of knowledge. The non stop learning process is one of the main reasons why I am so passionate about being a developer.</p>
                        </div>

                        <div className="col s12 m4 l3 offset-l1 motto__img-right" id="knowledge">
                            <img src="images/knowledge.png"
                                className="responsive-img" />
                        </div>
                    </div>

                </div>
            </section>
        );
    }
};
