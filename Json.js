import React from 'react';
import axios from 'axios';  

    
export default class Json extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
   
    axios.get("./db.json")  
      .then(res => {
        //console.log(res.data);
        const posts = res.data;  
        this.setState({ posts });  
      })  
  } 
    
  render() {  
    return (  
      <div>  
        <h1> Example of React Axios  </h1>  
    
        <table className="table table-striped">  
            <thead>  
              <tr>  
                  <th>Title</th>  
                  <th>Author</th>  
                  <th>Id</th>  
                   
              </tr>  
            </thead> 
             <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.title}</td>  
                  <td>{post.author}</td>  
                  <td>{post.id}</td>  
                   
                </tr>  
              ))}  
            </tbody>   
    
        </table>  
      </div>  
    )  
  }  
}  

// import React from 'react'
// import axios from 'axios'
// function Json(){
//     const[name,setName]=useState([])
//     const json =()=>{
//         axios.get("").then((response)=>{
//             console.log(response);
//         })
//     }
//     return(
        
//     )
// }
// export default Json 