import React from "react";
class User extends React.Component { 
    constructor(){
        super();
        this.state={
          data:'Manoj'
        }
    }
    render(){
    return(
      <p>Hello {this.state.data}</p>
  )
    }
}
export default User