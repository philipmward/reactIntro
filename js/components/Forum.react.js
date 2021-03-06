var Forum = React.createClass({

    getInitialState: function(){ // this is where ajax would typically go, React doesn't handle ajax.
        return {
            allAnswers: ForumStore.getAnswers()
        }
    },

    componentDidMount: function(){
        ForumStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        ForumStore.removeListener(this._onChange);
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

    _onChange: function(){
        this.setState({ allAnswers: ForumStore.getAnswers() });
    },

    _onAddAnswer: function(answerText){
        ForumActions.addNewAnswer(answerText);
    }
});
