import { useSelector } from "react-redux"
import ArtistDetailsTab from "../../components/ArtistDetailsTab/ArtistDetailsTab"
import { ArtistDetailsMainContainer } from "./ArtistDetailsList.styled"
import {selectDetails} from '../../features/detailSlice'
import { ArtistDetailsTabContainer } from "../../components/ArtistDetailsTab/ArtistDetailsTab.styled"

const ArtistDetailsList = () => {
  const data = useSelector(selectDetails)
  const albumData = JSON.parse(localStorage.getItem('albumdetails'))
  const trackData = JSON.parse(localStorage.getItem('trackdetails'))
  return (
    <ArtistDetailsMainContainer>
      <ArtistDetailsTabContainer>
      <ArtistDetailsTab data={!albumData ? data?.albumsData : albumData?.topalbums} heading={'Top Albums'}/>
      </ArtistDetailsTabContainer>
      <ArtistDetailsTabContainer>
      <ArtistDetailsTab data={!trackData ? data?.tracksData : trackData?.toptracks} heading={'Top Tracks'}/>
      </ArtistDetailsTabContainer>
    </ArtistDetailsMainContainer>
  )
}

export default ArtistDetailsList