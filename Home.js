import React from 'react';
import background from '../Components/background.jpg'
 
function Home (){
    return (
    
     <div>
     <h1>Welcome to Knowledge Lens </h1>
     <div style={{ backgroundImage: `url(${background})` }}/>
     </div>
    )
    
}
 
export default Home;