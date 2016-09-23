
/*
    This is the HYB Models module loader.
*/

// Define HYB as a global
if (typeof HYB == "undefined") {

    'use strict';

    /** HYB is the global representing the current session **/
    var HYB = HYB || {};
    (HYB = function (window, HYBRoot) {
        var _HYB = HYBRoot;

        // Expose jQuery to the global object
        window.HYBJavascript = window.HYB = HYB;
        HYB.version = 1.0;
        HYB.moduleName = "HYB";
        HYB.GetReleaseInfo = function () { return "pre-relesae"; }

    })(window, HYB);


    // initialize the HYB (hackyourbrain) modules here
    // Learner
    (HYB.Learner = function (window, HYBRoot) {
        HYBRoot.Learner = HYBRoot.Learner || {};
        if (HYBRoot.Learner.moduleName) { return; }

        HYB.Learner.moduleName = "Learner";
        HYB.Learner.parentModule = HYBRoot;
        HYB.Learner.version = HYBRoot.version;
    }) (window, HYB);

    // ProblemSet
    (HYB.ProblemSet = function (window, HYBRoot) {
        HYBRoot.ProblemSet = HYBRoot.ProblemSet || {};
        if (HYBRoot.ProblemSet.moduleName) { return; }

        HYB.ProblemSet.moduleName = "ProblemSet";
        HYB.ProblemSet.parentModule = HYBRoot;
        HYB.ProblemSet.version = HYBRoot.version;
    }) (window, HYB);
    
    // Question
    // A problem set contains one or more questions
    (HYB.Question = function (window, HYBRoot) {
        HYBRoot.Question = HYBRoot.Question || {};
        if (HYBRoot.Question.moduleName) { return; }

        HYB.Question.moduleName = "Question";
        HYB.Question.parentModule = HYBRoot;
        HYB.Question.version = HYBRoot.version;
    }) (window, HYB);
        
    // LearningPlan
    (HYB.LearningPlan = function (window, HYBRoot) {
        HYBRoot.LearningPlan = HYBRoot.LearningPlan || {};
        if (HYBRoot.LearningPlan.moduleName) { return; }

        HYB.LearningPlan.moduleName = "LearningPlan";
        HYB.LearningPlan.parentModule = HYBRoot;
        HYB.LearningPlan.version = HYBRoot.version;
    }) (window, HYB);

    // SidePanel
    (HYB.SidePanel = function (window, HYBRoot) {
        HYBRoot.SidePanel = HYBRoot.SidePanel || {};
        if (HYBRoot.SidePanel.moduleName) { return; }
        HYB.SidePanel.moduleName = "SidePanel";
        HYB.SidePanel.parentModule = HYBRoot;
        HYB.SidePanel.version = HYBRoot.version;
    }) (window, HYB);

    // DashBoard Panel
    (HYB.DashBoardPanel = function (window, HYBRoot) {
        HYBRoot.DashBoardPanel = HYBRoot.DashBoardPanel || {};
        if (HYBRoot.DashBoardPanel.moduleName) { return; }
        HYB.DashBoardPanel.moduleName = "DashBoardPanel";
        HYB.DashBoardPanel.parentModule = HYBRoot;
        HYB.DashBoardPanel.version = HYBRoot.version;
    }) (window, HYB);

    // Progress Panel
    (HYB.ProgressPanel = function (window, HYBRoot) {
        HYBRoot.ProgressPanel = HYBRoot.ProgressPanel || {};
        if (HYBRoot.ProgressPanel.moduleName) { return; }
        HYB.ProgressPanel.moduleName = "ProgressPanel";
        HYB.ProgressPanel.parentModule = HYBRoot;
        HYB.ProgressPanel.version = HYBRoot.version;
    }) (window, HYB);

    // Activity Panel
    (HYB.ActivityPanel = function (window, HYBRoot) {
        HYBRoot.ActivityPanel = HYBRoot.ActivityPanel || {};
        if (HYBRoot.ActivityPanel.moduleName) { return; }
        HYB.ActivityPanel.moduleName = "ActivityPanel";
        HYB.ActivityPanel.parentModule = HYBRoot;
        HYB.ActivityPanel.version = HYBRoot.version;
    }) (window, HYB);
    
    // Current Problems Panel
    (HYB.CurrentProblemsPanel = function (window, HYBRoot) {
        HYBRoot.CurrentProblemsPanel = HYBRoot.CurrentProblemsPanel || {};
        if (HYBRoot.CurrentProblemsPanel.moduleName) { return; }
        HYB.CurrentProblemsPanel.moduleName = "CurrentProblemsPanel";
        HYB.CurrentProblemsPanel.parentModule = HYBRoot;
        HYB.CurrentProblemsPanel.version = HYBRoot.version;
    }) (window, HYB);

    // Recent Problem Sets Panel
    (HYB.RecentProblemSetsPanel = function (window, HYBRoot) {
        HYBRoot.RecentProblemSetsPanel = HYBRoot.RecentProblemSetsPanel || {};
        if (HYBRoot.RecentProblemSetsPanel.moduleName) { return; }
        HYB.RecentProblemSetsPanel.moduleName = "RecentProblemSetsPanel";
        HYB.RecentProblemSetsPanel.parentModule = HYBRoot;
        HYB.RecentProblemSetsPanel.version = HYBRoot.version;
    }) (window, HYB);

    // Content Panel owns the main display area of the page
    (HYB.ContentPanel = function (window, HYBRoot) {
        HYBRoot.ContentPanelPanel = HYBRoot.ContentPanel || {};
        if (HYBRoot.ContentPanel.moduleName) { return; }
        HYB.ContentPanel.moduleName = "ContentPanel";
        HYB.ContentPanel.parentModule = HYBRoot;
        HYB.ContentPanel.version = HYBRoot.version;
    }) (window, HYB);
    
}


