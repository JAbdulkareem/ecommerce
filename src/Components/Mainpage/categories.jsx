import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "https://img.icons8.com/color/48/000000/shirt.png",
      cateName: "Fashion",
    },
    {
      cateImg: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-electronics-home-appliance-flaticons-lineal-color-flat-icons.png",
      cateName: "Electronic",
    },
    {
      cateImg: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-cars-auction-house-flaticons-flat-flat-icons.png",
      cateName: "Cars",
    },
    {
      cateImg: "https://img.icons8.com/plasticine/100/000000/apple-books.png",
      cateName: "Books",
    },
    {
      cateImg: "https://img.icons8.com/color/48/000000/barbershop.png",
      cateName: "Cosmetics",
    },
    {
      cateImg: "https://img.icons8.com/color/48/000000/earbud-headphones.png",
      cateName: "Music",
    },
    {
      cateImg: "https://img.icons8.com/color/48/000000/home--v1.pngg",
      cateName: "Home Accessories",
    },
    {
      cateImg: "https://img.icons8.com/color/48/000000/dog.png",
      cateName: "Pets",
    },
    {
      cateImg: "https://img.icons8.com/color/48/000000/shopaholic.png",
      cateName: "Groceries",
    },
    {
      cateImg: "https://img.icons8.com/color/48/000000/rattle.png",
      cateName: "Toys",
    },
    {
      cateImg: "https://img.icons8.com/color/48/000000/trainers.png",
      cateName: "Health",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories