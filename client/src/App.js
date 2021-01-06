import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Secret from './components/secret';

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
