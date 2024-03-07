import Main from "./componenets/Main";
import Footer from "./componenets/Footer";
import AboutPage from "./pages/AboutPage";
import SchedulePage from "./pages/SchedulePage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import Monday from "./componenets/Monday";
import Tuesday from "./componenets/Tuesday";
import Wednesday from "./componenets/Wednesday";
import Thursday from "./componenets/Thursday";
import Friday from "./componenets/Friday";
import Saturday from "./componenets/Saturday";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./componenets/NavBar";

// Component ScrollToTopOnNavigate to reset the scroll
function ScrollToTopOnNavigate() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Resets the scroll to the top of the page when changing routes.
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ScrollToTopOnNavigate />
        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />}>
            <Route index element={<Monday />} />
            <Route path="monday" element={<Monday />} />
            <Route path="tuesday" element={<Tuesday />} />
            <Route path="wednesday" element={<Wednesday />} />
            <Route path="thursday" element={<Thursday />} />
            <Route path="friday" element={<Friday />} />
            <Route path="saturday" element={<Saturday />} />
          </Route>
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
