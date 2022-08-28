import React from "react"
import Ndata from "./ndata"

const Cart = () => {
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart