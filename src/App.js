import "./App.css";
import PokeCard from "./PokeCard";
import PokeCircle from "./PokeCircle";
import PokeSquare from "./PokeSquare";


const App = () => {

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
            <li><PokeCard></PokeCard></li>
            <li><PokeCircle></PokeCircle></li>          
            <li><PokeSquare></PokeSquare></li>   
        </ul>
        );
}

export default App;