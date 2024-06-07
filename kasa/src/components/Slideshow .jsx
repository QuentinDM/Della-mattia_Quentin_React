function Slideshow (props) {
    //State
    
    // Index de l'image actuellement affichée
    //const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //Comportement
    
    return (
        <li className='list-carrousel'>
          <figure>
            <img src={props.nextImage} alt="apppartement" className='accomodation-picture' />
          </figure>
        </li>
      
    );
}

export default Slideshow  ;