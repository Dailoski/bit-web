import React, { Component } from 'react';
import Fetch from 'react-fetch';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {id : props.match.params.postId };
        console.log(this.state);
    }
    componentDidMount() {
        fetch( 'https://jsonplaceholder.typicode.com/posts')
            .then(result => result.json())
            .then(result => {this.setState({repos: result});
            
            
            });
    }
    render() {

        return (
            <main>
                <h1> {this.props.title} </h1>
                <p> {this.props.author} </p>
                <section> {this.props.body} </section>
                <div className='divider'> </div>
                <p> 3 more posts from the same author </p>

            </main>
        );
    }

}

export default SinglePost;
