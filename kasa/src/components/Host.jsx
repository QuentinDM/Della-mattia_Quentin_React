function Host(props) {
    const name = props.hostName
    const profile = props.profileHost

    return (
        <div className="host-conteiner">
            <h2>{name}</h2>
            <img src={profile} alt="Owner profil"/>
        </div>
        )
}

export default Host ;