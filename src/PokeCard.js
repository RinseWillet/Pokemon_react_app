import React from "react";
import "./PokeCard.css";
import usePokeApi from "./usePokeApi";

const PokeCard = (props) => {

    const pokemon = usePokeApi();

    return (
        <article>
            <header>{pokemon.pokemon_name || "unknown"}</header>
            <figure><img src={pokemon.pokemon_sprite || "unknown"} /></figure>
        </article> 
    )
}

export default PokeCard;