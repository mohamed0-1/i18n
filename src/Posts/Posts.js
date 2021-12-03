import React, { Component } from 'react'
import axios from 'axios'
export default class Posts extends Component {
   state={}
    componentDidMount(){
      axios.get('posts')
      .then(response=>{
        const posts =response.data;
        this.setState({posts})
      })
    }
    render() {
        const posts = this.state.posts;
         if (posts) return(
           posts.map(post => {
               return(
                   <div className="row mb-4">
                       <div className="col-4"></div>
                       <div className="col-4"> 
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                       </div>
                   </div>
               )


           })
        );
         return "no posts"
    }
}

