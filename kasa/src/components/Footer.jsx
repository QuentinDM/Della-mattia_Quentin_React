import Logo from '../assets/LOGO-white.png' ;
import '../style/Footer.scss' ;

function Footer() {
    // state (data)

    //comportements

    //RENDER 
    return (
        <div className='footer'>
            <img src={Logo} alt="Logo de la societe Kasa" className='logo'/>
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    ) 
}

export default Footer ;