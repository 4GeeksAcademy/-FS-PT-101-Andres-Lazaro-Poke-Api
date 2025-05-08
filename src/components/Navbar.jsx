import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	console.log(store.favorites)
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light  mt-3">
			<div className="container d-flex justify-content-between align-items-center">
				{/* Logo y título */}
				<Link to="/" className="navbar-brand">
					<img className="pokemonLogo" src="https://logowik.com/content/uploads/images/pokemon4400.logowik.com.webp" alt="Pokemon Logo" />
				</Link>

				{/* Botón de hamburguesa */}
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Contenido del navbar */}
				<div className="collapse navbar-collapse justify-content-end" id="navbarContent">
					<div className="d-flex flex-column align-items-center">
						<div className="dropdown dropdown-menu-end pr-5 mr-5">
							<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites ({store.favorites?.length || 0})
							</button>
							<ul className="dropdown-menu dropdown-menu-end" style={{ minWidth: "200px" }}>

								{store.favorites?.map((el, index) => (
									<li className="border rounded-3 p-2 d-flex justify-content-between align-items-center fw-bold" key={index}>
										{el.name}
										<button onClick={() => dispatch({ type: `set_favorite`, payload: { name: el.name, url: el.url, pid: el.pid } })} className="btn btn-danger bg-white border btn-sm">❌</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};