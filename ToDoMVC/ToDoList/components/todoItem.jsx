import React from 'react';

import TodoActions from 'todoActions';
import TodoTextInput from 'todoTextInput';

import classNames from 'classnames';
let ReactPropTypes = React.PropTypes;

const TodoItem = React.createClass({

  propTypes: {
    todo: ReactPropTypes.object.isRequired
  },

  getInitialState() {
    return {
      isEditing: false
    };
  },

  handleDoubleClick() {
    this.setState({isEditing: true});
  },

  handleToggleComplete() {
    TodoActions.toggleComplete(this.props.todo);
  },
  /**
  * Event handler called within TodoTextInput.
  * Defining this here allows TodoTextInput to be used in multiple places
  * in different ways.
  * @param  {string} text
  */
  handleSave(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  handleDestroyClick() {
    TodoActions.destroy(this.props.todo.id);
  },

  render() {
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input =
      <TodoTextInput
        className="edit"
        onSave={this.handleSave}
        value={todo.text}
        />;
    }

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      <li
        className={classNames({
          'completed': todo.complete,
          'editing': this.state.isEditing })}
          key={todo.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.complete}
              onChange={this.handleToggleComplete}
              />
            <label onDoubleClick={this.handleDoubleClick}>
              {todo.text}
            </label>
            <button className="destroy" onClick={this.handleDestroyClick} />
          </div>
          {input}
        </li>
      );
    }
  });

  export default TodoItem;
