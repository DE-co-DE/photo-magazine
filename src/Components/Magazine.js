import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router-dom';

function Magazine(props) {
    const post=[...props.posts]
    return <div>
        <Link className="add-icon" to="/add-photo"></Link>
        <div className="photo-grid">
            {post.reverse()
           .map((post, index) =>
                    <Photo key={index} post={post} {...props} index={index}  onRemovePhoto={props.onRemovePhoto}/>)
            }
        </div></div>
}






export default Magazine;