import React from 'react'
import UnderLine from './common/underline'
import raahgiri from '../img/raahgiri_black.png'

function About() {
    return (
        <>
            <div id='about' className='about'>
                <h1 className='text-center mt-5' style={{color: '#ed1b24'}}>About Us</h1>
                <UnderLine />

                <div className='about_data'>
                    <div className='text-center'>
                        <img src={raahgiri} alt='..' className='img-fluid' />
                    </div>
                    <p className='m-4 blockquote'>Raahgiri Foundation (RF) is a registered charitable trust (non-profit organization) based in the city of Gurugram, Haryana. RF’s primary goal is to work on road safety and air pollution by promoting sustainable mobility and community development.<br />
                    RF promotes reclaiming streets by diverse groups around the country, through partnering with state and city governments, educational institutes, civic society groups and various other organizations to conduct urban exploration events organize educational and engagement activities, etc., including India’s first sustained car-free days called “Raahgiri Day“.</p></div>
            </div>
        </>
    )
}

export default About