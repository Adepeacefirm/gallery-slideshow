import React, { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [slideshow, setSlideshow] = useState(false);
  const routes = [
    "/starry-night",
    "/guernica",
    "/penitent-magdalene",
    "/the-storm-galilee",
    "/the-great-wave",
    "/van-gogh",
    "/the-sleeping",
    "/lady-with-ermine",
    "/the-night-cafe",
    "/the-basket-apples",
    "/the-boy-red-vest",
    "/arnolfini",
    "/mona-lisa",
    "/the-swing",
  ];
  const currentIndex = routes.indexOf(location.pathname);

  useEffect(() => {
    if (slideshow) {
      const timer = setTimeout(() => {
        const nextIndex =
          currentIndex < routes.length - 1 ? currentIndex + 1 : 0;
        navigate(routes[nextIndex]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [slideshow, currentIndex, navigate]);

  return (
    <header className="border-b border-b-[hsl(0,0%,85%)] fixed top-0 left-0 w-full bg-white z-[990] mb-20">
      <div className="flex justify-between items-center w-[90%] mx-auto my-5">
        <div className="w-[50%]">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="w-[clamp(3rem,70%,8rem)] cursor-pointer"
            src={logo}
            alt="logo"
          />
        </div>
        <div
          onClick={() => setSlideshow((prev) => !prev)}
          className="w-[50%] text-[0.6rem] tracking-wider text-right font-medium text-grey400 cursor-pointer"
        >
          <p>{slideshow ? "STOP SLIDESHOW" : "START SLIDESHOW"}</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
