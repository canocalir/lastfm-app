import { useInfiniteQuery } from "react-query";

const fetchTopArtists = async ({ pageParam = 1 }) => {
    try {
      const url = `${process.env.REACT_APP_LASTFM_BASE_URL}/?method=chart.gettopartists&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json&page=${pageParam}&limit=5`;
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.log(error)
    }
  };
  
export const useFetchTopArtists = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["topartists"], fetchTopArtists, {
    getNextPageParam: (lastPage) => {
      return Number(lastPage?.artists?.["@attr"].page + 1);
    },
  });
  return {isLoading, isError, error, data, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage, isSuccess}
}