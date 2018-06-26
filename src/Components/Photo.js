import React, { Component } from 'react';

class Photo extends Component {
    render() {
        const { imageLink, description } = this.props.post;
        return (
            <figure className="figure">
                <img className="photo" src={imageLink} alt={description} />
                <figcaption><p>{description}</p></figcaption>
                <div className="button-container">
                    <button className="remove-button">Remove</button>
                </div>
            </figure>
        );
    }
}

export default Photo;