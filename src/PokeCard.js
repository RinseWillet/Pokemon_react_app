import React from "react";
import "./PokeCard.css";

class PokeCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {pokemon_name: "", pokemon_source: ""}
    }

    componentDidMount(){
        const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
        let randomNumber = Math.floor(Math.random() * 151) + 1;
        fetch(BASE_URL + randomNumber)
            .then(response => response.json())
            .then(data => this.setState({pokemon_name: data.name, pokemon_source: data.sprites.front_default}));       
    }

    render(){        
        return (
            <article>
                <header>{this.state.pokemon_name}</header>
                <figure><img src={this.state.pokemon_source} /></figure>
            </article>
        )
    }    
}

export default PokeCard;