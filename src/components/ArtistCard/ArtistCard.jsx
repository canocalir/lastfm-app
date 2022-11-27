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

const ArtistCard = ({ artist, title }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectTheme);

  const urlSelector = (condition) => {
    const url = `${process.env.REACT_APP_LASTFM_BASE_URL}/?method=artist.${
      condition === "albums" ? "gettopalbums" : "gettoptracks"
    }&artist=${artist?.name}&api_key=${
      process.env.REACT_APP_LASTFM_API_KEY
    }&format=json`;
    return url
  };

  const detailsFetchHandler = async () => {
    const urlAlbums = urlSelector("albums");
    const urlTracks = urlSelector("tracks");
    const resAlbums = await fetch(urlAlbums);
    const resTracks = await fetch(urlTracks);
    const dataAlbums = await resAlbums.json();
    const dataTracks = await resTracks.json();
    dispatch(setAlbumsData(dataAlbums));
    localStorage.setItem("albumdetails", JSON.stringify(dataAlbums));
    dispatch(setTracksData(dataTracks));
    localStorage.setItem("trackdetails", JSON.stringify(dataTracks));
  };

  const conditionalBorder = !darkMode ? "2px solid #fff" : "2px solid grey";

  return (
    <ArtistCardContainer border={conditionalBorder}>
      <ArtistImageContainer>
        <ArtistCardImage src={artist?.image[0]?.["#text"]} alt="" />
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
          {title}
        </ArtistDetailsButton>
      </Link>
    </ArtistCardContainer>
  );
};

export default ArtistCard;

//Prop Types

ArtistCard.propTypes = {
  title: PropTypes.string,
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
};

ArtistCard.defaultProps = {
  title: "Click For Artist Details",
  artist: {
    name: "Behemoth",
    listeners: "122342344",
    playcount: "3213471912",
    image: [
      {
        "#text":
          "https://upload.wikimedia.org/wikipedia/en/2/29/Behemoth_-_Evangelion.jpg",
      },
    ],
  },
};
