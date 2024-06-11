import React from 'react';
import data from '../data.json';
import Banner from '../components/Banner'; 
import Card from '../components/Card';
import Image from '../assets/Photo-bord-de-mer-falaise.png';
import { Link } from 'react-router-dom';


function Home() {
  // state (data)
  const accommodationInfo = data;
  //comportements
  
  //RENDER 
  return (
    <div>
       <section className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <Banner images={Image} alt="Phote-bord-de-mer-falaise"/>
        </section>
      
      <section className="gallery">
                <article>
                    <ul className='cart'>{accommodationInfo.map((accommodation) => (
                        <Link key={accommodation.id} to="/fiche">
                          <Card  cardInfo={accommodation} />
                        </Link>
                    ))}</ul>
                </article>
          </section>
    </div>
  );
};

export default Home;