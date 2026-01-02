import React from 'react';
import { useParams } from 'react-router-dom';
import events from './event';
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => String(e.id) === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details-page">
      <section className="events-header">
        <h1>{event.title}</h1>
      </section>
      <div className="event-details-content">
        <div className="event-details-images">
          <img src={event.alt} alt="Event 1" className="img-1" />
          <img src={event.image} alt="Event 2" className="img-2" />
        </div>
        <div className="event-details-text">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Date:</strong> {event.date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
