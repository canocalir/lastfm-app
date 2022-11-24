import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";

import ArtistCard from "../../components/ArtistCard/ArtistCard";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import { TopArtistListContainer } from "./TopArtistList.styled";

const TopArtistList = () => {
  const fetchTopArtists = async ({ pageParam = 1 }) => {
    const url = `${process.env.REACT_APP_LASTFM_BASE_URL}/?method=chart.gettopartists&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json&page=${pageParam}&limit=5`;
    const res = await fetch(url);
    return res.json();
  };

  const {
    isLoading,
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

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <LoadingIndicator />;
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
      <div>
        {isFetching && !isFetchingNextPage ? "Fetching Artists..." : null}
      </div>
    </>
  );
};

export default TopArtistList;
