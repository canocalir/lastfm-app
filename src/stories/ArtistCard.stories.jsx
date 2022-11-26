import ArtistCard from "../components/ArtistCard/ArtistCard";

export default {
  title: "Components",
  component: ArtistCard,
};

export const TopArtistCard = ({ artist }) => <ArtistCard artist={artist} />;

TopArtistCard.args = {
  name: "Behemoth",
  listeners: "122342344",
  playcount: "3213471912",
  image: [
    {
      "#text":
        "https://upload.wikimedia.org/wikipedia/en/2/29/Behemoth_-_Evangelion.jpg",
    },
  ],
};
