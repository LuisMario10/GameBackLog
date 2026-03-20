import { NavLink } from "react-router";
import { Perfil } from "../Perfil/Perfil";
import HeaderStyle from"./Header.module.css";

export const Header = () => {
    return (
        <header className={ HeaderStyle.container }>
            <Perfil userTag="Luck"/>

            <nav className={ HeaderStyle.navegateContainer }>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/perfil">Reviews</NavLink>
            </nav>
        </header>
    );
}