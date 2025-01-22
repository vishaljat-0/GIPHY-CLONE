import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifContext } from "../Context/Context";
import Search from "../Pages/Search";
import GifSearch from "./GifSearch";
import Favorites from "../Pages/Favorites";

function Header() {
  const [category, setcategory] = useState([]);
  const [showcategory, setshowcategory] = useState(false);
  const { gf, data, gif, setgif, filter, setfilter, favorite, setfavorite } =
    useContext(GifContext);

  const fetchingCategory = async () => {
    try {
      const { data } = await gf.categories();
      setcategory(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  console.log(category);
  

  useEffect(() => {
    fetchingCategory();
  }, []);

  return (
    <nav>
      <div className="relative flex justify-between gap-4 items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        {/* Rendering category */}

        <div className="font-bold text-md flex gap-5 items-center">
          {category?.slice(10, 15)?.map((category) => {
            return (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 gap-5 hover:gradient border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            );
          })}

          <button onClick={() => setshowcategory(!showcategory)}>
            <PiDotsThreeOutlineVerticalFill
              size={35}
              className="py-0.5 hover:gradient border-b-4 hidden lg:block"
            />
          </button>
          {Favorites.length > 0 && (
            <div className="bg-gray-700 h-9 pt-1.5 px-6  cursor-pointer rounded">
              <Link to="/Favorites"> Favorites Gifs </Link>
            </div>
          )}

          <button>
            {" "}
            <HiMiniBars3BottomRight
              size={30}
              className="text-sky-400   block lg:hidden"
            />{" "}
          </button>
        </div>
        {showcategory && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold ">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {category.map((category) => {
              return (
                  <Link to={`/${category.name_encoded}`} className="font-bold "> {category.name} </Link>
                );
              })}
              </div>
          </div>
        )}
      </div>
     < GifSearch />   </nav>
  );
}

export default Header;
