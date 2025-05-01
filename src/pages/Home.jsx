import React, { useEffect, useState } from "react";
import { PokeCard } from "../components/card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import pokeApiServices from "../services/pokeApiServices";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();
    const [favorites, setFavorites] = useState([]); // Estado de favoritos

    // Llamar al servicio para obtener locaciones al cargar el componente
    useEffect(() => {
        const fetchLocations = async () => {
            const locationData = await pokeApiServices.getLocation();
            dispatch({ type: "pokemon_location", payload: locationData });
        };

        fetchLocations();
    }, [dispatch]);

    return (
        <div className="row text-center mt-5">
            <h1>POKEMON!!!</h1>
            <section>
                <div className="col contenedorios">
                    {/* Div para mostrar Pokémon */}
                    <div className="container pokecontainer rounded-2 row m-5 border border-5">
                        {store.pokemons?.results?.map((el, i) => (
                            <PokeCard
                                key={i}
                                name={el.name}
                                url={el.url}
                                favorites={favorites}
                                setFavorites={setFavorites}
                            />
                        ))}
                    </div>
    
                    <div className="container pokecontainer rounded-2 row m-5 border border-5">
                        {store.location?.results?.map((location, i) => (
                            <PokeCard
                                key={i}
                                name={location.name}
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ibqf1l8aAnILc-D-3CrrI4l7AC7Gd9pzCQ&s"
                                favorites={favorites}
                            // Pasar función de favoritos
                            />
                        ))}
                    </div>

                    <div className="container pokecontainer rounded-2 row m-5 border border-5">
                        {store.pokemons?.results
                            ?.filter(pokemon => favorites.includes(pokemon.name)) // Filtrar favoritos
                            .map((el, i) => (
                                <PokeCard
                                    key={i}
                                    name={el.name}
                                    url={el.url}
                                    favorites={favorites}
                                    setFavorites={setFavorites}
                                />
                            ))}
                    </div>



                </div>
            </section>
        </div>
    );
};