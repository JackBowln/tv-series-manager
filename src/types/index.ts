// lib/types.ts
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
