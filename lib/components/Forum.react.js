var Forum = React.createClass({
    displayName: "Forum",


    getInitialState: function () {
        // this is where ajax would typically go, React doesn't handle ajax.
        return {
            allAnswers: ForumStore.getAnswers()
        };
    },

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(ForumHeader, null),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(ForumQuestion, null),
                React.createElement("hr", null),
                React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
                React.createElement("hr", null),
                React.createElement(
                    "h4",
                    null,
                    "Add an answer"
                ),
                React.createElement(ForumAddAnswerBox, { onAddAnswer: this._onAddAnswer })
            )
        );
    },

    _onAddAnswer: function (answerText) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    }
});