import React from 'react';

import { Container, DoNotLikeMovie, SkipMovie, LikeMovie } from './styles';
import curti from '../../assets/curti.png';
import Ncurti from '../../assets/n-curti.png';

const MovieHandleLikes: React.FC = () => {
  return (
    <Container>
      <DoNotLikeMovie>
        <img src={Ncurti} />
        <p> NÃO CURTI</p>
      </DoNotLikeMovie>

      <SkipMovie>PULAR</SkipMovie>

      <LikeMovie>
        <img src={curti} />
        <p>CURTI</p>
      </LikeMovie>
    </Container>
  );
};

export default MovieHandleLikes;
