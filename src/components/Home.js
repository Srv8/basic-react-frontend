import React from 'react';
import study from "../images/study.jpeg";

const Home = () => {
    return (
        <div>
            <section id="header" className="display-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row"> 
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 display-flex justify-content-center flex-column">
                                <h1><strong>Don't worry.<br/>We are here for every solution.</strong></h1>
                                <h5 className="my-3">Darle alegría y cosa buena Dale a tu cuerpo alegría, Macarena Hey Macarena</h5>
                                <div className="my-5">
                                    <button className="btn-primary btn-left">Get started</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a className="watch" href="https://youtu.be/dQw4w9WgXcQ" target="blank"><i class="fas fa-play-circle"></i> Watch video</a>
                                </div>
                            </div>

                            <div className="col-lg-8 order-1 order-lg-2 header-img">
                                <img src={study} className="img-fluid animated" alt="home img" />
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;