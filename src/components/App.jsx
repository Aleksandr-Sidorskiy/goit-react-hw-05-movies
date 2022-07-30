import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import React from "react";
import HomeViews from "views/HomeViews";
import MoviesViews from "views/MoviesViews";
import NotFoundView from "views/NotFoundView";

const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeViews/>} />
        <Route path="movies" element={<MoviesViews />} />  
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
};

export default App;
