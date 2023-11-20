import styled from 'styled-components';

export const BackToTopSection = styled.section`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackToTop = styled.button`
  border: none;
  background-color: #666;
  bottom: 20px;
  color: white;
  cursor: pointer;
  padding: 5px 8px 3px 8px;
  position: fixed;
  right: 10px;
  transition: background-color 0.3s , transform 0.3s;

  &:hover {
    background-color: red;
  }
`;
