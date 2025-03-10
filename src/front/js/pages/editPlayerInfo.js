import React from "react";
import "../../styles/home.css";
import {PlayerCard} from "../component/playerCard.jsx";

export const EditPlayer = () => {

    return (
        <div className="pt-5 px-5 bg-light">
            <h1>Editar Perfil</h1>
            <hr className="mb-0"></hr>
            <PlayerCard use={'updateplayer'}/>
        </div>
    );
};
