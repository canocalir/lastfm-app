//Redux
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/themeSlice";

//Styled Components
import {
  ArtistDetailsDivider,
  ArtistDetailsHeading,
  ArtistDetailsCard,
  DetailsImageSquare,
  ImageAndNamesContainer,
  PlayCountContainer,
  CounterText,
  ArtistDetailsMidContainer,
} from "./ArtistDetailsTab.styled";

//PropTypes
import PropTypes from "prop-types";

const ArtistDetailsTab = ({ heading, data }) => {
  const { darkMode } = useSelector(selectTheme);

  const renderCondition = heading === "Top Albums";

  const darkModeBorder = !darkMode ? "2px solid #fff" : "2px solid grey";

  const placeholderImageURL =
    "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";

  const conditionalRender = renderCondition ? (
    <>
      {data?.album?.map((album, index) => {
        return (
          <ArtistDetailsCard border={darkModeBorder} key={index}>
            <ImageAndNamesContainer>
              <DetailsImageSquare
                src={
                  !album?.image[2]?.["#text"]
                    ? placeholderImageURL
                    : album?.image[2]?.["#text"]
                }
                alt="albumImage"
              />
              <ArtistDetailsMidContainer>
                <h4>
                  {album?.name === "(null)" ? "No Album Data" : album?.name}
                </h4>
                <p>{album?.artist?.name}</p>
              </ArtistDetailsMidContainer>
              <PlayCountContainer>
                <CounterText>
                  {album?.playcount} <span>plays</span>
                </CounterText>
              </PlayCountContainer>
            </ImageAndNamesContainer>
          </ArtistDetailsCard>
        );
      })}
    </>
  ) : (
    <>
      {data?.track?.map((track, index) => {
        return (
          <ArtistDetailsCard border={darkModeBorder} key={index}>
            <ImageAndNamesContainer>
              <DetailsImageSquare
                src={
                  !track?.image[2]?.["#text"]
                    ? placeholderImageURL
                    : track?.image[2]?.["#text"]
                }
                alt="trackImage"
              />
              <ArtistDetailsMidContainer>
                <h4>
                  {track?.name === "(null)" ? "No Track Data" : track?.name}
                </h4>
                <p>{track?.artist?.name}</p>
              </ArtistDetailsMidContainer>
              <PlayCountContainer>
                <CounterText>
                  {track?.listeners} <span>listeners</span>
                </CounterText>
                <CounterText>
                  {track?.playcount} <span>plays</span>
                </CounterText>
              </PlayCountContainer>
            </ImageAndNamesContainer>
          </ArtistDetailsCard>
        );
      })}
    </>
  );

  return (
    <>
      <ArtistDetailsHeading>{heading}</ArtistDetailsHeading>
      <ArtistDetailsDivider />
      {conditionalRender}
    </>
  );
};

export default ArtistDetailsTab;

//Prop Types

ArtistDetailsTab.propTypes = {
  heading: PropTypes.string,
  data: PropTypes.shape({
    album: PropTypes.arrayOf(
      PropTypes.shape({
        artist: PropTypes.shape({
          name: PropTypes.string,
          playcount: PropTypes.number,
          image: PropTypes.arrayOf(
            PropTypes.shape({
              2: PropTypes.shape({
                "#text": PropTypes.string,
              }),
            })
          ),
        }),
      })
    ),
    track: PropTypes.arrayOf(
      PropTypes.shape({
        artist: PropTypes.shape({
          name: PropTypes.string,
          playcount: PropTypes.string,
          listeners: PropTypes.string,
          image: PropTypes.arrayOf(
            PropTypes.shape({
              2: PropTypes.shape({
                "#text": PropTypes.string,
              }),
            })
          ),
        }),
      })
    ),
  }),
};
