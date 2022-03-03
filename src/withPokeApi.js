import React from "react"

//dit is een high order component (vandaar de lowercase letter waarmee de file en de const naam begint)
export const withPokeApi = (WrappedComponent) => {

    return class PokeApiComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = { pokemon_name: "", pokemon_source: "" }
        }

        getPokemon = () => {
            const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
            let randomNumber = Math.floor(Math.random() * 151) + 1;
            fetch(BASE_URL + randomNumber)
                .then(response => response.json())
                .then(data => this.setState({ pokemon_name: data.name, pokemon_source: data.sprites.front_default }));
        }

        render() {
            return <WrappedComponent getPokemon={this.getPokemon}
                pokemon_name={this.state.pokemon_name}
                pokemon_source={this.state.pokemon_source} ></WrappedComponent>
        }
    }

}