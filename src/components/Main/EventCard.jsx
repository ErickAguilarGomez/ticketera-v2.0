import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <Link to={`/details/${event.id}`} className="block mb-4 max-w-sm rounded overflow-hidden shadow-lg w-80 h-96">
      <img src={event.images[0].url} alt={event.id} className="w-full h-40 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.name}</div>
        <p className="text-gray-700 text-base mb-2">Hora: {event.dates.start.localDate}</p>
        <p className="text-gray-700 text-base mb-2">Lugar: {event._embedded.venues[0].name}</p>
      </div>
    </Link>
  );
}

export default EventCard;
