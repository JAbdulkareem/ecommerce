import React from "react"
import Dcard from "./dcard"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-Discount-label-flat-icons-inmotus-design.png' />
              <h2>Big Discounts</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount