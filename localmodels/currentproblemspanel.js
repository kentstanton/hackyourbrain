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

    //todo: Topics and problem sets current using mock data
    HYBModule.CurrentProblemsPanelInit = function(topicData, problemSetData) {
        if (topicData === undefined || problemSetData === undefined) {return false;}
        HYBModule.ActiveProblemSetId = parseInt(sessionStorage.getItem("mockProblemSetID"));;
        HYBModule.TopicId = topicData.id;
        HYBModule.TopicData = topicData;
        HYBModule.ProblemSetData = problemSetData;
        HYBModule.Initalized = true;
        return HYBModule.Initalized;
    }

    //-todo -- consolidate the topic and problem set
    HYBModule.ProblemsPanelRender = function(isGotoNext) {
        
        var questionSet = HYBModule.GetNextProblemSet(HYBModule.ActiveProblemSetId);
        $("#current-problemset-name").html(HYBModule.ProblemSetTitleHtml());
        $("#problems-panel-rule").html(HYBModule.TopicData.topicRule);
        $("#problem-set-table-head").html(HYBModule.CurrentProblemSetTableHeadHtml());

        ProblemSetProblemsRender(questionSet);
        NextProblemSetLinkRender();

        // force mathjax to reinterpret the page when a new set of problems is loaded - can't call this on the initial load
        if (isGotoNext) 
        {
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        }
             
    }

    HYBModule.CurrentProblemSetTableHeadHtml  = function() {                         
        var problemSetTableHeadHtml = "<tr><td colspan=4>Evaluate the expression and click the correct answer</td></tr>";
        return problemSetTableHeadHtml;
    }

    HYBModule.ProblemSetTitleHtml = function() {
        var psModel = HYB.ProblemSet;
        var ProblemSet = psModel.ProblemSet;
        var problemSetId = ProblemSet.LoadProblemSet(HYBModule.ActiveProblemSetId);
        var psTitle = ProblemSet.ProblemSetName + "; Level: " + ProblemSet.ProblemSetLevel
        return psTitle;
    }

    HYBModule.GetNextProblemSet = function() {
    var psModel = HYB.ProblemSet;
        var ProblemSet = psModel.ProblemSet;
        var problemSetId = ProblemSet.LoadProblemSet(HYBModule.ActiveProblemSetId);
        var rawQuestions = ProblemSet.ProblemRawObjects;
        return rawQuestions;
    }

    HYBModule.LoadQuestionFromProblemSet = function(rawQuestion) {
        var questionModel = HYB.Question;
        var theQuestion = questionModel.Question;
        var questionID = theQuestion.QuestionInit(rawQuestion);
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
                var gotoNext = true;
                HYBModule.ProblemsPanelRender(gotoNext);
            }
        ); 
               
    }

    //-----------------------------------------------------
    ProblemSetProblemsRender = function(questionSet) {
        var problemSetHtml = "";
        //for (var questionLoopCounter=0; questionLoopCounter < questionSet.length; questionLoopCounter++) {
        $.each(questionSet, 
            function (questionLoopIndex, rawQuestion) {
                var theQuestion = HYBModule.LoadQuestionFromProblemSet(rawQuestion);

                problemSetHtml = problemSetHtml + '<tr id="question-row-' + questionLoopIndex + '"><td > ` ' + theQuestion.questionRawText + ' ` </td>';
                $.each(theQuestion.answers,
                    function( answerLoopIndex, theAnswer) {
                        var answerID = 'id="question' + questionLoopIndex + '-answer' + answerLoopIndex;
                        problemSetHtml = problemSetHtml + GetAnswerClass(theQuestion.correctAnswerIndex, answerLoopIndex);
                        problemSetHtml = problemSetHtml + answerID + '"> ` ' + theQuestion.answers[answerLoopIndex] + '  ` </td><';
                    }
                );
                problemSetHtml = problemSetHtml + '</tr>';
            }
        );
        
        $("#problem-set-table-body").html(problemSetHtml);
        $(".answer-incorrect").click( function() { $( this ).css('background-color', '#ff3333'); });
        
        $(".answer-correct").click( function() { $( this ).css('background-color', '#99ff33'); });
        
        $(".answer-correct").hover( 
            function() { 
                $( this ).addClass('answerHover-in');
            }, 
            function() {
                $( this ).addClass('answerHover-out');
            } 
        );
        $(".answer-incorrect").hover( 
            function() { 
                $( this ).addClass('answerHover-in');
            }, 
            function() {
                $( this ).addClass('answerHover-out');
            } 
        );
 
    }

    //-----------------------------------------------------------
    function GetAnswerClass(correctAnswerIndex, answerLoopIndex) {
        var answerClass = "";
        if (correctAnswerIndex === answerLoopIndex) {
            answerClass = '<td class= "answer-correct" ';
        } else {
            answerClass = '<td class= "answer-incorrect" '; 
        }
        return answerClass;
    }


}) (window, HYB.CurrentProblemsPanel);
