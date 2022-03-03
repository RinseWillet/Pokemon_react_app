import React from "react";
import "./PokeCard.css";
import {withPokeApi} from "./withPokeApi";

class PokeCard extends React.Component {

    componentDidMount(){   
        this.props.getPokemon();       
    }

    render(){        
        return (
            <article>
                <header>{this.props.pokemon_name}</header>
                <figure><img src={this.props.pokemon_source} /></figure>
            </article>
        )
    }    
}

export default withPokeApi(PokeCard);