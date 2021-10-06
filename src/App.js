import React, {Component} from 'react';
import './App.css';
import Card from './Components/card-list/card-list';
import SearchBox from './Components/SearchBox/searchBox.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      Monsters:[
     
      ],
      SearchFiled: ''

    };
  }
  handleChange=e=>{
    this.setState({SearchFiled: e.target.value});
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({Monsters:users}));
  }
  render(){ 
    const{Monsters,SearchFiled}=this.state;
    const filterMonster=Monsters.filter(monster=>monster.name.toLowerCase().includes(SearchFiled.toLowerCase()));

    return (
    <div className="App">
      <h1>Paradox Monsters</h1>
    <SearchBox 
     placeholder="Search Monsters"
     handleChange={this.handleChange}
    />
    <Card Monsters={filterMonster} />
     
    </div>)
  }
}

export default App;
