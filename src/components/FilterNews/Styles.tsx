import styled from 'styled-components';

export const FilterNewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFFD9;
  height: 3rem;
  margin-top: 2rem 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const FilterNewsButton = styled.div`
  button {
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
      cursor: pointer;
    }
  }
`;
