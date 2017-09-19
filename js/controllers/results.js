(function(){
    angular.module("learn_facts").controller("resultsCtrl", ResultsController);
    ResultsController.$inject = ['quizMetrics', 'DataService'];
    function ResultsController(quizMetrics, DataService){
        var vm = this;
        vm.quizMetrics = quizMetrics; // binding the object from factory to vm 
        vm.dataService = DataService;
        vm.getAnswerClass = getAnswerClass; // named function defined below
        vm.setActiveQuestion = setActiveQuestion; // named function defined below
        vm.reset = reset; // named function defined below
        vm.calculatePerc = calculatePerc; // named function defined below
        vm.activeQuestion = 0;
        function calculatePerc(){ return quizMetrics.numCorrect / DataService.kyuijKuestions.length * 100; } 
        function setActiveQuestion(index){ vm.activeQuestion = index; }
        function getAnswerClass(index){
            if(index === quizMetrics.krAkt_ansrs[vm.activeQuestion]){ return "bg-success"; }
            else if(index === DataService.kyuijKuestions[vm.activeQuestion][3]){ return "bg-danger"; }
        }
        function reset(){
            quizMetrics.changeState("results", false);
            quizMetrics.numCorrect = 0;
            for(var i = 0; i < DataService.kyuijKuestions.length; i++){
                var data = DataService.kyuijKuestions[i]; //binding the current question to data to keep code clean
                data[3] = null;
                data[4] = null;
            }
        }
    }
})();
