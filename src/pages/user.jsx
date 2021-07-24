import React from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import Age from './age';
import Id from './id';
import Email from './email';

const User = () => {
   const history = useHistory();
   const {url,path} = useRouteMatch();

   return (
    <Switch>
         
         <Route exact={true} path={path}>
            <div>
               <span>Alireza</span>
            </div>
         </Route>

         <Route path={path + '/age'} component={Age}/>
         <Route path={path + '/email'} component={Email}/>
         <Route path={path + '/id'} component={Id}/>
    </Switch>   
   
   )
}

export default User
