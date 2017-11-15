import React, {Component} from 'react';
//import Post from './post';
import {Switch, Route} from 'react-router-dom';
import Get from './get';
import SinglePost from "./singlePost";
import MultiplePosts from "./multiplePosts";

class Main extends Component {
    constructor(props) {
        super(props);

        this.fillStateWithData = this.fillStateWithData.bind(this);
        this.state = {
            data: []
        };
    }
    
    fillStateWithData(data) {
        this.setState({
            data
        });
    }

    componentDidMount() {
        new Get().makeRequest(this.fillStateWithData);
    }

    
    render() {

        return (
            <div>
                <Switch>
                    <Route exact path='/post'component={MultiplePosts} />
                    <Route path ='/post/:postId' component={SinglePost} />
                </Switch>
            </div>
        );
    }
}

export default Main;