import React, { useState } from 'react'
// import Card from 'react-bootstrap/Card';
import '../css/didYouKnow.css'
import Carousel from 'react-bootstrap/Carousel';
import UnderLine from './common/underline'
import death_sign from '../img/death-sign.png'
import carCrash from '../img/carCrash.png'
import india from '../img/india.png'

function DidYouKnow() {
    // const[mobileView, setMobileView] = useState(false);
    // if (window.innerWidth<=900) {
    //     mobileView=true;
    // }
    
    return (
        <>

            <div>
                <h1 className='text-center mt-5 mb-3'>Did You Know</h1>
                <UnderLine />

                <Carousel variant='dark' indicators={false}>
                    <Carousel.Item>

                        <div className='card-wrapper'>
                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={death_sign} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.35 million people die in road traffic crashes every year.</p>
                                </div>
                            </div>

                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={carCrash} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">Every year more than 50 million people get injured.</p>
                                </div>
                            </div>

                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={india} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.3 lakh people die in road accidents in India.</p>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='card-wrapper'>

                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={carCrash} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">Every year more than 50 million people get injured.</p>
                                </div>
                            </div>

                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={death_sign} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.35 million people die in road traffic crashes every year.</p>
                                </div>
                            </div>

                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={india} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.3 lakh people die in road accidents in India.</p>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='card-wrapper'>
                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={death_sign} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.35 million people die in road traffic crashes every year.</p>
                                </div>
                            </div>

                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={india} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.3 lakh people die in road accidents in India.</p>
                                </div>
                            </div>

                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={carCrash} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">Every year more than 50 million people get injured.</p>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default DidYouKnow