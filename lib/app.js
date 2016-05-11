ReactDOM.render(React.createElement(Forum, null), // finds the component in the Forum.react.js
document.getElementById('forum') // attach it to the element of id = forum
);

var myEmitter = new EventEmitter();

myEmitter.on('STARTED_THE_APP', function () {
    console.log('started the app');
});

myEmitter.on('STARTED_THE_APP', function () {
    console.log('started the app #2');
});

myEmitter.emit('STARTED_THE_APP');

ForumDispatcher.register(function (action) {
    console.log('received an action');
    console.log(action);
});