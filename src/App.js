import "./App.css";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetailPage";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:id" component={CharacterDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
