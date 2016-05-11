var Forum = React.createClass({

    getInitialState: function(){ // this is where ajax would typically go, React doesn't handle ajax.
        return {
            allAnswers: ForumStore.getAnswers()
        }
    },

   render: function(){
       return (
           <div>
               <ForumHeader />

               <div className="container">
                   <ForumQuestion />
                   <hr />
                   <ForumAnswers allAnswers = { this.state.allAnswers } />
                   <hr />
                   <h4>Add an answer</h4>
                   <ForumAddAnswerBox onAddAnswer = { this._onAddAnswer } />
               </div>
           </div>
       );
   },

    _onAddAnswer: function(answerText){
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    }
});
