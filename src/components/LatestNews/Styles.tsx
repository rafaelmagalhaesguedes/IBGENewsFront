import styled from 'styled-components';

export const LatestNewsItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 7rem 0 5rem 0; 

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 1em 0 2rem 0;
    transition: 0.3s;
    gap: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 1rem;
    margin: 8em 0 2rem 0;
    transition: 0.3s;
  }
`;

export const LatestNewsImage = styled.div`
  width: 60%;
  height: auto;
  
  img {
    width: 754px;
    height: 485px;
  }

  @media (max-width: 768px) {
    width: 100%;
    transition: 0.3s;
    img {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    transition: 0.3s;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const LatestNewsInfos = styled.div`
  width: 40%;
  height: auto;
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 485px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 1rem;
    padding: 1rem 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    transition: 0.3s;
    width: 100%;
    height: auto;
  }

  ,box-title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1.5rem;
  }

  .box-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
    color: #e52e2e;
    font-weight: bold;
  }
  
  span {
    color: #666;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1rem;
  }

  h2, p {
    padding-bottom: 20px;
    text-align: justify;
    font-weight: bold;
  }

  h2 {
    font-size: 1.7rem;
    color: #333;
    cursor: pointer;
  }

  p {
    color: #666;
    font-size: 1rem;
    letter-spacing: 0.5px;
    line-height: 1.5rem;
    font-weight: 300;
  }

  @media (max-width: 300px) {
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const LatestNewsTitle = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 300px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

`;

export const LatestNewsSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;

  @media (max-width: 300px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

`;

export const SocialIcon = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;

  a {
    color: #000;
    transition: 0.3s;

    &:hover {
      color: #a9a9a9;
    }
  }
`;

export const LinkNews = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #e22e2f;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;

  a {
    color: white;
  }

  &:hover {
    background-color: #000;
  }
`;
