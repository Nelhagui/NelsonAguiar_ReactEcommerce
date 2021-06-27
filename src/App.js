import './App.css';
import NavBar from './components/navbar/NavBar';
import { ItemsContainer } from './components/itemsContainer/ItemsContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsContainer titleSeccion="Novedades del mes"/>
    </div>
  );
}

export default App;
