
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Covid from './Covid'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav'
import Footer from './Footer';
import Symtomps from './Symtomps';
import Graph from './Graph';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Covid}/>
          <Route path="/symptom" component={Symtomps}/>
          <Route path="/graph" component={Graph}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
