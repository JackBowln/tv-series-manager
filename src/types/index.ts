export interface Episode {
  id: string;
  series: string;
  title: string;
  description: string;
  seasonNumber: number;
  episodeNumber: number;
  releaseDate: string;
  imdbId: string;
}

export interface EpisodeInput {
  id: string;
  series: string;
  title: string;
  description: string;
  seasonNumber: number;
  episodeNumber: number;
  releaseDate: string;
  imdbId: string;
}

export interface UpdateEpisodeInput {
  id: string;
  series: string;
  title: string;
  description: string;
  seasonNumber: number;
  episodeNumber: number;
  releaseDate: string;
  imdbId: string;
}

export interface Query {
  getEpisodeById: (episodeId: string) => Episode;
  listEpisodes: (search?: string) => Episode[];
}

export interface Mutation {
  createEpisode: (episode: EpisodeInput) => Episode;
  updateEpisode: (episode: UpdateEpisodeInput) => Episode;
  deleteEpisode: (episodeId: string) => string;
}

export interface Subscription {
  onCreateEpisode: Episode;
  onDeleteEpisode: string;
  onUpdateEpisode: Episode;
}

export interface OMDBEpisode {
  Title: string
  Year: string
  Rated: string
  Released: string
  Season: string
  Episode: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  seriesID: string
  Type: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}
