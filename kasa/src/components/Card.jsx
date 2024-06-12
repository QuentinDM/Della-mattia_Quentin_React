import React, { useState } from 'react';
import Title from './Title';


function Card(props) {
    const [accommodationInfo] = useState(props.cardInfo);
   
    return (
        <li onClick={() => {
            // Storing props.cardInfo in localStorage when the <li> is clicked
            localStorage.setItem("thePictures", JSON.stringify(accommodationInfo));
        }} className='list'>
            <img src={accommodationInfo.cover} alt={accommodationInfo.title} />
            <Title title={accommodationInfo.title}/>
        </li>
    );
}

export default Card;