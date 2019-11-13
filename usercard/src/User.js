import React from "react"


class User extends React.Component{
  constructor(){
      super()
state = {
    followers:[]
}
  }
    componentDidMount(){
        console.log(this.props.name)
        fetch(`https://api.github.com/users/${this.props.name}/followers`)
        .then(res => res.json())
        .then(data => this.setState({followers: data})  )
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
export default User 