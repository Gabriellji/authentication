import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/secret" component={Secret}/>
      </Switch>
    </div>
  );
}

export default App;
