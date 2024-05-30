import React, { useState } from 'react';
import Arrowup from '../assets/Arrow-up.png';

import '../style/Collapse.scss'

function Collapse(props) {
    // state (data)
    const [open, setClose] = useState(false);
    const collapseTitle = props.collapseInfo;
    // behavior
    const toggleCollapse = () => {
        setClose(!open);
    };

    // RENDER 
    return (
        <div>
            <li className={`collapse-container ${open ? 'collapse-opened' : ''}`}  onClick={toggleCollapse}>
                <h2 className='collapse-title'>{collapseTitle.title}</h2>
                <img src={Arrowup} alt="Arrow" className={open ? 'open' : 'close'}/>
            </li>
            <article className={open ? 'collapse-article' : ''}>
                <p className={open ? '' : 'hidden'}>{collapseTitle.content}</p>
            </article>
            
        </div>
    )
}

export default Collapse;