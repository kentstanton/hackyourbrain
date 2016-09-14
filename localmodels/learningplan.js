/*
    Learning Plan Model
    A learning plan represents a sequence of challenges (question sets) a student will complete.
    A "Challenge" is the abstract representation of a question set reprsenting the student status but not the quetions themselves
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
    HYBModule.LearningPlanChallengeSequence = [];

    // todo - mock data, call to middleware needed
    HYBModule.GetChallengeSequence = function() {
        var leaningPlan = mockLearningPlan;
        for (var i=0; i < leaningPlan.Challenges.length; i++) {
            leaningPlan.Challenges[i].ChallengesId;
            HYBModule.LearningPlanChallengeSequence.push(leaningPlan.Challenges[i].ChallengeId);
        }
        return HYBModule.LearningPlanChallengeSequence;
    }
    
    // todo - mock data, call to middleware needed
    HYBModule.GetChallengeById = function(challengeID) {
        var leaningPlan = mockLearningPlan;
        for (var i=0; i < leaningPlan.Challenges.length; i++) {
            if (leaningPlan.Challenges[i].ChallengeId === challengeID) {
                return leaningPlan.Challenges[i];
            }
        }
        return null;
    }


}) (window, HYB.LearningPlan);
