import "./App.css";
import {Container} from "@material-ui/core"
import Login from "../src/components/login"
import Signup from "./components/signup"
import Dashboard from "../src/components/dashboard"
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import usersStore from "./store/usersStore";

function App() {  
  
  usersStore.initializeApp()    
  
  return (

    <Router>  
      <Container className="App">
        <Switch>
          <Route path = "/" exact = {true}> <Dashboard/ > </Route>
        </Switch>

        <Switch>
          <Route path = "/login" exact = {true}> <Login/ > </Route>
        </Switch>

        <Switch>
          <Route path = "/signup" exact = {true}> <Signup/ > </Route>
        </Switch>       
      </Container>
    </Router>    
  );
}

export default App;
