
import './App.css';
import Navbar from './components/navbar/navbar';
import Counter from './components/counter/counter';
import ItemListiContainer from './components/ItemListContainer/ItemListContainer';

function App() {
const handleOnAdd =(quantity)=>
 console.log(`la cantidad agregada es: ${quantity}` )
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      <ItemListiContainer greeting='hola a todos'/>
      <Counter stock={10} onAdd={handleOnAdd}/> 
      </header>
    </div>
  )
}   



export default App;
