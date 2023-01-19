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
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1100,
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
                                <h5 className='mt-3'><b>{BlogData[1].title}</b></h5>
                                <button className='btn' onClick={() => {
                                window.location.href = "https://raahgirifoundation.org/redefining-what-it-means-to-be-street-smart/"
                            }}>READ MORE</button>
                            </div>
                        </div>
                        {/* <div>
                            <div className='blog_data mt-0'>
                                <div className='blog_about mx-5'>
                                    <h5><b><span>Design elements to rejuvenate Indian Streets: A case of Bellasis Road, Mumbai</span></b></h5>
                                    <p>Streets in the last century were primarily designed as a mode of transport for goods and services. This automobile-centric approach of street design stifled the human accessibility aspect.<br />
                                        Mumbai is a city of pedestrians, with 51% of the total daily trips being walk trips, according to the...</p>
                                    <div className='text-left '>
                                        <button className='btn' onClick={handleShowBlog2}>READ MORE</button>
                                    </div>
                                </div>
                                <img src='https://wri-india.org/sites/default/files/styles/large/public/Bellasis-Road-Figure-2.jpg?itok=z8suHnCt' alt='..' />
                            </div>
                        </div>
                        <div>
                            <div className='blog_data mt-0'>
                                <img src='https://wri-india.org/sites/default/files/styles/large/public/12764444403_1d93d69204_z.jpg?itok=Qk-lh8_1' alt='..' />
                                <div className='blog_about mx-5'>
                                    <h5><b><span>India Has the Worst Road Safety Record in the World. A New Law Aims to Change That</span></b></h5>
                                    <p>India’s parliament approved the Motor Vehicles Amendment Bill on July 31, 2019, the result of a five-year effort to improve national legislation on road safety. After the president’s approval, India’s streets may finally
                                        <br />
                                        Road traffic deaths have reached alarming levels across the world, with...</p>
                                    <div className='text-left '>
                                        <button className='btn' onClick={handleShowBlog3}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='blog_data mt-0'>
                                <div className='blog_about mx-5'>
                                    <h5><b><span>How State-Level Commitments to Vision Zero Could be a Game Changer for Road Safety in India</span></b></h5>
                                    <p>Last year, WRI India launched India Vision Zero, a road safety forum to deliberate on the challenges, opportunities, and solutions towards reducing road traffic fatalities in India.<br />
                                        India currently tops the list with the highest number of road traffic deaths in the world. By contextualising...</p>
                                    <div className='text-left '>
                                        <button className='btn' onClick={handleShowBlog4}>READ MORE</button>
                                    </div>
                                </div>
                                <img src='https://wri-india.org/sites/default/files/styles/large/public/featured_amit.jpeg?itok=AaF7c001' alt='..' />
                            </div>
                        </div> */}
                        {/* <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div> */}
                    </Slider>
                </div>

                {/* <Modal show={showBlog1} className="my-4 modal-lg" onHide={handleCloseBlog1}>
                    <Modal.Header closeButton>
                        <Modal.Title><b>{data[0].title}</b></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="overflow-auto">Wounds get healed, bills get paid off, and life moves on but there’s more to road accidents than what meets the eye. Though often overlooked, the mental scars that lie beneath bloodied wounds deserve just as much attention as the physical ones. These scars take a long time to heal and sometimes, due to a lack of proper response, they also have the potential to develop into lifelong disorders or phobias.
                        Anyone who has ever been involved in a road accident knows what extreme emotions they can bring about. The adrenaline rush at the time of the accident, followed by the feeling of numbness to the point that even your memory gets hazy. Not only do accidents often result in physical damage to life and property, but they also bring about the grief of loss. It is tempting to view the recovery of physical wounds as the end of the traumatic event, but the reality is that the psychological effects can linger long after the physical ones have healed. Unfortunately, statistics show that this is often the case.
                        According to one recent study conducted by British researchers, at least one-third of all individuals engaged in nonfatal accidents experience post-traumatic stress disorder (PTSD), persistent anxiety, sadness, and phobias even a year after the incident. Ironically, post-crash care is often oblivious to these aspects. For instance, PTSD is remarkably prevalent in road crash survivors. Numerous emotional repercussions, such as depression, anxiety, disruptions in sleep cycles, difficulty controlling anger, flashbacks, and even a sense of humiliation can emerge from this. If not directly, road crashes can indirectly create scenarios that not only limit a person’s opportunities but also make them vulnerable to various emotional burdens.
                        Many serious wounds leave a person permanently disabled or disfigured which could force one to settle for a job that pays little or operates part-time, or not be able to work at all. Additionally, road crashes are more burdening on people coming from middle and low-income households. In rural areas, it is often the breadwinner (most often a male) of the family who leaves the home to earn a living, thereby increasing the risk of being involved in an accident. Not only does such an accident put their family's survival at stake but also creates an additional burden of medical expenses. It's possible that crash survivors might need external help doing their chores or that they may need full-time care, as a consequence of the accident. This often leads to a  turbulent financial situation that adds to the misery of the accidents.
                        It is difficult to calculate the future hospital expenses, home care fees and potentially lost wages. Even though they do not lose their lives, people bear the brunt of that one accident for a lifetime. Further, after a road accident lawsuit is resolved, many serious injuries necessitate continuous treatment. After an amputation, one may be required to change prostheses more than once in their lifetime. Bed sores, infections, and other consequences that require medical attention could result from a debilitating spinal cord injury. Therefore, restricting our assessment of a road crash survivor’s recovery only to the healing of his physical wounds is only half the story. We need to make room in our conversations for the terrible emotional damage that a road crash can leave behind.
                        The objective is not to underplay the importance of physical impacts but to add another dimension, a rather underrepresented one, to our conversations regarding road safety. It is imperative to provide quick trauma care  to ensure that the crash doesn’t prove to be fatal. In fact, in many cases, it is the nature and severity of the physiological impacts that directly influence the victim’s short and long-term mental health. It is essential to normalize that certain road crash victims can require therapy and may experience injury-related symptoms up to many years after the incident. Recovery from a vehicle accident involves assessing the severity of the damage and any prospective long-term bodily implications and it is high time we kept the psychological burdens of road crashes on the same mantle as that of the physical burdens.
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseBlog1}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showBlog2} className="my-4" onHide={handleCloseBlog2}>
                    <Modal.Header closeButton>
                        <Modal.Title><b>{data[1].title}</b></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="overflow-auto">{data[1].desc}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseBlog2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> */}


                {/* <div className="container text-center mx-auto">
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
                </div> */}
            </div>
        </>
    )
}

export default Blog