import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import MovieHandleLikes from '../../components/MovieHandleLikes';

import logoImg from '../../assets/logo-viva-decora.png';
import MenuLateral from '../../assets/menu-lateral.png';

import {
  HamburguerMenu,
  ContainerLinks,
  Container,
  Title,
  Form,
  MovieInfo,
  Error,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  bio: string;
  login: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    // const storagedRepositories = localStorage.getItem(
    //   '@GithubExplorer:repositories',
    // );
    // if (storagedRepositories) {
    //   return JSON.parse(storagedRepositories);
    // }
    // return [];
  });

  // const [repositories, setRepositories] = useState<Repository[]>();

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(): Promise<void> {
    if (!newRepo) {
      setInputError('Digite o auto/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(
        `&language=en-US&page=1&include_adult=false`,
      );

      console.log(response);

      const repository = response.data;
    } catch (err) {
      console.log(err);
    }

    //adição de um novo repositório
    //consumir API do github
    //salvar o valor no stado
  }

  return (
    <Container>
      <img src={logoImg} alt="logo" />
      <HamburguerMenu>
        <img src={MenuLateral} alt="logo" />
        <img src={logoImg} alt="logo" />
      </HamburguerMenu>
      <ContainerLinks>
        <Title>Filmes não curados</Title>
        <Title>Filmes curtidos</Title>
        <Title>Filmes não curtidos</Title>
      </ContainerLinks>

      {/* <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form> */}

      {inputError && <Error>{inputError}</Error>}

      <MovieInfo>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img src={repository.avatar_url} alt={repository.login} />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.bio}</p>
            </div>
          </Link>
        ))}
      </MovieInfo>

      <MovieHandleLikes />
    </Container>
  );
};

export default Dashboard;
