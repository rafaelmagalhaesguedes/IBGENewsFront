import styled from 'styled-components';

export const FilterNewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFFD9;
  height: 3rem;
  margin-top: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    height: auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    height: auto;
  }
`;

export const FilterNewsButton = styled.nav`
  @media (max-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
`;

export const ButtonFilter = styled.button`
  background-color: #FFFFFFD9;
  border: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 700;
  height: 3rem;
  padding: 0 1rem;
  transition: all 0.2s ease-in-out;
  width: 10rem;

  &:hover {
    background-color: #e22e2f;
    color: #fff;
    cursor: pointer;
  }

  &.active {
    background-color: #e22e2f;
    color: #fff;
  }
`;
