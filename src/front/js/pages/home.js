import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getTournaments();
	}, []);

	return (
		<div className="home-container">
			<section
				className="section home__section-1 position-relative d-flex align-items-center justify-content-center"
				style={{ backgroundImage: `url(${process.env.BACKEND_URL + "/padel-court.jpg"})` }}
			>
				{/* <div className="position-absolute bottom-0 start-50 translate-middle-x text-center w-100 home__section-1--bg">
					<h1>¿Qué es PadelZone?</h1>
					<p className="mt-3">
						La plataforma perfecta para organizar y participar en eventos deportivos, diseñada para la creación y organización de torneos
					</p>
				</div> */}
			</section>
			<section className="section home__section-2 bg-light">
				<h1 className="text-center p-5">
					<i className="fa fa-trophy"></i> Últimos torneos añadidos <i className="fa fa-trophy"></i>
				</h1>
				<div className="container py-5">
					<div className="row g-4"> {/* Espaciado entre las cartas */}
						{/* Torneo 1 */}
						<div className="col-lg-4 col-md-6">
							<div className="card shadow-lg rounded-3 overflow-hidden">
								<div className="card-body d-flex flex-column p-4">
									<img
										src={store.tournaments.length > 0 ? store.tournaments[store.tournaments.length - 1].image : "Imagen torneo 1"}
										alt="Profile-img"
										className="rounded-circle border border-3 align-self-center"
										style={{ width: "200px", height: "200px", objectFit: "cover" }}
									/>
									<h4 className="card-title mb-2 mt-4 text-center">
										{store.tournaments.length > 0 ? store.tournaments[store.tournaments.length - 1].name : "Torneo 1"}
									</h4>
									<p className="card-text flex-grow-1 text-muted mb-1 home__capitalize--p">
										{store.tournaments.length > 0
											? new Date(store.tournaments[store.tournaments.length - 1].schedule)
												.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) || "Dia Torneo 1"
											: "No hay torneos disponibles"}
									</p>
									<p className="card-text flex-grow-1 text-muted mb-1">
										{store.tournaments.length > 0
											? new Date(store.tournaments[store.tournaments.length - 1].schedule)
												.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) || "Hora Torneo 1"
											: "No hay torneos disponibles"}
									</p>
									<p className="card-text flex-grow-1 text-muted mb-1 home__capitalize--p">
										{store.tournaments.length > 0
											? store.tournaments[store.tournaments.length - 1].host?.address || "Ubicación Torneo 1"
											: "No hay torneos disponibles"}
									</p>
									<Link
										to={`/tournament/view/${store.tournaments.length > 0 ? store.tournaments[store.tournaments.length - 1].id : ""}`}
										className="btn btn-primary align-self-center mt-3 w-100"
									>
										Información
									</Link>
								</div>
							</div>
						</div>

						{/* Torneo 2 */}
						<div className="col-lg-4 col-md-6">
							<div className="card shadow-lg rounded-3 overflow-hidden">
								<div className="card-body d-flex flex-column p-4">
									<img
										src={store.tournaments.length > 1 ? store.tournaments[store.tournaments.length - 2].image : "Imagen torneo 2"}
										alt="Profile-img"
										className="rounded-circle border border-3 align-self-center"
										style={{ width: "200px", height: "200px", objectFit: "cover" }}
									/>
									<h4 className="card-title mb-2 mt-4 text-center">
										{store.tournaments.length > 1
											? store.tournaments[store.tournaments.length - 2].name
											: "Torneo 2"}
									</h4>
									<p className="card-text flex-grow-1 text-muted mb-1 home__capitalize--p">
										{store.tournaments.length > 1
											? new Date(store.tournaments[store.tournaments.length - 2].schedule)
												.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) || "Dia Torneo 2"
											: "No hay torneos disponibles"}
									</p>
									<p className="card-text flex-grow-1 text-muted mb-1">
										{store.tournaments.length > 1
											? new Date(store.tournaments[store.tournaments.length - 2].schedule)
												.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) || "Hora Torneo 2"
											: "No hay torneos disponibles"}
									</p>
									<p className="card-text flex-grow-1 text-muted mb-1 home__capitalize--p">
										{store.tournaments.length > 1
											? store.tournaments[store.tournaments.length - 2].host?.address || "Ubicación Torneo 2"
											: "No hay torneos disponibles"}
									</p>
									<Link
										to={`/tournament/view/${store.tournaments.length > 1 ? store.tournaments[store.tournaments.length - 2].id : ""}`}
										className="btn btn-primary align-self-center mt-3 w-100"
									>
										Información
									</Link>
								</div>
							</div>
						</div>

						{/* Torneo 3 */}
						<div className="col-lg-4 col-md-6">
							<div className="card shadow-lg rounded-3 overflow-hidden">
								<div className="card-body d-flex flex-column p-4">
									<img
										src={store.tournaments.length > 2 ? store.tournaments[store.tournaments.length - 3].image : "Imagen torneo 3"}
										alt="Profile-img"
										className="rounded-circle border border-3 align-self-center"
										style={{ width: "200px", height: "200px", objectFit: "cover" }}
									/>
									<h4 className="card-title mb-2 mt-4 text-center">
										{store.tournaments.length > 2
											? store.tournaments[store.tournaments.length - 3].name
											: "Torneo 3"}
									</h4>
									<p className="card-text flex-grow-1 text-muted mb-1 home__capitalize--p">
										{store.tournaments.length > 2
											? new Date(store.tournaments[store.tournaments.length - 3].schedule)
												.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) || "Dia Torneo 3"
											: "No hay torneos disponibles"}
									</p>
									<p className="card-text flex-grow-1 text-muted mb-1">
										{store.tournaments.length > 2
											? new Date(store.tournaments[store.tournaments.length - 3].schedule)
												.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) || "Hora Torneo 3"
											: "No hay torneos disponibles"}
									</p>
									<p className="card-text flex-grow-1 text-muted mb-1 home__capitalize--p">
										{store.tournaments.length > 2
											? store.tournaments[store.tournaments.length - 3].host?.address || "Ubicación Torneo 3"
											: "No hay torneos disponibles"}
									</p>
									<Link
										to={`/tournament/view/${store.tournaments.length > 2 ? store.tournaments[store.tournaments.length - 3].id : ""}`}
										className="btn btn-primary align-self-center mt-3 w-100"
									>
										Información
									</Link>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="section home__section-3">
				<div className="container">
					<div className="d-flex flex-column align-items-center">
						<div className="col-md-8 my-3">
							<div className="card h-100 d-flex flex-row bg-dark text-white">
								<img src="https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.jpg?s=612x612&w=0&k=20&c=SKdeeGEcpZIxKbOUeCuEzBHcLD8CUOsNtMsZ-r9rLq4="
									className="card-img-left img-fluid"
									alt="Encuentra Torneos"
								/>
								<div className="card-body d-flex flex-column p-4">
									<h5 className="card-title text-center">Encuentra Torneos</h5>
									<p className="card-text flex-grow-1">Encuentra torneos en tu ciudad y participa de forma fácil y sencilla</p>
									<Link to="/tournaments" className="btn btn-warning align-self-center mt-auto">
										Explorar
									</Link>
								</div>
							</div>
						</div>

						<div className="col-md-8 my-3">
							<div className="card h-100 d-flex flex-row bg-dark text-white">
								<img src="https://media.istockphoto.com/id/1517473680/es/foto/jugador-de-p%C3%A1del-haciendo-un-esfuerzo-mientras-golpea-la-pelota-durante-un-partido-en-pista.jpg?s=612x612&w=0&k=20&c=f3z4w6JGgYVSIVJX94mGC01SYqSQKqqQqZil-yTvxMM="
									className="card-img-left img-fluid"
									alt="Crea Eventos"
								/>
								<div className="card-body d-flex flex-column p-4">
									<h5 className="card-title text-center">Crea Eventos</h5>
									<p className="card-text flex-grow-1">Crea eventos deportivos de forma sencilla gracias a nuestras herramientas de creación de eventos personalizados</p>
									<Link to="/create_tournament" className="btn btn-warning align-self-center mt-auto">
										Explorar
									</Link>
								</div>
							</div>
						</div>

						<div className="col-md-8 my-3">
							<div className="card h-100 d-flex flex-row bg-dark text-white">
								<img src="https://media.istockphoto.com/id/1402900023/es/foto/pareja-jugando-al-p%C3%A1del-en-pista-hola-cinco-gestos-de-juego-limpio.jpg?s=612x612&w=0&k=20&c=k8zUifR8OyQIMuQJDF5JSqEMnXRSw_X1lS8K-6hsIfM="
									className="card-img-left img-fluid"
									alt="Conecta con jugadores"
								/>
								<div className="card-body d-flex flex-column p-4">
									<h5 className="card-title text-center">Conecta con jugadores</h5>
									<p className="card-text flex-grow-1">Participa solo, con amigos, o tal vez prefieras encontrar nuevos compañeros de tu nivel dentro de nuestra plataforma</p>
									<Link to="/create_tournament" className="btn btn-warning align-self-center mt-auto">
										Explorar
									</Link>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

		</div>
	);
};
