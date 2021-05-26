import {FaStar} from 'react-icons/fa';
import {useState} from "react";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    return (
        <div>
           {[...Array(5).map((star, i) => {
               const ratingValue = i + 1;
               return (
                 <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}/>
                   <FaStar className="star " />
                 </label>
               );
           })]} 
        </div>
    )
}

export default StarRating
