import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { fetchMovies } from '../../services/api';
import MovieHandleLikes from '../../components/MovieHandleLikes';

import logoImg from '../../assets/logo-viva-decora.png';
import MenuLateral from '../../assets/menu-lateral.png';

import {
  HamburguerMenu,
  ContainerLinks,
  MovieImageContainer,
  Container,
  Title,
  Form,
  MovieInfo,
  Error,
} from './styles';

interface Movies {
  id: number;
  poster_path: string;
}

const Dashboard: React.FC = () => {
  const [movies, setMovies] = useState<Movies[]>();

  const API_MOVIEDB_KEY = process.env.MOVIE_DB_APP_KEY;

  function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomNumber = randomInt(0, 1000);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${randomNumber}?api_key=ad2c409efdb4ec03a93fd197ed313f28`,
      );

      setMovies(result.data);

      console.log(result.data);
    };

    fetchItems();
  }, []);

  // movies.map((movie) => {
  //   console.log(movie);
  // });

  // const [repositories, setRepositories] = useState<Repository[]>();

  // async function handleAddRepository(): Promise<void> {
  //   if (!newRepo) {
  //     setInputError('Digite o auto/nome do repositório');
  //     return;
  //   }

  //   try {
  //     const response = await api.get<Repository>(
  //       `&language=en-US&page=1&include_adult=false`,
  //     );

  //     console.log(response);

  //     const repository = response.data;
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   //adição de um novo repositório
  //   //consumir API do github
  //   //salvar o valor no stado
  // }

  return (
    <Container>
      <img src={logoImg} alt="logo" />
      <HamburguerMenu>
        <img src={MenuLateral} alt="logo" />
        <img src={logoImg} alt="logo" />
      </HamburguerMenu>

      <ContainerLinks>
        <Link to="/">
          <Title>Filmes não curados</Title>
        </Link>
        <Link to="/repos">
          <Title>Filmes curtidos</Title>
        </Link>
        <Link to="/watched">
          <Title>Filmes não curtidos</Title>
        </Link>
      </ContainerLinks>

      <MovieImageContainer></MovieImageContainer>
      {/* <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form> */}

      <MovieInfo></MovieInfo>
      {/* <Link> */}
      {/* //   key={repository.full_name}
          //   to={`/repositories/${repository.full_name}`}
          // >
          // <img src={movie.poster_path} alt="sdsa" />

          // <div>
          //   <strong>{repository.full_name}</strong>
          //   <p>{repository.bio}</p>
          // </div> */}
      {/* // </Link> */}

      <MovieHandleLikes />
    </Container>
  );
};

export default Dashboard;
