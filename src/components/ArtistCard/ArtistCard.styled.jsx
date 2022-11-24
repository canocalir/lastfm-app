import styled from "styled-components";

export const ArtistCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 100%;
  width: 70%;
  border-radius: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  border: ${(props) => props.border};
`;

export const ArtistCardImage = styled.img`
  height: 10rem;
  border-radius: 1rem;
`;

export const ArtistImageContainer = styled.div`
  width: fit-content;
`;

export const ArtistTitleContainer = styled.div`
  text-align: center;
  width: 20rem;
`;

export const ArtistDetailsContainer = styled.div`
  text-align: center;
  width: 20rem;
`;

export const ArtistDetailsButton = styled.button`
  background-color: #fb0;
  border-radius: 0.3rem;
  color: #222;
  border: none;
  height: 3rem;
  width: 10rem;
  font-weight: 600;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: #c99403;
    cursor: pointer;
    transition: 200ms ease-in;
  }
`;

export const ArtistDetailsSpan = styled.span`
  font-weight: 600;
`;

export const ArtistNameParagraph = styled.p`
  font-size: 2rem;
`;
