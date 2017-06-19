import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Title extends Component {
    handleClickOnTitle(word, e) {
        console.log(this, word)
    }

    render() {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书</h1>
        )
    }
}

ReactDOM.render(
    <Title />,
    document.getElementById('root')
)