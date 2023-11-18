import styled from 'styled-components';

export const LatestNewsItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  margin: 7rem 0 4rem 0;
`;

export const LatestNewsImage = styled.div`
  width: 65%;
  
  img {
    width: 100%;
    height: auto;
  }
`;

export const LatestNewsInfos = styled.div`
  width: 35%;

  h1, h2, p {
    padding-bottom: 20px;
    text-align: justify;
    font-weight: bold;
  }

  h1 {
    font-size: 1.3rem;
    color: #000;
  }

  h2 {
    font-size: 1.7rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.5px;
    line-height: 1.2rem;
  }
`;
