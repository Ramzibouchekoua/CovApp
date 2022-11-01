import React from "react";
import HomePage from "./Components/HomePage";
import "./Assets/style.scss";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import LastPage from "./Components/LastPage";
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/LastPage" render={() => <LastPage />} />
        </Switch>
      </div>
    </SnackbarProvider>
  );
}

export default App;
