# Flux TodoMVC Example

## How to run the application

You must have [npm](https://www.npmjs.org/) installed on your computer.
From the root project directory run these commands from the command line:

    npm install

This will install all dependencies.

To build the javascript files of application, first run this command:

    webpack

This will perform an initial build and start a watcher process that will update client.js and server.js with any changes you wish to make.

Install gulp globally:

    npm install --global gulp

To enable watcher you have to run this command:

    gulp watch

This will watch files and do something when a file changes. This always returns an EventEmitter that emits change events.

