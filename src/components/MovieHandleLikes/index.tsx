import React from 'react';

import { Container, DoNotLikeMovie, SkipMovie, LikeMovie } from './styles';

const MovieHandleLikes: React.FC = () => {
  return (
    <Container>
      <DoNotLikeMovie>👎🏻NÃO CURTI</DoNotLikeMovie>

      <SkipMovie>PULAR</SkipMovie>

      <LikeMovie>👍🏻CURTI</LikeMovie>
    </Container>
  );
};

export default MovieHandleLikes;
