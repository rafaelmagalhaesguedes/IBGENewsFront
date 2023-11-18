import styled from 'styled-components';

export const NewsListItem = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin: 20px 0 70px 0;
`;

export const NewsItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: auto;
  cursor: pointer;
`;

export const NewsItemsImage = styled.img`
    width: 100%;
    height: 200px;
`;

export const NewsItemsInfos = styled.div`

  h1, h2, p {
    padding: 10px 0;
    text-align: justify;
    font-weight: bold;
  }

  h1 {
    font-size: 1rem;
    color: #000;
  }

  h2 {
    font-size: 1rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    letter-spacing: 1px;
    line-height: 1.1rem;
    font-weight: normal;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ButtonLoadMore = styled.button`
  width: 30%;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #000;
  }
`;
