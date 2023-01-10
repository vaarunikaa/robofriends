import React from 'react';

const Searchbox=({searchfield,searchChange})=>{
	return(
      <div className='pa2'>
      
      <input
       className='pa3 bg-lightest-blue ba b--green'
       type='search' 
       placeholder='search robots'
       onChange={searchChange}
       />
       
      </div>
    );
}

export default Searchbox;