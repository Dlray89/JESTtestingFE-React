import React, { Component} from "react"


export default class Clock extends Component {
    state = {
        time: new Date()
    }

    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }
    render(){
        return(
            <div>
                <p> {this.state.time.toLocaleTimeString()}</p>

            </div>
        )
    }
}