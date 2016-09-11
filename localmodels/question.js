/*
    Question Model
    Representing an individual question in a problem set
    
    {
        "questionId" : 1,
        "question" : "6.72 xx 10^3",
        "answers" : ["6720","672.02","672000","672"],
        "correct" : "672"
    },
*/
(function (window, HYBRoot) {
    
    HYBRoot.Question = HYBRoot.Question || {};
    if (HYBRoot.Question.moduleName) { return; }
    var HYBModule = HYBRoot.Question;
    HYBModule.moduleName = "Question";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.questionId = 0;
    HYBModule.correctAnswerIndex = 0;
    HYBModule.questionAnswerCount = 0;

    HYBModule.QuestionInit = function(questionRawObject) {
        
        HYBModule.questionId = questionRawObject.questionId;
        var answers = questionRawObject.answers;
        var correct = questionRawObject.correct;                 
        for (var i=0; i < answers.length; i++) {
            if (answers[i] === correct) {
                HYBModule.correctAnswerIndex = i;                
            }
        }
        
        HYBModule.initSuccess = true;
        return HYBModule.questionId;    

    }

}) (window, HYB.Question);
