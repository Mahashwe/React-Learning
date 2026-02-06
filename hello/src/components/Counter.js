import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    counter() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div> Counter {this.state.count}
                <button onClick={() => this.counter()}>Counter</button>
            </div>

        )
    }
}

export default Counter