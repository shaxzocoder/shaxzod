import React, { lazy } from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Speaking from "./Pages/Speaking/index";
const Playlist = lazy(() => import("./Pages/Playlist/index"));
import Home from "./Pages/Home/index";
import LinksToSocial from "./Pages/Social/index";
import Article from "./Pages/Articles";

const titleMap = [
  { path: "/", title: "Shaxzod - Blog" },
  { path: "/speaking", title: "Shaxzod - Speaking" },
  { path: "/social", title: "My Social medias" },
  { path: "/playlists", title: "My Social Playlist" },
];
const App = () => {
  const [pageTitle, setPageTitle] = useState("Home");
  const curLoc = useLocation();

  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/links" element={<LinksToSocial />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/articles" element={<Article/>} />
      </Routes>
    </div>
  );
};

export default App;
