import React from "react";
import './style.css';
import AnnuarLogo from '../img/annuarlogo.png';
import Palomitas from '../img/palomitas.png';

class Header extends React.Component{
    render(){
        return <header>
                    <div class="cabecera" >
                        <img src={Palomitas} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"  alt=""/>
                    </div>
                    <div class="titulo">
                        <i class="fas fa-h1">CINE ANUAR SHOOPING</i>
                        <img src={AnnuarLogo} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                    </div>
                </header>
    }
}
export default Header;