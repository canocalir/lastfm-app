import { useInfiniteQuery } from "react-query";

import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { TopArtistListContainer } from "./TopArtistList.styled";

const fetchTopArtists = async ({ pageParam = 1 }) => {
  const url = `${process.env.REACT_APP_LASTFM_BASE_URL}/?method=chart.gettopartists&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json&page=${pageParam}&limit=5`;
  const res = await fetch(url);
  return res.json();
};

const TopArtistList = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["topartists"], fetchTopArtists, {
    getNextPageParam: (lastPage) => {
      return Number(lastPage?.artists["@attr"].page + 1);
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <TopArtistListContainer>
        {data?.pages?.map((page) =>
          page?.artists?.artist?.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))
        )}
      </TopArtistListContainer>
      <div className="btn-container">
        <button onClick={fetchNextPage}>Load More</button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default TopArtistList;
