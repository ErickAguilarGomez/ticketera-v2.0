import React, { useContext, useEffect, useState } from "react";
import EventCard from "./EventCard";
import { GlobalContext } from "../../Context/Contex";

const Main = () => {
  const {value, setInitialValue}=useContext(GlobalContext)

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=sbV2n9Do6KLydKxvDKov4XXdeJwbHvGq"
      );
      const data = await response.json();
      const event = data._embedded.events;
      setInitialValue(event)
    }
    getEvents();
  }, []);

  return (
    <div className="flex flex-wrap gap-9 p-4 justify-center items-center">
      {value && value.map((evento) => (
        <EventCard key={evento.id} event={evento} />
      ))}
    </div>
  );
};

export default Main;
