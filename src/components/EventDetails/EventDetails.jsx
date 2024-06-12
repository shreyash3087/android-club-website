import React from "react";
import { useParams } from "react-router-dom";
import eventsData from "./EventsData.js";
import "./EventDetails.css";
const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event_details">
      <div className="gap"></div>
      <div className="event_details_container">
        <div className="main">
          <div className="poster">
            <img src={event.posterUrl} alt={event.title} />
          </div>
          <div className="content">
            <div className="title">{event.title}</div>
            <div className="description">{event.description}</div>
            <div className="other_details">
              <div className="text">
                <div className="venue">Venue: {event.venue}</div>
                <div className="date">Date: {event.date}</div>
                <div className="time">Time: {event.time}</div>
              </div>
              <img src="/Events_Page/complete.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
