import Slideshow  from "../components/Slideshow " ;
import '../style/Slideshow .scss' ;
import React, { useState } from 'react';

import Next from '../assets/Arrow-right.png'
import Previous from '../assets/Arrow-left.png'
import Collapse from '../components/Collapse'
import Tag from "../components/Tag";

import StarEmpty from '../assets/Rating-star-empty.png';
import Star from '../assets/Rating-star.png';



function Description() {
  // state (data)
  const accommodationInfo = JSON.parse(localStorage.getItem("thePictures")) ;
  const pictureOfAccomodation = accommodationInfo.pictures;
  const tagOfAccomodation = accommodationInfo.tags;
  let [numberStart, setNumberStart] = useState(1);
  const [url, setUrl] = useState(pictureOfAccomodation[0]);
  let [index, setIndex] = useState(0); // Initialisez index à 0 pour accéder à la première image
  const totalImages = pictureOfAccomodation.length ;
  const rating = accommodationInfo.rating ; 

  const [collapse] = useState([
    {id: 1, title: 'Équipements', content: accommodationInfo.equipments},
    {id: 2, title: 'Description', content: accommodationInfo.description}
  ])

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

// Générer les étoiles en fonction du rating
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img key={i} src={Star} alt="Score de l'appartement" />);
        } else {
            stars.push(<img key={i} src={StarEmpty} alt="Score de l'appartement" />);
        }
    }
    return stars;
  }

 
  //RENDER 
  return (
    <div>
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
      <section>
        <div>
          <h2>{accommodationInfo.title}</h2>
          <p>{accommodationInfo.location}</p>
          <div>
            <ul>
              {tagOfAccomodation.map((tagName) => (
                <Tag key={tagName} tag={tagName}/>
              ))}
            </ul>
            {generateStars()}
          </div>
        </div>
        
        <div>
          <span>{accommodationInfo.host.name}</span>
          <img src={accommodationInfo.host.picture} alt="Owner profil"/>
        </div>
        <div>
          <ul className='content-collapse'>
            {collapse.map((about) => (
              <Collapse key={about.id} collapseInfo={about}/>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Description;

