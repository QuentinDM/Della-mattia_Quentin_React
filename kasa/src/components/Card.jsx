function Card(props) {
    // state (data)
    const accommodationInfo = props.cardInfo;
    //comportements

    //RENDER 
    return (<li className='list'>
                <img  src={accommodationInfo.cover} alt={accommodationInfo.title}  />
                <h2 className='h2'>{accommodationInfo.title}</h2>
            </li>)
}


export default Card ;