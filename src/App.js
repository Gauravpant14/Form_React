import './App.css';
import FormEx from './components/Form2';
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={FormEx} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
