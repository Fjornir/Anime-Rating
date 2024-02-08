import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as types from "../common/types";

function DetailedAnimePage() {
  const [anime, setAnime] = useState<types.ShowAnimeType>();
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
    <div className="anime">
      <div>
        <img src={anime?.coverImage.large} alt=""></img>
      </div>
      <div>{anime?.title.english ?? anime?.title.romaji ?? anime?.title.native}</div>
    </div>
  );
}

export default DetailedAnimePage;
