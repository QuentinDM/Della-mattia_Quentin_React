import React from 'react';
import '../style/Nav.scss'
function Navigation(props) {
    //State
    // Index de l'image actuellement affichée
    //const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //Comportement
    
    return (
      <div>
        <li className='carrousel'>
          <img src={props.showPics} alt="apppartement"  />
          {console.log(props.showPics)}
        </li>
      </div>
    );
}

export default Navigation;