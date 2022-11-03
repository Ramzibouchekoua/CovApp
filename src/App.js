import React from "react";
import HomePage from "./Components/HomePage";
import "./Assets/style.scss";
import Header from "./Components/Header";
import {
  Switch,
  Route,
  BrowserRouter,
  Routes,
  HashRouter,
} from "react-router-dom";
import LastPage from "./Components/LastPage";
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <HashRouter>
      <Header />

      <SnackbarProvider maxSnack={1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LastPage" element={<LastPage />} />
        </Routes>
      </SnackbarProvider>
    </HashRouter>
  );
}

export default App;
