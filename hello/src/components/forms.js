import React, { Component } from 'react'


class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            options: ''
        }
    }

    HandleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    HandleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    HandleOptionsChange = (event) => {
        this.setState({
            options: event.target.value
        })
    }

    Handlesubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.options}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.Handlesubmit}>
                <div> <h1>Welcome </h1>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.HandleUsernameChange} />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.HandleCommentsChange} />
                    </div>
                    <div>
                        <label>Framework</label>
                        <select value={this.state.options} onChange={this.HandleOptionsChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" value={this.state.options}>Submit</button>
                    </div>

                </div>
            </form >

        )
    }
}
export default Forms
