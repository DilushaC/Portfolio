
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/Contact";
import Home from './components/Home';
import Downloads from './components/Downloads'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/downloads" component={Downloads}/>
      </div>
    </Router>
    
    
  );
}

export default App;
