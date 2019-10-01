import React from "react"

class Stalk extends React.Component{
    state = {
        name: []
    }
    componentDidMount(){
        fetch(`https://api.github.com/users/${this.state.name}`)
        .then(res => res.json())
        .then(data => this.setState({user: data})  )
        .catch(err => console.log(err))
       }
    render(){
        return(
     <form onSubmit={this.handleSubmit}>
     <input
     onChange={this.handleChange}
      value={this.state.name}
      name={githubname}
                />
            </form>
        )
    }
}