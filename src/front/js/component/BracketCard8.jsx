import React, { useContext, useState, } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/bracketsCard.css";

export const BracketCard8 = () => {

    return (
        <div className="tournament-bracket container p-4">
                <div className="row justify-content-between d-flex mx-0">

                    {/* ///////////////////////////// SEMI FINALES ///////////////////////////// */}
                    <div className="col-md-3 round d-flex flex-column mb-4">

                        <div>
                            <h3 className="text-center mb-4 round-title">Semi Finales</h3>
                            <hr className="text-primary"/>
                        </div>

                        <div className="d-flex flex-grow-1 align-items-center justify-content-center w-100 flex-column">

                            {/* ///////////////// Primer Partido ///////////////// */}
                            <div className="w-100 mb-3 pb-md-3">
                                <div>
                                    <div className="matchup card mb-2">
                                        <div className="d-flex align-items-center">
                                            <p className="team m-2 m-0">Ganador QF 1</p>
                                        </div>
                                    </div>
                                    <div className="matchup card">
                                        <div className="d-flex align-items-center">
                                            <p className="team m-2 m-0">Ganador QF 2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ///////////////// Segundo Partido ///////////////// */}
                            <div className="w-100 mt-md-3 pt-md-3 mt-3">
                                <div>
                                    <div className="matchup card mb-2">
                                        <div className="d-flex align-items-center">
                                            <p className="team m-2 m-0">Ganador QF 3</p>
                                        </div>
                                    </div>
                                    <div className="matchup card">
                                        <div className="d-flex align-items-center">
                                            <p className="team m-2 m-0">Ganador QF 4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ///////////////////////////// FINAL ///////////////////////////// */}
                    <div className="col-md-3 round d-flex flex-column mb-4">

                        <div>
                            <h3 className="text-center mb-4 round-title">Semi Finales</h3>
                            <hr className="text-primary"/>
                        </div>

                        <div className="d-flex flex-grow-1 align-items-center justify-content-center w-100 flex-column">

                            <div className="w-100 mb-3 pb-md-4">
                                <div className="matchup card">
                                    <p className="team m-2 m-0">Ganador QF 1</p>
                                </div>
                            </div>

                            <div className="w-100 mt-md-3 pt-md-4 mt-4">
                                <div className="matchup card">
                                    <p className="team m-2 m-0">Ganador QF 2</p>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* ///////////////////////////// FINAL ///////////////////////////// */}
                    <div className="col-md-3 round d-flex flex-column mb-4">

                        <div >
                            <h3 className="text-center mb-4 round-title">Final</h3>
                            <hr className="text-primary"/>
                        </div>

                        {/* ///////////////// Partido Final ///////////////// */}
                        <div className="d-flex flex-grow-1 align-items-center w-100">
                            <div className="matchup card mb-2">
                                <p className="team m-2 m-0">Ganador SF 1</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
    );
};