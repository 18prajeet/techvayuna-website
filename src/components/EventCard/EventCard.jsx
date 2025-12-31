import React from "react";
import { Link } from "react-router-dom";


const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`} className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
        <span className="event-date-badge">{event.tagDate}</span>
      </div>

      <div className="event-content">
        <h3>{event.title}</h3>
        <p>{event.description}</p>

        <div className="event-footer">
          <span>{event.venue}</span> <br></br>
          <span style={{ color: "white" }}>{event.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
