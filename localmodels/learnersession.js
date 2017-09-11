/*
    Learner Model
*/
(function (window, HYBRoot) {
    HYBRoot.LearnerSession = HYBRoot.LearnerSession || {};
    if (HYBRoot.LearnerSession.moduleName) { return; }
    var HYBModule = HYBRoot.LearnerSession;
    HYBModule.moduleName = "LearnerSession";
    'use strict';

    HYBModule.learnerID = 0;
    HYBModule.currentLessonId = 0;
    
    // todo - middleware
    HYBModule.LearnerInit = function(learnerRaw) {
        HYBModule.learnerID = learnerRaw.learnerID;
        HYBModule.currentLessonId = learnerRaw.currentLessonId;
        HYBModule.initSuccess = true;
        return HYBModule.learnerId;    
    }
 
}) (window, HYB.LearnerSession);
