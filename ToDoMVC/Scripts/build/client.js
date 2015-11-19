// This is the entry point for the bundle file that is used during server side creation of the HTML pages
// It is used by the Reactjs.NET engine to produce the HTML markup server side and is a stripped down version of
// the corresponding client bundle as in the server side we need only the widgets and all their dependencies
import TodoApp from 'expose?TodoApp!../../ToDoList/components/TodoApp';
import React from 'expose?React!react';
import ReactDOM from 'expose?ReactDOM!react-dom';