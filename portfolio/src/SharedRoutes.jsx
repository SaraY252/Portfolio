import React from 'react';
import Home from "./Pages/Home/Home";
import Blog from './Pages/Blog/Blog';
import BlogSingle from './Pages/BlogSingle/BlogSingle';
import Award from "./Pages/Award/Award";
import Contact from "./Pages/Contact/Contact";

import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
const SharedRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/blog/*' element={<Blog />} />
      <Route path='/blogsingle/*' element={<BlogSingle />} />
      <Route path='/award/*' element={<Award />} />
      <Route path='/contact/*' element={<Contact />} />
    </Routes>
    </>
  )
}

export default SharedRoutes