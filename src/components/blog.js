import React from 'react'
import UnderLine from './common/underline'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/blog.css'
import BlogData from './blogData'


function Blog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 705,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }]
    };

    return (
        <>
            <div className='blog' id='blogs'>
                <h1 className='text-center mt-5' style={{ color: '#ed1b24' }}>Blogs</h1>
                <UnderLine />


                <div>
                    <Slider arrows={false} {...settings} className='mb-5'>
                        <div>
                            <div className='blog_data m-auto' >
                                <img src={BlogData[0].img} alt='..' className='m-auto' />
                                <h5 className='mt-3'><b>{BlogData[0].title}</b></h5>
                                <button className='btn' onClick={() => {
                                    window.location.href = "https://raahgirifoundation.org/beyond-physical-injuries-the-unseen-trauma-of-road-crashes/"
                                }}>READ MORE</button>
                            </div>
                        </div>
                        <div>
                            <div className='blog_data m-auto' >
                                <img src={BlogData[1].img} alt='..' className='m-auto' />
                                <h5 className='mt-5 pt-5'><b>{BlogData[1].title}</b></h5>
                                <button className='btn' onClick={() => {
                                    window.location.href = "https://raahgirifoundation.org/redefining-what-it-means-to-be-street-smart/"
                                }}>READ MORE</button>
                            </div>
                        </div>
                        <div>
                            <div className='blog_data m-auto' >
                                <img src={BlogData[2].img} alt='..' className='m-auto' />
                                <h5 className='mt-3'><b>{BlogData[2].title}</b></h5>
                                <button className='btn' onClick={() => {
                                    window.location.href = "https://raahgirifoundation.org/sustainable-mobility-for-india-the-g20-vision/"
                                }}>READ MORE</button>
                            </div>
                        </div>
                        <div>
                            <div className='blog_data m-auto' >
                                <img src={BlogData[3].img} alt='..' className='m-auto' />
                                <h5 className='mt-3'><b>{BlogData[3].title}</b></h5>
                                <button className='btn' onClick={() => {
                                    window.location.href = "https://raahgirifoundation.org/why-we-need-inclusive-transportation/"
                                }}>READ MORE</button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Blog