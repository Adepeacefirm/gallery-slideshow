import React, { useEffect, useState } from "react";
import icon_view_image from "../assets/shared/icon-view-image.svg";
import lady_with_ermine_small from "../assets/lady-with-an-ermine/hero-small.jpg";
import lady_with_ermine_large from "../assets/lady-with-an-ermine/hero-large.jpg";
import lady_with_ermine_artist from "../assets/lady-with-an-ermine/artist.jpg";

const LadyWithErmine = () => {
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
              <source
                media="(min-width: 640px)"
                srcSet={lady_with_ermine_large}
              />
              <img
                className="cursor-pointer"
                src={lady_with_ermine_small}
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
              <h1 className="text-xl sm:text-5xl lg:text-3xl font-bold pr-4 sm:pr-3 lg:pr-0">
                 Lady with an Ermin
              </h1>
              <p className="text-xs sm:my-6 text-grey400">Leonardo da Vinci</p>
            </div>
            <img
              className="w-[20%] sm:w-[55%] ml-2 sm:ml-8"
              src={lady_with_ermine_artist}
              alt="starry artist"
            />
          </div>
        </section>
        <section className="flex flex-col gap-20 sm:w-[70%] sm:mx-auto relative">
          <p className="absolute -top-14 right-0 sm:right-auto sm:-left-30 lg:left-auto flex justify-center items-center select-none pointer-events-none text-8xl sm:text-[10rem] font-bold text-black/5">
            1489
          </p>
          <p className="text-xs text-grey400 leading-6 font-bold px-5 sm:px-6.5 lg:px-8">
           The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa.
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
                <source
                  media="(min-width: 640px)"
                  srcSet={lady_with_ermine_large}
                />
                <img
                  className="w-[80%] mx-auto max-h-[80vh] cursor-pointer"
                  src={lady_with_ermine_small}
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

export default LadyWithErmine;
