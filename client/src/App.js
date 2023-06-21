import './App.css';
import TodoList from './components/TodoList/TodoList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/entities">Entities</Link>
        </nav>
        <Switch>
          <Route path="/signup" />
          <Route path="/login" />
          <Route path="/tasks" />
          <Route path="/" />
        </Switch>
      </Router>

      <TodoList />

    </div>
  );
}

export default App;
