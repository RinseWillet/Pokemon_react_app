import React from "react";
import "./PokeCircle.css";
import { withPokeApi } from "./withPokeApi";

class PokeCircle extends React.Component {

    componentDidMount() {
        this.props.getPokemon();  
    } 

    render() {
        return (
            <article className="pokeCircle">
                {this.props.pokemon_name}
            </article>
        );
    }
}

export default withPokeApi(PokeCircle);