import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import StarryNight from "./components/StarryNight";
import Footer from "./components/Footer";
import GirlWithPearl from "./components/GirlWithPearl";
import Guernica from "./components/Guernica";
import PenitentMagalene from "./components/PenitentMagalene";
import TheStormGalilee from "./components/TheStormGalilee";
import TheGreatWave from "./components/TheGreatWave";
import VanGogh from "./components/VanGogh";
import TheSleeping from "./components/TheSleeping";
import LadyWithErmine from "./components/LadyWithErmine";
import TheNightCafe from "./components/TheNightCafe";
import TheBasketApples from "./components/TheBasketApples";
import TheByRedVest from "./components/TheByRedVest";
import Arnolfini from "./components/Arnolfini";
import MonaLisa from "./components/MonaLisa";
import TheSwing from "./components/TheSwing";
import { AnimatePresence, motion } from "framer-motion";
import PageAnimation from "./components/PageAnimation";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageAnimation>
                <Home />
              </PageAnimation>
            }
          />
          <Route
            path="/starry-night"
            element={
              <PageAnimation>
                <StarryNight />
              </PageAnimation>
            }
          />
          <Route
            path="/girl-with-pearl"
            element={
              <PageAnimation>
                <GirlWithPearl />
              </PageAnimation>
            }
          />
          <Route
            path="/guernica"
            element={
              <PageAnimation>
                <Guernica />
              </PageAnimation>
            }
          />
          <Route
            path="/penitent-magdalene"
            element={
              <PageAnimation>
                <PenitentMagalene />
              </PageAnimation>
            }
          />
          <Route
            path="/the-storm-galilee"
            element={
              <PageAnimation>
                <TheStormGalilee />
              </PageAnimation>
            }
          />
          <Route
            path="/the-great-wave"
            element={
              <PageAnimation>
                <TheGreatWave />
              </PageAnimation>
            }
          />
          <Route
            path="/van-gogh"
            element={
              <PageAnimation>
                <VanGogh />
              </PageAnimation>
            }
          />
          <Route
            path="/the-sleeping"
            element={
              <PageAnimation>
                <TheSleeping />
              </PageAnimation>
            }
          />
          <Route
            path="/lady-with-ermine"
            element={
              <PageAnimation>
                <LadyWithErmine />
              </PageAnimation>
            }
          />
          <Route
            path="/the-night-cafe"
            element={
              <PageAnimation>
                <TheNightCafe />
              </PageAnimation>
            }
          />
          <Route
            path="/the-basket-apples"
            element={
              <PageAnimation>
                <TheBasketApples />
              </PageAnimation>
            }
          />
          <Route
            path="/the-boy-red-vest"
            element={
              <PageAnimation>
                <TheByRedVest />
              </PageAnimation>
            }
          />
          <Route
            path="/arnolfini"
            element={
              <PageAnimation>
                <Arnolfini />
              </PageAnimation>
            }
          />
          <Route
            path="/mona-lisa"
            element={
              <PageAnimation>
                <MonaLisa />
              </PageAnimation>
            }
          />
          <Route
            path="/the-swing"
            element={
              <PageAnimation>
                <TheSwing />
              </PageAnimation>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
