import React from 'react';
import { Link } from 'react-router-dom'
import image from '../data/demo.jpg'
class Photo extends React.Component {
    render() {
        const post = this.props.post;
        var path= {
                            pathname: `/single/${post.id}`,
                            state: {
                            post: post
                            }
                            }
        return (

            <figure className="figure">
                  <Link to= {path}>
                <img className="photo" src={post.imageLink} alt={post.description} onError={(event)=>{event.target.src=image}}/></Link>
                <figcaption><p>{post.description}</p></figcaption>
                {   this.props.view===undefined &&(
                        <div className="button-container">
                          <button onClick = {()=>{
                          this.props.onRemovePhoto(post)
                          }}> Remove </button>
                          <Link className="button" to={path}>
                            <div className="comment-count">
                              <div className="speech-bubble"></div>
                              
                            </div>
                          </Link>
                        </div>
                )}
            </figure>
        )
    }
}
export default Photo;