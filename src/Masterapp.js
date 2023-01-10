import React ,  {Component} from 'react';
import Cardist from './cardist'; 
import robots from './robots';
import Searchbox from './Searchbox';
import Search from './Search';
import './Masterapp.css';



class Masterapp extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})

		.then(users=>{
          this.setState({robots:users})
		})
		
	}

	onSearchChange=(event)=>{
       this.setState({searchfield: event.target.value});
       
	}
	render(){
		const {robots,searchfield}=this.state;
		const filteredRobots=robots.filter(robot=>{
       	return robot.name.toLowerCase().includes(searchfield.toLowerCase());
       })
		if (!robots.length) {
			return <h1>Loading</h1>
		} else{
         return(
     <div className='tc'>
     <h1 className='f1'>Robofriends</h1>
     <Searchbox searchChange={this.onSearchChange}/>
     <Search>
           <Cardist robots={filteredRobots}/>
     </Search>
     </div>
	);
		}
      	
	
}
}


export default Masterapp;