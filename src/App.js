import logo from './logo.png';
import './App.css';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [value, setValue] = useState('')

    const handleSubmit = (e)=>{
    e.preventDefault(); 
    if(value){
      console.log(value)
      localStorage.setItem('email',value)
      setValue('')
      toast.success(`${value}, cadastrado com sucesso!`)
    }else{
      toast.error(`Insira um e-mail`)
      
    }
    
  }

  return (
    <>
      <main className="main">
            <div className="container">
              <img src={logo} alt="" />
              <p> A maior Black Friday vem ai! </p>
              <p>Deixa seu melhor e-mail a baixo e fique por dentro das promoções.</p>
              <div>
                <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Digite seu melhor e-mail" value={value} onChange={e => setValue(e.target.value)} autoFocus={true} className="input"/>
                <button type="submit" className="button">Cadastrar</button>
                </form>
                <ToastContainer />
              </div>
              </div>
      </main>
    </>
  );
}

export default App;
