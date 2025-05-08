import React, { useEffect, useState } from "react";
import { PokeCard } from "../components/card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import pokeApiServices from "../services/pokeApiServices";


export const Home = ({ url, image, }) => {
    const { store, dispatch } = useGlobalReducer();
    const [favorites, setFavorites] = useState([]); // Estado de favoritos

    let aux = url?.split("/");
    let pid = aux ? aux[aux.length - 2] : null;
    const imageUrl = url
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pid}.svg`
        : image;


    // Llamar al servicio para obtener locaciones al cargar el componente
    useEffect(() => {
        const fetchLocations = async () => {
            const locationData = await pokeApiServices.getLocation();
            dispatch({ type: "pokemon_location", payload: locationData });
        };


        fetchLocations();
    }, [dispatch]);

    return (
        <div className="row text-center mt-5 ">

            <section>
                <div className=" principalContainer p-3 col col-sm-6 col-md-6 col-lg-12 mx-auto d-flex flex-column align-items-center justify-content-center">

                    {/* Div para mostrar Pokémon */}
                    <h3>All Pokemon</h3>
                    <div className="container pokecontainer rounded-2 row m-5 border border-5 ">

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
                    <h3>All Location</h3>
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
                    <h3>Favorites</h3>
                    <div className="container pokecontainer rounded-2 row m-5 border border-5 ">

                        {store.favorites.map((fav, index) => (

                            <PokeCard
                                key={index}
                                name={fav.name}
                                url={fav.url}
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