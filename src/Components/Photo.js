import React from "react";
import { Link } from "react-router-dom";
import image from "../data/demo.jpg";
class Photo extends React.Component {
    render() {
        const { post, index, removePost } = this.props;

        return (
            <figure className="figure">
                <Link to={`single/${post.id}`}>
                    <img
                        className="photo"
                        src={post.imageLink}
                        alt={post.description}
                        onError={event => {
                            event.target.src = image;
                        }}
                    />
                </Link>
                <figcaption>
                    <p>{post.description}</p>
                </figcaption>
                {this.props.view === undefined && (
                    <div className="button-container">
                        <button
                            onClick={() => {
                                removePost(index);
                            }}
                        >
                          Remove
                        </button>
                        <Link className="button" to={`single/${post.id}`}>
                            <div className="comment-count">
                                <div className="speech-bubble"></div>
                            </div>
                        </Link>
                    </div>
                )}
            </figure>
        );
    }
}
export default Photo;
