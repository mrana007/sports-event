import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventsCard = ({ game }) => {

  const { title, image, description, id, price } = game;

  return (
    <div className="card shadow-2xl bg-fuchsia-100 ">
        
      <figure className="px-10 pt-8">
        <img src={image} alt="Shoes" className="rounded-xl w-80 h-48" />
      </figure>
      <div className="card-body items-center text-center">
      <h2 className="font-bold text-xl text-center">{title}</h2>
        

        {description.length > 165 ? (
          <p>{description.slice(0, 165)} </p>
        ) : (
          <p>{description}</p>
        )}

        <div className="card-actions">
          <Link to={`/game/${id}`}><button className="btn btn-secondary btn-outline text-base text-fuchsia-600 w-44">Entry Fee ${price}</button></Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

EventsCard.propTypes = {
    game: PropTypes.node
  };
