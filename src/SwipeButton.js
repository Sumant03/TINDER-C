import React from 'react'
import "./SwipeButton.css"
import repeat from './repeat.jpeg';
import cross from './cross.jpeg';
import star from './star.jpeg';
import love from './love.jpeg';
import lightning from './lightning.jpeg';


function SwipeButton() {
    return (
        <div className="swipeButtons">
            <img src={repeat} s height="40px"/>
            <img src={cross} height="40px"/>
            <img src={star} height="40px"/>
            <img src={love} height="40px"/>
            <img src={lightning} height="40px"/>
            

        </div>
    )
}

export default SwipeButton
