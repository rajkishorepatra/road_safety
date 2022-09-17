import React from 'react'
import UnderLine from './common/underline'
import '../css/blog.css'

function Blog() {
    return (
        <>
            <div className='blog' id='blogs'>
                <h1 className='text-center mt-5'>Blogs</h1>
                <UnderLine />

                <div className='blog_data my-5'>
                    <img src='https://images.squarespace-cdn.com/content/v1/57c4826159cc689e97fa2a3e/1518740519786-U8DOO1D2F3RQUCKYW4U5/un-flags-building-7923-72ppi.jpg?format=750w' alt='..' />
                    <div className='blog_about mx-5'>
                        <h5><b><span>ROAD SAFETY UNDERPERFORMANCE BY THE UN AND THE WHO!</span></b></h5>
                        <p>In 2004, when the World Health Organization (WHO) reported on road traffic tragedy globally, there was particular emphasis on the perceived relationship between public health and road safety. It may have seemed to the leaders at the WHO that the answer to reducing road traffic fatalities, and specifically those in low- and middle-income countries (LMICs) where 90% of the carnage occurs, would reside mainly in public health solutions of changing driver and pedestrian behavior.</p>
                        <div className='text-left '>
                            <button className='btn'>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className='blog_data my-5'>
                    <div className='blog_about mx-5'>
                        <h5><b><span>ROAD SAFETY UNDERPERFORMANCE BY THE UN AND THE WHO!</span></b></h5>
                        <p>In 2004, when the World Health Organization (WHO) reported on road traffic tragedy globally, there was particular emphasis on the perceived relationship between public health and road safety. It may have seemed to the leaders at the WHO that the answer to reducing road traffic fatalities, and specifically those in low- and middle-income countries (LMICs) where 90% of the carnage occurs, would reside mainly in public health solutions of changing driver and pedestrian behavior.</p>
                        <div className='text-left '>
                            <button className='btn'>READ MORE</button>
                        </div>
                    </div>
                    <img src='https://images.squarespace-cdn.com/content/v1/57c4826159cc689e97fa2a3e/1518740519786-U8DOO1D2F3RQUCKYW4U5/un-flags-building-7923-72ppi.jpg?format=750w' alt='..' />
                </div>

                <div className='blog_data my-5'>
                    <img src='https://images.squarespace-cdn.com/content/v1/57c4826159cc689e97fa2a3e/1518740519786-U8DOO1D2F3RQUCKYW4U5/un-flags-building-7923-72ppi.jpg?format=750w' alt='..' />
                    <div className='blog_about mx-5'>
                        <h5><b><span>ROAD SAFETY UNDERPERFORMANCE BY THE UN AND THE WHO!</span></b></h5>
                        <p>In 2004, when the World Health Organization (WHO) reported on road traffic tragedy globally, there was particular emphasis on the perceived relationship between public health and road safety. It may have seemed to the leaders at the WHO that the answer to reducing road traffic fatalities, and specifically those in low- and middle-income countries (LMICs) where 90% of the carnage occurs, would reside mainly in public health solutions of changing driver and pedestrian behavior.</p>
                        <div className='text-left '>
                            <button className='btn'>READ MORE</button>
                        </div>
                    </div>
                </div>

                <div className='blog_data my-5'>
                    <div className='blog_about mx-5'>
                        <h5><b><span>ROAD SAFETY UNDERPERFORMANCE BY THE UN AND THE WHO!</span></b></h5>
                        <p>In 2004, when the World Health Organization (WHO) reported on road traffic tragedy globally, there was particular emphasis on the perceived relationship between public health and road safety. It may have seemed to the leaders at the WHO that the answer to reducing road traffic fatalities, and specifically those in low- and middle-income countries (LMICs) where 90% of the carnage occurs, would reside mainly in public health solutions of changing driver and pedestrian behavior.</p>
                        <div className='text-left '>
                            <button className='btn'>READ MORE</button>
                        </div>
                    </div>
                    <img src='https://images.squarespace-cdn.com/content/v1/57c4826159cc689e97fa2a3e/1518740519786-U8DOO1D2F3RQUCKYW4U5/un-flags-building-7923-72ppi.jpg?format=750w' alt='..' />
                </div>


                <div className="container text-center mx-auto">
                    <div className="row">
                        <div className="col">
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/7TESgUA-JW4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col">
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/_NeEF1fwT4k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>


                <div className="container text-center my-5">
                    <div className="row">
                        <div className="col">
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/lDQ3-7-wAOI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col">
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/V9AFfjesOb4?start=3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog