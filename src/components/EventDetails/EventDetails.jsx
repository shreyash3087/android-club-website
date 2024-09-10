import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { format, parse } from "date-fns";
import "./EventDetails.css";

const EventDetails = ({ eventsData }) => {
  const { eventId } = useParams();
  const event = eventsData.find((e) => e.id === eventId);
  console.log("Events data - ", event);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return <div>Event not found</div>;
  }
  
  const eventDate = parse(event.date, "dd/MM/yyyy", new Date());
  const eventTime = parse(event.time, "H:mm", new Date());

  return (
    <div className="event_details">
      <div className="gap"></div>
      <div className="event_details_container">
        <div className="main">
          <div className="poster">
            <img src={event.bannerURL} alt={event.name} />
          </div>
          <div className="content">
            <div className="title">{event.name}</div>
            <div className="description">{event.description}</div>
            <div className="other_details">
              <div className="text">
                <div className="venue">Venue: {event.location}</div>
                <div className="date">Date: {format(eventDate, "MMMM dd, yyyy")}</div>
                <div className="time">Time: {format(eventTime, "h:mm a")}</div>
              </div>
              {event.completion && (
                <img src="/Events_Page/complete.png" alt="Complete" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
