import { motion } from "framer-motion";
import "./Events.css";
import Counter from "../../components/Counter/Counter";
import Calendar from "../../components/Calendar/Calendar";
import PastEvents from "../../components/PastEvents/PastEvents";
import React, { useState, useEffect, useCallback } from "react";
import Gallery from "../../components/Gallery/Gallery";
function Events() {
  const [upcomingEventTitle, setUpcomingEventTitle] = useState("Code-A-Thon");
  const [upcomingEventDesc, setUpcomingEventDesc] = useState(
    "Put your coding skills to test with code-a-thon"
  );
  const [upcomingEventFee, setUpcomingEventFee] = useState("$100");
  const [upcomingEventDate, setUpcomingEventDate] = useState("14/06/2024");
  const [upcomingEventVenue, setUpcomingEventVenue] = useState("Auditorium");

  //In case of an upcoming event make isUpcomingEvent true and put the details of the event above-

  const [isUpcomingEvent, setIsUpcomingEvent] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);

  const handleResize = useCallback(() => {
    const heroSection = document.querySelector(".hero_section");
    const mainIsland = document.querySelector(".main_island");
    const clouds = document.querySelectorAll(".clouds_img");
    const trees = document.querySelectorAll(".trees_img");
    const eventHighlights = document.querySelector(".events_highlights");

    if (window.innerWidth > window.innerHeight) {
      eventHighlights.style.height= "600px";
      heroSection.style.height = "100vh";
      mainIsland.style.width = "65%";
      trees.forEach((tree) => (tree.style.width = "20%"));
      clouds.forEach((cloud) => (cloud.style.width = "15%"));
    } else {
      eventHighlights.style.height= "100vh";
      heroSection.style.height = "75vh";
      mainIsland.style.width = "100%";
      trees.forEach((tree) => (tree.style.width = "30%"));
      clouds.forEach((cloud) => (cloud.style.width = "30%"));
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleSwipe = () => {
    setIsSwiped(!isSwiped);
  };

  return (
    <div>
      <div className="hero_section">
        <div className="event_title">Our Events</div>
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 50, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="main_island"
        >
          <motion.img
            src="/Events_Page/main_island.png"
            alt="main island"
            animate={{ translateY: ["-3%", "3%", "-3%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="background">
          <div className="clouds">
            <motion.img
              src="/Events_Page/cloud_01.png"
              alt="clouds"
              className="clouds_img"
              animate={{ translateX: ["-50%", "90%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src="/Events_Page/cloud_02.png"
              alt="clouds"
              className="clouds_img"
              animate={{ translateX: ["50%", "-90%", "50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="trees">
            <img
              src="/Events_Page/tree_01.png"
              alt="trees"
              className="trees_img"
            />
            <img
              src="/Events_Page/tree_02.png"
              alt="trees"
              className="trees_img"
            />
          </div>
        </div>
      </div>
      <div className="events_calendar">
        <div className="stats">
          <div className="stat_card">
            <div className="num_container">
              <Counter start_value={0} end_value={15} />+
            </div>
            Events
          </div>
          <div className="stat_card">
            <div className="num_container">
              <Counter start_value={0} end_value={5} />+
            </div>
            Hackathon
          </div>
          <div className="stat_card">
            <div className="num_container">
              <Counter start_value={1500} end_value={2000} />+
            </div>
            Participants
          </div>
          <div className="stat_card">
            <div className="num_container">
              <Counter start_value={50} end_value={100} />+
            </div>
            Volunteers
          </div>
          <div className="stat_card">
            ∞<br /> Learning & Enjoyment
          </div>
        </div>

        <div className="events_calendar_main">
          <motion.div
            initial={{ translateX: -100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="calendar"
          >
            <Calendar />
          </motion.div>
          <motion.div
            className="calendar_content"
            src="/Events_Page/upcoming_events.png"
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="calendar_content_title">Events Calendar</div>
            <div className="calendar_content_desc">
              Navigate through past and upcoming events with ease using the
              Events Calendar. Stay informed about all our exciting activities,
              from workshops and networking events to project showcases and
              more. Explore event dates, descriptions, and highlights, and make
              sure to mark your calendar so you don't miss out on any of the
              opportunities we have planned!
            </div>
          </motion.div>
        </div>
      </div>
      <div className="events">
        <div className={`upcoming_events ${isSwiped ? "swiped" : ""}`}>
          {!isSwiped && (
            <>
              <div className="upcoming_events_title">
                <img
                  src="/Events_Page/upcoming_events.png"
                  alt="upcoming events"
                />
                Upcoming Events
              </div>
              <div className="upcoming_events_content">
                <motion.div
                  className="upcoming_event_image"
                  initial={{ translateY: 500 }}
                  whileInView={{ translateY: 100 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src="/Events_Page/phone.png"
                    className="phone"
                    alt="phone"
                  />
                  <img
                    src={
                      isUpcomingEvent
                        ? "/Events_Page/demo_event.jpg"
                        : "/Events_Page/noevent.png"
                    }
                    className="upcoming_event_poster"
                    alt="event poster"
                  />
                  {isUpcomingEvent ? (
                    <button className="register_btn">Register Now</button>
                  ):<div className="no_event_text">Check Out Our Past Events</div>}
                </motion.div>

                <motion.div
                  className="upcoming_events_box"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {isUpcomingEvent ? (
                    <>
                      <div className="upcoming_event_name">
                        {upcomingEventTitle}
                      </div>
                      <div className="upcoming_event_desc">
                        {upcomingEventDesc}
                      </div>
                      <div className="upcoming_event_fee">
                        Registration Fee: {upcomingEventFee}
                      </div>
                      <div className="upcoming_event_date">
                        Date: {upcomingEventDate}
                      </div>
                      <div className="upcoming_event_venue">
                        Venue: {upcomingEventVenue}
                      </div>
                    </>
                  ) : (
                    <p>Oops! No upcoming events</p>
                  )}
                </motion.div>
                <img
                  src="/Events_Page/Swipe.png"
                  className="swipe_right"
                  onClick={handleSwipe}
                />
              </div>
            </>
          )}
          {isSwiped && (
            <div className="upcoming_event_switch_text" onClick={handleSwipe}>
              Click To See Upcoming Events
            </div>
          )}
        </div>
        <div className={`past_events ${isSwiped ? "expanded" : ""}`}>
          {!isSwiped && (
            <p className="past_event_switch_text" onClick={handleSwipe}>
              Click To See Past Events
            </p>
          )}
          {isSwiped && (
            <div className="past_event_content">
              <img
                src="/Events_Page/Swipe.png"
                className="swipe_left"
                onClick={handleSwipe}
              />
              <PastEvents/>
            </div>
          )}
        </div>
      </div>
      <div className="events_highlights_title">Events Highlights</div>
      <div className="events_highlights">
        <Gallery/>
      </div>
    </div>
  );
}

export default Events;
