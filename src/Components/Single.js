import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
    render() {
      
        const { posts, comments, match } = this.props;
        const id = Number(match.params.id);
        const post = posts.find(post => post.id == id);

        return (
            <div className="single-photo">
                <Photo post={post} {...this.props} view="single" />
                <Comments
                    comments={comments[id] || []}
                    addComment={this.props.addComment}
                    id={id}
                />
            </div>
        );
    }
}

export default Single;
