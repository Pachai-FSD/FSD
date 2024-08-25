import React from 'react'
import tickLogo from '../assets/tick.svg' 
import crossLogo from '../assets/cross.svg'

export default function Features(props) {
    return (
        <>
          {
            props.avail ? <img src={tickLogo} width="15px" alt="Tick" /> : <img style={{opacity:0.5}} src={crossLogo} width="11px" alt="Cross" />
          }
          {
            props.avail ?  <span>{props.label}</span> :  <span style={{opacity:0.5}}>{props.label}</span>
          }
        </>
    )
}
