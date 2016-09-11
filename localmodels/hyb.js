
/*
    This is the module loader. Eventually I'll want to separate the modules by type. 
*/

// Define HYB as a global
if (typeof HYB == "undefined") {

    'use strict';

    /** HYB **/
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

    // ProblemSet controller
    /* NOT CURRENTLY USED
    (HYB.ProblemSetController = function (window, HYBRoot) {
        HYBRoot.ProblemSetController = HYBRoot.ProblemSetController || {};
        if (HYBRoot.ProblemSetController.moduleName) { return; }

        HYB.ProblemSetController.moduleName = "ProblemSetController";
        HYB.ProblemSetController.parentModule = HYBRoot;
        HYB.ProblemSetController.version = HYBRoot.version;
    }) (window, HYB);
    */

}


