import React from 'react';

class TextAreacomponent extends React.Component {

    charCount = 0;
    constructor() {
        super();
        this.state = {};
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    render() {
        let text = 'text' in this.state ? this.state.text : this.props.text;

        return (
            <div>
                <textarea id="textArea" defaultValue={text} onChange={this.onTextChanged}>
                </textarea>
                <span>Counter: {text.length}</span>
            </div>
        )
    }

    onTextChanged = (event)=> {
        this.setState({
            text: event.target.value
        });
    }
}



export default TextAreacomponent;
 