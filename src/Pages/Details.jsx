import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context/Contex";
import DetailsCard from "../components/Details/DetailsCard";
import Header from "../components/Header/Header";

const Details = () => {
  const { id } = useParams();
  const { value } = useContext(GlobalContext);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = value.find((event) => event.id === id);
    setEvent(foundEvent);
  }, [id, value]);

  return (
    <>
      <Header />
      {!event ? (
        <div className="flex items-center justify-center h-screen">Cargando evento...</div>
      ) : (
        <DetailsCard event={event} />
      )}
    </>
  );
};

export default Details;
