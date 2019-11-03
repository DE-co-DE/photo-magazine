import React,{Component} from 'react';
import Magazine from './Magazine';
import AddPhoto from './AddPhoto';
import Single from './Single';
import posts from '../data/posts';
import {Route , Link} from 'react-router-dom';

class Main extends Component {

  constructor(){
    super()
    this.state = {  
        posts: [],
    }
  }
  componentDidMount(){
   this.setState({'posts':posts})
                }
  removePhoto=(postRemove)=>{
      this.setState((state) => ({
          posts: state.posts.filter(post=>post !== postRemove)
          }));
    }

  addPhoto=(postAdd)=>{
    this.setState((state) => ({
        posts: state.posts.concat([postAdd])
    }));
    }

    render(){
     return
      <div>
            <h1><Link to="/" >Photo-Magazine</Link></h1>
          <Route exact path="/" render={()=>(
              <div>
                <Magazine posts={this.state.posts} onRemovePhoto = {this.removePhoto}/>
              </div>
          )} />
              
          <Route path="/add-photo" render={({history})=>(
               <div> 
                    <AddPhoto onAddPhoto = {(post)=>{
                      console.log(post);
                      this.addPhoto(post);
                      history.push('/');
                    }
                    }/>
                    
                    </div>
           )} />  
             <Route path="/single/:id" render={(params)=>(
               <div>  
                    <Single {...this.props}  {...params}/> 
              </div>
           )} />         
       </div>
    }
  }

export default Main;

