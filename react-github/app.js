import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';
import About from './about';
import Authors from './authors';

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/post' component={Main} />
                    <Redirect exact from='/' to='/post' />
                    <Route path='/about' component={About} />
                    <Route path='/authors' component={Authors} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
