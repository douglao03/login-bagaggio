import './App.css';

import { AiOutlineGithub } from 'react-icons/ai'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage';

function App() {
  return (
   <div id='login'>
    <AiOutlineGithub size={220} color='white'/>
    <form className='form'>
      <div className='field'>
        <label htmlFor="email"></label>
        <input type="email" name='email' id='email' placeholder='Login do github'/>
      </div>
      <div className='actions'>
        <button type='submit'>Entrar</button>
      </div>
    </form>
   </div>
  )
}

export default App; 
