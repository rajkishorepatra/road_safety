import React from 'react'
import '../css/main.css'

function Main() {
    return (
        <>
            <div className='main'>
                <div className='overlay'></div>
                <video src="https://ik.imagekit.io/dqe4fvjcky/videoBg1_CUtJ-_9KQ.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1673445492131" muted autoPlay loop/>
                <div className='content'>
                    <h1>#BeStreetSmart</h1>
                </div>
            </div>
        </>
    )
}

export default Main