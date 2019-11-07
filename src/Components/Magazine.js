import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

function Magazine(props) {
    const post = [...props.posts];
    let len = post.length - 1;
    return (
        <div>
            <Link className="add-icon" to="/add-photo"></Link>
            <div className="photo-grid">
                {post
                    .sort(function(x, y) {
                        return y.id - x.id;
                    })
                    .map((post, index) => (
                        <Photo
                            key={index}
                            post={post}
                            {...props}
                            index={len - index}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Magazine;
