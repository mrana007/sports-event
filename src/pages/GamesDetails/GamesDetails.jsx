
import { useLoaderData, useParams } from "react-router-dom";
import GameDetails from "./GameDetails";


const GamesDetails = () => {

    const games = useLoaderData();
    // console.log(games);
    const {id} = useParams();

    return (
        <div  className="max-w-7xl mx-auto">
            {
                games?.map( game => game?.id == id ? <GameDetails key={game.id} eventDetails={game}></GameDetails> : '')
            }
        </div>
    );
};

export default GamesDetails;