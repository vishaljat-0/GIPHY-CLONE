import React, { createContext, Provider, useEffect, useState } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api';




export const GifContext = createContext()
function Context(props) {
   const gf= new GiphyFetch('YG2lGfPs2RDQk19lx1EpXOmpyUFYxKsR')
   const [filter, setfilter] = useState(('gifs'))
   const [gif, setgif] = useState([])
   const [favorites, setFavorites] = useState([]);
   useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
    setFavorites(favorites);
  }, []);

  const addToFavorites = (id) => {
    console.log(id);
    if (favorites.includes(id)) {
      // If the item is already in favorites, remove it
      const updatedFavorites = favorites.filter((itemId) => itemId !== id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } else {
      // If the item is not in favorites, add it
      const updatedFavorites = [...favorites];
      updatedFavorites.push(id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };

   return (
    <GifContext.Provider value={{gf,gif, setgif, filter,addToFavorites, setfilter, favorites, setFavorites}}>

     { props.children}
    </GifContext.Provider>
  )
}

export default Context