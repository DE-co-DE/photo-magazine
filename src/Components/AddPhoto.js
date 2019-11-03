import React,{Component} from 'react';

class AddPhoto extends Component {
    constructor(){
        super();
       this.state={
           'data':[]
       }
    }
componentDidMount(){
    fetch('https://picsum.photos/v2/list?limit=10').then((resp) => resp.json()) 
     .then((data) =>{
   
    console.log(data)
    this.setState({'data':data})
    })
 }



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