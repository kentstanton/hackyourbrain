// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.CurrentProblemsPanel = HYBRoot.CurrentProblemsPanel || {};
    if (HYBRoot.CurrentProblemsPanel.moduleName) { return; }
    var HYBModule = HYBRoot.CurrentProblemsPanel;
    HYBModule.moduleName = "Current Problems Panel";
    'use strict';

    HYBModule.Initalized = false;
    HYBModule.Id = 0;
    HYBModule.ActiveProblemSetId = 0;
    HYBModule.TopicData = "";
    HYBModule.ProblemSetData = "";

    //todo: Topic and problem sets are passed in mocks
    HYBModule.CurrentProblemsPanelInit = function(topicData, problemSetData, currentProblemSetID) {
        if (topicData === undefined || problemSetData === undefined) {return false;}
        HYBModule.ActiveProblemSetId = currentProblemSetID;
        HYBModule.TopicId = topicData.id;
        HYBModule.TopicData = topicData;
        HYBModule.ProblemSetData = problemSetData;
        HYBModule.Initalized = true;
        return HYBModule.Initalized;
    }

    //-todo -- consolidate the topic and problem set
    HYBModule.ProblemsPanelRender = function() {
        
        var questionSet = HYBModule.GetNextProblemSet(HYBModule.ActiveProblemSetId);
        $("#current-problemset-name").html(HYBModule.ProblemSetTitleHtml());
        $("#problems-panel-rule").html(HYBModule.TopicData.topicRule);
        $("#problem-set-table-head").html(HYBModule.CurrentProblemSetTableHeadHtml());

        ProblemSetProblemsRender(questionSet);
        NextProblemSetLinkRender();

        // force mathjax to reinterpret the page
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
             
    }

    HYBModule.CurrentProblemSetTableHeadHtml  = function() {                         
        var problemSetTableHeadHtml = "<tr><th>Evaluate:</th><th>Answer 1</th><th>Answer 2</th><th>Answer 3</th><th>Answer 4</th></tr>";
        return problemSetTableHeadHtml;
    }

    HYBModule.ProblemSetTitleHtml = function() {
        var psModel = HYB.ProblemSet;
        var ProblemSet = psModel.ProblemSet;
        var problemSetId = ProblemSet.LoadProblemSet(HYBModule.ActiveProblemSetId);
        var psTitle = ProblemSet.ProblemSetName + "; Level: " + ProblemSet.ProblemSetLevel + "; Sequence: " + ProblemSet.ProblemSetSequence
        return psTitle;
    }

    HYBModule.GetNextProblemSet = function() {
    var psModel = HYB.ProblemSet;
        var ProblemSet = psModel.ProblemSet;
        var problemSetId = ProblemSet.LoadProblemSet(HYBModule.ActiveProblemSetId);
        var rawQuestions = ProblemSet.ProblemRawObjects;
        return rawQuestions;
    }

    HYBModule.GetQuestionFromProblemSet = function(rawQuestions, questionId) {
        var aQuestion = rawQuestions[questionId];
        var questionModel = HYB.Question;
        var theQuestion = questionModel.Question;
        var questionID = theQuestion.QuestionInit(aQuestion);
        return theQuestion;
    }
    

    /*
    *   Private methods
    *   Functions that return content to the top level render function are exposed so they can be unit tested
    *   Function with that add event handlers currently update the DOM directly. This will be refactored in the future. 
    */
    NextProblemSetLinkRender = function() {
        $("#next-problemset-link").text("Next Problem Set");
        $("#next-problemset-link").click(
            function () {
                HYBModule.ActiveProblemSetId++;
                HYBModule.ProblemsPanelRender();
            }
        ); 
               
    }

    //-todo -- rethink and refactor; jquery or react?
    ProblemSetProblemsRender = function(questionSet) {
        var problemSetHtml = "";
        for (var questionLoopCounter=0; questionLoopCounter < questionSet.length; questionLoopCounter++) {
            var theQuestion = HYBModule.GetQuestionFromProblemSet(questionSet, questionLoopCounter);
            
            problemSetHtml = problemSetHtml + '<tr id="question-row-' + questionLoopCounter + '"><td > ` ' + theQuestion.questionRawText + ' ` </td>';
            for (var answerLoopCounter=0; answerLoopCounter < theQuestion.answers.length; answerLoopCounter++) {
                var answerID = 'id="question' + questionLoopCounter + '-answer' + answerLoopCounter;
                if (theQuestion.correctAnswerIndex === answerLoopCounter) {
                    problemSetHtml = problemSetHtml + '<td class= "answer-correct" ';
                } else {
                    problemSetHtml = problemSetHtml + '<td class= "answer-incorrect" '; 
                }
                problemSetHtml = problemSetHtml + answerID + '"> ` ' + theQuestion.answers[answerLoopCounter] + '  ` </td><';
                
            }
            problemSetHtml = problemSetHtml + '</tr>';
        }
        
        $("#problem-set-table-body").html(problemSetHtml);
        $(".answer-correct").click( function() { $( this ).css('background-color', 'green'); });
        $(".answer-incorrect").click( function() { $( this ).css('background-color', 'red'); });
    }

}) (window, HYB.CurrentProblemsPanel);
