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
    HYBModule.token = "";
    
    // todo - middleware
    HYBModule.LearnerInit = function(learnerID) {

        // call to login or validate the learner 
        if (LoginOrValidateLearner(learnerID) === false) {
            alert("Login Failure.")
            HYBModule.initSuccess = false;            
            return 0;
        } else {
            var theToken = sessionStorage.getItem("learnerToken");
            if (theToken === "") {
                alert("Unknonwn Token: " + theToken);
                HYBModule.initSuccess = false;  
            } else {
                var learnerRaw = LoadLearner(theToken);
                HYBModule.learnerFirstName = learnerRaw.firstName;
                HYBModule.learnerLastName = learnerRaw.lastName;
                HYBModule.learnerID = learnerRaw.learnerID;
                HYBModule.currentLessonId = learnerRaw.currentLessonId;
                HYBModule.nextLessonId = learnerRaw.nextLessonId;
                HYBModule.lastLoginDate = learnerRaw.lastLoginDate;
                HYBModule.lastTimeOnTask = learnerRaw.timeOnTask;
                
                HYBModule.initSuccess = true;
            }

            return HYBModule.learnerId;    
        }
    }


    //  ! these will come out of the model in a future iteration !
    // todo - hardcoded, call to middleware needed
    HYBModule.GetCurrentLesson = function() {
        if (HYBModule.initSuccess) {
            return HYBModule.currentLessonId;
        } else {
            return false;
        }
    }

    // todo - hardcoded
    HYBModule.GetNextLesson = function() {
        if (HYBModule.initSuccess) {
            return HYBModule.nextLessonId;
        } else {
            return false;
        }
    }

    ///// private //////
    // port to call  middleware
    function LoadLearner(learnerToken) {
        var learners = mockLearner;
        var theLearner = null;

        
        $.each(learners, 
            function (learnersLoopIndex, rawLearner) {
                if (rawLearner.token === learnerToken) {
                    theLearner = rawLearner;
                }
            }
        );
        return theLearner;
    }

    
    function LoginOrValidateLearner(learnerID) {

        if (LoginLearner(learnerID) === true) {
            return true;
        }
        
        /*
        if (sessionStorage.getItem("learnerToken") !== null) {
            if (ValidateLearnerToken() === true) {
                return true;
            } else {
                return false;
            }
        } else {
            if (LoginLearner() === true) {
                return true;
            }
        }
        */
    }

    function ValidateLearnerToken() {
        if (sessionStorage.getItem("learnerToken") === HYBModule.token) {
            return true;
        } else {
            return false;
        }
    }
    
    function LoginLearner(learnerID) {
        if (learnerID === "") {
            alert("Invalid learner ID")
        }

        if (learnerID === 22) {
            sessionStorage.setItem("learnerToken", "abc");
        } else if (learnerID === 23) {
            sessionStorage.setItem("learnerToken", "def");
        } else if (learnerID === 24) {
            sessionStorage.setItem("learnerToken", "hij");
        } else {
            sessionStorage.setItem("learnerToken", "");
        }            
        return true;
    }
 
}) (window, HYB.Learner);
