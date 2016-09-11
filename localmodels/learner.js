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
    
    // todo - format
    var lastDate = Date();
    HYBModule.lastLogin = lastDate;
    
    HYBModule.lastTimeOnTask = "42 minutes";

    // learner with ID 0 has not been initialized
    HYBModule.LearnerInit = function(id) {
        if (id < 1) {
            return 0;
        }
        HYBModule.learnerID = id;
        return id;
    }

    HYBModule.SetLearnerName = function(firstName, lastName) {
        HYBModule.learnerFirstName = firstName;
        HYBModule.learnerLastName = lastName;
    }

    //  ! these will come out of the model in a future iteration !
    // todo - hardcoded, call to middleware needed
    HYBModule.GetCurrentLesson = function() {
        if (HYBModule.learnerID > 0) {
            HYBModule.currentLessonId = 100;
            return HYBModule.currentLessonId;
        } else {
            return 0;
        }
                   
    }

    // todo - hardcoded
    HYBModule.GetNextLesson = function() {
        if (HYBModule.learnerID > 0) {
            HYBModule.nextLessonId = 101;
            return HYBModule.nextLessonId;
        } else {
            return 0;
        }
                   
    }
    
    

}) (window, HYB.Learner);
