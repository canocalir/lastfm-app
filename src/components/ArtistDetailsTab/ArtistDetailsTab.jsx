import {
  ArtistDetailsDivider,
  ArtistDetailsHeading,
  ArtistDetailsCard,
} from "./ArtistDetailsTab.styled";

const ArtistDetailsTab = ({ heading, data }) => {
  const { topalbums, toptracks } = data;
  console.log(topalbums);

  const conditionalRender =
    heading === "Top Albums" ? (
      <>
        {topalbums?.album?.map((data, index) => {
          return (<ArtistDetailsCard key={index}>
          <h4>{data.name}</h4>
          </ArtistDetailsCard>)
        })}
      </>
    ) : (
      <>
        {toptracks?.track?.map((data, index) => {
          return (<ArtistDetailsCard key={index}>
            <h4>{data.name}</h4>
            </ArtistDetailsCard>)
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
