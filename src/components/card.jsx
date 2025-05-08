import { Link } from "react-router-dom";
import useGlobalReducer, { StoreProvider } from "../hooks/useGlobalReducer";
import { array } from "prop-types";


export const PokeCard = ({ name, url, image, }) => {
  const { store, dispatch } = useGlobalReducer()

  let aux = url?.split("/");
  let pid = aux ? aux[aux.length - 2] : null;
  const pokemonsArray = store.pokemons?.results || []; // Asegura que sea un array
  const imageUrl = pokemonsArray.some(element => element.name === name)
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pid}.svg`
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ibqf1l8aAnILc-D-3CrrI4l7AC7Gd9pzCQ&s";


  const addToFavorites = (name) => {
    if (!Array.isArray(store.favorites)) {
      throw new error('no es un array')
    }
    const verify = store.favorites.some(element => element.name === name)
    return verify ? 'text-warning ' : 'text-dark '
  }

  const changeFavorite = (favName,favUrl,favId) => {
        dispatch({type:`set_favorite`, payload: {name: favName, url: favUrl, pid: favId } })
  }

  return (

    <div className="divCards col">
      <div className="pokeCard border-dark">
        <img src={imageUrl} alt={name} className="img-fluid" />
        <h3>{name}</h3>
        <div className="buttons d-flex my-3">
          <Link className="btn btn-primary mx-2" to={`/details/${pid}/${name}`}>
            Learn more
          </Link>

          <button onClick={() => dispatch({type:`set_favorite`, payload: {name: name, url: url, pid: pid } })} className={` btn btn-light  fa-solid fa-star ${addToFavorites(name)}`}></button>

        </div>
      </div>
    </div>
  );
};