import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="login">
          <form id="LoginForm">
            <h2 id="loginHeading">Login</h2>
            <label htmlFor="loginInput" id="loginLabel">Username</label>
            <input type="text" id="loginInput" required autoComplete='off'/>
            <label htmlFor="inputPassword" id="passwordLabel">Password</label>
            <input type="password" id="inputPassword" required></input>
            <button type="submit" id="SubmitButton">Sign-In</button>
            <span id="RegisterMessage">Are you a new User ?</span>
            <Link to="/Registration" id="RegisterButton"><button type="button" >Register</button></Link>
          </form>
        </div>
    </div>
  );
}

export default App;
