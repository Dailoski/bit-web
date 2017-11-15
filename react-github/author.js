import React, { Component } from 'react';

class Author extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <main>
                <p> Podaci o autoru iz props </p>
            </main>
        );
    }
}

export default Author;