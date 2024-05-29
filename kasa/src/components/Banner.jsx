import Image from '../assets/Phote-bord-de-plage-falaise.png' ;
import '../style/Banner.scss'

function Banner() {
    // state (data)

    //comportements

    //RENDER 
    return (
        <section className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <img className='mountains-pics' src={Image} alt="Phote-bord-de-plage-falaise"/>
        </section>
    )

}

export default Banner ;