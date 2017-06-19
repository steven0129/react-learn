import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
    constructor() {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        const wordings=this.props.wordings || {
            likedText: '取消',
            unlikedText: '點讚'
        }

        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍
            </button>
        )
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton wordings={{likedText: '已讚', unlikedText: '讚'}} />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))