import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
    constructor() {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton() {
        this.setState({ isLiked: !this.state.isLiked })
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '點讚'} 👍
            </button>
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
