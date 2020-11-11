import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home';
import Week from './views/Week';
import Info from './views/Info';
import Video from './views/Video';
import Start from './views/Start';
import Game from './views/Game';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/week">
        <Week />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Route path="/video">
        <Video />
      </Route>
      <Route path="/start">
        <Start />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
    </Switch>
  );
}

export default App;
