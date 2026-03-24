import { NavLink } from "react-router";
import { Perfil } from "../Perfil/Perfil";

import HeaderStyle from"./Header.module.css"; 

export const Header = () => {
    return (
        <header className={ HeaderStyle.container }>
            <Perfil 
                userTag="Luck" 
                backlogLength={ 10 } 
                finishedGames={ 1 }
            /> 

            <nav className={ HeaderStyle.navigateContainer }>
                <NavLink to="/" className={ HeaderStyle.navLink }>Home</NavLink>
                <NavLink to="/reviews" className={ HeaderStyle.navLink }>Suas Reviews</NavLink>
            </nav>
        </header>
    );
}