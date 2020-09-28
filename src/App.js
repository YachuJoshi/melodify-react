import React from "react";
import { Switch, Route } from "react-router-dom";
import "./sass/main.scss";

import { Home } from "./pages/Home";
import { WebPlayerPage } from "./pages/WebPlayer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/webplayer">
          <WebPlayerPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
