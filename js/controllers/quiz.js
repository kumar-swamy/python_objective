(function(){
    angular.module("learn_facts").controller("quizCtrl", QuizController);
    QuizController.$inject = ['quizMetrics', 'DataService'];
    function QuizController(quizMetrics, DataService){
        var vm = this;
        vm.quizMetrics = quizMetrics; // Attaching the quizMetrics object to the view model
        vm.dataService = DataService;
        vm.questionAnswered = questionAnswered; // also a named function defined below
        vm.setActiveQuestion = setActiveQuestion; // setActiveQuestion is a named function below
        vm.selectAnswer = selectAnswer; // also a named function
        vm.finaliseAnswers = finaliseAnswers; //also a named function
        vm.activeQuestion = 0; // currently active question in the quiz
        vm.error = false; // error flag. Will be set when user tries to finish quiz with 
        vm.finalise = false; // finalise flag. Will be set to show prompt to end quiz with // all questions answered
        var numQuestionsAnswered = 0; // This is not needed by the view so is only declared using var
        function setActiveQuestion(index){
            if(index === undefined){
                var breakOut = false;
                var quizLength = DataService.kyuijKuestions.length - 1;
                while(!breakOut){
                    vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
                    if(vm.activeQuestion === 0){ vm.error = true; }
                    if(DataService.kyuijKuestions[vm.activeQuestion][3] === null){ breakOut = true; }
                }
            }else{ vm.activeQuestion = index; } 
        }
        function questionAnswered(){
            var quizLength = DataService.kyuijKuestions.length;
            numQuestionsAnswered = 0;
            for(var x = 0; x < quizLength; x++){
                if(DataService.kyuijKuestions[vm.activeQuestion][3] !== null){
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){
                        for(var i = 0; i < quizLength; i++){
                            if(DataService.kyuijKuestions[i][3] === null){ setActiveQuestion(i); return; }
                        }
                        vm.error = false;
                        vm.finalise = true;
                        return;
                    }
                }
            }
            vm.setActiveQuestion();
        }
        function selectAnswer(index){ DataService.kyuijKuestions[vm.activeQuestion][3] = index; } 
        function finaliseAnswers(){
            vm.finalise = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
        }
    }
})();
