import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';

import ItemListiContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      <ItemListiContainer greeting='hola a todos'/>
    
      </header>
    </div>
  );
}

export default App;
