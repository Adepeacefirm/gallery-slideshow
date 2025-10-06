import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  let title;
  let author;
  switch (pathname) {
    case "/starry-night":
      title = "Starry Night";
      author = "Vincent Van Gogh";
      break;

    case "/girl-with-pearl":
      title = "Girl with a Pearl Earring";
      author = "Johannes Vermeer";
      break;

    case "/guernica":
      title = "Guernica";
      author = "Pablo Picasso";
      break;

    case "/penitent-magdalene":
      title = "Penitent Magalene";
      author = "Artemisia Gentileschi";
      break;

    case "/the-storm-galilee":
      title = "The Storm on the Sea of Galilee";
      author = "Rembrandt";
      break;

    case "/the-great-wave":
      title = "The Great Wave off Kanagawa";
      author = "Hokusai";
      break;

    case "/van-gogh":
      title = "Van Gogh self-portrait";
      author = "Vincent van Gogh";
      break;

    case "/the-sleeping":
      title = "The Sleeping Gypsy";
      author = "Henri Rousseau";
      break;

    case "/lady-with-ermine":
      title = "Lady with an Ermin";
      author = "Leonardo da Vinci";
      break;

    case "/the-night-cafe":
      title = "The Night Cafe";
      author = "Vincent van Gogh";
      break;

    case "/the-basket-apples":
      title = "The Basket of Apples";
      author = "Paul Cezanne";
      break;

    case "/the-boy-red-vest":
      title = "The Boy in the Red Vest";
      author = "Edward Hopper";
      break;

    case "/arnolfini":
      title = "Arnolfini Portrait";
      author = "Jan van Eyck";
      break;

    case "/mona-lisa":
      title = "Mona Lisa";
      author = "Leonardo da Vinci";
      break;

    case "/the-swing":
      title = "The Swing";
      author = "Jean-Honorek Fragonard";
      break;

    default:
      title = null;
      author = null;
      break;
  }
  const routes = [
    "/",
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

  const navigate = useNavigate();
  const currentIndex = routes.indexOf(location.pathname);

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  const goNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const percentage = ((currentIndex + 1) / routes.length) * 100;
  const [progress, setProgress] = useState(percentage);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);
  return (
    title &&
    author && (
      <div className="sticky bottom-0 left-0 w-full bg-white z-[990]">
        <section className=" relative flex justify-between py-5 px-5 md:px-8 lg:px-12">
          <div>
            <p className="text-sm font-bold">{title}</p>
            <p className="text-[0.62rem] text-black/70">{author}</p>
          </div>
          <div className="flex items-center gap-5">
            <svg
              onClick={goPrev}
              className="text-black hover:text-black/20 w-5 cursor-pointer"
              viewBox="0 0 26 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="currentColor" fill="none">
                <path
                  d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                  strokeWidth="2"
                />
                <path d="M.986.5h-1v22.775h1z" />
              </g>
            </svg>
            <svg
              onClick={goNext}
              className="text-black w-5 cursor-pointer hover:text-black/20"
              viewBox="0 0 26 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="currentColor" fill="none">
                <path
                  d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                  strokeWidth="2"
                />
                <path d="M24.708.5h1v22.775h-1z" />
              </g>
            </svg>
          </div>
          <div
            style={{ width: `${progress}%` }}
            className="h-[2px] bg-black/30 absolute top-0 left-0 transition-all duration-700"
          ></div>
        </section>
      </div>
    )
  );
};

export default Footer;
