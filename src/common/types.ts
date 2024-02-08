export interface IndexAnimeType {
  id: number;
  siteUrl: string;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  coverImage: {
    medium: string;
    extraLarge: string;
    large: string;
  };
}

export interface ShowAnimeType {
  id: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  status:
    | "FINISHED"
    | "RELEASING"
    | "NOT_YET_RELEASED"
    | "CANCELLED"
    | "HIATUS";
  episodes: number;
  genres: string[];
  season: "SPRING" | "WINTER" | "SUMMER" | "FALL";
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  bannerImage: string;
}
