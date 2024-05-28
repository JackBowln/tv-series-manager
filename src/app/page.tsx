"use client"
import { ApolloProvider, useQuery } from '@apollo/client';
import client from '@/lib/graphql/apollo-client';
import { GET_EPISODE_BY_ID } from '@/lib/graphql/queries';
import { Episode } from '@/types';

const EpisodeComponent: React.FC<{ episodeId: string }> = ({ episodeId }) => {
  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: { episodeId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const episode: Episode = data.getEpisodeById;
  
  return (
    <div>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <p>Season: {episode.seasonNumber}, Episode: {episode.episodeNumber}</p>
      <p>Release Date: {episode.releaseDate}</p>
      <p>IMDB ID: {episode.imdbId}</p>
    </div>
  );
};

const Page: React.FC = () => (
  <ApolloProvider client={client}>
    <EpisodeComponent episodeId="1" />
  </ApolloProvider>
);

export default Page;
