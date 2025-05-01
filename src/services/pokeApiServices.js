const pokeApiServices = {}


pokeApiServices.getAllPokemon = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon'
            // , {
            // method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // }
            //}
        );
        if (!resp.ok) throw new Error('Error fetching all pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

pokeApiServices.getSinglePokemon = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        if (!resp.ok) throw new Error('Error fetching all pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}


pokeApiServices.getLocation = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/location/');
        if (!resp.ok) throw new Error('Error fetching all location')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

console.log('pokeApiServices', pokeApiServices)

export default pokeApiServices