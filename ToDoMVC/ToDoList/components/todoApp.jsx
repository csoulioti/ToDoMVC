'use strict';

import React from 'react';

import Footer from 'footer';
import Header from 'header';
import MainSection from'mainSection';

import TodoStore from 'todoStore';

const TodoApp = React.createClass({

  getInitialState() {
    return {
      allTodos: TodoStore.getAll(),
      areAllComplete: TodoStore.areAllComplete()
    };
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  /**
  * Event handler for 'change' events coming from the TodoStore
  */
  _onChange: function() {
    this.setState({
      allTodos: TodoStore.getAll(),
      areAllComplete: TodoStore.areAllComplete()
    });
  },

  render: function() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
          />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  }
});

export default TodoApp;
