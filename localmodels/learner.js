
// learner model
/*
function Learner() {
  this.firstName = "";
  this.lastName = "";
  this.CurrentProblemSetId = 0;
  this.LastProblemSetId = 0;
  this.levelId = 0;
}
*/

// HYBLearner is currently global
var HYBLearner = (function (window, hybRoot) {
    
    if (HYBLearner.moduleName) { return; }
    HYBLearner.moduleName = "learner";

    'use strict';

    HYBLearner.firstName = "";
    HYBLearner.lastName = "";
    HYBLearner.CurrentProblemSetId = 0;
    HYBLearner.LastProblemSetId = 0;
    HYBLearner.levelId = 0;

    // public methods 
    
    /*HYBLearner.SetLearnerName = function (firstName, lastName) {
        if (console && (typeof value != "undefined")) {
            console.log(value);
        };
        
        this.firstName = firstName;
        this.lastName = lastName;
        
    };
    */
    
    // Public objects
    //this.NewObject = function () {
    //    this.Name = "NewObject";
    //};

    // Create an instance of the new object.
    //var newObject = new HYBRoot.learner.NewObject();

    // private functions not assigned to the parent object
    //function GetExcitingMessage(stringToFormat) {
    //    var excitingString = stringToFormat + "!!!";
    //    return excitingString;
    //};
    
}) 
