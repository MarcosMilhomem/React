import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Mateus'
  const NewName = name.toUpperCase()
  const nome = "Depay"
  
  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (

     < div className="App" >
      <h2>Alterado o JSX</h2>
      <p>Olá, {name}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="My image" />
      <HelloWorld/>
      <SayMyName nome="Apolo"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="23" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
