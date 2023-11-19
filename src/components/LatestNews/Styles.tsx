import styled from 'styled-components';

export const LatestNewsItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 9rem 0 4rem 0;
`;

export const LatestNewsImage = styled.div`
  width: 60%;
  
  img {
    width: 100%;
    height: auto;
  }
`;

export const LatestNewsInfos = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2, p {
    padding-bottom: 20px;
    text-align: justify;
    font-weight: bold;
  }

  h1 {
    font-size: 1.3rem;
    color: red;
  }

  h2 {
    font-size: 1.7rem;
    color: #333;
    cursor: pointer;
  }

  h2:hover {
    color: #666;
  }

  p {
    color: #666;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.5px;
    line-height: 1.2rem;
  }

  p:hover {
    color: darkred;
    cursor: pointer;
  }
`;

export const LatestNewsTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LatestNewsSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIcon = styled.div`
  display: flex;
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
  background-color: #CD0404;
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
