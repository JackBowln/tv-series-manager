import type { EpisodeInput, UpdateEpisodeInput } from '@/types/index';
import { gql } from '@apollo/client';

export const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($episodeId: String!) {
    getEpisodeById(episodeId: $episodeId) {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;

export const LIST_EPISODES = gql`
  query ListEpisodes($search: String = "") {
    listEpisodes(search: $search) {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;

export const CREATE_EPISODE = gql`
  mutation CreateEpisode($episode: EpisodeInput!) {
    createEpisode(episode: $episode) {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;

export const UPDATE_EPISODE = gql`
  mutation UpdateEpisode($episode: UpdateEpisodeInput!) {
    updateEpisode(episode: $episode) {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;

export const DELETE_EPISODE = gql`
  mutation DeleteEpisode($episodeId: String!) {
    deleteEpisode(episodeId: $episodeId)
  }
`;

export const ON_CREATE_EPISODE = gql`
  subscription OnCreateEpisode {
    onCreateEpisode {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;

export const ON_DELETE_EPISODE = gql`
  subscription OnDeleteEpisode {
    onDeleteEpisode
  }
`;

export const ON_UPDATE_EPISODE = gql`
  subscription OnUpdateEpisode {
    onUpdateEpisode {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;
