import { useSelector } from "react-redux"
import ArtistDetailsTab from "../../components/ArtistDetailsTab/ArtistDetailsTab"
import { ArtistDetailsMainContainer } from "./ArtistDetailsList.styled"
import {selectDetails} from '../../features/detailSlice'
import { ArtistDetailsTabContainer } from "../../components/ArtistDetailsTab/ArtistDetailsTab.styled"

const ArtistDetailsList = () => {
  const data = useSelector(selectDetails)
  return (
    <ArtistDetailsMainContainer>
      <ArtistDetailsTabContainer>
      <ArtistDetailsTab data={data?.albumsData} heading={'Top Albums'}/>
      </ArtistDetailsTabContainer>
      <ArtistDetailsTabContainer>
      <ArtistDetailsTab data={data?.tracksData} heading={'Top Tracks'}/>
      </ArtistDetailsTabContainer>
    </ArtistDetailsMainContainer>
  )
}

export default ArtistDetailsList