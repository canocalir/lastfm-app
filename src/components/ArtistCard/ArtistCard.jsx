import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAlbumsData, setTracksData } from "../../features/detailSlice";
import {
  ArtistCardContainer,
  ArtistCardImage,
  ArtistDetailsButton,
  ArtistDetailsContainer,
  ArtistDetailsSpan,
  ArtistImageContainer,
  ArtistNameParagraph,
  ArtistTitleContainer,
} from "./ArtistCard.styled";

const ArtistCard = ({ artist }) => {
  const dispatch = useDispatch();

  const fetchArtistTopAlbums = async () => {
    const url = `${process.env.REACT_APP_LASTFM_BASE_URL}/?method=artist.gettopalbums&artist=${artist?.name}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setAlbumsData(data));
  };

  const fetchArtistTopTracks = async () => {
    const url = `${process.env.REACT_APP_LASTFM_BASE_URL}/?method=artist.gettoptracks&artist=${artist?.name}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setTracksData(data));
  };

  const detailsFetchHandler = () => {
    fetchArtistTopAlbums();
    fetchArtistTopTracks();
  };

  return (
    <ArtistCardContainer>
      <ArtistImageContainer>
        <ArtistCardImage src={artist.image[2]["#text"]} alt="" />
      </ArtistImageContainer>
      <ArtistTitleContainer>
        <h3>Artist</h3>
        <hr />
        <ArtistNameParagraph>{artist.name}</ArtistNameParagraph>
      </ArtistTitleContainer>
      <ArtistDetailsContainer>
        <p>
          <ArtistDetailsSpan>Listeners: </ArtistDetailsSpan>
          {artist.listeners}
        </p>
        <p>
          <ArtistDetailsSpan>Playcount: </ArtistDetailsSpan>
          {artist.playcount}
        </p>
      </ArtistDetailsContainer>
      <Link to={`/artist/${artist.name}`} state={{ data: artist }}>
        <ArtistDetailsButton onClick={detailsFetchHandler}>
          Click For Artist Details
        </ArtistDetailsButton>
      </Link>
    </ArtistCardContainer>
  );
};

export default ArtistCard;
