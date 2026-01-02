import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout';
import AboutUs from "./pages/AboutUs/AboutUs";
import Events from './pages/Events/Events';
import EventDetails from './pages/Events/EventDetails';
import OurTeam from './pages/OurTeam/OurTeam';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<AboutUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="team" element={<OurTeam />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
