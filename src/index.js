import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '點讚'
    }

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
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? this.props.likedText : this.props.unlikedText} 👍
      </button>
        )
    }
}

class Index extends Component {
    constructor() {
        super()
        this.state = {
            likedText: '已讚',
            unlikedText: '讚'
        }
    }

    handleClickOnChange() {
        this.setState({
            likedText: '取消',
            unlikedText: '點讚'
        })
    }

    render() {
        return (
            <div>
                <LikeButton
                    likedText={this.state.likedText}
                    unlikedText={this.state.unlikedText} />
                    
                <div>
                    <button onClick={this.handleClickOnChange.bind(this)}>
                        修改 wordings
                    </button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))