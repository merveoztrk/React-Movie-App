import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import UpComing from "./pages/UpComing";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import 'antd/dist/antd.css';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import './App.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/search/:term" element={<SearchResults />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
