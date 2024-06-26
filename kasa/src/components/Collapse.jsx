import React, { useState, useEffect } from 'react';
import Arrowup from '../assets/Arrow-up.png';



function Collapse({collapseInfo}) {
    // state (data)
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(window.location.href);
    }, []); // Exécuter une seule fois après le premier rendu pour récupérer l'URL actuelle
    
    /*j'ai utilisé useEffect pour récupérer l'URL 
    actuelle une fois après le premier rendu du composant, 
    car avant j'essayer de changer l'etat currentPage qui etait une const qui faisait un conflit si je changeais de page
    et j'ai stocké cette valeur dans l'état currentPage. 
    Ensuite, dans le rendu, j'utilise cet état pour conditionnellement afficher le contenu en fonction de l'URL 
    actuelle. Cela évite les problèmes de mise à jour d'état pendant le rendu.8 */

    // Comportements
    const toggleCollapse = () => {
        setOpen(!open);
    };

    // RENDER 
    return (
        <div>
            <li className={currentPage === 'http://localhost:3000/fiche' ? `collapse-fiche` : `collapse-container ${open ? 'collapse-opened' : ''}`}  onClick={toggleCollapse}>
                <h2 className='collapse-title'>{collapseInfo.title}</h2> 
                <img src={Arrowup} alt="Arrow" className={open ? 'open' : 'close'}/>
            </li>
            <article className={currentPage === 'http://localhost:3000/fiche'  && open ? `collapse-text` : open ? 'collapse-article' : ''}>
                {currentPage === 'http://localhost:3000/about' ? (
                    <p className={open ? '' : 'hidden'}>{collapseInfo.content}</p>
                ) : currentPage === 'http://localhost:3000/fiche' && collapseInfo.title === 'Équipements' ? (
                    <ul className={open ? '' : 'hidden'}>
                        {collapseInfo.content.map((equipment) => (//transform Object to Array
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul> 
                ) : (
                    <p className={open ? '' : 'hidden'}>{collapseInfo.content}</p>   
                )}
            </article>
        </div>
    )
}

export default Collapse;