import React, { useState, useEffect } from "react";
import "./PokeCircle.css";

const PokeCircle = (props) => {

    const [pokemon_name, setPokemonName] = useState("Rinse");

    //uitgevoerd als component gemount wordt
    useEffect(() => {
        console.log("ik wordt uigevoerd");
    }, [pokemon_name]);

    return (
        <article className="pokeCircle">
            {pokemon_name || "unknown"}
        </article>
    );
}

export default PokeCircle;