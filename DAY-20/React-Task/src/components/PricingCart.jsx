import React from 'react'
import Features from './Features'
export default function PricingCart(props) {
  return (
    <>
      <div className='cartBox'>
        <label>{props.data.Plan}</label>
        <h1>${props.data.Amount}/Month</h1>
        <div>
          <ul>
            {props.data.Features.map((element, index) => <li><Features label={element.FeaturesTitle} avail={element.isAvailable} /></li>)}
          </ul>
        </div>
        <button>Buy Now</button>
      </div>
    </>
  )
}
