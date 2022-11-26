import { ArtistDetailsButton } from "../components/ArtistCard/ArtistCard.styled";


export default {
    title: 'Styled Components',
    component: ArtistDetailsButton
}

export const CardButton = ({title}) => <ArtistDetailsButton title={title}>
    Your Favourite Button
</ArtistDetailsButton>
