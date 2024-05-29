import data from '../data.json';
import '../style/Card.scss' ;
import '../style/Banner.scss' ;

function Card() {
    // state (data)
    const testing = data;
    //comportements

    //RENDER 
    return (
        <div>
            <section className="gallery">
                <article>
                    <ul className='cart'>{testing.map((teste) => {
                        return (<li key={teste.id} className='list'>
                            <img  src={teste.cover} alt={teste.title}  />
                            <h2 className='h2'>{teste.title}</h2>
                        </li>)
                    })}</ul>
                </article>
            </section>
        </div>
    );
}

export default Card ;