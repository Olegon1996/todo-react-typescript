import React from "react";
import { Navbar } from "./components/Navbar";
import { TodosPage } from "./pages/TodosPage";
import {HashRouter, Switch, Route} from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route component={TodosPage} path='/' exact/>
        <Route component={AboutPage} path='/about'/>
      </Switch>
    </HashRouter>
  );
};

export default App;
