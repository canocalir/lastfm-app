import styled from "styled-components";
import variables from "../../styles/variables";

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
    justify-content: space-between;
    align-items:center;
    border: ${props => props.border};
    border-radius: ${variables.commonBorderRadius};
    @media (max-width: 768px) {
	flex-direction: column;
    align-items: center;
    gap:1rem;
   }
`

export const ImageAndNamesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    gap: 4rem;
    @media (max-width: 768px) {
	flex-direction: column;
    align-items: center;
    gap:0rem;
   }
`

export const ArtistDetailsTabContainer = styled.div`
    display: flex;
    width: 56rem;
    gap: 2rem;
    flex-direction: column;
    @media (max-width: 768px) {
	text-align: center;
   }
`

export const DetailsImageSquare = styled.img`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 0.8rem 0 0.8rem 0.8rem;
    @media (max-width: 768px) {
        border-radius: 0rem 0rem 0.8rem 0.8rem;
   }
`

export const PlayCountContainer = styled.div`
    margin-right: 2rem;
    text-align:center;
    @media (max-width: 768px) {
	margin: 0;
   }
`

export const CounterText = styled.p`
    font-size: 1.2rem;
    span{
        font-weight: ${variables.boldFontWeight};
        font-size: 0.9rem;
    }
`