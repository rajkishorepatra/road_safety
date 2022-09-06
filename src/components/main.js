import React from 'react'
import vdoBg from '../img/videoBg.mp4'
import '../css/main.css'

function Main() {
    return (
        <>
            <div className='main'>
                <div className='overlay'></div>
                <video src={vdoBg} autoPlay loop muted />
                <div className='content'>
                    <h1>Stay alert, Stay safe!</h1>
                </div>
            </div>
        </>
    )
}

export default Main