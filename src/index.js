import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>
                    React 小书
                    {this.renderGoodWord(
                        <strong> is good</strong>,
                        <span> is not good</span>
                    )}
                </h1>
            </div>
        )
    }

    renderGoodWord(goodWord, badWord) {
        const isGoodWord = true
        return isGoodWord ? goodWord : badWord
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)