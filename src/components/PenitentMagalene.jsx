import React, { useEffect, useState } from "react";
import icon_view_image from "../assets/shared/icon-view-image.svg";
import penitent_small from "../assets/penitent-magdalene/hero-small.jpg";
import penitent_large from "../assets/penitent-magdalene/hero-large.jpg";
import penitent_artist from "../assets/penitent-magdalene/artist.jpg";

const PenitentMagalene = () => {
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
              <source media="(min-width: 640px)" srcSet={penitent_large} />
              <img
                className="cursor-pointer"
                src={penitent_small}
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
          <div className="w-[80%] sm:w-[50%] flex flex-col -mt-10 sm:-mt-0 lg:gap-70 relative z-50 bg-white">
            <div className="bg-white p-5 sm:px-10 sm:pt-0 sm:-ml-50 lg:-ml-20 sm:-mt-1">
              <h1 className="text-xl sm:text-6xl lg:text-4xl font-bold pr-5">
                Penitent Magalene
              </h1>
              <p className="text-xs sm:my-6 text-grey400">
                Artemisia Gentileschi
              </p>
            </div>
            <img
              className="w-[20%] sm:w-[55%] ml-2 sm:ml-8"
              src={penitent_artist}
              alt="starry artist"
            />
          </div>
        </section>
        <section className="flex flex-col gap-20 sm:w-[70%] sm:mx-auto relative">
          <p className="absolute -top-14 right-0 sm:right-auto sm:-left-30 lg:left-auto flex justify-center items-center select-none pointer-events-none text-8xl sm:text-[10rem] font-bold text-black/5">
            1625
          </p>
          <p className="text-xs text-grey400 leading-6 font-bold px-3.5 sm:px-6 lg:px-10">
            Penitent Magdalene is a painting by the Italian artist Artemisia
            Gentileschi. It hangs in Seville Cathedral. It has probably been in
            the cathedral since the late 17th century. The painting's first home
            was the collection of Fernando Enriquez Afan de Ribera, from 1626 to
            1637. She returned to the subject later in the 1620s in Mary
            Magdalene as Melancholy.
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
                <source media="(min-width: 640px)" srcSet={penitent_large} />
                <img
                  className="w-[80%] mx-auto max-h-[80vh] cursor-pointer"
                  src={penitent_small}
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

export default PenitentMagalene;
