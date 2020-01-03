import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './pages/index';
import Us from './pages/us';
import Blog from './pages/blog';
import RichText from './pages/richtext';


const BasicRoute = () => (
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/us" component={Us}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/edit" component={RichText}/>
        </Switch>
);
export default BasicRoute;
