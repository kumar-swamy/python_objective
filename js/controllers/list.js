(function(){
    angular.module("learn_facts").controller("listCtrl", ListController);
    ListController.$inject = ['$scope','quizMetrics', 'DataService'];
    function ListController($scope, quizMetrics, DataService){
        var vm = this;
        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        // vm.data = DataService.kyuij_viki; // Controller reference to the turtle info created in the factory
        vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
        vm.changeActiveTurtle = changeActiveTurtle; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // will hold the search query when user uses search bar in view
        $scope.subjectlist = Object.keys(DataService.kyuijKuestionsSrc);
        /*$scope.sbjAkts = {
            'python': {'level1': ['lesson1', 'lesson2'],'level2': ['lesson1', 'lesson1'],'level3': ['lesson1', 'lesson1']},
            'knARa': { 'level1': ['lesson1', 'lesson1', 'lesson1', 'lesson1'], 'level2': ['lesson1', 'lesson1'], 'level3': ['lesson1', 'lesson1', 'lesson1'] },
            'Angulrjs': { 'New South Wales': ['lesson1'], 'Victoria': ['lesson1'] }
        };*/
        $scope.levellist = [];
        $scope.GetSelectedSubject = function() {
            $scope.strSubject = $scope.sbjAktSrc;
            $scope.levellist = Object.keys(DataService.kyuijKuestionsSrc[$scope.strSubject]);
        };
        $scope.GetSelectedLevel = function() {
            $scope.strLevel = $scope.levelSrc;
            $scope.lessonlist = Object.keys(DataService.kyuijKuestionsSrc[$scope.strSubject][$scope.strLevel]);
        };
        $scope.GetSelectedLesson = function() { $scope.strLesson = $scope.lessonSrc; };
        function changeActiveTurtle(index){ vm.activeTurtle = index; }
        function activateQuiz(){ DataService.setkyuij($scope.strSubject, $scope.strLevel, $scope.strLesson); quizMetrics.changeState("quiz", true); }
    }
})();
