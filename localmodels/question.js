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
    HYBModule.questionRawText = 0;
    HYBModule.answers = [];

    //HYBModule.answer1 = "";
    //HYBModule.answer2 = "";
    //HYBModule.answer3 = "";
    //HYBModule.answer4 = "";

    HYBModule.QuestionInit = function(questionRawObject) {
        
        HYBModule.questionId = questionRawObject.questionId;
        HYBModule.questionRawText = questionRawObject.question;
        
        var answers = questionRawObject.answers;
        var correct = questionRawObject.correct;
        
        // todo
        HYBModule.answers = answers;
        //HYBModule.answer1 = answers[0];                         
        //HYBModule.answer2 = answers[1];
        //HYBModule.answer3 = answers[2];
        //HYBModule.answer4 = answers[3];                         
                                                 
        for (var i=0; i < answers.length; i++) {
            if (answers[i] === correct) {
                HYBModule.correctAnswerIndex = i;                
            }
        }
        
        HYBModule.initSuccess = true;
        return HYBModule.questionId;    
    }
}) (window, HYB.Question);
