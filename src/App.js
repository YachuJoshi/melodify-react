import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { WebPlayerPage } from "./pages/WebPlayer";
import { UserProvider } from "./providers";

import "./sass/main.scss";

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/webplayer">
          <WebPlayerPage />
        </Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
