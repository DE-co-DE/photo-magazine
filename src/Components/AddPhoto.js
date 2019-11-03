import React,{Component} from 'react';

class AddPhoto extends Component {
  

    addPhoto=(event)=>{
        console.log(event);
        event.preventDefault();
        console.log(event.target.elements.link.value);
        console.log(event.target.elements.description.value);
        const post = 
            {
                id:Number(new Date()),
                description: event.target.elements.description.value,
                imageLink: event.target.elements.link.value
            }
           this.props.onAddPhoto(post);
           
        
    }
        render(){
         return (
        
             <div className="form">
             <form onSubmit={this.addPhoto}>
                 <input type="text" placeholder="Link of an image" name="link"/>
                 <textarea placeholder="Description" name="description" row="6"></textarea>
                 <button>Post</button>
             </form>
         </div>
         )
        }
      }
    
    
export default AddPhoto;