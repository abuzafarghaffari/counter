import React from 'react';
import { useState } from 'react';

function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [paused, setPaused] = useState(false);

    const startTimer = () => {

        const current = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)

        document.querySelector('.start-button').setAttribute("disabled", "true")
        document.querySelector('.stop-button').removeAttribute("disabled")


            const pauseButton = document.createElement("button")
            pauseButton.innerText = 'pause'
            pauseButton.className="pause-button"
            document.querySelector('.counter-container').appendChild(pauseButton)
            pauseButton.addEventListener("click", () => {
                if (pauseButton.innerText === "pause"){
                    pauseButton.innerText = "resume"
                    clearInterval(current)
                    setPaused(true)
                } else {
                    pauseButton.innerText = 'pause'
                    setInterval(() => {
                        setSeconds(seconds => seconds + 1)
                    }, 1000)
                    setPaused(false)
                }
            })


}
   

const stopTimer = () => {
    clearInterval(setSeconds(0))

    if (!!document.querySelector('#counter')){
        document.querySelector('#counter').remove()
    }
    document.querySelector('.stop-button').setAttribute("disabled", "true")
    document.querySelector('.start-button').removeAttribute("disabled")
    document.querySelector('.pause-button').remove()
}

    const currentCount = seconds;
    return(
        <div className="counter-container">
             <button className="start-button" onClick={startTimer}>start</button>
            <button className="stop-button" onClick={stopTimer}>stop</button>
            <p id="counter">{currentCount}</p>

        </div>
    )
}

export default Timer;