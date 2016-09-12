

function GetNextProblemSet(currentProblemSetID) {

    var psModel = HYB.ProblemSet;
    var ProblemSet = psModel.ProblemSet;
    var problemSetId = ProblemSet.LoadProblemSet(currentProblemSetID);
    var rawQuestions = ProblemSet.ProblemRawObjects;
    return rawQuestions;
}

function GetQuestionFromProblemSet(rawQuestions, questionId) {
    var aQuestion = rawQuestions[questionId];
    var questionModel = HYB.Question;
    var theQuestion = questionModel.Question;
    var questionID = theQuestion.QuestionInit(aQuestion);
    return theQuestion;
}
