import React from 'react';
import ReactStars from "react-rating-stars-component";
const ratings = {
    size: 20,
    count: 5,
    isHalf: false,
    value: 4,
    color: "gray",
    activeColor: "#febf01",
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`);
    }
  };
function Ratings(){
    return(
      <div>
        <ReactStars {...ratings}/> 
      </div>   
      
    )
}
export default Ratings;