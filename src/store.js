export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
    favorites: [], // Estado para los Pokémon favoritos
  };
};


export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'pokemon_location':
      return {
        ...store,
        location: action.payload
      }

    case 'pokemon_details':
      return {
        ...store,
        details: action.payload
      }
    case 'pokemon_data':
      return {
        ...store,
        pokemons: action.payload
      };
      
      case "add_favorite": // Acción para agregar favoritos
      return {
        ...store,
        favorites: [...store.favorites, action.payload],
      };

    case "remove_favorite": // Acción para eliminar favoritos
      return {
        ...store,
        favorites: store.favorites.filter((fav) => fav !== action.payload),
      };

    default:
      throw Error("Unknown action.");
  }
}

