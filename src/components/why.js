import React from 'react'
import '../css/why.css'
import UnderLine from './common/underline'

function Why() {
    return (
        <>
            <div className='why' id='why'>
                <h1 style={{color: '#ed1b24'}}>Why #BeStreetSmart?</h1>
                <UnderLine />
                <div className='why_data'>
                    <p className='why_about'>For us, being street smart is so much more than just possessing the skills to manoeuvre around a sticky situation. Being street smart means being committed and responsible towards your own role as a user of the streets. You are street-smart when you hold on to the sticky ice cream wrapper until you find a dustbin. You are street-smart when you do not take the wrong way, despite getting late for your office, or do not unnecessarily honk in a traffic jam. You are street-smart when you reach out to the concerned authorities on spotting a possible safety hazard on the streets. Even though conventionally, street smartness is gauged by the skills one has but let us take it a step further and reimagine this, not only as skills but also as responsibilities that need to be executed, for one to #BeStreetSmart.</p>
                </div>
            </div>
        </>
    )
}

export default Why