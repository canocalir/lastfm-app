import { storiesOf } from "@storybook/react";
import {
  ArtistDetailsCard,
  CounterText,
  DetailsImageSquare,
  ImageAndNamesContainer,
  PlayCountContainer,
} from "../components/ArtistDetailsTab/ArtistDetailsTab.styled";

const album = {
  artist: {
    name: "Behemoth",
    playcount: 2302832,
  },
};

storiesOf("Styled Components", module).add("Artist Details Card", () => (
  <ArtistDetailsCard style={{ width: "50%" }}>
    <ImageAndNamesContainer>
      <DetailsImageSquare
        src={
          "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
        }
        alt="albumImage"
      />
      <div>
        <h4>{album.name === "(null)" ? "No Album Data" : album.name}</h4>
        <p>{album?.artist?.name}</p>
      </div>
      <PlayCountContainer>
        <CounterText>
          {album?.artist?.playcount} <span>plays</span>
        </CounterText>
      </PlayCountContainer>
    </ImageAndNamesContainer>
  </ArtistDetailsCard>
));
