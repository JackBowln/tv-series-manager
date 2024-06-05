import useFetch from '@/hooks/useFetch';
import { OMDBEpisode } from '@/types';

const useGetEpisode = (id: string) => {

  return useFetch<OMDBEpisode>(process.env.NEXT_PUBLIC_OMDB_URL + "?apikey=" + process.env.NEXT_PUBLIC_OMDB_API_KEY + "&i=" + id)
};

export default useGetEpisode;
