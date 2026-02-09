import React, { Component } from 'react'

class Lifecycle_a extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Diana'
        }
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    render() {
        return (
            console.log('Lifecycle A render'),
            <div><h1>Test</h1>
            </div>
        )
    }
}

export default Lifecycle_a
