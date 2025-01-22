import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Favorites from './Pages/Favorites'
import SingleGif from './Pages/SingleGif'
import Category from './Pages/Category'
import Layout from './Layouts/Layout'



 const Router =  createBrowserRouter([

 {        element: <Layout/>,          

   children:[    
   { path: "/",
      element : <Home/>
   },
   {
    path: "/search/:query",
    element: <Search/>
   },
   {
    path: "/favorites",
    element: <Favorites/>
   },
   {
    path: "/:type/:slug",
     element : <SingleGif/>
   },
   {
    path: "/:category",
     element : <Category/>
   }
  

  ] 
  }   ])
function App() {
  return (
    <RouterProvider  router={Router} />
  )
}

export default App