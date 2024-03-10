import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from "./Details";
import Page2 from "./List";
import Fstpage from './Fstpage';
import Lastpage from './Lastpage';

const App = () => {
    return ( 
        <Router>
            <div className="app">
                <Fstpage />
                <Switch>
                    <Route exact path="/">
                        <Details />
                    </Route>
                    <Route path="/home">
                        <Page2/>
                    </Route>
                    
                     <Route path="/lastpage">
                        {/* Render the Lastpage component here */}
                      <Lastpage />
                       </Route>
                </Switch>
                
            </div>
        </Router>
     );
}
 
export default App;


