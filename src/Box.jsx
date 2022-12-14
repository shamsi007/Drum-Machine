import React, { useRef } from 'react'

export default function Box(props) {
    const audio = useRef();
    const playSound = () => {
        audio.current.play();
        const parent = audio.current.parentNode;
        parent.classList.add('active');
        document.getElementById('display').innerHTML=parent.id;
        audio.current.addEventListener('ended', () => {
            const parent = audio.current.parentNode;
            parent.classList.remove('active');
        })
    }

    return (
      <button id={props.id} className="drum-pad box" onClick={playSound}>
        <p>{props.text}</p>
        <audio 
            id={props.text}
            ref={audio} 
            src={props.audio} 
            className="clip" 
        />
      </button>
  )
}
