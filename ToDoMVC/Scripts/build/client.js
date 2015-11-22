// This is the entry point for the bundle file that is loaded inside todoList.
// We expose two objects in the global scope that can be used as regular JavaScript objects (e.g. invoke operations from console)
// All other objects are not accessible from global scope as the resulting bundle contains a huge immediate calling function,
// that doesn't expose anything by default
import TodoApp from 'expose?TodoApp!../../ToDoList/components/todoApp';
import React from 'expose?React!react';
import ReactDOM from 'expose?ReactDOM!react-dom';