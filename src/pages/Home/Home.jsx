import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import EventsCard from "./eventsCard";
import FeaturedGame from "./FeaturedGame";


const Home = () => {

    const games = useLoaderData();
    // console.log(games);

    return (
        <div>
            <Banner></Banner>
            <div>
            <h2 className="text-3xl text-center my-8 text-fuchsia-700 font-extrabold">Events and Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
                {
                    games.map(game => <EventsCard key={game.id} game={game}></EventsCard>)
                }
            </div>
            </div>
            <FeaturedGame></FeaturedGame>
        </div>
    );
};

export default Home;