import React from "react"
import Home from "../Components/Mainpage/home"
import FlashDeals from "../Components/flashdeals/flashdeals"
import TopCate from "../Components/top/topcate"
import TopBrands from "../Components/topbrands/topbrands"
import Discount from "../Components/discount/discount"
import Shop from "../Components/shops/shop"
import PreFooter from "../Components/prefooter/prefooter"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <TopBrands />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <PreFooter />
    </>
  )
}

export default Pages