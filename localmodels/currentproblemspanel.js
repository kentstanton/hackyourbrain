// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.CurrentProblemsPanel = HYBRoot.CurrentProblemsPanel || {};
    if (HYBRoot.CurrentProblemsPanel.moduleName) { return; }
    var HYBModule = HYBRoot.CurrentProblemsPanel;
    HYBModule.moduleName = "Current Problems Panel";
    'use strict';

    HYBModule.Initalized = false;
    HYBModule.Id = 0;
    HYBModule.ProblemSetId = 0;    
    HYBModule.TopicData = "";
    HYBModule.ProblemSetData = "";

    // todo
    /*
        First implementation:
        The topic and problem sets are passed in mocks

    */
    HYBModule.CurrentProblemsPanelInit = function(topicData, problemSetData, currentProblemSetID) {
        if (topicData === undefined || problemSetData === undefined) {return false;}
        HYBModule.ProblemSetId = currentProblemSetID;
        HYBModule.TopicId = topicData.id;
        HYBModule.TopicData = topicData;
        HYBModule.ProblemSetData = problemSetData;
        HYBModule.Initalized = true;
        return HYBModule.Initalized;
    }

    //-todo -- consolidate the topic and problem set
    HYBModule.ProblemsPanelRender = function(currentProblemSetID) {
        var questionSet = GetNextProblemSet(currentProblemSetID);
        $("#problems-panel-rule").text(HYBModule.TopicData.topicRule);
        ProblemSetProblemsRender(questionSet);
        ProblemSetTitleRender();        
    }


    //-------------------------------------------
    // private methods
    //-------------------------------------------

    //-todo -- rethink and rewrite
    ProblemSetProblemsRender = function(questionSet) {
        var problemSetHtml = "";
        for (var questionLoopCounter=0; questionLoopCounter < questionSet.length; questionLoopCounter++) {
            var theQuestion = GetQuestionFromProblemSet(questionSet, questionLoopCounter);
            
            // start the row
            problemSetHtml = problemSetHtml + '<tr id="question-row-' + questionLoopCounter + '"><td > ` ' + theQuestion.questionRawText + ' ` </td>';

            // display and add click handlers for the answers
            for (var answerLoopCounter=0; answerLoopCounter < theQuestion.answers.length; answerLoopCounter++) {
                var answerID = 'id="question' + questionLoopCounter + '-answer' + answerLoopCounter;
                if (theQuestion.correctAnswerIndex === answerLoopCounter) {
                    problemSetHtml = problemSetHtml + '<td class= "answer-correct" ';
                } else {
                    problemSetHtml = problemSetHtml + '<td class= "answer-incorrect" '; 
                }
                problemSetHtml = problemSetHtml + answerID + '"> ` ' + theQuestion.answers[answerLoopCounter] + '  ` </td><';
                
            }
            // end the row          
            problemSetHtml = problemSetHtml + '</tr>';
        }
        
        $("#problem-set-table").html(problemSetHtml);
        
        $(".answer-correct").click( function() { $( this ).css('background-color', 'green'); });
        $(".answer-incorrect").click( function() { $( this ).css('background-color', 'red'); });
        
    }

    //-render
    function ProblemSetTitleRender() {
        var psTitle = GetProblemSetTitle(HYBModule.ProblemSetId);
        $("#current-problemset-name").text(psTitle);    
    }

    function GetProblemSetTitle(currentProblemSetID) {
    var psModel = HYB.ProblemSet;
        var ProblemSet = psModel.ProblemSet;
        var problemSetId = ProblemSet.LoadProblemSet(currentProblemSetID);
        var psTitle = ProblemSet.ProblemSetName + "; Level: " + ProblemSet.ProblemSetLevel + "; Sequence: " + ProblemSet.ProblemSetSequence
        return psTitle;
    }

    function GetNextProblemSet(currentProblemSetID) {
    var psModel = HYB.ProblemSet;
        var ProblemSet = psModel.ProblemSet;
        var problemSetId = ProblemSet.LoadProblemSet(currentProblemSetID);
        var rawQuestions = ProblemSet.ProblemRawObjects;
        return rawQuestions;
    }

    function GetQuestionFromProblemSet(rawQuestions, questionId) {
        var aQuestion = rawQuestions[questionId];
        var questionModel = HYB.Question;
        var theQuestion = questionModel.Question;
        var questionID = theQuestion.QuestionInit(aQuestion);
        return theQuestion;
    }


}) (window, HYB.CurrentProblemsPanel);
