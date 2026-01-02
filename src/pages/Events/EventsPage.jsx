import EventCard from "../../components/EventCard/EventCard";
import events from "./event";
import "./EventsPage.css";

const EventsPage = () => {
  return (
    <section className="events-page">
      <section className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </section>
  );
};

export default EventsPage;
