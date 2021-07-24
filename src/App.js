import React from 'react'
import {Switch,Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import {routes} from './routs/routes'

function App() {
  return (
   
    <Router>
      <Switch>
        {
          routes.map((item,index)=>(
            <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.component}
            />
          ))
        }
        <Redirect to='/'/>
      </Switch>
    </Router>

  );
}

export default App;
