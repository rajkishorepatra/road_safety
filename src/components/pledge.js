import React from 'react'
import '../css/pledge.css'
import UnderLine from './common/underline'

function Pledge() {
    return (
        <>
            <div className='pledge' id='pledge'>
                <h1 className='text-center mt-5 mb-4 head'>Take The Pledge</h1>
                <UnderLine />

                <div className="container text-center mt-3">
                    {/* <div className="row"> */}
                        <div className="col">
                            <h2 className='slogan'>Pledge To Drive<br />So Others Survive!</h2>
                        </div>
                        <div className="col">
                            <h1 className='mt-4 number'>5200</h1><br />
                            <h2>Already taken the pledge!</h2>
                        </div>
                    {/* </div> */}
                </div>
                <div className='text-center m-5'>
                    <button className='btn'>Take Pledge</button>
                </div>
            </div>
        </>
    )
}

export default Pledge