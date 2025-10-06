import React from "react";
import starry_thumbnail from "../assets/starry-night/thumbnail.jpg";
import girl_with_pearl_thumbnail from "../assets/girl-with-pearl-earring/thumbnail.jpg";
import guernica_thumbnail from "../assets/guernica/thumbnail.jpg";
import penitent_thumbnail from "../assets/penitent-magdalene/thumbnail.jpg";
import the_storm_thumbnail from "../assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg";
import the_great_wave_thumbnail from "../assets/the-great-wave-off-kanagawa/thumbnail.jpg";
import van_gogh_self_thumbnail from "../assets/van-gogh-self-portrait/thumbnail.jpg";
import the_sleeping_thumbnail from "../assets/the-sleeping-gypsy/thumbnail.jpg";
import lady_with_ermine_thumbnail from "../assets/lady-with-an-ermine/thumbnail.jpg";
import the_night_cafe_thumbnail from "../assets/the-night-cafe/thumbnail.jpg";
import the_basket_of_apples_thumbnail from "../assets/the-basket-of-apples/thumbnail.jpg";
import the_boy_red_thumbnail from "../assets/the-boy-in-the-red-vest/thumbnail.jpg";
import arnolfini_thumbnail from "../assets/arnolfini-portrait/thumbnail.jpg";
import mona_lisa_thumbnail from "../assets/mona-lisa/thumbnail.jpg";
import the_swing_thumbnail from "../assets/the-swing/thumbnail.jpg";
import Masonry from "@mui/lab/Masonry";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-[80%] mx-auto mt-25 mb-15">
      <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
        <div className="relative mb-5">
          <Link to={"/starry-night"}>
            <img
              className="w-full h-auto"
              src={starry_thumbnail}
              alt="Starry Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold">Starry Night</p>
              <p className="text-xs text-white/70">Vincent Van Gogh</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-32"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/girl-with-pearl"}>
            <img
              className="w-full h-auto"
              src={girl_with_pearl_thumbnail}
              alt="Girl With Pearl Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold">
                Girl with a Pearl Earring
              </p>
              <p className="text-xs text-white/70">Johannes Vermeer</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-32"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/guernica"}>
            <img
              className="w-full h-auto"
              src={guernica_thumbnail}
              alt="Guenica Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold">Guernica</p>
              <p className="text-xs text-white/70">Pablo Picasso</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-32"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/penitent-magdalene"}>
            <img
              className="w-full h-auto"
              src={penitent_thumbnail}
              alt="Penitent thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold pr-5">
                Penitent Magdalene
              </p>
              <p className="text-xs text-white/70 mt-1">
                Artemisia Gentileschi
              </p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-32"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/the-storm-galilee"}>
            <img
              className="w-full h-auto"
              src={the_storm_thumbnail}
              alt="The Storm Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold">
                The Storm on the Sea of Galilee
              </p>
              <p className="text-xs text-white/70 mt-1">Rembrandt</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/the-great-wave"}>
            <img
              className="w-full h-auto"
              src={the_great_wave_thumbnail}
              alt="The Wave Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold">
                The Great Wave off Kanagawa
              </p>
              <p className="text-xs text-white/70 mt-1">Hokusai</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/van-gogh"}>
            <img
              className="w-full h-auto"
              src={van_gogh_self_thumbnail}
              alt="Van Gogh Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold">
                Van Gogh self-portrait
              </p>
              <p className="text-xs text-white/70 mt-1">Vincent van Gogh</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/the-sleeping"}>
            <img
              className="w-full h-auto"
              src={the_sleeping_thumbnail}
              alt="The Sleeping Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold pr-5">
                The Sleeping Gypsy
              </p>
              <p className="text-xs text-white/70 mt-1">Henri Rousseau</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/lady-with-ermine"}>
            <img
              className="w-full h-auto"
              src={lady_with_ermine_thumbnail}
              alt="Lady With Ermine Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold pr-5">
                Lady with an Ermin
              </p>
              <p className="text-xs text-white/70 mt-1">Leonardo da Vinci</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/the-night-cafe"}>
            <img
              className="w-full h-auto"
              src={the_night_cafe_thumbnail}
              alt="The Night Cafe Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold">The Night Cafe</p>
              <p className="text-xs text-white/70 mt-1">Vincent van Gogh</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/the-basket-apples"}>
            <img
              className="w-full h-auto"
              src={the_basket_of_apples_thumbnail}
              alt="The Basket of Apples"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold pr-5">
                The Basket of Apples
              </p>
              <p className="text-xs text-white/70 mt-1">Paul Cezanne</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/the-boy-red-vest"}>
            <img
              className="w-full h-auto"
              src={the_boy_red_thumbnail}
              alt="The Boy in the Red Vest"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold pr-7">
                The Boy in the Red Vest
              </p>
              <p className="text-xs text-white/70 mt-1">Edward Hopper</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/arnolfini"}>
            <img
              className="w-full h-auto"
              src={arnolfini_thumbnail}
              alt="Arnolfini Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold pr-7">
                Arnolfini Portrait
              </p>
              <p className="text-xs text-white/70 mt-1">Jan van Eyck</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/mona-lisa"}>
            <img
              className="w-full h-auto"
              src={mona_lisa_thumbnail}
              alt="Mona Lisa Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold">Mona Lisa</p>
              <p className="text-xs text-white/70 mt-1">Leonardo da Vinci</p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
        <div className="relative mb-5">
          <Link to={"/the-swing"}>
            <img
              className="w-full h-auto"
              src={the_swing_thumbnail}
              alt="The Swing Thumbnail"
            />
            <div className="absolute bottom-8 left-8 z-50">
              <p className="text-2xl text-white font-bold pr-7">The Swing</p>
              <p className="text-xs text-white/70 mt-1">
                Jean-Honorek Fragonard
              </p>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-52"></div>
          </Link>
        </div>
      </Masonry>
    </main>
  );
};

export default Home;
