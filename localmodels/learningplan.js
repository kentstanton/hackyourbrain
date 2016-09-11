/*
    Learning Plan Model
*/
(function (window, HYBRoot) {
    HYBRoot.LearningPlan = HYBRoot.LearningPlan || {};
    if (HYBRoot.LearningPlan.moduleName) { return; }
    var HYBModule = HYBRoot.LearningPlan;
    HYBModule.moduleName = "Learning Plan";
    'use strict';

    HYBModule.LearningPlanName = "";
    HYBModule.LearningPlanLevel = "";
    HYBModule.LearningPlanId = 0;
    
    HYBModule.LearningPlanProblemSetSequence = [100,101,102,103];
    

    // ProblemSet with ID 0 has not been initialized
    HYBModule.LearningPlanInit = function(id) {
        if (id < 1) {
            return 0;
        }
        HYBModule.LearningPlanId = id;
        return id;
    }

    HYBModule.SetLearningPlanName = function(PlanName) {
        HYBModule.LearningPlanName = PlanName;
    }

    //  ! these will come out of the model in a future iteration !
    // todo - hardcoded, call to middleware needed
    HYBModule.GetLearningPlanProblemSetSequence = function() {
        return HYBModule.LearningPlanProblemSetSequence;
    }
    

}) (window, HYB.LearningPlan);
