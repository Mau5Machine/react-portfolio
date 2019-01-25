import React from 'react';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects__header row">
                <h1 id="funnyText" className="col s12 m8 offset-m6 l4 offset-l6">My Work</h1>
            </div>

            <div className="projects__tiles tiles-grid" id="typingTrigger">
                <a
                    data-role="tile"
                    data-effect="animate-slide-up"
                    data-size="wide"
                    className="tile bg-grayWhite offset-sm-2 offset-md-3"
                    href="/projects/561media"
                    target="_blank">
                    <div className="slide"><img src="images/tiles/hsyucat1.jpg" className="pos-absolute pos-center" /></div>
                    <div className="slide"><img src="images/tiles/hsyucat2.jpg" className="pos-absolute pos-center" /></div>
                    <div className="slide"><img src="images/tiles/hsyucat3.jpg" className="pos-absolute pos-center" /></div>
                </a>

                <a
                    data-role="tile"
                    data-effect="animate-slide-right"
                    data-size="wide"
                    className="tile bg-grayWhite offset-sm-2 offset-md-3"
                    href="http://caraveladoral.com"
                    target="_blank">
                    <div className="slide"><img src="images/tiles/caravela1.jpg" className="pos-absolute pos-center" /></div>
                    <div className="slide"><img src="images/tiles/caravela2.jpg" className="pos-absolute pos-center" /></div>
                    <div className="slide"><img src="images/tiles/caravela3.jpg" className="pos-absolute pos-center" /></div>
                </a>

                <a
                    data-role="tile"
                    data-effect="animate-slide-right"
                    data-size="wide"
                    className="tile bg-grayWhite offset-sm-2 offset-md-3"
                    href="/projects/capstone"
                    target="_blank">
                    <div className="slide"><img src="images/tiles/ft1.jpg" className="pos-absolute pos-center" /></div>
                    <div className="slide"><img src="images/tiles/ft2.jpg" className="pos-absolute pos-center" /></div>
                    <div className="slide"><img src="images/tiles/ft3.jpg" className="pos-absolute pos-center" /></div>
                </a>

                <a
                    data-role="tile"
                    data-effect="animate-slide-right"
                    data-size="wide"
                    className="tile bg-grayWhite offset-sm-2 offset-md-3"
                    href="/projects/pbcs"
                    target="_blank">
                    <div className="slide"><img src="images/tiles/pbcs1.jpg" className="pos-absolute pos-center" /></div>
                    <div className="slide"><img src="images/tiles/pbcs2.jpg" className="pos-absolute pos-center" /></div>
                    <div className="slide"><img src="images/tiles/pbcs3.jpg" className="pos-absolute pos-center" /></div>
                </a>
            </div>
        </section>
    );
};

export default Projects;