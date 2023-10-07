import PropTypes from 'prop-types';

const GameDetails = ({eventDetails}) => {

    const {date, location, title, image, price, description} = eventDetails;

    return (
        <div className='px-6'>
        <div className="relative">
        <h1 className="text-3xl font-bold py-5">{title}</h1>
        <p><span className='text-lg font-semibold'>When</span>: {date}</p>
        <p><span className='text-lg font-semibold'>Where</span>: {location}</p>
        <p className='pb-8'><span className='text-lg font-semibold'>Entry Fee</span>: ${price}</p>
           <div className='mb-6'><img className="hero h-[60vh] rounded-md" src={image} alt="" /></div>
        </div>
        <p className='mb-12 text-fuchsia-800'>{description}</p>
        </div>
    );
};

export default GameDetails;

GameDetails.propTypes = {
    eventDetails: PropTypes.node
  };