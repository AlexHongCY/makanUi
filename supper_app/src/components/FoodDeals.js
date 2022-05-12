import React from "react";

function FoodDeals() {
  return (
    <h1>
    <img src={require('../Assets/mee siam.webp')} className="food" alt="meesiam" width="190px" height="140px" />
    <p className='description'>Mee Siam Palace offering 30% off AND free delivery on weekdays from 12pm - 2pm.</p>
    <img src={require('../Assets/burger.webp')} className="food" alt="burger" width="190px" height="140px"/>
    <p className='description'>Burger Queens 1 for 1 promotion from now till 15th July!</p>
    <img src={require('../Assets/stew.jpeg')} className="food" alt="stew" width="190px" height="140px"/>
    <p className='description'>Soup fork pushes new seasonal items along with 15% discount!</p>
    <img src={require('../Assets/prata.webp')} className="food" alt="prata" width="190px" height="140px"/>
    <p className='description'>Jake prata opens new outlet with 20% storewide menu.</p>
    <img src={require('../Assets/pasta.webp')} className="food" alt="pasta" width="190px" height="140px"/>
    <p className='description'>Pasta maniacs delivery now available islandwide with noon time promotions up to 50% off from 11am - 3pm!</p>
    <img src={require('../Assets/lemak.jpeg')} className="food" alt="Nasi lemak" width="190px" height="140px"/>
    <p className='description'>Bapak lemak introduces salted egg wings with a get 5 free 2 deal!</p>
    </h1>
  )
}
export default FoodDeals;