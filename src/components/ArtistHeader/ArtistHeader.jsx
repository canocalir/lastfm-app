//Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTheme } from "../../features/themeSlice";

//StyledComponents
import {
  ArtistHeaderContainer,
  ArtistHeaderImage,
  ArtistLogoContainer,
  BackToHomeButton,
} from "./ArtistHeader.styled";

//PropTypes
import PropTypes from "prop-types";

const ArtistHeader = ({ artist }) => {
  const { darkMode } = useSelector(selectTheme);
  const navigate = useNavigate();

  const conditionalBorder = !darkMode ? "2px solid #fff" : "2px solid grey";

  return (
    <ArtistHeaderContainer border={conditionalBorder}>
      <ArtistHeaderImage
        src={artist?.data?.image[2]["#text"]}
        alt="artistHeaderLogo"
      />
      <ArtistLogoContainer>
        <h2>{artist?.data?.name}</h2>
        <BackToHomeButton onClick={() => navigate(-1)}>
          Back to Artists
        </BackToHomeButton>
      </ArtistLogoContainer>
    </ArtistHeaderContainer>
  );
};

export default ArtistHeader;

//Prop Types

ArtistHeader.propTypes = {
  artist: PropTypes.shape({
    data: PropTypes.shape({
      name: PropTypes.string,
      playcount: PropTypes.string,
      image: PropTypes.arrayOf(
        PropTypes.shape({
          2: PropTypes.shape({
            "#text": PropTypes.string,
          }),
        })
      ),
    }),
  }),
};

ArtistHeader.defaultProps = {
  artist: {
    data: {
      name: "Behemoth",
      listeners: "122342344",
      playcount: "3213471912",
      image: [
        {
          "#text": "",
        },
        {
          "#text": "",
        },
        {
          "#text":
            "https://upload.wikimedia.org/wikipedia/en/2/29/Behemoth_-_Evangelion.jpg",
        },
      ],
    },
  },
};
