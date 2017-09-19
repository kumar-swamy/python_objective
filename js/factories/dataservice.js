(function(){
    angular.module("turtleFacts").factory("DataService", DataService);
    function DataService(){
        var dataObj = {
            turtlesData: turtlesData,
            kuijKuestions: kuijKuestions,
            krAkt_ansrs: krAkt_ansrs
        };
        return dataObj;
    }
    var krAkt_ansrs = [3, 3];
    var kuijKuestions  = [
        [
            "text",
            "li = [3, 5, 10]. li[-3] is : ? --- hint negative indeks starts from last.",
            ["none", "error", "0", "3"],
            null,
            null
        ],
        [
            "text",
            "property in python is : ? --- hint @property",
            ["class", "function", "attribute", "decorator"],
            null,
            null
        ]
    ];
   var turtlesData = [ ];

})();
