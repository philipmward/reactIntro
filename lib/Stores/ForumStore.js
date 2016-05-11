var answerData = {
    "1": {
        body: "Isn't that about time travel?",
        correct: false
    },
    "2": {
        body: "React and Flux are a tool and methodologies for building the front end of web applications.",
        correct: false
    },
    "3": {
        body: "React is a synonym for 'respond'",
        correct: false
    }
};

var ForumStore = new EventEmitter();

ForumStore.getAnswers = function () {
    return answerData; //typically would be api call.
};

ForumStore.addAnswer = function (newAnswer) {
    answerData[Object.keys(answerData).length + 1] = {
        body: newAnswer,
        correct: false
    };
};

ForumStore.markAsCorrect = function (id) {
    for (var key in answerData) {
        answerData[key].correct = false;
    }

    answerData[id].correct = true;
};

ForumDispatcher.register(function (action) {

    switch (action.actionType) {
        case 'FORUM_ANSWER_ADDED':
            console.log("Answer added!");
            ForumStore.addAnswer(action.newAnswer);
            break;

        case 'FORUM_ANSWER_MARKED_CORRECT':
            console.log("Answer marked correct!");
            ForumStore.markAsCorrect(action.id);
            break;
    }
});