import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/bracketsCard.css";

export const BracketCard8 = ({tournament}) => {
    const { store } = useContext(Context);

    const firstRoundMatches = tournament.matches?.filter(match => match.round_number === 1) || [];

    return (
        <div className="bracketCard__container p-4">
            <div className="row justify-content-between d-flex mx-0">

                {/* ______________________________________________ SEMI FINALES ______________________________________________ */}
                <div className="col-md-3 bracketCard__round d-flex flex-column mb-4">
                    <div>
                        <h3 className="bracketCard__h3 text-center mb-4 bracketCard__bracketCard__roundTitle">Semi Finales</h3>
                        <hr className="text-primary" />
                    </div>

                    <div className="d-flex flex-grow-1 align-items-center justify-content-center w-100 flex-column">
                        {firstRoundMatches.map((match, index) => (
                            <div key={index} className="w-100 mb-3 pb-md-3">
                                <div>
                                    <div className="matchup card mb-2">
                                        <div className="d-flex align-items-center">
                                            <p className="bracketCard__team m-2 m-0">
                                                {match.participants_match.length > 0 ? match.participants_match[0]?.team_1?.name : "Esperando equipo"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="matchup card">
                                        <div className="d-flex align-items-center">
                                            <p className="bracketCard__team m-2 m-0">
                                                {match.participants_match.length > 0 ? match.participants_match[0]?.team_2?.name : "Esperando equipo"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ______________________________________________FINAL______________________________________________ */}
                <div className="col-md-3 bracketCard__round d-flex flex-column mb-4">
                    <div>
                        <h3 className="bracketCard__h3 text-center mb-4 bracketCard__bracketCard__roundTitle">Final</h3>
                        <hr className="text-primary" />
                    </div>

                    <div className="d-flex flex-grow-1 align-items-center justify-content-center w-100 flex-column">
                        <div className="w-100 mb-3 pb-md-4">
                            <div className="matchup card">
                                <p className="bracketCard__team m-2 m-0">
                                    {tournament.tournament_match?.find(match => match.round_number === 2)?.participants_match[0]?.team_1?.name || "Ganador Match 1"}
                                </p>
                            </div>
                        </div>

                        <div className="w-100 mt-md-3 pt-md-4 mt-4">
                            <div className="matchup card">
                                <p className="bracketCard__team m-2 m-0">
                                    {tournament.tournament_match?.find(match => match.round_number === 2)?.participants_match[0]?.team_2?.name || "Ganador Match 2"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ______________________________________________GANADOR______________________________________________ */}
                <div className="col-md-3 bracketCard__round d-flex flex-column mb-4">
                    <div>
                        <h3 className="bracketCard__h3 text-center mb-4 bracketCard__bracketCard__roundTitle">Ganador</h3>
                        <hr className="text-primary" />
                    </div>

                    <div className="d-flex flex-grow-1 align-items-center w-100">
                        <div className="matchup card mb-2 w-100">
                            <p className="bracketCard__team m-2 m-0">
                                {tournament.tournament_winner?.name || "Ganador"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};