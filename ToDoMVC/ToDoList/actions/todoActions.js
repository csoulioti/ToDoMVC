import Dispatcher from 'appDispatcher';
import {ActionTypes} from 'todoConstants';

var TodoActions = {
  /**
  * @param  {string} text
  */
  create(text) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.todoCreate,
      text: text
    });
  },
  /**
  * @param  {string} id The ID of the ToDo item
  * @param  {string} text
  */
  updateText(id, text) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.todoUpdateText,
      id: id,
      text: text
    });
  },
  /**
  * Toggle whether a single ToDo is complete
  * @param  {object} todo
  */
  toggleComplete(todo) {
    var id = todo.id;
    var actionType = todo.complete ?
    ActionTypes.todoUndoComplete :
    ActionTypes.todoComplete;

    Dispatcher.handleViewAction({
      actionType: actionType,
      id: id
    });
  },
  /**
  * Mark all ToDos as complete
  */
  toggleCompleteAll() {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.todoToggleCompleteAll
    });
  },
  /**
  * @param  {string} id
  */
  destroy(id) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.todoDestroy,
      id: id
    });
  },
  /**
  * Delete all the completed ToDos
  */
  destroyCompleted() {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.todoDestroyCompleted
    });
  }
};

export default TodoActions;
