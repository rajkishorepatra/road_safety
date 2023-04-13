import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/didYouKnow.css'
import UnderLine from './common/underline'


function DidYouKnow() {

    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        nextArrow: false,
        centerPadding: "10px",
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }]
    };

    return (
        <>

            <div>
                <h1 className='text-center mt-5 mb-3' style={{ color: '#ed1b24' }}>Did You Know</h1>
                <UnderLine />

                <div>
                    <Slider arrows={false} {...settings}>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">Cyclists, pedestrians, drivers, and passengers of motorized 2 and 3-wheeler vehicles are collectively called ‘vulnerable road users’.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">More than half of the traffic deaths involve Cyclists, pedestrians, drivers, and passengers of motorized 2 and 3-wheeler vehicles.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">Despite the clear statistics about the crucial role of seat belts in saving lives, only 105 countries of the world have seat belt protocols.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">Using a mobile phone slows down the driver’s reactions and responses by 50%.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">Death of children in car crashes can be reduced to at least 60% by using child restraints.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">Most vehicles, mainly the ones sold in middle and low-income countries do not even meet the basic safety standards.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">Road crashes claim the lives of around 1.35 million people each year.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">Apart from depression and suicide, road deaths claim a majority of young lives.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">Majority of countries spend less than 1% of their GDP on investments and projects ensuring road safety.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">The probability that women might get killed in a road crash is 17 times more than that of men.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">A staggering 20-30 percent of particulate matter in the air is a result of vehicular emissions.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">The risk of a car crash increases by 4% with a 1% increase in mean speed.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card mx-auto my-3" style={{ width: '18rem', height:'24vh', boxShadow: 'inset 0px 0px 20px 1px #fed501' }}>
                                <div className="card-body">
                                    <p className="card-text">In 2021, India topped the list of countries for deaths caused due to road accidents. It was 11% of global road accident deaths while having just 1% of the world’s vehicles.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div >
        </>
    )
}

export default DidYouKnow