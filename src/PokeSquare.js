import React from "react";
import "./PokeSquare.css";
import { withPokeApi } from "./withPokeApi";

class PokeSquare extends React.Component {

    componentDidMount() {
        this.props.getPokemon();  
    } 

    render() {
        return (
            <article className="pokeSquare">
                {this.props.pokemon_name}
            </article>
        );
    }
}

export default withPokeApi(PokeSquare);