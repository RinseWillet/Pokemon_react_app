import {useEffect, useState} from "react";


//het woord use met kleine letter geeft aan dat het een high component en een hook is
const usePokeApi = () => {

    const [pokemon_name, setPokemonName] = useState("");
    const [pokemon_sprite, setPokemonSprite] = useState("");

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/" + (Math.floor(Math.random() * 100) + 1))
            .then(response => response.json())
            .then(data => {
                setPokemonName(data.name);
                setPokemonSprite(data.sprites.front_default);
            })
    }, []);

    return { pokemon_name: pokemon_name, pokemon_sprite: pokemon_sprite};
}

export default usePokeApi;