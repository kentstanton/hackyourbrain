
// The Learning plan represents the sequence of challenges a student will complete for a topic.
// Learning plans are associated with a topic by the LearningPlanTopicID.
// A student will have many learning plans. 
// A learning plan is specific to a student because 
//  1) learning plans are customized for each student
//  2) the learning plan stores the completion status for each challenges
//
// Challenge is the abstract rerpsentation of a question set  
var mockLearningPlan = 
{
    "LearningPlanID" : "22",
    "LearningPlanTopicName": "Scientific Notation",
    "LearningPlanTopicID": "1000",
    "Challenges" : [
        {
            "ChallengeId" : 97,
            "status" : "abandoned",
            "time" : "2"
        },

        {
            "ChallengeId" : 98,
            "status" : "completed",
            "time" : "8"
        },

        {
            "ChallengeId" : 99,
            "status" : "completed",
            "time" : "3"
        },

        {
            "ChallengeId" : 100,
            "status" : "current",
            "time" : "0"
        },
        {
            "ChallengeId" : 101,
            "question" : "pending",
            "time" : "0"
        }
    ]
}