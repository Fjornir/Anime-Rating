import { log } from "console";
import React from "react";
import { useEffect, useState } from "react";
import * as types from "../common/types";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Slider from "../components/slider";

function MainAnimePage() {
  const [animeList, setAnimeList] = useState<types.IndexAnimeType[]>([]);

  useEffect(() => {
    getAnimeList();
  }, []);

  async function getAnimeList() {
    let list = await fetch("http://localhost:8080/anime");
    let listJson = await list.json();
    setAnimeList(listJson);
  }
  return (
    <div className="main">
      <Header></Header>
      <Slider></Slider>
      <h3  className="main__title">Аниме</h3>
      <div className="main-wrapper">
        <ul className="main-list">
          {animeList.map((anime: types.IndexAnimeType) => (
            <li key={anime.id} className="main-list-item">
              <Link to={`anime/${anime.id}`} className="anime-card">
                <img
                  className="anime-card__image"
                  src={anime.coverImage.large}
                  alt={
                    anime.title.english ??
                    anime.title.romaji ??
                    anime.title.native
                  }
                />
                <div className="anime-card-name-wrapper">
                  <span className="anime-card-name-wrapper__title">
                    {anime.title.english ??
                      anime.title.romaji ??
                      anime.title.native}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainAnimePage;
