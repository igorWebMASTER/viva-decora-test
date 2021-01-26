import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media all and (max-width: 500px) {
    width: 100%;
  }
`;

export const DoNotLikeMovie = styled.div`
  width: 160px;
  height: 60px;
  border-radius: 30px;
  background: #fff;
  padding: 0px 10px;
  line-height: 60px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.2s;
  flex-grow: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media all and (max-width: 500px) {
    & {
      width: 60px;
      height: 60px;
      padding: 0px 15px;
      border-radius: 45%;
    }
    & > p {
      display: none;
    }
  }
`;

export const SkipMovie = styled.div`
  width: 80px;
  height: 60px;
  border-radius: 30px;
  background: #fff;
  padding: 0px 15px;
  line-height: 60px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const LikeMovie = styled.div`
  width: 180px;
  height: 60px;
  border-radius: 30px;
  background: #fff;
  padding: 0px 30px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  img {
    padding-right: 10px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media all and (max-width: 500px) {
    & {
      width: 60px;
      height: 60px;
      padding: 0px 15px;
      border-radius: 45%;
    }
    & > p {
      display: none;
    }
  }
`;
