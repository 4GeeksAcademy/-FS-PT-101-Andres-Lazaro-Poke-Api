import { useEffect } from "react";
import { useParams } from "react-router-dom";
import pokeApiServices from "../services/pokeApiServices";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams(); // Extraer el ID directamente de la URL
    console.log("ID recibido:", id);

    useEffect(() => {
        pokeApiServices.getSinglePokemon(id).then(data => {
            console.log("Datos obtenidos:", data); // Verificar los datos
            dispatch({ type: "pokemon_details", payload: data }); // Guardar los detalles en el estado global
        });
    }, [dispatch, id]);

    return (
        <div className=" detailContainer">
            <div className="singleCard card">
                <h2 className="text-center">Details for {store.details?.name}</h2>
                <div className="row">
                    <div className="col-6 text-center">
                        {/* Construir la URL directamente utilizando el ID */}
                        <img
                            className="imgDetailPokemon img-fluid"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                            alt={store.details?.name}
                        />
                    </div>
                    <div className="col-6 text-center">
                        <p>Weight: {store.details?.weight}</p>
                        {store.details?.types.map((el, index) => (
                            <p key={index}>{el.type.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};