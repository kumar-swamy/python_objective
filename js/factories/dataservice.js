(function(){
    angular.module("learn_facts").factory("DataService", DataService);
    function DataService(){
        var dataObj = {
            // kyuij_viki: kyuij_viki,
            kyuijKuestionsSrc: kyuijKuestionsSrc,
            kyuijKuestions: 0,
            krAkt_ansrs: 0,
            setkyuij: setkyuijfunc
        };
        return dataObj;
        function setkyuijfunc(argsbjAkt, arglevel, arglesson, n=10){
            // if (arglesson === "all")
            // dataObj.kyuijKuestions = getRandom(kyuijKuestionsSrc[argsbjAkt][arglevel][arglesson]['kuestion_options'],n);
            // else
            dataObj.kyuijKuestions = kyuijKuestionsSrc[argsbjAkt][arglevel][arglesson]['kuestion_options'];
            
            //dataObj.krAkt_ansrs = kyuijKuestionsSrc[argsbjAkt][arglevel][arglesson]['ansrs'];
            //dataObj.krAkt_ansrs = getAnsers(dataObj.kyuijKuestions);
            dataObj.krAkt_ansrs = dataObj.kyuijKuestions.map(i=>i[5]);
            //alert(dataObj.krAkt_ansrs);
        }
        /*function getAnsers(arr) {
            var result = new Array(arr.length);
            for(indeks = 0; indeks < arr.length; indeks++) {
                result[indeks] = arr[indeks][5];
            }
            return result;
        }*/
        function getRandom(arr, n) {
            var result = new Array(n),
                len = arr.length,
                taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            while (n--) {
                var x = Math.floor(Math.random() * len);
                result[n] = arr[x in taken ? taken[x] : x];
                taken[x] = --len;
            }
            return result;
        }
    }
    var kyuijKuestionsSrc  = {
        "python":{
            "level1":{
                "all":{
                    'kuestion_options': [
                        [
                            "text",
                            "li = [3, 5, 10]. li[-3] is : ? --- hint negative indeks starts from last.",
                            ["none", "error", "0", "3"],
                            null, null, 3
                        ],
                        [
                            "text",
                            "vhich vil giv error? --- hint dict key cannot be mutable",
                            ['dic = { [1,2,3]:"abc"}', 'dic = { (1,2,3):"abc", 3.1415:"abc"}', "a = []", "b = ()"],
                            null, null, 0
                        ],
                        [
                            "text",
                            " try : value = my_dict[key]. if key dont ekist then hao tu handle",
                            ['error: pass', 'except KeyError: pass', "else:", "try:"],
                            null, null, 1
                        ],
                        [
                            "text",
                            " my_dict is a dict. no of key/value pairs in my_dict = ",
                            ['#my_dict', 'my_dict.length()', "len(my_dict)", "my_dict.length"],
                            null, null, 2
                        ],
                        [
                            "text",
                            " my_dict is a dict. to delete a key (k) & get is value vithout KeyError  ve kn use : ",
                            ['val = del my_dict[k]', 'val = my_dict.pop("k")', 'val = my_dict.pop("k", None)', 'val = del my_dict[k,None]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            ' d1 = {"k1" :2, "k2" :3, "k3" :4} . d2 = {"k4" :2, "k5" :3} . to AAd d2 key/value pairs in d1 : ',
                            ['d1 = d1 + d2', 'd1.update(d2)', 'd1.add(d2)', 'd1.push(d2)'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vhich vil giv error ?',
                            ['d1 = {}', 'd1 = {0 : "k1", 1 : "k2" }', 'd1 = {"k1" : 2, "k1" : 5}', 'd1 = None'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'd = {"a":123, "b":34, "c":304, "d":99} ? vhich is inkorrekt ?',
                            ['for key in d:', 'for value in d.values():', 'for value in d.value():', 'for key in d.keys():'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'keylist = ["a", "b", "c", "d"] , vallist = [1, 2, 3, 4] ? vhich is korrekt ?',
                            ['d = dict(keylist : vallist)', 'd = zip(keylist, vallist)', 'd = d.keys():d.values()', 'd = dict(zip(keylist, vallist))'],
                            null, null, 3
                        ],
                        [
                            "text",
                            "property in python is : ? --- hint @property",
                            ["class", "function", "attribute", "decorator"],
                            null, null, 3
                        ]
                    ],
                    'ansrs': [3, 0, 1, 2, 2, 1, 2, 2, 3, 3]
                },
                "loop":{
                    'kuestion_options': [
                        [
                            "text",
                            'slist = list(range(42,-12,-7)). slist is : ',
                            ['[42, 30, 18, 6, -6]', '[42, 30, 23, 11, 4,]', '[42, 35, 28, 21, 14, 7, 0, -7]', '[]'],
                            null,
                            null
                        ]
                    ],
                    'ansrs': [2]
                },                
            },
            "level2":{
                "lesson1":{
                    'kuestion_options': [
                        [
                            "text",
                            'slist = list(range(42,-12,-7)). slist is : ',
                            ['[42, 30, 18, 6, -6]', '[42, 30, 23, 11, 4,]', '[42, 35, 28, 21, 14, 7, 0, -7]', '[]'],
                            null,
                            null
                        ]
                    ],
                    'ansrs': [2]
                },
            },
            "level3":{
                "lesson1":{
                    'kuestion_options': [
                        [
                            "text",
                            'slist = list(range(42,-12,-7)). slist is : ',
                            ['[42, 30, 18, 6, -6]', '[42, 30, 23, 11, 4,]', '[42, 35, 28, 21, 14, 7, 0, -7]', '[]'],
                            null,
                            null
                        ]
                    ],
                    'ansrs': [2]
                },
            },
        },
        "Angulrjs":{
            "level1":{
                "lesson1":{
                    'kuestion_options': [
                        [
                            "text",
                            'slist = list(range(42,-12,-7)). slist is : ',
                            ['[42, 30, 18, 6, -6]', '[42, 30, 23, 11, 4,]', '[42, 35, 28, 21, 14, 7, 0, -7]', '[]'],
                            null,
                            null
                        ]
                    ],
                    'ansrs': [2]
                },
            }
        },
        "expressjs":{
            "level1":{
                "lesson1":{
                    'kuestion_options': [
                        [
                            "text",
                            'express().listen(port, [host], [backlog], [callback]]). maximum value of backlog is:',
                            ['10', '50', '511', '523'],
                            null,
                            null
                        ],
                        [
                            "text",
                            "express().listen(port, [host], [backlog], [callback]]). callback is:",
                            ["recursive", "synchronous", "asynchronous", "lambda"],
                            null,
                            null
                        ],
                        [
                            "text",
                            "app.get('*', function(req, res){res.send('Sorry, this is an invalid URL.');}); this route should be:",
                            ["first", "last", "conditional", "synchronous"],
                            null,
                            null
                        ],
                        [
                            "text",
                            "for http://localhost/things/tutorialspoint/12345 route should be:",
                            ["app.get('/things/:name/:id', ...)", "app.get('/things/?name/?id', ...)", "app.get('/things/[a-z]/[0-9]', ...)", "app.get('/things/word/digit', ...)"],
                            null,
                            null
                        ],
                        [
                            "text",
                            "app.use(express.static('public')); static file path is set to :",
                            ["/public/", "/public/static", "/static/public", "public/static"],
                            null,
                            null
                        ]
                    ],
                    'ansrs': [2, 2, 1, 0, 2]
                },
            }
        },
        "maths":{
            "10th":{
                "kuadratik ikyuations":{
                    'kuestion_options': [
                        [
                            "text",
                            "which is quadratic equation below ?",
                            ['ax<sup>2</sup> + bx + c = 0', 'ax<sup>2</sup> + bx + c', 'x<sup>2</sup> + y<sup>2</sup> = c', 'ax + by -c = 0'],
                            null,
                            null
                        ],
                        [
                            "text",
                            "ax<sup>2</sup> + bx + c = 0 ; D(diskriminant) = &#8710; = ?",
                            ['b<sup>2</sup> - 4a', 'c<sup>2</sup> - 4ab', 'b<sup>2</sup> - 4ac', 'a<sup>2</sup> - 4bc'],
                            null,
                            null
                        ],
                        [
                            "text",
                            "5x<sup>2</sup> + 6x + 1 = 0 ; D(diskriminant) = &#8710; = ?",
                            ["5", "6", "25", "16"],
                            null,
                            null
                        ],
                        [
                            "text",
                            "ax<sup>2</sup> + bx + c = 0 ; &#8710; = b<sup>2</sup> - 4ac . its roots (r1, r2) are : ",
                            ["( -b &plusmn; &radic;&#8710; ) / 2a", "( -b &plusmn; &radic;&#8710; )/a", "( b &plusmn; &radic;&#8710; ) / 2a", "( -b &plusmn; &radic;&#8710; ) / 2c"],
                            null,
                            null
                        ],
                        [
                            "text",
                            "In ax<sup>2</sup> + bx + c = 0  , b<sup>2</sup> - 4ac = 0. then roots are",
                            ["positive", "negative", "imaginary", "equal"],
                            null,
                            null
                        ],
                        [
                            "text",
                            "In ax<sup>2</sup> + bx + c = 0  , b<sup>2</sup> - 4ac < 0. then roots are",
                            ["positive", "negative", "imaginary", "equal"],
                            null,
                            null
                        ],
                        [
                            "text",
                            "In ax<sup>2</sup> + bx + c = 0  , b<sup>2</sup> - 4ac > 0. then roots are",
                            ["positive", "real", "imaginary", "equal"],
                            null,
                            null
                        ],
                        [
                            "text",
                            "In x<sup>2</sup> - 9x + 20 = 0  , then roots are",
                            ["4, 5", "4, 7", "7 , 8", "5, 7"],
                            null,
                            null
                        ],                        
                        [
                            "text",
                            "sum of root is s and product of root is p. then ekuation is :",
                            ["ax<sup>2</sup> + sx + p = 0", "x<sup>2</sup> + sx + p = 0", "x<sup>2</sup> - sx + p = 0", "x<sup>2</sup> + sx - p = 0"],
                            null,
                            null
                        ],                        
                        [
                            "text",
                            "25x<sup>2</sup> - 25x + 4 = 0. its roots are :",
                            ["3, 4", "2/3, 4/5", "1/5, 4/5", "6, 0"],
                            null,
                            null
                        ],
                    ],
                    'ansrs': [0, 2, 3, 0, 3, 2, 1, 0, 2, 2]
                },
            }
        },        
    };
   //var kyuij_viki = [ ];

})();