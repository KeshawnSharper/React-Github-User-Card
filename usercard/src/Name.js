import React from "react"
import Axios from "axios"

class Name extends React.Component{
   
state = {
    followers:[]
}
    componentDidMount(){
       

        fetch(`https://api.github.com/users/KeshawnSharper/followers`)
        .then(res => res.json())
        .then(data => this.setState({followers:data}))
        .catch(err => console.log(err))
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