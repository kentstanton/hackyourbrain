

// todo : use mathjax to render mathml and then insert the rendered content
function AddProblemRow(questionSet) {
    
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
            
            $(theQuestion.answers[answerLoopCounter]).click( function() {
                if (theQuestion.answers[answerLoopCounter] === answerLoopCounter) {
                    $(theQuestion.answers[answerLoopCounter]).css('color', 'green');
                } else {
                    $(theQuestion.answers[answerLoopCounter]).css('color', 'red');
                }
            });    

            
            
        }

        // end the row          
        problemSetHtml = problemSetHtml + '</tr>';
        
        //AddAnswerEventHandlers(theQuestion, questionLoopCounter);            
    }
    $("#problem-set-table").html(problemSetHtml);
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}


// obsolete
function AddAnswerEventHandlers(theQuestion, questionIndex) {
    var answer4Id = "#question" + questionIndex + "-answer4";
    $(answer4Id).click( function() {
        if (theQuestion.correctAnswerIndex === 3) {
            $(answer4Id).css('color', 'green');
        } else {
            $(answer4Id).css('color', 'red');
        }
    });    
    
    $("#question" + questionIndex + "-answer1").click( function() {
        if (theQuestion.correctAnswerIndex === 0) {
             $("#current-answer1").css('color', 'green');
        } else {
            $("#current-answer1").css('color', 'red');
        }
    });

    $("#question" + questionIndex + "-answer2").click( function() {
        if (theQuestion.correctAnswerIndex === 1) {
             $("#current-answer2").css('color', 'green');
        } else {
            $("#current-answer2").css('color', 'red');
        }
    });

    $("#question" + questionIndex + "-answer3").click( function() {
        if (theQuestion.correctAnswerIndex === 2) {
             $("#current-answer3").css('color', 'green');
        } else {
            $("#current-answer3").css('color', 'red');
        }
    });

}

// menus
function SideMenuEventHandler(currentProblemSetID) {
    
    // load the current problems pane
    // move to a component            
    $("#menu-item-currentproblems").click( function() {
        DisableAllMenuItems();    
        $("#menu-item-currentproblems").addClass("active");
        $("#dashboard_body").hide();
        
        var questionSet = GetNextProblemSet(currentProblemSetID);
        AddProblemRow(questionSet);
        
        $("#current_problemset_body").show();

    } );

    $("#menu-item-dashboard").click( function() {
        DisableAllMenuItems();    
        $("#menu-item-dashboard").addClass("active");
        $("#dashboard_body").show();        
        $("#current_problemset_body").hide();

    } );

    $("#menu-item-allproblemsets").click( function() {
        DisableAllMenuItems();    
        $("#menu-item-allproblemsets").addClass("active");
    } );

    $("#menu-item-challenges").click( function() {
        DisableAllMenuItems();    
        $("#menu-item-challenges").addClass("active");
    } );
            
    $("#menu-item-reports").click( function() {
        DisableAllMenuItems();    
        $("#menu-item-reports").addClass("active");
    } );
}


// menus            
function DisableAllMenuItems() {
    $("#menu-item-dashboard").removeClass("active");
    $("#menu-item-currentproblems").removeClass("active");
    $("#menu-item-challenges").removeClass("active");
    $("#menu-item-reports").removeClass("active");
    $("#menu-item-allproblemsets").removeClass("active");
    
}

function InitDashboard() {
    $("#link-by-topic").click( function() {
        $("#dashboard-monthly").hide();
        $("#dashboard-topics").show();
        $("#link-by-topic").css("font-weight", "Bold");
        $("#link-by-month").css("font-weight", "Normal");

    });

    $("#link-by-month").click( function() {
        $("#dashboard-monthly").show();
        $("#dashboard-topics").hide();
        $("#link-by-month").css("font-weight", "Bold");
        $("#link-by-topic").css("font-weight", "Normal");
    
    });
}
