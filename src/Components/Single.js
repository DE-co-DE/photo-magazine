import React,{Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';
import comments_all from '../data/comments';

class Single extends Component {
  constructor(){
    super();
     this.state = { 
      comments: comments_all,
      

    }
  }
   addComment=(comment)=>{
      this.setState((state) => ({
           comments: state.comments.concat(comment)
    }))
      
      
}
    render(){
            const {location} = this.props;
            const post=location.state.post 
            const {comments}=this.state;
         return (               
             <div className="single-photo">
                  <Photo post={post} {...this.props} view="single"/>
                  <Comments  comments = {comments} addComment={this.addComment}/>
            </div>
         )
        }
      }
  
    
    
export default Single;