import React, {Component} from 'react';
import Post from './post';
import Get from './get';


class MultiplePosts extends Component {
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
            <main className = 'container card-panel margina hoverable'>
                {
                    this.state.data.slice().map(post => 
                        <Post post = {post} key = {post.id}/>
                    )
                }
            </main>
        );
    }
}

export default MultiplePosts;