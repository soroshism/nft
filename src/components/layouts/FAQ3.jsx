import React from 'react';
import { Accordion } from 'react-bootstrap-accordion'

import img from '../../assets/images/shape/faq.png'

const FAQ3 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section faq" id='faq'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>FAQ</span></h1>
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">FAQ</h5>
                            <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Frequently Aksed <br /> Questions</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-md-12" >
                        <div className="flat-accordion" data-aos="fade-up">
                            {
                                data.map((data,index) => (
                                    <Accordion className="h5 toggle-title" key={index} title={data.title} show={data.show} >
                                            <p className="fs-18">{data.text}</p>
                                        </Accordion>
                                ))
                            }                     
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="group-image">
                            <img src={img} alt="pinkhounds" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ3;