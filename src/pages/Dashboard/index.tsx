import React from 'react';
import  {FiChevronRight}  from 'react-icons/fi';
import {Title,Form,Repositories }from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Dashboard</Title>
            <Form>
                <input type="text" placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/20207350?s=460&u=0d456919865a5ee101e957b3c113d8b468852b34&v=4" alt="Saulo Medeiros"></img>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/20207350?s=460&u=0d456919865a5ee101e957b3c113d8b468852b34&v=4" alt="Saulo Medeiros"></img>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;

