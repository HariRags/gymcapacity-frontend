
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fstpage from './Fstpage';
import Details from "./Details";
import Page2 from "./List";
import Lastpage from './Lastpage';


const App = () => {
    return ( 
        <Router>
            <div className="app">
            
            
                <Switch>
                    <Route path="/enter">
                        <Details/>
                    </Route>
                         
                    <Route  exact path="/">
                        {/* Render the Fstpage component on the /home route */}
                        <Fstpage />
                    </Route>

                    <Route path="/exit-popup">
                        {/* Render the Lastpage component here */}
                        <Lastpage />
                    </Route>
                   
                    <Route exact path="/home">
                        <Page2/>
                    </Route>
                </Switch>
                
            </div>
        </Router>
     );
}
 
export default App;


