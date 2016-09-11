

// NOT CURRENTLY USED - TO BE REMOVED UNLESS I RETURN TO THIS DESIGN APPROACH
(function (window, HYBRoot) {
    HYBRoot.ProblemSetController = HYBRoot.ProblemSetController || {};
    if (HYBRoot.ProblemSetController.moduleName) { return; }
    var HYBModule = HYBRoot.ProblemSetController;
    HYBModule.moduleName = "Problem Set Controller";
    'use strict';

    HYBModule.tempvar =1;
    
    // todo - call to middleware needed
    HYBModule.ProblemSetFactory = function(ProblemSetId) {
        if (ProblemSetId < 1) {
            return null;
        } else {
            return ProblemSetId;
        }      
    }

}) (window, HYB.ProblemSetController);
