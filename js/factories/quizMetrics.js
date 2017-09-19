(function(){
    angular.module("learn_facts").factory("quizMetrics", QuizMetrics); 
        QuizMetrics.$inject = ['DataService'];
        function QuizMetrics(DataService){
            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState, // changeState is a named function below
                krAkt_ansrs: [],
                markQuiz: markQuiz, // markQuiz is a named function below
                numCorrect: 0
            };
            return quizObj;
            function changeState(metric, state){
                if(metric === "quiz"){ quizObj.quizActive = state; }
                else if(metric === "results"){ quizObj.resultsActive = state; }
                else{ return false; }
            }
            function markQuiz(){
                quizObj.krAkt_ansrs = DataService.krAkt_ansrs;
                for(var i = 0; i < DataService.kyuijKuestions.length; i++){
                    if(DataService.kyuijKuestions[i][3] === DataService.krAkt_ansrs[i]){
                        DataService.kyuijKuestions[i][4] = true;
                        quizObj.numCorrect++;
                    }else{
                        DataService.kyuijKuestions[i][4] = false;
                    }
                }
            }
        }
})();
