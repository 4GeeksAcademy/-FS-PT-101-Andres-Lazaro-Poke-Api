import { Link } from "react-router-dom";
import useGlobalReducer, { StoreProvider } from "../hooks/useGlobalReducer";
import { array } from "prop-types";


export const PokeCard = ({ name, url, image, }) => {
  const { store, dispatch } = useGlobalReducer()

  let aux = url?.split("/");
  let pid = aux ? aux[aux.length - 2] : null;
  const imageUrl = url
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pid}.svg`
    : image;


  const addToFavorites = (name) => {
    if (!Array.isArray(store.favorites)) {
      throw new error('no es un array')
    }
    const verify = store.favorites.some(element => element === name)
    return verify ? 'bg-black' : 'bg-white'
  }


  const changeFavorite = () => {
    const set = store.favorites.some(element => element === name)
      if (set) {
        dispatch({type:`remove_favorite`, payload: name})
      }
      if  (set=== false){
        dispatch({type:`add_favorite`, payload: {name: name, url: url, pid: pid } })
      }
  }

  return (

    <div className="divCards col">
      <div className="pokeCard border-dark">
        <img src={imageUrl} alt={name} className="img-fluid" />
        <h3>{name}</h3>
        <div className="buttons d-flex my-3">
          <Link className="btn btn-primary mx-2" to={`/details/${pid}`}>
            Learn more
          </Link>

          <button onClick={() => changeFavorite()} className={` btn fa-solid fa-heart ${addToFavorites(name)}`}></button>

        </div>
      </div>
    </div>
  );
};