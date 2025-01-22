import React, { useContext, useEffect } from 'react'
import { GifContext } from '../Context/Context';
import Gif from '../Components/Gif';
import FilterGiff from '../Components/FilterGiff';


function Home() {
   const { gf,  gif, setgif, filter, setfilter, favorite, setfavorite } =
      useContext(GifContext);
      const fetchtrendinggif = async () => {
        try {
          const   {data : Gifdata}  = await gf.trending({
            limit: 20,
            type: filter,
            rating: "g",
          });
          setgif(Gifdata); // Ensure the correct variable is set here
          console.log(gif);
        } catch (error) {
          console.error("Error fetching GIFs:", error);
        }
      };
      
         useEffect(()=>{
           fetchtrendinggif()
           
         },[filter])
  return (
    <div>
      <img src="/banner.gif" alt="gif" className='mt-2 rounded w-full'/>

<FilterGiff showTrending/>

 <div className='columns-2 md:columns-3 lg:columns-4 gap-2 xl:columns-5'>

 {gif.map((gifItem) => (
   <Gif gif={gifItem} key={gifItem.id} />
  ))}
  </div>


    </div>

  )
}

export default Home