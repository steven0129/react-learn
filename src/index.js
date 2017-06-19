import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name: 'Steven',
            isLiked: false
        }
    }

    handleClickOnLikeButton() {
        this.setState((prevState) => {
            return prevState.count++
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickOnLikeButton.bind(this)}>
                    {this.state.count} 👍
                </button>

                <button onClick={this.handleClickOnLikeButton.bind(this)}>
                    {this.state.isLiked ? '取消' : '點讚'} 👍
                </button>
            </div>
        )
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
