import React, { Component } from "react"
import {Checkbox} from "@material-ui/core"

class Items extends Component {
    state ={
        id: "",
        itemName: "",
        completed: false
    }


    render(){
        const { completed } = this.props
        return(
            <div>
                {this.props.item.itemName}
                <Checkbox name={this.props.item.completed} value={completed} onChange={e => this.setState({ completed: true})} />
                {this.props.item.completed}
            </div>
        )
    }
}

export default Items