import { useEffect } from "react";

import ArtistCard from "../../components/ArtistCard/ArtistCard";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import { useFetchTopArtists } from "../../hooks/useFetchTopArtists";
import { TopArtistListContainer } from "./TopArtistList.styled";

const TopArtistList = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchTopArtists();

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
        {isFetching && !isFetchingNextPage ? <LoadingIndicator /> : null}
      </div>
    </>
  );
};

export default TopArtistList;
