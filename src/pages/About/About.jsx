import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs'

import "boxicons";
import "./ContactUs.css"

const About = () => {
  return (
    <>
      <div className="page">
        <h1 className="title pt-28 sm:text-2xl md:text-5xl">Tracing Our Roots</h1>
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
            src="AboutPage_Assets/android_people Background Removed.png"
            alt="Android Club People"
          ></img>
        </div>

        <div className="Faculty-section flex flex-col">
          <h1 className="title">Faculty Cooridnator</h1>
          <div className='set-col flex sm:flex-col md:flex-row justify-center items-center gap-10'>
            <img
              src="AboutPage_Assets/GanesanSir_C.jpeg"
              alt="Faculty"
              className='h-64 w-2/5 rounded-lg'
            />
            <p className="About-para speech left">
              The Faculty Coordinator of the Android Club plays a pivotal role in
              bridging the gap between students and faculty, fostering a
              collaborative environment where innovative ideas can flourish. This
              section highlights the invaluable contributions of our Faculty
              Coordinator, who brings a wealth of experience and expertise to guide
              the club's activities. Their mentorship ensures that projects are
              aligned with academic standards and industry trends, providing
              students with insights that enhance their technical skills and
              professional growth. By facilitating workshops, overseeing projects,
              and providing continuous support, the Faculty Coordinator is
              instrumental in nurturing the next generation of Android developers
              and leaders
            </p>
          </div>
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
          <h1 className="title">Mission , Vision and Goals</h1>
          <p className="About-para">
            {" "}
            Our mission is to create an inclusive and innovative community that
            nurtures the passion for Android development among students. We
            envision a future where every member is equipped with the skills and
            knowledge to excel in the field of mobile technology. Our goals
            include providing hands-on experience through workshops and
            hackathons, fostering collaboration and mentorship among members, and
            staying at the forefront of technological advancements. By promoting a
            culture of continuous learning and creativity, we aim to empower our
            members to become leaders and innovators in the tech industry.
          </p>
        </div>
      </div>
      <ContactUs />
    </>
  );
}

export default About;
