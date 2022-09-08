import React from 'react'
import UnderLine from './common/underline'
import raahgiri from '../img/raahgiri.png'

function About() {
    return (
        <>
            <div id='about' className='about'>
                <h1 className='text-center mt-5'>About Us</h1>
                <UnderLine />

                <div className='about_data'>
                    <div className='text-center'>
                        <img src={raahgiri} alt='..' className='img-fluid' />
                    </div>
                    <p className='m-4'>In a quest to make Gurgaon accessible for its residents and encourage the use of cycling, walking and public transport in the city, organizations and activists of Gurgaon have come together to execute a novel concept  – ‘RAAHGIRI DAY’.
                        <br />
                        Walking and cycling along with effective public transport is the only solution to urban traffic chaos and other issues related to it. Infrastructure for safe walking and cycling is required in Gurgaon too and this event will bring more awareness to this need.
                        <br />
                        Temporary closure of a network of streets to cars so that they become “open” to people, Raahgiri Day will be a weekly road event which will start from 17th Nov and will happen on every Sunday.  With a strong backing from the local administration of Guragon – MCG, PWD, HUDA and Traffic Police, the streets identified for Raahgiri day will be cordoned off for non motorized transport users between 6 am and 12 noon.
                        <br />
                        Children and adults are invited to bike, skate, run and walk; to partake in community leisure activities such as street games, street dancing; to learn yoga, aerobics and zumba (for which stages will be setup at intervals along the route); and to come together as a community and celebrate life.
                        <br />
                        Raahgiri day is one of the first steps towards making Gurgaon a sustainable and environment friendly city; a city which cares for its future and its resources, a city which is alive and whose citizens take an active part in what it becomes.</p>
                </div>
            </div>
        </>
    )
}

export default About