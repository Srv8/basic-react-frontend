import React from 'react';

const Common = (props) => {
    return (
        <div>
            <section id="header" className="display-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row"> 
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 display-flex justify-content-center flex-column">
                                <h1><strong>{props.name}</strong></h1>
                                <h5 className="my-3">Darle alegría y cosa buena Dale a tu cuerpo alegría, Macarena Hey Macarena</h5>
                                <div className="my-5">
                                    <button className="btn-primary btn-left">{props.btname}</button>
                                </div>
                            </div>

                            <div className="col-lg-8 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt={props.imgsrc} />
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Common;
