import React, {Component} from 'react';
import { setInterval } from 'core-js/library/web/timers';


class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: 'loading...'
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date().toLocaleTimeString()
            });
        }, 1000);
    }
    
    render() {
        return (
            <footer className = 'footer container teal-text'> <h5> Copyright (C) BIT November 2017</h5> </footer>
        )
    }
}

export default Footer;