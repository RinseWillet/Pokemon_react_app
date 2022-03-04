import React, {useState, useEffect} from "react";
import "./PokeCard.css";

const PokeCard = (props) => {

    //hook
    const [pokemon_name, setPokemonName] = useState("Pikachu ofzo - ik weet niet veel van Pokemon");
    const [myName, setMyName] = useState("Rinse");

    //uitgevoerd als component gemount wordt - het statement tussen blokhalen bepaald wanneer de useEffect gedraaid wordt en dat is dus bij verandering van pokemon_name in dit geval
    useEffect(() => {
        console.log("ik wordt uigevoerd");
    }, [pokemon_name]);

    console.log(myName);

    return (
        <article onClick={() => setMyName("Christina")}>
            <header>{pokemon_name || "unknown"}</header>
            <figure><img src={pokemon_name || "unknown"} /></figure>
        </article>
    )
}

export default PokeCard;