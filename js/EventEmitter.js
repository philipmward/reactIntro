function EventEmitter(){
    this._events = {};
}

// listener is a function and type is a string. So we are looking for an array of name type in _events.type,
// and creating new if it doesn't exit. We are then adding a function to the array.
EventEmitter.prototype.on = function(type, listener) {
    this._events[type] = this._events[type] || [];
    this._events[type].push(listener);
};

EventEmitter.prototype.emit = function(type){
    if(this._events[type]){
        this._events[type].forEach(function(listener){
            listener(); // listener is a method so this executes it.
        });
    }
};

EventEmitter.prototype.removeListener = function(type, listener){
    if(this._events[type]){
        this._events[type].splice(this._events[type].indexOf(listener), 1);
    }
};