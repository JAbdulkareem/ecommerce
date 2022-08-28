
import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/apple.svg",
      cateName: "Apple",
    },
    {
      cateImg: "./images/samsung.svg",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/vivo.svg",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/oppo.svg",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/canon.svg",
      cateName: "Canon",
    },
    {
      cateImg: "./images/sony.svg",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg