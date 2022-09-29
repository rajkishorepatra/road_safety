import React from 'react'
import '../css/loading.css'
import cycle from '../img/cycling.gif'

function Loading() {
    return (
        <div className="loading">
            <div className="loader">
                <img
                    src={cycle}
                    alt="loading"
                />
            </div>
        </div>
    )
}

export default Loading