
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ** this is all temporary on the path to react
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
            
        }

        // end the row          
        problemSetHtml = problemSetHtml + '</tr>';
    }
    
    $("#problem-set-table").html(problemSetHtml);
    
    $(".answer-correct").click( function() { $( this ).css('background-color', 'green'); });
    $(".answer-incorrect").click( function() { $( this ).css('background-color', 'red'); });
    
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}




function SetProblemSetTitle(problemSetTitle) {
    $("#current-problemset-name").text(problemSetTitle);    
}


function UILoadQuestionsPanel(currentProblemSetID) {
    var questionSet = GetNextProblemSet(currentProblemSetID);
    AddProblemRow(questionSet);

    var psTitle = GetProblemSetTitle(currentProblemSetID); 
    SetProblemSetTitle(psTitle);
}



// menu handlers
function SideMenuEventHandler(currentProblemSetID) {
    
    // load the current problems pane
    // move to a component            
    $("#menu-item-currentproblems").click( function() {
        
        // manage menu and hide dashboard panel
        var myController = HYBui.SideMenu;
        var theMenu = myController.SideMenu;
        var isOK = theMenu.DisableAllMenuItems();
        $("#menu-item-currentproblems").addClass("active");
        $("#dashboard_body").hide();
        
        UILoadQuestionsPanel(currentProblemSetID);
        
        // show questions panel
        $("#current_problemset_body").show();

    } );




            
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
