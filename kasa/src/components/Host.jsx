function Host(props) {
    const name = props.hostName
    const profile = props.profileHost

    return (
        <div className="host-conteiner">
            <p>{name}</p>
            <img src={profile} alt="Owner profil"/>
        </div>
        )
}

export default Host ;