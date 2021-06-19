import './App.css';
import NavBar from './components/navbar/NavBar';
import ListaNovedades from './components/listaNovedades/ListaNovedades';

function App() {
  const saludo = "Bienvenidos a nuestra tienda";
  return (
    <div className="App">
      <NavBar />
      <ListaNovedades saludo ={saludo}/>
    </div>
  );
}

export default App;
