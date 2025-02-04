import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Formulario } from "../component/formulario.jsx";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home-container">
			<section
				className="section home__section-1 position-relative d-flex align-items-center justify-content-center"
				style={{ backgroundImage: `url(${process.env.BACKEND_URL + "/padel-court.jpg"})` }}
			>
				<div className="position-absolute bottom-0 start-50 translate-middle-x text-center w-100 mb-5 home__section-1--bg">
					<h1>¿Qué es PadelZone?</h1>
					<p className="mt-3">
						La plataforma perfecta para organizar y participar en eventos deportivos, diseñada para la creación y organización de torneos
					</p>
				</div>
			</section>
			<section className="section home__section-2 bg-light">
				<h1 className="text-center p-1">
					<i className="fa fa-trophy"></i> Últimos torneos añadidos <i className="fa fa-trophy"></i>
				</h1>
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-4">
							<div className="card d-flex flex-column">
								<div className="card-body d-flex flex-column p-4">
									<h1 className="card-title">
										{store.tournaments.length > 0 ? store.tournaments[store.tournaments.length - 1].name : "Torneo 1"}
									</h1>
									<p className="card-text flex-grow-1"> {store.tournaments.length > 0
										? store.tournaments[store.tournaments.length - 1].host?.address || "Ubicación Torneo 1"
										: "No hay torneos disponibles"}</p>
									<Link
										to={`/tournaments/${store.tournaments.length > 0 ? store.tournaments[store.tournaments.length - 1].id : ""}`}
										className="btn btn-primary align-self-center mt-auto"
									>
										Información
									</Link>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card d-flex flex-column">
								<div className="card-body d-flex flex-column p-4">
									<h1 className="card-title">
										{store.tournaments.length > 1
											? store.tournaments[store.tournaments.length - 2].name
											: "Torneo 2"}
									</h1>

									<p className="card-text flex-grow-1">
										{store.tournaments.length > 1
											? store.tournaments[store.tournaments.length - 2].host?.address || "Ubicación Torneo 2"
											: "No hay torneos disponibles"}
									</p>

									<Link
										to={`/tournaments/${store.tournaments.length > 1 ? store.tournaments[store.tournaments.length - 2].id : ""}`}
										className="btn btn-primary align-self-center mt-auto"
									>
										Información
									</Link>
								</div>
							</div>

						</div>
						<div className="col-md-4">
							<div className="card d-flex flex-column">
								<div className="card-body d-flex flex-column p-4">
									<h1 className="card-title">
										{store.tournaments.length > 2
											? store.tournaments[store.tournaments.length - 3].name
											: "Torneo 3"}
									</h1>

									<p className="card-text flex-grow-1">
										{store.tournaments.length > 2
											? store.tournaments[store.tournaments.length - 3].host?.address || "Ubicación Torneo 3"
											: "No hay torneos disponibles"}
									</p>

									<Link
										to={`/tournaments/${store.tournaments.length > 2 ? store.tournaments[store.tournaments.length - 3].id : ""}`}
										className="btn btn-primary align-self-center mt-auto"
									>
										Información
									</Link>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
			<section className="section section-3  p-5">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="card h-100 d-flex flex-column bg-dark text-white">
								<div className="card-body d-flex flex-column p-4">
									<h5 className="card-title text-center">Encuentra Torneos</h5>
									<p className="card-text flex-grow-1">Encuentra torneos en tu ciudad y participa de forma fácil y sencilla</p>
									<a href="#" className="btn btn-warning align-self-center mt-auto">Explorar</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 d-flex flex-column bg-dark text-white">
								<div className="card-body d-flex flex-column">
									<h5 className="card-title text-center">Crea Eventos</h5>
									<p className="card-text flex-grow-1">Crea eventos deportivos de forma sencilla gracias a nuestras herramientas de creación de eventos personalizados</p>
									<a href="#" className="btn btn-warning align-self-center mt-auto">Explorar</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 d-flex flex-column bg-dark text-white">
								<div className="card-body d-flex flex-column">
									<h5 className="card-title text-center">Conecta con jugadores</h5>
									<p className="card-text flex-grow-1">Participa solo, con amigos, o tal vez prefieras encontrar nuevos compañeros de tu nivel dentro de nuestra plataforma</p>
									<a href="#" className="btn btn-outline-warning align-self-center mt-auto">Explorar</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
