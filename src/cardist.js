import React from 'react';
import App from './App';

const Cardist=({robots})=>{
	const Cardcomponent=robots.map((user,i)=>{
          return  <App key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})
	return(
      <div>
      {
          robots.map((user,i)=>{
          return (
           <App 
           key={i} 
           id={robots[i].id} 
           name={robots[i].name} 
           email={robots[i].email}
           />
           );
	})
    }

      </div>

	);
}


export default Cardist;