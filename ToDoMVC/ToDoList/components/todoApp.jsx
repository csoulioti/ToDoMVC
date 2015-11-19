var Footer = require('./footer');
var Header = require('./header');
var MainSection = require('./mainSection');
var React = require('react');
var TodoStore = require('../stores/todoStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
    return {
        allTodos: TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    };
}

var TodoApp = React.createClass({

    getInitialState: function() {
        return getTodoState();
    },

    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange);
    },

    /**
     * @return {object}
     */
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
},

/**
 * Event handler for 'change' events coming from the TodoStore
 */
_onChange: function() {
    this.setState(getTodoState());
}

});

module.exports = TodoApp;