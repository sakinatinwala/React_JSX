import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const Star = ({ filled, onClick }) => {
  return (
    <FaStar 
     color={filled ? "orange" : "lightgray"} 
     onClick={onClick} />
  );
}

export const StarRating = ({ onChange }) => {

  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
  }
  return (
   <center> <span> <span> <h2> Star Rating Component : </h2></span>
    <h1>  {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))} </h1>
    </span>
    </center>
  )
}