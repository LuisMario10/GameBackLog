import { NavLink } from "react-router";

import PerfilStyle from "./Perfil.module.css";

interface IPerfilProps {
    userTag: string;
    backlogLength: number;
    finishedGames: number
}

export const Perfil = ({ userTag, backlogLength, finishedGames }: IPerfilProps) => {
    return (
        <div className={ PerfilStyle.perfilContainer }>
            <div className={ PerfilStyle.perfil }>
                <NavLink to="/perfil" className={ PerfilStyle.navLink }>
                    { userTag }
                </NavLink>                
            </div>

            <div className={ PerfilStyle.gameStatus }>
                <p>Numero de Jogos no Backlog: { backlogLength }</p>
                <p>Jogos Zerados: { finishedGames }</p>
            </div>
        </div>
    );
}