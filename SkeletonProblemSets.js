

function GetNextProblemGetProblemSet(randomSetId) {
    
    // randomSetId limited to 0 to 10
    
    if (randomSetId === 1) {
        var problemSet = {
            "question" : "6.72 xx 10^3",
            "answer1" : "6720",
            "answer2" : "672.02",
            "answer3" : "672000",
            "answer4" : "672",
            "correct" : "answer1"
        };
    } else if (randomSetId === 2) {
        var problemSet = {
            "question" : ".072 xx 10^3",
            "answer1" : "720",
            "answer2" : ".072000",
            "answer3" : "72",
            "answer4" : "7.2",
            "correct" : "answer3"
        };
    } else if (randomSetId === 3) {
        var problemSet = {
            "question" : ".072 xx 10^3",
            "answer1" : "720",
            "answer2" : ".072000",
            "answer3" : "72",
            "answer4" : "7.2",
            "correct" : "answer3"
        };
    } else {
        var problemSet = {
            "question" : ".00072 xx 10^3",
            "answer1" : "720",
            "answer2" : ".072000",
            "answer3" : "72",
            "answer4" : "7.2",
            "correct" : "answer2"
        };
        
    }
    return problemSet;
}
