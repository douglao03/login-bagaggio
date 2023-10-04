import React, { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import axios from 'axios';
import './styles.css';

export default function LoginPage() {
    const [login, setLogin] = useState('');
    const [userData, setUserData] = useState(null);

    const handleLogin = (event) => {
        setLogin(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://api.github.com/users/${login}`);
            setUserData(response.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div id='login'>
            <AiOutlineGithub size={220} color='white' />
            <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        name='email'
                        id='email'
                        placeholder='Login do github'
                        onChange={handleLogin}
                        value={login}
                        required
                    />
                </div>
                <div className='actions'>
                    <button type='submit' id='button-submit'>Entrar</button>
                </div>
            </form>
            {userData && (
                <div className='info-data'>
                    <p className='data'>Nome: {userData.name}</p>
                    <p className='data'>Repositórios Públicos: {userData.public_repos}</p>
                    <p className='data'>Localização: {userData.location}</p>
                    <p className='data'>Empresa: {userData.company}</p>
                </div>
            )}
        </div>
    );
}
