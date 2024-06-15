function Host({hostName, profileHost}) {
    console.log(profileHost, hostName);
    //Render
    return (
        <div className="host-conteiner">
            <p>{hostName}</p>
            <img src={profileHost} alt="Owner profil"/>
        </div>
        )
}

export default Host ;