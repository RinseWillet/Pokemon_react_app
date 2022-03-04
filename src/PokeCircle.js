import React from "react";
import "./PokeCircle.css";
import usePokeApi from "./usePokeApi";

const PokeCircle = (props) => {

    const pokemon = usePokeApi();

    return (
        <article className="pokeCircle">
            {pokemon.pokemon_name || "unknown"}
        </article>
    );
}

export default PokeCircle;