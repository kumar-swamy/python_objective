(function(){
    angular.module("turtleFacts").factory("DataService", DataService);
    function DataService(){
        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };
        return dataObj;
    }
    var correctAnswers = [3, 3];
    var quizQuestions  = [
        {
            type: "text", text: "li = [3, 5, 10]. li[-3] is : ? --- hint negative indeks starts from last.",
            possibilities: [ { answer: "none" }, { answer: "error" }, { answer: "0" } , { answer: "3" }],
            selected: null,
            correct: null
        },
        {
            type: "text", text: "property in python is : ? --- hint @propety",
            possibilities: [ { answer: "class" }, { answer: "function" }, { answer: "attribute" }, { answer: "decorator" } ],
            selected: null,
            correct: null
        },
    ];
   var turtlesData = [ ];

})();
