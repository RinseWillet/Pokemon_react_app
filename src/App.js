import "./App.css";
import PokeCard from "./PokeCard";

const App = () => {

    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

    return (
        <ul>
            <li><PokeCard></PokeCard></li>
            <li><PokeCard></PokeCard></li>
            <li><PokeCard></PokeCard></li>
            <li><PokeCard></PokeCard></li>
            <li><PokeCard></PokeCard></li>
            <li><PokeCard></PokeCard></li>
            <li><PokeCard></PokeCard></li>
            <li><PokeCard></PokeCard></li>
            <li><PokeCard></PokeCard></li>
        </ul>
        );
}

export default App;