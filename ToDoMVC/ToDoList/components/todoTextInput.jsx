import React from 'react';
let ReactPropTypes = React.PropTypes;

let ENTER_KEY_CODE = 13;

const TodoTextInput = React.createClass({

  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState() {
    return {
      value: this.props.value || ''
    };
  },

  /**
  * Invokes the callback passed in as onSave, allowing this component to be
  * used in different ways.
  */
  handleSave() {
    this.props.onSave(this.state.value);
    this.setState({value: '' });
  },

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  },
  handleKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.handleSave();
    }
  },
  render() {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this.handleSave}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        value={this.state.value}
        autoFocus={true}
        />
    );
  }
});

export default TodoTextInput;
