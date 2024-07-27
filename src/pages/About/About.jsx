import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs'
import "./ContactUs.css";
import "boxicons";

const About = () => {
  return (
    <div className="page">
      <h1 className="title" id='head'>About Android Club</h1>

      <div className="About-section">
      
        <p className="About-para">
          From Enthusiasts to Innovators. Founded in 2017, the Android club has
          quickly grown to become one of the biggest and most prominent clubs in
          VIT Bhopal. Our growing community, which fosters diversity, inclusion,
          and belonging, has nurtured many talented individuals and conducted
          thrilling events with an eye for Android development. Want to know
          more, check out our socials!
          <span className="social-icons">
            <a href="#">
              <box-icon type="logo" name="instagram"></box-icon>
            </a>
            <a href="#">
              <box-icon type="logo" name="linkedin"></box-icon>
            </a>
          </span>
        </p>
        <img
          src="/About_page_assets/android_people Background Removed.png"
          alt="Android Club People"
        ></img>
      </div>

      <div className="Faculty-section">
        <h1 className="title">Faculty Cooridnator</h1>
        <img
          src="/About_page_assets/Ganesan_C.jpeg"
          alt="Faculy"
        ></img>
        <p className="About-para speech left">
          The Faculty Coordinator of the Android Club <b>Prof G Ganeshan</b> guiding us with
          with every inch of his support.
        </p>
      </div>
      <div className="Our-story">
        <h1 className="title">Our Story</h1>
        <p className="About-para">
          In 2017, the Android Club was established at VIT Bhopal by Abhay Nigam
          from the '17 batch, with early members like Toshin Ghosh, Rohan
          Sarkar, and Tamanna Kapoor joining one by one. Initially, we faced
          challenges organizing events without formal backing, but our passion
          for Android development and the guidance of senior mentors kept us
          going. Hackathons quickly became our hallmark, attracting students
          eager to learn app develop and compete. Under the leadership of
          Abhinav from the '20 batch and Harsh from the '21 batch, we expanded
          our scope within mobile technology to include backend development, ML
          integration, and IoT applications. Regular seminars by experienced
          seniors equipped our members with the knowledge and confidence to
          excel in hackathons and coding competitions. As we continue to grow,
          the Android Club remains committed to fostering creativity, knowledge,
          and leadership in mobile technology. We promise even greater
          achievements, setting new milestones and pushing boundaries in Android
          development. By adapting to the latest trends, we ensure our members
          are well-prepared for the dynamic field of mobile technology.
        </p>
      </div>
      <div className="Mission-section">
      <h1 className="title">Mission, Vision and Goals</h1>
      <div className="content-wrapper">
      <div className="mission-card">
      <h2>Mission</h2>
      <p className="About-para">Our mission is to create an inclusive and innovative community that nurtures the passion for Android development among students.</p>
      </div>
      <div className="vision-card">
      <h2>Vision</h2>
      <p className="About-para">We envision a future where every member is equipped with the skills and knowledge to excel in the field of mobile technology.</p>
      </div>
      <div className="goals-card">
      <h2>Goals</h2>
      <p className="About-para">Our goals include providing hands-on experience through workshops and hackathons, fostering collaboration and mentorship among members, and staying at the forefront of technological advancements.</p>
      <p className="About-para">By promoting a culture of continuous learning and creativity, we aim to empower our members to become leaders and innovators in the tech industry.</p>
      </div>
      </div>
      </div>
  
    <div>
     <ContactUs/>
    </div>
    </div>
  );
}

export default About;
