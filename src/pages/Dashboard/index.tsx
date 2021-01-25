import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import MovieHandleLikes from '../../components/MovieHandleLikes/';

import logoImg from '../../assets/logo-viva-decora.png';

import {
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
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o auto/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`users/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }

    //adição de um novo repositório
    //consumir API do github
    //salvar o valor no stado
  }

  return (
    <Container>
      <img src={logoImg} alt="logo" />

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

            <FiChevronRight size={20} />
          </Link>
        ))}
      </MovieInfo>

      <MovieHandleLikes />
    </Container>
  );
};

export default Dashboard;
