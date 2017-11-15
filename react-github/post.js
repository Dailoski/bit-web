import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
class Post extends Component {
    constructor(props) {
        
        super(props);
    }

    render() {
        const a = '/post/' + this.props.post.id;
        return (
            <div className = 'section'> 
                <blockquote>
                  
                    <Link  to= {a} >{this.props.post.title}</Link>
                </blockquote>
                <p> 
                    {this.props.post.body}
                </p>
                <div className = 'divider'> </div>
            </div>
        );
    }
}

// Post.propTypes = {
//     post: PropTypes.object.isRequired,
//     post: PropTypes.shape({
//         title: PropTypes.string,
//         body: PropTypes.string,
//         id: PropTypes.oneOfType([
//             PropTypes.number,
//             PropTypes.string
//         ])
//     }),
//     // post: PropTypes.objectOf(PropTypes.string),
//     post: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.object
//     ]),
//     test: PropTypes.oneOf(['Opa', 'Ovo je test']),
//     position: PropTypes.oneOf(['21', 21]),
//     position: PropTypes.oneOfType([PropTypes.number])
// }

// Post.defaultProps = {
//     test: 'Ovo je test',
//     position: 21
// }

export default Post;