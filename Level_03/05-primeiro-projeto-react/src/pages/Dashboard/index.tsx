import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1511677?s=460&u=62ae3a11f34375c51c5ecb041aa07e9e9e0ebc43&v=4"
            alt="Felipe Marinho"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy heghly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1511677?s=460&u=62ae3a11f34375c51c5ecb041aa07e9e9e0ebc43&v=4"
            alt="Felipe Marinho"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy heghly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1511677?s=460&u=62ae3a11f34375c51c5ecb041aa07e9e9e0ebc43&v=4"
            alt="Felipe Marinho"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy heghly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
