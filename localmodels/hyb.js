

// Define HYB as a global
if (typeof HYB == "undefined") {

    'use strict';

    /** HYB **/
    var HYB = HYB || {};
    (HYB = function (window, HYBRoot) {
        var _HYB = HYBRoot;

        // Expose jQuery to the global object
        window.InformzJavaScript = window.HYB = HYB;
        HYB.version = 1.0;
        HYB.moduleName = "HYB";
        HYB.GetReleaseInfo = function () { return "pre-relesae"; }

    })(window, HYB);


    // initialize the HYB (hackyourbrain) modules here
    // models
    (HYB.Models = function (window, HYBRoot) {
        HYBRoot.Models = HYBRoot.Models || {};
        if (HYBRoot.Models.moduleName) { return; }

        HYB.Models.moduleName = "Models";
        HYB.Models.parentModule = HYBRoot;
        HYB.Models.version = HYBRoot.version;
    }) (window, HYB);


}




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
    
    

}) (window, HYB.Models);
