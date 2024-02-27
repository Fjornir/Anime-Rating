import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { AnimePageDataType } from "../types/Index";
import Header from "../components/header";

function DetailedAnimePage() {
  const [anime, setAnime] = useState<AnimePageDataType>();
  const { id } = useParams();

  useEffect(() => {
    getAnime();
  }, []);

  async function getAnime() {
    let anime = await fetch(`http://localhost:8080/anime/${id}`);
    let animeJson = await anime.json();
    setAnime(animeJson);
  }

  return (
    <div className="detailed">
      {anime ? <div>hyi</div> : <div>penis</div>}
      <Header></Header>
      <div
        className="detailed-anime"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${anime?.bannerImage})`,
        }}
      >
        <div className="detailed-anime-wrapper">
          <img
            className="detailed-anime__image"
            src={anime?.poster.originalUrl}
            alt=""
          ></img>
          <div className="detailed-anime__title">
            {anime?.licenseNameRu ??
              anime?.russian ??
              anime?.english ??
              anime?.name}
          </div>
          <div className="detailed-anime__title">
            {anime?.english ??
              anime?.russian ??
              anime?.english ??
              anime?.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedAnimePage;
