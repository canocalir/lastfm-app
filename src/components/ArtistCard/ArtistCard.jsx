//React Router
import { Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setAlbumsData, setTracksData } from "../../features/detailSlice";
import { selectTheme } from "../../features/themeSlice";

//StyledComponents
import {
  ArtistCardContainer,
  ArtistCardImage,
  ArtistDetailsButton,
  ArtistDetailsContainer,
  ArtistDetailsSpan,
  ArtistImageContainer,
  ArtistNameParagraph,
} from "./ArtistCard.styled";

//PropTypes
import PropTypes from "prop-types";

const ArtistCard = ({ artist }) => {

  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectTheme);

  const fetchArtistTopAlbums = async () => {
    const url = `${process.env.REACT_APP_LASTFM_BASE_URL}/?method=artist.gettopalbums&artist=${artist?.name}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setAlbumsData(data));
    localStorage.setItem("albumdetails", JSON.stringify(data));
  };

  const fetchArtistTopTracks = async () => {
    const url = `${process.env.REACT_APP_LASTFM_BASE_URL}/?method=artist.gettoptracks&artist=${artist?.name}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setTracksData(data));
    localStorage.setItem("trackdetails", JSON.stringify(data));
  };

  const detailsFetchHandler = () => {
    fetchArtistTopAlbums();
    fetchArtistTopTracks();
  };
 
  const conditionalBorder = !darkMode ? "2px solid #fff" : "2px solid grey";

  return (
    <ArtistCardContainer border={conditionalBorder}>
      <ArtistImageContainer>
        <ArtistCardImage src={artist?.image[2]["#text"]} alt="" />
      </ArtistImageContainer>
      <ArtistDetailsContainer>
        <h3>Artist</h3>
        <hr />
        <ArtistNameParagraph>{artist?.name}</ArtistNameParagraph>
      </ArtistDetailsContainer>
      <ArtistDetailsContainer>
        <p>
          <ArtistDetailsSpan>Listeners: </ArtistDetailsSpan>
          {artist?.listeners}
        </p>
        <p>
          <ArtistDetailsSpan>Playcount: </ArtistDetailsSpan>
          {artist?.playcount}
        </p>
      </ArtistDetailsContainer>
      <Link to={`/artist/${artist?.name}`} state={{ data: artist }}>
        <ArtistDetailsButton name="detailsbutton" onClick={detailsFetchHandler}>
          Click For Artist Details
        </ArtistDetailsButton>
      </Link>
    </ArtistCardContainer>
  );
};

export default ArtistCard;

//Prop Types

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    listeners: PropTypes.string,
    playcount: PropTypes.string,
    image: PropTypes.arrayOf(
      PropTypes.shape({
        2: PropTypes.shape({
          "#text": PropTypes.string,
        }),
      })
    ),
  }),
  fetchArtistTopAlbums: PropTypes.func,
  fetchArtistTopTracks: PropTypes.func,
  detailsFetchHandler: PropTypes.func
};