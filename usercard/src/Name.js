import React from "react"
import Axios from "axios"

class Name extends React.Component{
  constructor(){
      super()
      this.state = {
          followers:[]
      }
  } 
    componentDidMount(){
       
console.log(this.props.name)
        fetch(`https://api.github.com/users/${this.props.name}/followers`)
        .then(res => res.json())
        .then(data => this.setState({followers:data}))
        .catch(err => console.log(err))
       }
       componentDidUpdate(prevProps,prevState) {
        if (this.props.name !== prevState.name){
          if (this.props.name === "hello"){
            fetch(`https://api.github.com/users/${this.props.name}/followers`)
        .then(res => res.json())
        .then(data => this.setState({followers:data}))
        .catch(err => console.log(err))
          }
        }
    }
       render(){
           
    return(
        
        <>
        <div>
            {this.state.followers.map(i => <p key={i.id}>{i.login}</p>)}
        </div>
        </>
    )
       }
}
export default Name