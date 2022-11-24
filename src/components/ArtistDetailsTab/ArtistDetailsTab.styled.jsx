import styled from "styled-components";

export const ArtistDetailsDivider = styled.hr`
    width: 100%;
`
export const ArtistDetailsHeading = styled.h2`
    font-size: 1rem;
    margin: 0;
`
export const ArtistDetailsCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    display: flex;
    align-items:center;
    border: ${props => props.border};
    border-radius: 1rem;
`

export const ArtistDetailsTabContainer = styled.div`
    display: flex;
    width: 56rem;
    gap: 2rem;
    flex-direction: column;
`

export const DetailsImageSquare = styled.img`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
`