import React from 'react';
import CountUp from 'react-countup';

import icon from '../../assets/fake-data/icon';

const CounterTwo = () => {
    return (
        <section className="tf-section section-counter" id='counter'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="counter__body" data-aos="fade-down" data-aos-duration="1000">
                            <div className="counter">
                                <img src={icon.users} alt="pinkhounds" />
                                <div className="number-counter">
                                    <CountUp end={100} />K
                                </div>
                                <h5 className="title">Registered User</h5>    
                            </div>
                            <div className="counter">
                                <img src={icon.assets} alt="pinkhounds" />
                                <div className="number-counter">
                                <CountUp end={5} />M
                                </div>
                                <h5 className="title">Total Assets</h5>    
                            </div>
                            <div className="counter">
                                <img src={icon.trading} alt="pinkhounds" />
                                <div className="number-counter">
                                <CountUp end={10} />B
                                </div>
                                <h5 className="title">Yearly Trading</h5>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CounterTwo;