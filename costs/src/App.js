import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
        <Route exac path="/">
          <Home/>
        </Route>
        <Route exac path="/company">
          <Company/>
        </Route>
        <Route exac path="/contact">
          <Contact/>
        </Route>
        <Route exac path="/newproject">
          <NewProject/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
