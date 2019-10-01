import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Name from "./Name"
import Stalk from "./Stalk"

class App extends React.Component{
state = {
  user:[],
  name:"KeshawnSharper"
};

componentDidMount(){
  fetch(`https://api.github.com/users/KeshawnSharper`)
  .then(res => res.json())
  .then(data => this.setState({user: data})  )
  .catch(err => console.log(err))

  console.log(this.state.user)
}
handleChange = e => {
  this.setState({name:e.target.value})
}
componentDidUpdate(prevProps,prevState) {
  if (this.state.user !== prevState.user){
    if (this.state.name === "hello"){
      fetch(`https://api.github.com/users/KeshawnSharper`)
  .then(res => res.json())
  .then(data => this.setState({user: data})  )
  .catch(err => console.log(err))
    }
  }
}
fetchUser = e => {
  e.preventDefault()
  fetch(`https://api.github.com/users/${this.state.name}`)
  .then(res => res.json())
  .then(data => this.setState({user: data})  )
  .catch(err => console.log(err))
}

render(){
  console.log(this.state.name)
  console.log(this.state.event)
  console.log(this.state.user)
  console.log(this.state.followers)
  console.log("KS: App.js: App: render")
return (
  <div>
    <div>
  <h2>{this.state.user.login}</h2>
  <img src={this.state.user.avatar_url} />
<p>{this.state.user.bio}</p>

  </div>
 <Name name={this.state.name} />
 <form>
   <input 
   onChange={this.handleChange}
   value={this.state.name}
   />
   <button onClick={this.fetchUser}>Search</button>
   </form>
 </div>
);


}

  
  
  
  
}

export default App;
