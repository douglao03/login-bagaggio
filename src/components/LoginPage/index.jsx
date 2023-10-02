import React, {useState} from 'react';

import { AiOutlineGithub } from 'react-icons/ai'
import './styles.css'

export default function LoginPage() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
    }

    return (
        <div id='login'>
            <AiOutlineGithub size={220} color='white'/>
            <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="email"></label>
                    <input type="email" name='email' id='email' placeholder='Login do github' required/>
                </div>
                <div className='actions'>
                    <button type='submit' id='button-submit'>Entrar</button>
                </div>
            </form>
        </div>
    )
}
