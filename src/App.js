import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { About } from './views/About/About';
import { ViewItemDetail } from './views/ViewItemDetail/ViewItemDetail';
import { Category } from './views/Category/Category';

function App() {
  return (
    <Router>
      <div className="App">
<NavBar />
<Switch>
    <Route path='/' exact component={Home}/>  
    <Route path='/about'  component={About}/>  
    <Route path='/detail/:id'  component={ViewItemDetail}/>  
        <Route path='/category/:categoryId' exact  component={Category}/>  
    </Switch>
      </div>
    </Router>
  );
}

export default App;
