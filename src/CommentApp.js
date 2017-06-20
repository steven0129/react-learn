import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComment()
    }

    handleSubmitComment(comment) {
        if (!comment)
            return
        if (!comment.userName)
            return alert('請輸入使用者名稱')
        if (!comment.content)
            return alert('請輸入評論內容')

        this.setState((prevState) => {
            prevState.comments.push(comment)
            this._saveComment(this.state.comments)
        })
    }

    _loadComment() {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments: comments })
        }
    }

    _saveComment(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp