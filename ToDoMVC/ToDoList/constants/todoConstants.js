import keyMirror from 'keymirror';

let TodoConstants = {
  ActionTypes: {
      todoCreate: 'TODO_CREATE',
      todoComplete: 'TODO_COMPLETE',
      todoDestroy: 'TODO_DESTROY',
      todoDestroyCompleted: 'TODO_DESTROY_COMPLETED',
      todoToggleCompleteAll: 'TODO_TOGGLE_COMPLETE_ALL',
      todoUndoComplete: 'TODO_UNDO_COMPLETE',
      todoUpdateText: 'TODO_UPDATE_TEXT'
  }
};
export default TodoConstants;
