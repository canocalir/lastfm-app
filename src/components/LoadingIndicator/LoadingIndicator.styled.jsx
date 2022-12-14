import styled from "styled-components";

export const LoadingIcon = styled.div`
  margin: auto;
  width: 8rem;
  height: 8rem;
  &:after {
    content: " ";
    display: block;
    width: 5rem;
    height: 5rem;
    margin: 1.2rem;
    border-radius: 50%;
    border: 6px solid rgb(187, 61, 61);
    border-color: rgb(187, 61, 61) transparent rgb(187, 61, 61) transparent;
    animation: loading 1.2s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
