import React, { useEffect, useState } from "react";
import starry_hero_small from "../assets/starry-night/hero-small.jpg";
import starry_hero_large from "../assets/starry-night/hero-large.jpg";
import starry_hero_artist from "../assets/starry-night/artist.jpg";
import icon_view_image from "../assets/shared/icon-view-image.svg";

const StarryNight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div>
      <main className="w-[85%] mx-auto mt-25 sm:mt-30 mb-15 flex flex-col lg:flex-row sm:items-center gap-5 sm:gap-20">
        <section className="sm:flex sm:items-start">
          <div className="relative z-1 sm:w-[100%]">
            <picture onClick={openModal}>
              <source media="(min-width: 640px)" srcSet={starry_hero_large} />
              <img
                className="cursor-pointer"
                src={starry_hero_small}
                alt="starry small image"
              />
            </picture>
            <div className="bg-black absolute top-3 sm:top-auto sm:bottom-3 left-3 flex justify-center gap-2 items-center text-white w-[9rem]">
              <img src={icon_view_image} alt="View Image Icon" />
              <p className="text-[0.6rem] p-2 tracking-widest cursor-pointer">
                VIEW IMAGE
              </p>
            </div>
          </div>
          <div className="w-[80%] sm:w-[50%] flex flex-col -mt-10 sm:-mt-0 lg:gap-55 relative z-50 bg-white">
            <div className="bg-white p-5 sm:px-10 sm:pt-0 sm:-ml-50 lg:-ml-20 sm:-mt-1">
              <h1 className="text-xl sm:text-6xl font-bold">Starry Night</h1>
              <p className="text-xs sm:my-6 text-grey400">Vincent Van Gogh</p>
            </div>
            <img
              className="w-[20%] sm:w-[55%] ml-2 sm:ml-8"
              src={starry_hero_artist}
              alt="starry artist"
            />
          </div>
        </section>
        <section className="flex flex-col gap-20 sm:w-[70%] sm:mx-auto relative">
          <p className="absolute -top-14 right-0 sm:right-auto sm:-left-30 lg:left-auto flex justify-center items-center select-none pointer-events-none text-8xl sm:text-[10rem] font-bold text-black/5">
            1889
          </p>
          <p className="text-sm text-grey400 leading-6 font-bold">
            Although The Starry Night was painted during the day in Van Gogh's
            ground-floor studio, it would be inaccurate to state that the
            picture was painted from memory. The view has been identified as the
            one from his bedroom window, facing east, a view which Van Gogh
            painted variations of no fewer than twenty-one times, including The
            Starry Night. "Through the iron-barred window," he wrote to his
            brother, Theo, around 23 May 1889, "I can see an enclosed square of
            wheat ... above which, in the morning, I watch the sun rise in all
            its glory."
          </p>
          <p className="text-[0.6rem] sm:text-[0.7rem] text-grey400 cursor-pointer">
            GO TO SOURCE
          </p>
        </section>
      </main>
      {isOpen && (
        <div className="fiex fixed left-0 right-0 bottom-0 pt-10 z-[999] bg-black/90 h-screen">
          <div onClick={closeModal} className="w-[80%] mx-auto">
            <div className="text-right text-white mb-5">
              <button
                className="cursor-pointer"
                onClick={closeModal}
                type="button"
              >
                CLOSE
              </button>
            </div>
            <div>
              <picture>
                <source media="(min-width: 640px)" srcSet={starry_hero_large} />
                <img
                  className="w-[80%] mx-auto max-h-[80vh] cursor-pointer"
                  src={starry_hero_small}
                  alt="Starry Large"
                />
              </picture>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarryNight;
