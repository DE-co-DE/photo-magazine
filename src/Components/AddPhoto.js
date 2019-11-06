import React,{Component} from 'react';

class AddPhoto extends Component {
    constructor(){
        super();
       this.state={
           'data':[]
       }
    }
componentDidMount(){
    fetch('https://picsum.photos/v2/list?limit=10')
    .then((resp) => resp.json()) 
     .then((data) =>{
        this.setState({'data':data})
    })
 }



    addPhoto=(event)=>{
        event.preventDefault();
        const description=event.target.elements.description.value
        const imageLink=event.target.elements.link.value
         const post = 
            {
                id:Number(new Date()),
                description,
                imageLink
            }
            if(description && imageLink){
                  this.props.addPhoto(post);
                  this.props.onHistory.push('/')
            }
          
           
        
    }
        render(){
            const {data}=this.state
            const list=data.map((value,index)=>

                <li className="list" key={index}>{value.download_url}</li>
            )
         return (
        
             <div className="form">
                     <form onSubmit={this.addPhoto}>
                         <input type="text" placeholder="Link of an image" name="link"/>
                         <textarea placeholder="Description" name="description" row="6"></textarea>
                         <button>Post</button>
                     </form>
                     <ul>
                         <li className="list">Link of Images</li>
                         {list}
                     </ul>
             </div>
         )
        }
      }
    
    
export default AddPhoto;