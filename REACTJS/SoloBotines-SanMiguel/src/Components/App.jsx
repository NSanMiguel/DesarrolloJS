import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import {NavBar} from './NavBar/NavBar';

export function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Rompela en la cancha con SOLO BOTINES"/>
    </div>
  );
}


