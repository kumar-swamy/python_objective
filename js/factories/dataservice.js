(function(){
    angular.module("learn_facts").factory("DataService", DataService);
    function DataService(){
        var dataObj = {
            // kyuij_viki: kyuij_viki,
            kyuijKuestions: kyuijKuestions,
            krAkt_ansrs: krAkt_ansrs
        };
        return dataObj;
    }
    var krAkt_ansrs = [3, 0, 1, 2, 2, 1, 2, 2, 3, 3];
    var kyuijKuestions  = [
        [
            "text",
            "li = [3, 5, 10]. li[-3] is : ? --- hint negative indeks starts from last.",
            ["none", "error", "0", "3"],
            null,
            null
        ],
        [
            "text",
            "vhich vil giv error? --- hint dict key cannot be mutable",
            ['dic = { [1,2,3]:"abc"}', 'dic = { (1,2,3):"abc", 3.1415:"abc"}', "a = []", "b = ()"],
            null,
            null
        ],
        [
            "text",
            " try : value = my_dict[key]. if key dont ekist then hao tu handle",
            ['error: pass', 'except KeyError: pass', "else:", "try:"],
            null,
            null
        ],
        [
            "text",
            " my_dict is a dict. no of key/value pairs in my_dict = ",
            ['#my_dict', 'my_dict.length()', "len(my_dict)", "my_dict.length"],
            null,
            null
        ],
        [
            "text",
            " my_dict is a dict. to delete a key (k) & get is value vithout KeyError  ve kn use : ",
            ['val = del my_dict[k]', 'val = my_dict.pop("k")', 'val = my_dict.pop("k", None)', 'val = del my_dict[k,None]'],
            null,
            null
        ],
        [
            "text",
            ' d1 = {"k1" :2, "k2" :3, "k3" :4} . d2 = {"k4" :2, "k5" :3} . to AAd d2 key/value pairs in d1 : ',
            ['d1 = d1 + d2', 'd1.update(d2)', 'd1.add(d2)', 'd1.push(d2)'],
            null,
            null
        ],
        [
            "text",
            'vhich vil giv error ?',
            ['d1 = {}', 'd1 = {0 : "k1", 1 : "k2" }', 'd1 = {"k1" : 2, "k1" : 5}', 'd1 = None'],
            null,
            null
        ],
        [
            "text",
            'd = {"a":123, "b":34, "c":304, "d":99} ? vhich is inkorrekt ?',
            ['for key in d:', 'for value in d.values():', 'for value in d.value():', 'for key in d.keys():'],
            null,
            null
        ],
        [
            "text",
            'keylist = ["a", "b", "c", "d"] , vallist = [1, 2, 3, 4] ? vhich is korrekt ?',
            ['d = dict(keylist : vallist)', 'd = zip(keylist, vallist)', 'd = d.keys():d.values()', 'd = dict(zip(keylist, vallist))'],
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
   //var kyuij_viki = [ ];

})();