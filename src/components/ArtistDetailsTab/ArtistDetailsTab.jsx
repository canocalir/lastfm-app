import { useSelector } from "react-redux";
import { selectTheme } from "../../features/themeSlice";
import {
  ArtistDetailsDivider,
  ArtistDetailsHeading,
  ArtistDetailsCard,
  DetailsImageSquare,
} from "./ArtistDetailsTab.styled";

const ArtistDetailsTab = ({ heading, data }) => {
  const { darkMode } = useSelector(selectTheme);
  const conditionalRender =
    heading === "Top Albums" ? (
      <>
        {data?.album?.map((album, index) => {
          return (
            <ArtistDetailsCard border={!darkMode ? "2px solid #fff" : "2px solid grey"} key={index}>
              <DetailsImageSquare
                src={
                  !album?.image[2]?.["#text"]
                    ? "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
                    : album?.image[2]?.["#text"]
                }
                alt="albumImage"
              />
              <div style={{ marginLeft: "2rem" }}>
                <h4>
                  {album?.name === "(null)" ? "No Album Data" : album?.name}
                </h4>
                <p>{album?.artist?.name}</p>
              </div>
            </ArtistDetailsCard>
          );
        })}
      </>
    ) : (
      <>
        {data?.track?.map((track, index) => {
          return (
            <ArtistDetailsCard
              border={!darkMode ? "2px solid #fff" : "2px solid grey"}
              key={index}
            >
              <DetailsImageSquare
                src={
                  !track?.image[2]?.["#text"]
                    ? "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
                    : track?.image[2]?.["#text"]
                }
                alt="trackImage"
              />
              <div style={{ marginLeft: "2rem" }}>
                <h4>
                  {track?.name === "(null)" ? "No Track Data" : track?.name}
                </h4>
                <p>{track?.artist?.name}</p>
              </div>
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
