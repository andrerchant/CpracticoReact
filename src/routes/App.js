import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

                <Route component={NotFound} />

            </Switch>
        </Layout>
    </Router>
)

export default App;