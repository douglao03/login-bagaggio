import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai'

export default function CadastrarUsuario() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
    }


    return (
        <div id='login'>
            <AiOutlineGithub size={220} color='white'/>
            <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder='Digite seu email' required/>
                </div>
                <div className='field'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name='password' id='password' placeholder='Sua senha' required/>
                </div>
                <div className='actions'>
                    <button type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    )
}