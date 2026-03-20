import { useState } from "react";
import { NavLink } from "react-router";
import PerfilStyle from "./Perfil.module.css";

interface IPerfilProps {
    userTag: string;
}

export const Perfil = ({ userTag }: IPerfilProps) => {
    const [gameStatus, setGameStatus] = useState({
        quantityBackLogGames: 0,
        finishedGames: 0,
    });

    return (
        <div className={ PerfilStyle.userContainer }>
            <div className={ PerfilStyle.perfil }>
                <NavLink to="/perfil">
                    { userTag }
                </NavLink>                
            </div>

            <div className={ PerfilStyle.gameStatus }>
                <p>Numero de Jogos no Backlog: { gameStatus.quantityBackLogGames }</p>
                <p>Jogos Zerados: { gameStatus.finishedGames }</p>
            </div>
        </div>
    );
}