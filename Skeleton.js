
function QuestionSetClickHandler() {
    $("#q1-a1").click( function() {
        $("#question-row-1").css("background-color", "green");                    
    });

    $("#q1-a2").click( function() {
        $("#question-row-1").css("background-color", "red");                    
    });

}



// todo : use mathjax to render mathml and then insert the rendered content
function AddProblemRow(problemSet) {
    
    var problemSetHtml = '<tr id="question-row-1"><td > ` ' + problemSet.question + ' ` </td>';
        problemSetHtml = problemSetHtml + '<td class= "answer-pending" id="current-answer1"> ` ' + problemSet.answer1 + '  ` </td><';
        problemSetHtml = problemSetHtml + '<td class= "answer-pending" id="current-answer2"> ` ' + problemSet.answer2 + '  ` </td>';
        problemSetHtml = problemSetHtml + '<td class= "answer-pending" id="current-answer3"> ` ' + problemSet.answer3 + '  ` </td>';
        problemSetHtml = problemSetHtml + '<td class= "answer-pending" id="current-answer4"> ` ' + problemSet.answer4 + '  ` </td></tr>';
        
        $("#problem-set-table").html(problemSetHtml);
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        
        AddAnswerEventHandlers(problemSet);
}



function AddAnswerEventHandlers(problemSet) {
    $("#current-answer4").click( function() {
        if (problemSet.correct === "answer4") {
             $("#current-answer4").css('color', 'green');
        } else {
            $("#current-answer4").css('color', 'red');
        }
    });    
    
    $("#current-answer1").click( function() {
        if (problemSet.correct === "answer1") {
             $("#current-answer1").css('color', 'green');
        } else {
            $("#current-answer1").css('color', 'red');
        }
    });

    $("#current-answer2").click( function() {
        if (problemSet.correct === "answer2") {
             $("#current-answer2").css('color', 'green');
        } else {
            $("#current-answer2").css('color', 'red');
        }
    });

    $("#current-answer3").click( function() {
        if (problemSet.correct === "answer3") {
             $("#current-answer3").css('color', 'green');
        } else {
            $("#current-answer3").css('color', 'red');
        }
    });

}

// menus
function SideMenuEventHandler() {             
    $("#menu-item-currentproblems").click( function() {
        DisableAllMenuItems();    
        $("#menu-item-currentproblems").addClass("active");
        $("#dashboard_body").hide();
        
        var randomSetId = Math.round((Math.random()*10));
        var problemSet = GetNextProblemGetProblemSet();
        AddProblemRow(problemSet);
        
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
