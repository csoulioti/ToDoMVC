'use strict';
import React from 'react';

import TodoActions from 'todoActions';
import TodoItem from 'todoItem';

let ReactPropTypes = React.PropTypes;

const MainSection = React.createClass({

  propTypes: {
    allTodos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired, 
    isPreviewMode: ReactPropTypes.bool
  },

  /**
  * Event handler to mark all TODOs as complete
  */
  handleToggleCompleteAll: function() {
    TodoActions.toggleCompleteAll();
  },

  render: function() {
    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    let allTodos = this.props.allTodos;
    let todos = [];

    for (var key in allTodos) {
        todos.push(<TodoItem key={key} todo={allTodos[key]} isPreviewMode={this.props.isPreviewMode} />);
    }

    let sectionMarkUp = (<section id="main">
                            <input id="toggle-all"
                            type="checkbox"
                            onChange={this.handleToggleCompleteAll}
                            checked={this.props.areAllComplete} />
                            <label htmlFor="toggle-all">Mark all as complete</label>
                            <ul id="todo-list">{todos}</ul>
                          </section>);

     if (this.props.isPreviewMode) {
         sectionMarkUp =  (<section id="main">
                              <ul id="todo-list">{todos}</ul>
                            </section>);
     }
     return (
         <div>
             {sectionMarkUp}
         </div>
    );
  }
});

export default MainSection;
