import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Spinner from "./components/Spinner";
import Header from "./components/DynamicHeader";
import Footer from "./components/DynamicFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Memberships from "./pages/Memberships";
import Schedules from "./pages/Facilities/Schedules";
import VirtualView from "./pages/Facilities/VirtualView";
import Activities from "./pages/Facilities/Activities";
import Gallery from "./pages/Facilities/Gallery";
import AppMobile from "./pages/AppMobile";
import Contact from "./pages/Contact";
import Leagues from "./pages/Leagues";
import ScrollTop from "./components/ScrollTop";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);


  
  return (
    <>
      <AnimatePresence>
        {loading && <Spinner />}
      </AnimatePresence>
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="facilities/schedules" element={<Schedules />} />
        <Route path="facilities/virtual-view" element={<VirtualView />} />
        <Route path="facilities/activities" element={<Activities />} />
        <Route path="facilities/gallery" element={<Gallery />} />
        <Route path="/app-mobile" element={<AppMobile />} />
        <Route path="/contact" element={<Contact />} />

         <Route path="/parque-espana-2" element={<Home />} />
         <Route path="/parque-espana-2/about" element={<About />} />
         <Route path="/parque-espana-2/leagues-of-interest" element={<Leagues />} />
        <Route path="/parque-espana-2/memberships" element={<Memberships />} />
        <Route path="/parque-espana-2/facilities/schedules" element={<Schedules />} />
        <Route path="/parque-espana-2/facilities/virtual-view" element={<VirtualView />} />
        <Route path="/parque-espana-2/facilities/gallery" element={<Gallery />} />
        <Route path="/parque-espana-2/app-mobile" element={<AppMobile />} />
        <Route path="/parque-espana-2/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
