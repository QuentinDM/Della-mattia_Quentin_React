import Slideshow  from "../components/Slideshow " ;
import '../style/Slideshow .scss' ;
import { useState } from "react";

import Next from '../assets/Arrow-right.png'
import Previous from '../assets/Arrow-left.png'

function Description() {
  // state (data)
  const accommodationInfo = JSON.parse(localStorage.getItem("thePictures")) ;
  const pictureOfAccomodation = accommodationInfo.pictures;
  let [numberStart, setNumberStart] = useState(1);
  const [url, setUrl] = useState(pictureOfAccomodation[0]);
  let [index, setIndex] = useState(0); // Initialisez index à 0 pour accéder à la première image
  const totalImages = pictureOfAccomodation.length ;
  
  //comportements
  const handleClickNext = () => {
    // Calculer le nouvel index en incrémentant l'index actuel
    let newIndex = (index + 1) % totalImages; // Assurez-vous de boucler de la dernière image à la premièreL'opérateur modulo (%) est utilisé pour s'assurer que si l'index dépasse le nombre total d'images, il revient à zéro pour commencer à afficher la première image.
    if (numberStart > totalImages) {
      numberStart = 0
    }
    setIndex(newIndex);
    setUrl(pictureOfAccomodation[newIndex]); // Mettre à jour l'URL avec la nouvelle image
    setNumberStart(prevNumberStart => {
      if (prevNumberStart >= totalImages) {
        // Revenir au dernier numéro de démarrage possible
        return index = 1;
      } else {
        // Décrémenter le numéro de démarrage s'il est supérieur à 1
        return prevNumberStart + 1;
      }
    });// Incrémenter le numéro de démarrage Dans React, lorsque vous mettez à jour l'état d'un composant avec useState, vous avez la possibilité de passer une fonction de rappel à la fonction de mise à jour d'état. Cette fonction de rappel reçoit l'ancienne valeur de l'état comme argument, et elle doit retourner la nouvelle valeur de l'état. C'est exactement ce que nous faisons avec setNumberStart(prevNumberStart => prevNumberStart + 1).
  }

  const handleClickPrevious = () => {
    // Calculer le nouvel index en décrémentant l'index actuel
    const newIndex = (index - 1 + totalImages) % totalImages; // Assurez-vous de boucler de la première image à la dernière
    setIndex(newIndex);
    setUrl(pictureOfAccomodation[newIndex]); // Mettre à jour l'URL avec la nouvelle image
    setNumberStart(prevNumberStart => {
      if (prevNumberStart <= 1) {
        // Revenir au dernier numéro de démarrage possible
        return totalImages;
      } else {
        // Décrémenter le numéro de démarrage s'il est supérieur à 1
        return prevNumberStart - 1;
      }
    });
  }

  //RENDER 
  return (
    <nav className="carrousel-slide">
      <ul className="list-images">
        {pictureOfAccomodation.map((picture, index) => (
          <Slideshow key={index} showPics={picture} nextImage={url}/>
        ))}
      </ul>
      <p className="footer-number">{numberStart}/{totalImages}</p> 
      <div className="slide-buttons">
        <button className="slide-image"><img src={Previous} alt="Arrow direction left" className="arrow" onClick={handleClickPrevious}/></button>
        <button className="slide-image"><img src={Next} alt="Arrow direction right" className="arrow" onClick={handleClickNext}/></button>
      </div>
    </nav>
  );
};

export default Description;

