import React from 'react'
// import Card from 'react-bootstrap/Card';
import UnderLine from './common/underline'
import death_sign from '../img/death-sign.png'
import carCrash from '../img/carCrash.png'
import india from '../img/india.png'

function DidYouKnow() {
    return (
        <>
            <div>
                <h1 className='text-center mt-5 mb-3'>Did You Know</h1>
                <UnderLine />
                <div className='dyk_data'>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="card mx-auto my-3" style={{width: '18rem'}}>
                                    <img src={death_sign} class="card-img-top" alt="..." height={250}/>
                                        <div className="card-body">
                                            <p className="card-text">More than 1.35 million people die in road traffic crashes every year.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mx-auto my-3" style={{width: '18rem'}}>
                                    <img src={carCrash} class="card-img-top" alt="..." height={250}/>
                                        <div class="card-body">
                                            <p class="card-text">Every year more than 50 million people get injured.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mx-auto my-3" style={{width: '18rem'}}>
                                    <img src={india} class="card-img-top" alt="..." height={250}/>
                                        <div class="card-body">
                                            <p class="card-text">More than 1.3 lakh people die in road accidents in India.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Card border='danger'>
                        <Card.Img variant="top" src={death_sign} />
                        <Card.Body>
                            <Card.Text>
                                More than 1.35 million people die in road traffic crashes every year
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border='danger'>
                        <Card.Img variant="top" src={carCrash} />
                        <Card.Body>
                            <Card.Text>
                                As many as 50 million people are injured or disabled by road traffic crashes every year
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border='danger'>
                        <Card.Img variant="top" src={india} />
                        <Card.Body>
                            <Card.Text>
                                More than 1.3 lakh people die in road accidents in India roads
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
                </div>
            </div>
        </>
    )
}

export default DidYouKnow