import { useParams } from "react-router-dom";


const GamesDetails = () => {

    const {id} = useParams();
    return (
        <div>
            <h2 className="text-3xl">Game Details: {id}</h2>
        </div>
    );
};

export default GamesDetails;