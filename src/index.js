import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends Component {
    constructor() {
        super()
    }

    sayHi() {
        alert('Hello World')
    }

    render() {
        return (
            <div onClick={this.sayHi.bind(this)}>Hello World</div>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
