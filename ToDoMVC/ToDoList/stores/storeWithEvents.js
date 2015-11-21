import { EventEmitter } from 'events';

// Base class for all stores used in our FLUX architecture
// Acts as an intermediate class for the library EventEmitter class
class StoreWithEvents extends EventEmitter {
    constructor(changeEvent) {
        super();
        this.changeEvent = changeEvent;
    }

    emitChange () {
        super.emit(this.changeEvent);
    }

    addChangeListener (callback) {
        super.on(this.changeEvent, callback);
    }

    removeChangeListener (callback) {
        super.removeListener(this.changeEvent, callback);
    }
}

export default StoreWithEvents;
