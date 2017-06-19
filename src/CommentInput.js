import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            content: ''
        }
    }

    handleUserNameChange(e) {
        this.setState({
            userName: e.target.value
        })
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            let { userName, content } = this.state
            this.props.onSubmit({ userName, content })
        }

        this.setState({ content: '' })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用戶名: </span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.userName}
                            onChange={this.handleUserNameChange.bind(this)} />
                    </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>內容: </span>
                    <div className='comment-field-input'>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>預覽: </span>
                    <div className='comment'>
                        <div className='comment-user'>
                            <span>{this.state.userName} </span>：
                        </div>
                        <p>{this.state.content}</p>
                    </div>
                </div>

                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>發布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput