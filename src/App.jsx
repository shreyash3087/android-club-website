import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Team from "./pages/Team/Team";
import About from "./pages/About/About";
import EventDetails from "./components/EventDetails/EventDetails";
import Footer from "./components/Footer/Footer";
import Blogs from "./pages/Blogs/Blogs";
import BlogreadPage from "./pages/Blogs/Read more/Blogreadpage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<BlogreadPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
