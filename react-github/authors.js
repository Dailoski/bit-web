import React, { Component } from 'react';

class Authors extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <main className='container'>
                <h1> Authors ({this.props.authors.length}) </h1>
                {this.props.authors.map(() => {
                    return (<div>
                        <p> Podaci o autoru iz single </p>
                        <div className = 'divider'> </div>                        
                    </div>);
                })}
            </main>
        );
    }
}

export default Authors;