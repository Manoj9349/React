import React from 'react'

// function Greet() {
//    return <h>Hello Manoj</h>
// }
// const Greet=() => <h1> Hello Manoj</h1>
const Greet= props=>{ 
   console.log(props)
   return <h1>User Name: {props.name} </h1>

} 
export default Greet


