'use strict';

import AppDispatcher from 'appDispatcher';
import StoreWithEvents from 'storeWithEvents';
import {EventEmitter} from 'events';
import {ActionTypes} from 'todoConstants';
import assign from 'object-assign';

let changeEvent = 'change';
let storeWithEvents = new StoreWithEvents(changeEvent);

let _todos = {};

/**
* Create a TODO item.
* @param  {string} text The content of the TODO
*/
const create = (text) => {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
* Update a TODO item.
* @param  {string} id
* @param {object} updates An object literal containing only the data to be
*     updated.
*/
const update = (id, updates) => {
  _todos[id] = assign({}, _todos[id], updates);
}

/**
* Update all of the TODO items with the same object.
* @param  {object} updates An object literal containing only the data to be
*     updated.
*/
const updateAll = (updates) => {
  for (var id in _todos) {
    update(id, updates);
  }
}

/**
* Delete a TODO item.
* @param  {string} id
*/
const destroy = (id) => {
  delete _todos[id];
}
//Delete all the completed TODO items.
const destroyCompleted = () => {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}

// Register callback to handle all updates
const registeredCallback = (payload) => {
  let action = payload.action;
  let text;

  switch (action.actionType) {
    case ActionTypes.todoCreate:
    text = action.text.trim();
    if (text !== '') {
      create(text);
      storeWithEvents.emitChange();
    }
    break;

    case ActionTypes.todoToggleCompleteAll:
    if (TodoStore.areAllComplete()) {
      updateAll({ complete: false });
    } else {
      updateAll({ complete: true });
    }
    storeWithEvents.emitChange();
    break;

    case ActionTypes.todoUndoComplete:
    update(action.id, { complete: false });
    storeWithEvents.emitChange();
    break;

    case ActionTypes.todoComplete:
    update(action.id, { complete: true });
    storeWithEvents.emitChange();
    break;

    case ActionTypes.todoUpdateText:
    text = action.text.trim();
    if (text !== '') {
      update(action.id, { text: text });
      storeWithEvents.emitChange();
    }
    break;

    case ActionTypes.todoDestroy:
    destroy(action.id);
    storeWithEvents.emitChange();
    break;

    case ActionTypes.todoDestroyCompleted:
    destroyCompleted();
    storeWithEvents.emitChange();
    break;

    default:
    // no op
  }
};
AppDispatcher.register(registeredCallback);

let TodoStore = {
  // Public methods
  addChangeListener: (callback) => {
    storeWithEvents.addChangeListener(callback);
  },
  removeChangeListener: (callback) => {
    storeWithEvents.removeChangeListener(callback);
  },
  //Tests whether all the remaining TODO items are marked as completed.
  //@return {boolean}
  areAllComplete: () => {
    for (var id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },
  // Get the entire collection of TODOs.
  // @return {object}
  getAll: () => {
    return _todos;
  }
};

export default TodoStore;
