

// ActivityPanel : display the learner welcome and status 
(function (window, HYBRoot) {
    
    HYBRoot.ActivityPanel = HYBRoot.ActivityPanel || {};
    if (HYBRoot.ActivityPanel.moduleName) { return; }
    var HYBModule = HYBRoot.ActivityPanel;
    HYBModule.moduleName = "Activity Panel";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.Id = 0;
    HYBModule.Learner = null;


    HYBModule.ActivityPanelInit = function(learnerID) {
        HYBModule.Id = learnerID;
        var learnerModel = HYB.Learner;
        HYBModule.Learner = learnerModel.Learner;
        HYBModule.Learner.LearnerInit(mockLearner);
        HYBModule.initSuccess = true;
        return HYBModule.Id;
    }

    HYBModule.ActivityPanelDisplay = function() {
        if (HYBModule.initSuccess === true) {
            $("#page-title").text(HYBModule.Learner.learnerFirstName + ", Your Recent Activity" );
            $("#last-login-status").text("Last Login: " + HYBModule.Learner.lastLoginDate);  
            $("#last-time-on-task").text("Last Session; Time On Task: " + HYBModule.Learner.lastTimeOnTask);
        } else {
            // exception
        }  
    }    


}) (window, HYB.ActivityPanel);
