
import { useLoaderData, useParams } from "react-router-dom";
import GameDetails from "./GameDetails";


const GamesDetails = () => {

    const games = useLoaderData();
    // console.log(games);
    const {id} = useParams();

    // useEffect(() =>{},[])

    return (
        <div>
            {/* <h2 className="text-3xl">Game Details:</h2> */}
            {
                games?.map( game => game?.id == id ? <GameDetails key={game.id} eventDetails={game}></GameDetails> : '')
            }
        </div>
    );
};

export default GamesDetails;