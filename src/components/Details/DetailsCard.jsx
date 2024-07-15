const DetailsCard = ({event}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center p-6">
    <div className="lg:w-3/5 h-full flex items-center justify-center p-10">
      <img src={event.images[0].url} alt={event.id} className="w-full h-auto object-center lg:h-full lg:w-full border-blue-600 border-solid border-4 rounded" />
    </div>
    <div className="lg:w-3/4 lg:pl-6 py-4 flex flex-col justify-center">
      <div className="font-bold text-3xl mb-2">Evento: {event.name}</div>
      <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Hora:</span> {event.dates.start.localDate}</p>
      <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Lugar:</span> {event._embedded.venues[0].name}</p>
      <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Nota:</span> {event.pleaseNote}</p>
      <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Categorías:</span> {event.classifications.map(category => category.segment.name).join(', ')}</p>

      <div className="lg:w-1/4 flex flex-col justify-center px-6 py-4">
        <div className="text-lg mb-4 whitespace-nowrap"><span className="font-semibold">Precio:</span> {event.priceRanges ? `${event.priceRanges[0].min} - ${event.priceRanges[0].max} ${event.priceRanges[0].currency}` : 'No disponible'}</div>
        <a href={event.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block text-center">Comprar</a>
      </div>
    </div>
  </div>
  )
}

export default DetailsCard
