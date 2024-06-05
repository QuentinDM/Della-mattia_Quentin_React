import React, { useState } from 'react';


function Card(props) {
    const [accommodationInfo] = useState(props.cardInfo);
   
    return (
        <li onClick={() => {
            // Storing props.cardInfo in localStorage when the <li> is clicked
            localStorage.setItem("thePictures", JSON.stringify(accommodationInfo.pictures));
        }} className='list'>
            <img src={accommodationInfo.cover} alt={accommodationInfo.title} />
            <h2 className='h2'>{accommodationInfo.title}</h2>
        </li>
    );
}

export default Card;