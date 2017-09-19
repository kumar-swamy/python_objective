(function(){
    angular.module("learn_facts").controller("listCtrl", ListController);
    ListController.$inject = ['quizMetrics', 'DataService'];
    function ListController(quizMetrics, DataService){
        var vm = this;
        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        // vm.data = DataService.kyuij_viki; // Controller reference to the turtle info created in the factory
        vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
        vm.changeActiveTurtle = changeActiveTurtle; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // will hold the search query when user uses search bar in view
        vm.sbjAkts = {
            'python': {'level1': ['builtin functions', 'list'],'level2': ['tuple', 'dictionary'],'level3': ['sets', 'dictionary']},
            'knARa': { 'level1': ['numbers', 'pronouns', 'kolors', 'motions'], 'level2': ['vegetables', 'kitchen'], 'level3': ['Jaipur', 'Ajmer', 'Jodhpur'] },
            'Angulrjs': { 'New South Wales': ['Sydney'], 'Victoria': ['Melbourne'] }
        };
        vm.GetSelectedCountry = function() { vm.strCountry = vm.sbjAktSrc; };
        vm.GetSelectedState = function() { vm.strState = vm.levelSrc; };        
        function changeActiveTurtle(index){ vm.activeTurtle = index; } 
        function activateQuiz(){ quizMetrics.changeState("quiz", true); }
    }
})();
