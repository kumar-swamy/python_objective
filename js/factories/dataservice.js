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
                "lesson1":{
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
                "lesson2":{
                    'kuestion_options': [
                        [
                            "text",
                            "x = 3 ; y = x ; print(id(x), id(y)) . vhat vill be printed?",
                            ["0, -1", "345, 567", "9251744, 9251744", "-1, 0"],
                            null, null, 2
                        ],
                        [
                            "text",
                            "l2 = ['a', 'c'], l3 = l2 ; l3[1] = 'e' , l2 is :",
                            ["['a', 'c']", "['c', 'a']", "['e', 'c']", "['a', 'e']"],
                            null, null, 3
                        ],
                        [
                            "text",
                            "l2 and l3 are list. for deep copy of l3 into l2 :",
                            ["l2 = copy(l3)", "l2 = copy.deepcopy(l3)", "l3 = copy(l2)", "l2 = l3"],
                            null, null, 1
                        ],
                        [
                            "text",
                            "vhich is correct bilo ?",
                            ["re.sub(source, regex, replacement)", "re.sub(regex, replacement, source)", "re.sub(source, regex)", "re.sub(regex, replacement)"],
                            null, null, 1
                        ],
                        [
                            "text",
                            "class D has base class B. vhich is correct bilo ?",
                            ["class D(B):", "class D(B)", "class D :: B:", "class D->B:"],
                            null, null, 0
                        ],
                        [
                            "text",
                            "vhich is vrong bilo ?",
                            ["import math, random", "from math import sin, pi", "from math import *", "from math include *"],
                            null, null, 3
                        ],
                        [
                            "text",
                            "hao to use jsonschema to validate json from console ?",
                            ["validate -i sample.json sample.schema", "jsonschema -i sample.schema sample.json", "jsonschema -i sample.json sample.schema", "validate -i sample.schema sample.json"],
                            null, null, 2
                        ],
                        [
                            "text",
                            "vhich function is not in json module",
                            ["json.dumps", "json.loads", "json.get", "json.dump"],
                            null, null, 2
                        ]
                    ],
                    'ansrs': [2, 3, 1, 1, 0, 3, 2]
                },
                "pickle":{ // http://www.sanfoundry.com/python-questions-answers-pickle-module/
                    'kuestion_options': [
                        [
                            "text",
                            'process of pickling in Python includes:',
                            ['conversion of a list into a datatable', 'conversion of a byte stream into Python object hierarchy', 'conversion of a Python object hierarchy into byte stream', 'conversion of a datatable into a list'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'To sterilize an object hierarchy use f1. To desterilize a data stream use f2. f1 and f2 are ?',
                            ['dumps(), undumps()', 'loads(), unloads()', ' loads(), dumps()', 'dumps(), loads()'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'pickle module _________ objects that have already been sterilized',
                            ['memoizes', 'keeps track of', 'saves', 'do not remember'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'value of pickle.HIGHEST_PROTOCOL is :',
                            ['4', '5', '3', '6'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'object = ‘a’. vhich vill give error?',
                            ['pickle.dumps(object)', 'pickle.dumps(object, 3)', 'pickle.dumps(object, 3, True)', 'pickle.dumps("a", 2)'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhich of following functions can ve used to find protocol version of pickle module currently being used?',
                            ['pickle.DEFAULT', 'pickle.CURRENT', 'pickle.CURRENT_PROTOCOL', 'pickle.DEFAULT_PROTOCOL'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vhich of following functions can accept more than one positional argument?',
                            ['pickle.dumps', 'pickle.loads', 'pickle.dump', 'pickle.load'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich error gets raised vhen an unpicklable object is encountered by Pickler?',
                            ['pickle.PickleError', 'pickle.PicklingError', 'pickle.UnpickleError', 'pickle.UnpicklingError'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vhich exception is not in pickle module?',
                            ['pickle.LoadError', 'pickle.PickleError', 'pickle.PicklingError', 'pickle.UnpickleError'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich 2 classes pickle module exports ?',
                            ['pickle.LoadError and pickle.Unpickler', 'pickle.Pickler and pickle.Unpickler', 'pickle.Pickler and pickle.PickleError', 'pickle.Pickler and pickle.UnpickleError'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vhich of folloving cannot be pickled?',
                            ['functions vhich are defined at top level of a module vith lambda', 'functions vhich are defined at top level of a module vith def', 'built-in functions vhich are defined at top level of a module', 'classes vhich are defined at top level of a module'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'If __getstate__() returns _________    __setstate__() module will not be called on pickling.',
                            ['True value', 'False value', 'ValueError', 'OverflowError'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'Lambda functions cannot be pickled because:',
                            ['Lambda functions only deal with binary values, that is, 0 and 1', 'Lambda functions cannot be called directly', 'Lambda functions cannot be identified by functions of pickle module', 'All lambda functions have same name'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'module _______________ is a comparatively faster implementation of pickle module.',
                            ['cPickle', 'nPickle', 'gPickle', 'tPickle'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'copy module uses _____________ protocol for shallow and deep copy.',
                            ['pickle', 'marshal', 'shelve', 'copyreg'],
                            null, null, 0
                        ],
                    ],
                    'ansrs': [2]
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
                            null, null, 2
                        ],
                        [
                            "text",
                            "express().listen(port, [host], [backlog], [callback]]). callback is:",
                            ["recursive", "synchronous", "asynchronous", "lambda"],
                            null, null, 2
                        ],
                        [
                            "text",
                            "app.get('*', function(req, res){res.send('Sorry, this is an invalid URL.');}); this route should be:",
                            ["first", "last", "conditional", "synchronous"],
                            null, null, 1
                        ],
                        [
                            "text",
                            "for http://localhost/things/tutorialspoint/12345 route should be:",
                            ["app.get('/things/:name/:id', ...)", "app.get('/things/?name/?id', ...)", "app.get('/things/[a-z]/[0-9]', ...)", "app.get('/things/word/digit', ...)"],
                            null, null, 0
                        ],
                        [
                            "text",
                            "app.use(express.static('public')); static file path is set to :",
                            ["/public/", "/public/static", "/static/public", "public/static"],
                            null, null, 2
                        ],
                        [
                            "text",
                            "app.get('/', <b>???</b>{res.cookie('name', 'express').send('cookie set');}); replace ??? by : ",
                            ["cookie-parser", "function(req, res)", "http.set", "http.get"],
                            null, null, 1
                        ]
                    ],
                    'ansrs': [2, 2, 1, 0, 2, 1]
                    // //
                },
            }
        },
        "django":{
            "level1":{
                "views":{
                    'kuestion_options': [
                        [
                            "text",
                            'vhich class is not in django.views.generic.base tree : ?',
                            ['View', 'RedirectView', 'StaticView', 'TemplateView'],
                            null, null, 2
                        ],
                        [
                            "text",
                            "class MyView(django.views.View): def get(self, req, *a, **k) . in url.py it should be ?",
                            ["MyView.view()", "MyView_view()", "MyView.as_view()", "MyView.call_view()"],
                            null, null, 2
                        ],
                        [
                            "text",
                            "app.get('*', function(req, res){res.send('Sorry, this is an invalid URL.');}); this route should be:",
                            ["first", "last", "conditional", "synchronous"],
                            null, null, 1
                        ],
                        [
                            "text",
                            "for http://localhost/things/tutorialspoint/12345 route should be:",
                            ["app.get('/things/:name/:id', ...)", "app.get('/things/?name/?id', ...)", "app.get('/things/[a-z]/[0-9]', ...)", "app.get('/things/word/digit', ...)"],
                            null, null, 0
                        ],
                        [
                            "text",
                            "app.use(express.static('public')); static file path is set to :",
                            ["/public/", "/public/static", "/static/public", "public/static"],
                            null, null, 2
                        ],
                        [
                            "text",
                            "app.get('/', <b>???</b>{res.cookie('name', 'express').send('cookie set');}); replace ??? by : ",
                            ["cookie-parser", "function(req, res)", "http.set", "http.get"],
                            null, null, 1
                        ]
                    ],
                    'ansrs': [2, 2, 1, 0, 2, 1]
                    // //
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
