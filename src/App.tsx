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
import PrivacyNotice from "./pages/PrivacyNotice";
import Leagues from "./pages/Leagues";
import ScrollTop from "./components/ScrollTop";
import Welcome from "./components/Welcome";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Si estamos en la raíz '/', es la pantalla de Bienvenida
  const isWelcomePage = location.pathname == "/";

  return (
    <>
      <AnimatePresence>
        {loading && <Spinner />}
      </AnimatePresence>

      {/* Solo renderiza Header, ScrollTop y Footer fuera de la pantalla de bienvenida */}
      {!isWelcomePage && <Header />}
      {!isWelcomePage && <ScrollTop />}

      <Routes>
        {/* PANTALLA INICIAL DE SELECCIÓN */}
        <Route path="/" element={<Welcome />} />

        {/* RUTAS PARQUE ESPAÑA I */}
        <Route path="/parque-espana-1" element={<Home />} />
        <Route path="/parque-espana-1/about" element={<About />} />
        <Route path="/parque-espana-1/memberships" element={<Memberships />} />
        <Route path="/parque-espana-1/facilities/schedules" element={<Schedules />} />
        <Route path="/parque-espana-1/facilities/virtual-view" element={<VirtualView />} />
        <Route path="/parque-espana-1/facilities/activities" element={<Activities />} />
        <Route path="/parque-espana-1/facilities/gallery" element={<Gallery />} />
        <Route path="/parque-espana-1/app-mobile" element={<AppMobile />} />
        <Route path="/parque-espana-1/contact" element={<Contact />} />
        <Route path="/parque-espana-1/privacy-notice" element={<PrivacyNotice />} />

        {/* RUTAS PARQUE ESPAÑA II */}
        <Route path="/parque-espana-2" element={<Home />} />
        <Route path="/parque-espana-2/about" element={<About />} />
        <Route path="/parque-espana-2/leagues-of-interest" element={<Leagues />} />
        <Route path="/parque-espana-2/memberships" element={<Memberships />} />
        <Route path="/parque-espana-2/facilities/schedules" element={<Schedules />} />
        <Route path="/parque-espana-2/facilities/virtual-view" element={<VirtualView />} />
        <Route path="/parque-espana-2/facilities/gallery" element={<Gallery />} />
        <Route path="/parque-espana-2/app-mobile" element={<AppMobile />} />
        <Route path="/parque-espana-2/contact" element={<Contact />} />
        <Route path="/parque-espana-2/privacy-notice" element={<PrivacyNotice />} />
      </Routes>

      {!isWelcomePage && <Footer />}
    </>
  );
}

export default App;