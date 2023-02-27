import React from "react";
import Header from "./Components/Header/Header";
import WatchList from "./Components/WatchList/WatchList";
import Watched from "./Components/Watched/Watched";
import Add from "./Components/Add/Add";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Components/Context/GlobalContext";
const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
