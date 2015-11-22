import React from 'react';

import TodoActions from 'todoActions';
import TodoTextInput from 'todoTextInput';

const Header = React.createClass({

  /**
  * Event handler called within TodoTextInput.
  * Defining this here allows TodoTextInput to be used in multiple places
  * in different ways.
  * @param {string} text
  */
  handleSave(text) {
    if (text.trim()){
      TodoActions.create(text);
    }
  },

  render() {
    return (
      <header id="header">
        <h1>Things to do</h1>
        <TodoTextInput id="new-todo"
          placeholder="What needs to be doneff"
          onSave={this.handleSave} />
      </header>
    );
  }
});

export default Header;
