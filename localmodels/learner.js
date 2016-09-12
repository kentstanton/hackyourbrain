/*
    Learner Model
*/
(function (window, HYBRoot) {
    HYBRoot.Learner = HYBRoot.Learner || {};
    if (HYBRoot.Learner.moduleName) { return; }
    var HYBModule = HYBRoot.Learner;
    HYBModule.moduleName = "Learner";
    'use strict';

    HYBModule.learnerFirstName = "";
    HYBModule.learnerLastName = "";
    HYBModule.learnerID = 0;
    HYBModule.currentLessonId = 0;
    HYBModule.nextLessonId = 0;
    HYBModule.lastLoginDate = "";
    HYBModule.lastTimeOnTask = "";
    
    // todo - middleware
    HYBModule.LearnerInit = function(learnerRaw) {

        HYBModule.learnerFirstName = learnerRaw.firstName;
        HYBModule.learnerLastName = learnerRaw.lastName;
        HYBModule.learnerID = learnerRaw.learnerID;
        HYBModule.currentLessonId = learnerRaw.currentLessonId;
        HYBModule.nextLessonId = learnerRaw.nextLessonId;
        HYBModule.lastLoginDate = learnerRaw.lastLoginDate;
        HYBModule.lastTimeOnTask = learnerRaw.timeOnTask;
        
        HYBModule.initSuccess = true;
        return HYBModule.learnerId;    

    }


    //  ! these will come out of the model in a future iteration !
    // todo - hardcoded, call to middleware needed
    HYBModule.GetCurrentLesson = function() {
        if (HYBModule.initSuccess) {
            return HYBModule.currentLessonId;
        } else {
            return 0;
        }
    }

    // todo - hardcoded
    HYBModule.GetNextLesson = function() {
        if (HYBModule.initSuccess) {
            return HYBModule.nextLessonId;
        } else {
            return 0;
        }
    }
 
}) (window, HYB.Learner);
