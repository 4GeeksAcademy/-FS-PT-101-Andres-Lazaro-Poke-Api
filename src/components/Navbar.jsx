import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
    const {store ,dispatach} = useGlobalReducer()
	console.log(store.favorites)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container navbar">
				<Link to="/">
					<img  className="pokemonLogo" src="https://logowik.com/content/uploads/images/pokemon4400.logowik.com.webp" alt="" />
				</Link>
 				<div className="ml-auto">
					<div className="dropdown-center">
						<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Centered dropdown
						</button>
						<ul className="dropdown-menu">
							{store.favorites?.map((el,index) => 
							<li key ={index}>{el.name}</li>
							)}
						</ul>
						{console.log(store.favorites.length)}
					</div>
				</div>
			</div>
		</nav>
	);
};