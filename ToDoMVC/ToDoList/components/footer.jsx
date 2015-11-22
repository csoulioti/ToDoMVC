'use strict';

import React from 'react';

import TodoActions from 'todoActions';

const Footer = React.createClass({

  propTypes: {
    allTodos: React.PropTypes.object.isRequired
  },

  /**
  * Event handler to delete all completed TODOs
  */
  handleClearCompletedClick() {
    TodoActions.destroyCompleted();
  },
  render() {
    var allTodos = this.props.allTodos;
    var total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    var completed = 0;
    for (var key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    var itemsLeft = total - completed;
    var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    // Undefined and thus not rendered if no completed items are left.
    var clearCompletedButton;
    if (completed) {
      clearCompletedButton =
      <button
        id="clear-completed"
        onClick={this.handleClearCompletedClick}>
        Clear completed ({completed})
      </button>;
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  }
});

export default Footer;
