/*
    Problem Set Model
*/
(function (window, HYBRoot) {
    HYBRoot.ProblemSet = HYBRoot.ProblemSet || {};
    if (HYBRoot.ProblemSet.moduleName) { return; }
    var HYBModule = HYBRoot.ProblemSet;
    HYBModule.moduleName = "Problem Set";
    'use strict';

    HYBModule.ProblemSetName = "";
    HYBModule.ProblemSetLevel = "";
    HYBModule.ProblemSetTopic = 0;
    HYBModule.ProblemSetId = 0;
    HYBModule.ProblemSetQuestionCount = 0;
    HYBModule.ProblemRawObjects = "";

    // ProblemSet with ID 0 has not been initialized
    HYBModule.ProblemSetInit = function(id) {
        if (id < 1) {
            return 0;
        }
        HYBModule.ProblemSet = id;
        return id;
    }

    HYBModule.SetProblemSetName = function(ProblemSetName) {
        HYBModule.ProblemSetName = ProblemSetName;
    }

    HYBModule.LoadProblemSet = function(problemSetId) {
        var err = 1;
        HYBModule.ProblemSetId = problemSetId;
        
        // todo: extract and robustify
        var problemSets = mockProblemSets;
        for (var i=0; i < problemSets.length; i++) {
            if (problemSets[i].id === problemSetId) {
                HYBModule.ProblemSetName = problemSets[i].name;
                HYBModule.ProblemSetQuestionCount = problemSets[i].problems.length;
                HYBModule.ProblemRawObjects = problemSets[i].problems;
                err = 0;
            }
        }

        // todo - exception handling should replace this
        if (err === 1) {
            return 0;
        } else {
            return HYBModule.ProblemSetId;
        }
                   
    }

}) (window, HYB.ProblemSet);
