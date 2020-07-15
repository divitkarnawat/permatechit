import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProjectPage from './views/ProjectPage';

class App extends Component{

constructor(props)
{
  super(props);
  
}

render()
{
  return(

    <Router>
      <Switch>
        <Route path="/projects/:pname" component={ProjectPage} />
     
      </Switch>
    </Router>
  );
}


}   

export default App;
