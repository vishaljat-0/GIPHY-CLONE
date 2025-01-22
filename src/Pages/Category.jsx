import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Followon from "../Components/Followon";
import Gif from "../Components/Gif";
import { GifContext } from "../Context/Context";
// import Gif from "../components/gif";

const Category = () => {
  const [searchResults, setSearchResults] = useState([]);
   const { gf } =
      useContext(GifContext);
      const { category } = useParams();
      const decodedCategory = decodeURIComponent(category);
      console.log(decodedCategory);
      

//   const {category} = useParams();
// console.log(category);

  const fetchSearchResults = async () => {
    const {data} = await gf.gifs(category, category);

    setSearchResults(data);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [category]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {searchResults.length > 0 && <Gif gif={searchResults[0]} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me!
        </span>
        <Followon />
        <div className="w-full h-0.5 mt-6 bg-gray-800" />
      </div>
      <div>
        <h2 className="text-4xl pb-1 font-extrabold capitalize">
          {category.split("-").join(" & ")} GIFs
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
        @{decodedCategory ? category : ""}
        </h2>

        {searchResults.length > 0 && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {searchResults.slice(1).map((gif) => (
              <Gif gif={gif} key={gif.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;