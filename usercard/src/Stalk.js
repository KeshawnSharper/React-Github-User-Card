import React from "react"
import NewStalk from "./newStalk"

class Stalk extends React.Component{
    constructor(){
        super()
        this.name = ""
    }
    state = {
        name: []
    }
    handleChange = (e) => {
         this.setState({name:e.target.value})
         
    }
    handleSubmit = (e,item) => {
        e.preventDefault()
         console.log(this.state.name)
    }
    
       
    render(){
        console.log(this.state.name)
        return(
     <form onSubmit={this.handleSubmit}>
     <input
     onChange={this.handleChange}
      name={"Githubname"}
                />
                <button>Search</button>
                <NewStalk name={this.state.name} />
            </form>
        )
    }
}

export default Stalk