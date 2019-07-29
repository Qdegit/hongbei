import React from 'react';
import router from "@router";
import TabBarCom from "@common/Tabar";
import {Home, Circle, Question, Mine} from "@views";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Redirect from="/" to="/home" exact/>
                <Route path="/home" component={Home}/>
                <Route path="/circle" component={Circle}/>
                <Route path="/question" component={Question}/>
                <Route path="/mine" component={Mine}/>
            </Switch>
            <TabBarCom/>
        </Router>
    </div>
  );
}

export default App;
