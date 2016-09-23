// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.RecentProblemSetsPanel = HYBRoot.RecentProblemSetsPanel || {};
    if (HYBRoot.RecentProblemSetsPanel.moduleName) { return; }
    var HYBModule = HYBRoot.RecentProblemSetsPanel;
    HYBModule.moduleName = "Recent Problem Sets Panel";
    'use strict';

    HYBModule.Initalized = false;
    HYBModule.Id = 0;
    HYBModule.LearnerId = 0;
    HYBModule.recentSetsRaw = "";

    // todo
    HYBModule.RecentProblemSetsPanelInit = function(learnerID) {
        HYBModule.LearnerId = learnerID;

        HYBModule.recentSetsRaw = mockRecentProblems;
        HYBModule.Initalized = true;
        return HYBModule.Initalized;
    }

    HYBModule.RecentProblemSetsPanelRender = function() {
        $("#learner-recent-activity-table-head").html(learnerRecentTableHeadRender());
        $("#learner-recent-activity-table-body").html(learnerRecentTableBodyRender());
    }


    //-- Private Methods ------------------------------------------------

    function learnerRecentTableBodyRender() {
        var recentSetsTableHtml = "";
        for (var setsLoopCounter=0; setsLoopCounter < HYBModule.recentSetsRaw.length; setsLoopCounter++) {
            var theSet = GetQuestionFromProblemSet(setsLoopCounter);

            recentSetsTableHtml = recentSetsTableHtml + '<tr id="recent-sets-row-' + setsLoopCounter + '">'
            recentSetsTableHtml = recentSetsTableHtml + '<td >' + theSet.topicName + '</td>';
            recentSetsTableHtml = recentSetsTableHtml + '<td >' + theSet.level + '</td>';
            recentSetsTableHtml = recentSetsTableHtml + '<td >' + theSet.set + '</td>';
            recentSetsTableHtml = recentSetsTableHtml + '<td >' + theSet.status + '</td>';
            var theAction = GetActionString(theSet.status);
            recentSetsTableHtml = recentSetsTableHtml + '<td >' + theAction + '</td>';
            recentSetsTableHtml = recentSetsTableHtml + '</tr>';
        }

        return recentSetsTableHtml;
        //$("#learner-recent-activity-table-body").html(recentSetsTableHtml);
    }


    function learnerRecentTableHeadRender() {
        var tableHeadHtml = "<tr><th>Topic</th><th>Level</th><th>Set</th><th>Status</th><th>Actions</th></tr>";
        return tableHeadHtml;
        //$("#learner-recent-activity-table-head").html(recentSetsTableHtml);
    }

    function GetActionString(status) {
        if (status === "Completed") {
            return "Repeat";
        } else if (status === "Abandoned") {
            return "Retry";
        } else if (status === "Next") {
            return "To Do";
        }


    }

    function GetQuestionFromProblemSet(iterator) {
        return HYBModule.recentSetsRaw[iterator];                
    }



}) (window, HYB.RecentProblemSetsPanel);
