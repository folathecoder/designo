import styled from "styled-components";
import { QUERIES } from "../../../../../helpers/MediaQueries";

export const CardsContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 4rem 1rem 1rem 1rem;
`;
export const CardsWrap = styled.div`
  max-width: var(--max-container);
  min-height: 40rem;
  margin: var(--center-container);
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */

  /* &::after {
    content: "";
    flex: auto;
  } */
`;
export const Card = styled.div`
  flex: 1 23.1483rem;
  max-width: 22rem;
  min-height: 29.875rem;
  background-color: var(--color-sec-300);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0.5rem;

  & > * {
    flex: 1;
  }

  @media ${QUERIES.tabletMini} {
    flex: 1 43rem;
    max-width: 43rem;
    min-height: 20rem;
    flex-direction: row;
  }

  @media ${QUERIES.tablet} {
    flex: 1 23.1483rem;
    max-width: 22rem;
    min-height: 29.875rem;
    flex-direction: column;
  }

  &:hover {
    transition: var(--transition);
    background-color: var(--color-pry-100);

    h3,
    p {
      color: var(--color-pry-300);
    }
  }
`;
export const CardImageWrap = styled.div`
  height: 20rem;
`;
export const CardImage = styled.img`
  border-radius: 1rem 1rem 0rem 0rem;
  object-fit: cover;

  @media ${QUERIES.tabletMini} {
    min-height: 20rem;
    border-radius: 1rem 0rem 0rem 1rem;
  }

  @media ${QUERIES.tablet} {
    height: 20rem;
    border-radius: 1rem 1rem 0rem 0rem;
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const CardName = styled.h3`
  font-weight: var(--font-weight-200);
  color: var(--color-pry-100);
  text-transform: uppercase;
`;
export const CardText = styled.p`
  margin: 1rem;
`;
