import React from "react";
import "./PokeSquare.css";
import usePokeApi from "./usePokeApi";

const PokeSquare = (props) => {

    const pokemon = usePokeApi();

        return (
            <article className="pokeSquare">
                {pokemon.pokemon_name}
            </article>
        );
}

export default PokeSquare;