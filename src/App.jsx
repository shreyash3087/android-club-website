import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Team from './pages/Team/Team';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Blogs from './pages/Blogs/Blogs';
import BlogreadPage from './pages/Blogs/Read more/Blogreadpage';
import Loader from './components/Loader/Loader';
import PopupBanner from './components/PopupBanner/PopupBanner';
import './App.css';
import EventDetails from './components/EventDetails/EventDetails';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';
import Registrations from './pages/Registrations/Registrations';
import E66d1839eb4140cd9a8a05aea9aaf570 from './pages/Admin/e66d1839eb4140cd9a8a05aea9aaf570';
function App() {
  const [slideUp, setSlideUp] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  const [showPopup, setShowPopup] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true);
      setShowPopup(true); 
      document.body.classList.remove('no-scroll');
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(firestore, 'events');
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsArray = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEventsData(eventsArray);
    };

    fetchEvents();
  }, []);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app">
      <Loader slideUp={slideUp} />
      <Navbar />
      {showPopup && <PopupBanner onClose={handleClosePopup} />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events eventsData={eventsData} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<BlogreadPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/registrations" element={<Registrations eventsData={eventsData} />} />
        <Route path="/events/:eventId" element={<EventDetails eventsData={eventsData} />} />
        <Route path="/e66d1839eb4140cd9a8a05aea9aaf570" element={<E66d1839eb4140cd9a8a05aea9aaf570 eventsData={eventsData} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
