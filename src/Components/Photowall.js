import React, { Component } from 'react';
import Photo from './Photo';

class Photowall extends Component {
    render() {
        return (
            <div className="photoGrid" >
                {this.props.posts.map((post, index) => {
                    return <Photo key={index} post={post} />;
                })}
            </div>
        );
    }
}

export default Photowall;