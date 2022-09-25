import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/didYouKnow.css'
import UnderLine from './common/underline'
import death_sign from '../img/death-sign.png'
import carCrash from '../img/carCrash.png'
import india from '../img/india.png'

function DidYouKnow() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "10px",
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    };

    return (
        <>

            <div>
                <h1 className='text-center mt-5 mb-3'>Did You Know</h1>
                <UnderLine />

                <div>
                    <Slider {...settings}>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={death_sign} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.35 million people die in road traffic crashes every year.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={carCrash} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">Every year more than 50 million people get injured.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={india} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.3 lakh people die in road accidents in India.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={india} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.3 lakh people die in road accidents in India.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={carCrash} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">Every year more than 50 million people get injured.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem' }}>
                                <img src={death_sign} className="card-img-top" alt="..." height={250} />
                                <div className="card-body">
                                    <p className="card-text">More than 1.35 million people die in road traffic crashes every year.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                {/* <Carousel variant='dark' indicators={false}>
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
                </Carousel> */}
            </div >
        </>
    )
}

export default DidYouKnow