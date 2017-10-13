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
                            'object = "a". vhich vill give error?',
                            ['pickle.dumps(object)', 'pickle.dumps(object, 3)', 'pickle.dumps(object, 3, True)', 'pickle.dumps("a", 2)'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhich of folloing functions can ve used to find protocol version of pickle module currently being used?',
                            ['pickle.DEFAULT', 'pickle.CURRENT', 'pickle.CURRENT_PROTOCOL', 'pickle.DEFAULT_PROTOCOL'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vhich of folloing functions can accept more than one positional argument?',
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
                },
                "loop":{
                    'kuestion_options': [
                        [
                            "text",
                            'slist = list(range(42,-12,-7)). slist is : ',
                            ['[42, 30, 18, 6, -6]', '[42, 30, 23, 11, 4,]', '[42, 35, 28, 21, 14, 7, 0, -7]', '[]'],
                            null, null, 2
                        ]
                    ],
                },
                "classes_objects":{
                    'kuestion_options': [
                        [
                            "text",
                            '_____ represents an entity in real world with its identity and behaviour.',
                            ['A method', 'An object', 'A class', 'An operator'],
                            null, null, 1
                        ],
                        [
                            "text",
                            '_____ is used to create an object.',
                            ['class', 'constructor', 'User-defined functions', 'In-built functions'],
                            null, null, 1
                        ],
                        [
                            "text",
                            '_____ is used to create an object.',
                            ['class', 'constructor', 'User-defined functions', 'In-built functions'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'What is setattr() used for?',
                            ['To access the attribute of the object', 'To set an attribute', 'To check if an attribute exists or not', 'To delete an attribute'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'What is getattr() used for?',
                            ['To access the attribute of the object', 'To delete an attribute', 'To check if an attribute exists or not', 'To set an attribute'],
                            null, null, 0
                        ],
                        [
                            "text",
                            "What is Instantiation in terms of OOP terminology?",
                            ['Deleting an instance of class', 'Modifying an instance of class', 'Copying an instance of class', 'Creating an instance of class'],
                            null, null, 3
                        ],
                    ],
                },
                "ooverloading":{
                    'kuestion_options': [
                        [
                            "text",
                            'f = foo() vhich function is called when format(f) is called:',
                            ['format()', '__format__()', 'str()', '__str__()'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vhich operator is overloaded by __invert__()?',
                            ['!', '~', '^', '-'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vhich function overloads the == operator?',
                            ['__eq__()', '__equ__()', '__isequal__()', 'none of the mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich operator is overloaded by __lg__()?',
                            ['<', '>', '!=', 'none of mentioned'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'Which function overloads the >> operator?',
                            ['__more__()', '__gt__()', '__ge__()', 'none of mentioned'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'Let A and B be objects of class Foo. Which functions are called when print(A + B) is executed?',
                            ['__add__(), __str__()', '__str__(), __add__()', '__sum__(), __str__()', '__str__(), __sum__()'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'Which operator is overloaded by the __or__() function?',
                            ['||', '|', '//', '/'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'Which function overloads the // operator?',
                            ['__div__()', '__ceildiv__()', '__floordiv__()', '__truediv__()'],
                            null, null, 2
                        ],
                    ],
                },
                "files":{
                    'kuestion_options': [
                        [
                            "text",
                            'to open a file c:&#92;scores.txt for reading, ve use',
                            ['infile = open("c:\\scores.txt", "r")', 'infile = open("c:\\\\scores.txt","r")', 'infile = open(file = "c:\\scores.txt", "r")', 'infile = open(file = "c:\\\\scores.txt","r")'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'to open a file c:&#92;scores.txt for vriting, ve use',
                            ['outfile = open("c:\\scores.txt", "w")', 'outfile = open("c:\\\\scores.txt", "w")', 'outfile = open(file = "c:\\scores.txt", "w")', 'outfile = open(file = "c:\\\\scores.txt", "w")'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'to open a file c:&#92;scores.txt for appending, ve use',
                            ['outfile = open("c:\\\\scores.txt", "a")', 'outfile = open("c:\\\\scores.txt", "rw")', 'outfile = open(file = "c:\\scores.txt", "w")', 'outfile = open(file = "c:\\\\scores.txt", "w")'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich of folloing statements are true?',
                            ['vhen you open a file for reading, if file does not Aksist, an error occurs', 'vhen you open a file for vriting, if file does not Aksist, a niyu file is created', 'vhen you open a file for vriting, if file Aksists, Akjisting file is overvritten vith niyu file', 'aal of mentioned'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'To read two characters from a file object infile, we use',
                            ['infile.read(2)', 'infile.read()', 'infile.readline()', 'infile.readlines()'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'to read entire remaining contents of file as a string from a file object infile, ve use',
                            ['infile.read(2)', 'infile.read()', 'infile.readline()', 'infile.readlines()'],
                            null, null, 1
                        ],
                    ],
                },
                "regAksp":{
                    'kuestion_options': [
                        [
                            "text",
                            'vhich module in python supports regular Akspressions?',
                            ['re', 'regex', 'pyregex', 'none of mentioned'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vic of folloing creates a pattern object?',
                            ['re.create(str)', 're.regex(str)', 're.compile(str)', 're.assemble(str)'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat dj function re.match do?',
                            ['matches a pattern at  start of  string', 'matches a pattern at any position in  string', 'such a function does not Aksist', 'none of  mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vat dj function re.search do?',
                            ['matches a pattern at  start of  string', 'matches a pattern at any position in  string', 'such a function does not Aksist', 'none of  mentioned'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'sentence = "ve are humans" matched = re.match(r"(.*) (.*?) (.*)", sentence) vat is output of print(matched.groups())',
                            ['("ve", "are", "humans")', '(ve, are, humans)', '("ve", "humans")', 've are humans'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'sentence = "ve are humans" matched = re.match(r"(.*) (.*?) (.*)", sentence) vat is output of print(matched.group())',
                            ['("ve", "are", "humans")', '(ve, are, humans)', '("ve", "humans")', 've are humans'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'sentence = "ve are humans" matched = re.match(r"(.*) (.*?) (.*)", sentence) vat is output of print(matched.group(2))',
                            ['are', 've', 'humans', 've are humans'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'sentence = "horses are fast" regex = re.compile("(?P<animal>\w+) (?P<verb>\w+) (?P<adjective>\w+)") matched = re.search(regex, sentence) vat is output of print(matched.groupdict())',
                            ['{"animal": "horses", "verb": "are", "adjective": "fast"}', '("horses", "are", "fast")', 'horses are fast', 'are'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'sentence = "horses are fast" regex = re.compile("(?P<animal>\w+) (?P<verb>\w+) (?P<adjective>\w+)") matched = re.search(regex, sentence) vat is output of print(matched.groups())',
                            ['{"animal": "horses", "verb": "are", "adjective": "fast"}', '("horses", "are", "fast")', 'horses are fast', 'are'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'sentence = "horses are fast" regex = re.compile("(?P<animal>\w+) (?P<verb>\w+) (?P<adjective>\w+)") matched = re.search(regex, sentence) vat is output of print(matched.group(2))',
                            ['{"animal": "horses", "verb": "are", "adjective": "fast"}', '("horses", "are", "fast")', 'horses are fast', 'are'],
                            null, null, 3
                        ],
                    ],
                },
                "builtinfunctions":{
                    'kuestion_options': [
                        [
                            "text",
                            'vhich of folloing functions is a built-in function in python?',
                            ['seed()', 'sqrt()', 'factorial()', 'print()'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vat is output of round(4.576)',
                            ['4.5', '5', '4', '4.6'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'pow(x,y,z) is evaluated as:',
                            ['(x**y)**z', '(x**y)/z', '(x**y)%z', '(x**y)*z'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'pow(x,y,z) is evaluated as:',
                            ['(x**y)**z', '(x**y)/z', '(x**y)%z', '(x**y)*z'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhat is output of all([2,4,0,6])?',
                            ['error', 'true', 'false', '0'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhat is output of round(4.5676,2)?',
                            ['4.5', '4.6', '4.57', '4.56'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhat is output of any([2>8, 4>2, 1>2])?',
                            ['error', 'true', 'false', '4>2'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhat is output of abs(math.sqrt(25))',
                            ['error', '-5', '5', '5.0'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vhat is output of abs(math.sqrt(25))',
                            ['error', '-5', '5', '5.0'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vhat is output of sum(2,4,6) sum([1,2,3])',
                            ['error, 6', '12, error', '12, 6', 'error, error'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhat is output of all(3,0,4,2)',
                            ['true', 'false', 'error', '0'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhat is output of min(max(False,-3,-4), 2,7)',
                            ['2', 'False', '-3', '-4'],
                            null, null, 1
                        ],
                    ],
                },
                "list":{
                    'kuestion_options': [
                        [
                            "text",
                            'vhich of folloing commands vil create a list?',
                            ['list1 = list()', 'list1 = []', 'list1 = list([1, 2, 3])', 'aal of mentioned'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vhat is output vhen ve ekjecute list(“hello”)?',
                            ['["h", "e", "l", "l", "o"]', '["hello"]', '["llo"]', '["olleh"]'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'suppose li is ["h","e","l","l","o"], vhat is len(li)?',
                            ['5', '4', 'None', 'error'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'suppose list1 is [2445,133,12454,123], vhat is max(list1) ?',
                            ['2445', '12454', '133', '123'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'suppose list1 is [3, 5, 25, 1, 3], vhat is min(list1) ?',
                            ['3', '5', '25', '1'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'suppose list1 is [1, 5, 9], vhat is sum(list1) ?',
                            ['1', '9', '15', 'error'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'to shuffle list(say list1) vhat function do ve use ?',
                            ['list1.shuffle()', 'shuffle(list1)', 'random.shuffle(list1)', 'random.shuffleList(list1)'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'suppose list1 is [4, 2, 2, 4, 5, 2, 1, 0], vhich of  folloing is correct syntaks for slicing operation ?',
                            ['print(list1[0])', 'print(list1[:2])', 'print(list1[:-2])', 'All of  mentioned'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'suppose list1 is [2, 33, 222, 14, 25], vhat is list1[-1] ?',
                            ['Error', 'None', '25', '2'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'suppose list1 is [2, 33, 222, 14, 25], vhat is list1[:-1] ?',
                            ['[2, 33, 222, 14]', 'Error', '25', '[25, 14, 222, 33, 2]'],
                            null, null, 0
                        ],
                    ],
                },
                "string":{
                    'kuestion_options': [
                        [
                            "text",
                            'print r"\\nhello" vhat is output ?',
                            ['a new line and hello', '\\nhello', 'letter r and then hello', 'error'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'print("new" "line") vhat is output ?',
                            ['error', 'output equivalent to print "new\nline"', 'newline', 'new line'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'print("x\\97\\x98") vhat is output ?',
                            ['error', '97 newline 98', 'x\\97', '\\x97\\x98'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'str1="helloworld" . vhat vil bi output of str1[::-1]',
                            ['dlrowolleh', 'hello', 'world', 'helloworld'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'print(0xA + 0xB + 0xC) :',
                            ['0xA0xB0xC', 'error', '0x22', '33'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'ekjample = "snov vorld" print("%s" % ekjample[4:7]) vil print ?',
                            [' vo', ' vorld', 'sn', 'rl'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'ekjample = "snov vorld" ; ekjample[3] = "s" ; print(ekjample) . vhat vil bi output',
                            ['snov', 'snov vorld', 'error', 'snos vorld'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'print(max("vhat are you")) vil print: ',
                            ['error', 'u', 't', 'y'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'given a string ekjample=”hello” vhat is output of ekjample.count(l)',
                            ['2', '1', 'None', '0'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'ekjample = "helle" ; vhat is output of ekjample.find("e")',
                            ['error', '-1', '1', '0'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'ekjample = "helle" ; vhat is output of ekjample.rfind("e")',
                            ['-1', '4', '3', '1'],
                            null, null, 1
                        ],
                        [
                            "text",
                            '>>>example="helloworld" >>>example[::-1].startswith("d") vhat is output',
                            ['dlrowolleh', 'True', '-1', 'None'],
                            null, null, 1
                        ],                        
                        [
                            "text",
                            'to concatenate 2 strings to a 3rd vhat statements are applicable ?',
                            ['s3 = s1 . s2', 's3 = s1.add(s2)', 's3 = s1.__add__(s2)', 's3 = s1 * s2'],
                            null, null, 2
                        ],                        
                    ],
                },
            },
            "level2":{
                "list":{
                    'kuestion_options': [
                        [
                            "text",
                            'slist = list(range(42,-12,-7)). slist is : ',
                            ['[42, 30, 18, 6, -6]', '[42, 30, 23, 11, 4,]', '[42, 35, 28, 21, 14, 7, 0, -7]', '[]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            "names = ['Amir', 'Bear', 'Charlton', 'Daman'] vhat is output of print(names[-1][-1]) ?",
                            ['A', 'Daman', 'Error', 'n'],
                            null, null, 3
                        ],
                        [
                            "text",
                            "Suppose list1 = [0.5 * x for x in range(0, 4)], list1 is :",
                            ['[0, 1, 2, 3]', '[0, 1, 2, 3, 4]', '[0.0, 0.5, 1.0, 1.5]', '[0.0, 0.5, 1.0, 1.5, 2.0]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            "Suppose list1 = [0.5 * x for x in range(0, 4)], list1 is :",
                            ['[0, 1, 2, 3]', '[0, 1, 2, 3, 4]', '[0.0, 0.5, 1.0, 1.5]', '[0.0, 0.5, 1.0, 1.5, 2.0]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            "list1 = [11, 2, 23] , list2 = [11, 2, 2] vhat is output of list1 < list2 ?",
                            ['True', 'False', 'Error', 'None'],
                            null, null, 1
                        ],
                        [
                            "text",
                            "To add a niyu element to a list ve use vhich command ?",
                            ['list1.add(5)', 'list1.append(5)', 'list1.addLast(5)', 'list1.addEnd(5)'],
                            null, null, 1
                        ],
                        [
                            "text",
                            "To insert 5 to  third position in list1, we use which command ?",
                            ['list1.insert(3, 5)', 'list1.insert(2, 5)', 'list1.add(3, 5)', 'list1.append(3, 5)'],
                            null, null, 0
                        ],
                        [
                            "text",
                            "To remove string “hello” from list1, we use which command ?",
                            ['list1.remove(“hello”)', 'list1.remove(hello)', 'list1.removeAll(“hello”)', 'list1.removeOne(“hello”)'],
                            null, null, 0
                        ],
                        [
                            "text",
                            "Suppose list1 is [3, 4, 5, 20, 5], what is list1.index(5) ?",
                            ['0', '1', '4', '2'],
                            null, null, 3
                        ],
                        [
                            "text",
                            "Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1.count(5) ?",
                            ['0', '4', '1', '2'],
                            null, null, 3
                        ],
                    ],
                },
                "files":{
                    'kuestion_options': [
                        [
                            "text",
                            'vic aar 2 built-in functions to read a line of tekst from standard input, vic by default comes from keyboard?',
                            ['raw_input and input', 'input and scan', 'scan and scanner', 'scanner'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'str = raw_input("Enter your input: "); print "Received input is : ", str',
                            ['Enter your input: Hello Python Received input is : Hello Python', 'Enter your input: Hello Python Received input is : Hello', 'Enter your input: Hello Python Received input is : Python', 'none of  mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'str = input("Enter your input: "); print "Received input is : ", str',
                            ['Enter your input: [x*5 for x in range(2,10,2)]. Received input is : [x*5 for x in range(2,10,2)]', 'Enter your input: [x*5 for x in range(2,10,2)]. Received input is : [10, 30, 20, 40]', 'Enter your input: [x*5 for x in range(2,10,2)]. Received input is : [10, 10, 30, 40].', 'none of  mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich one of folloing is not attributes of file',
                            ['closed', 'softspace', 'rename', 'mode'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'What is use of tell() method in python?',
                            ['tells you current position within file', 'tells you  end position within  file', 'tells you  file is opened or not', 'none of  mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'What is  current syntax of rename() a file?',
                            ['rename(current_file_name, new_file_name)', 'rename(new_file_name, current_file_name,)', 'rename(()(current_file_name, new_file_name))', 'none of  mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'What is  current syntax of remove() a file?',
                            ['remove(file_name)', 'remove(new_file_name, current_file_name,)', 'remove(() , file_name))', 'none of  mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'fo = open("foo.txt", "rw+"); fo.next() returns :',
                            ['nekst character from file', 'cursor pointing nekst character', 'nekst input line', 'none of  mentioned'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is use of seek() method in files?',
                            ["sets the file’s current position at the offset", "sets the file’s previous position at the offset", "sets the file’s current position within the file", 'none of  mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vat is use of truncate() method in file?',
                            ["truncates the file’s size", "deletes the content of the file", "deletes the file’s size", 'none of  mentioned'],
                            null, null, 0
                        ],
                    ],
                },
                "regAksp":{
                    'kuestion_options': [
                        [
                            "text",
                            'character dot (that is, ".") in default mode, matches any character other than:',
                            ['caret', 'ampersand', 'percentage symbol', 'newline'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'expression a{5} will match characters vith previous regular expression.',
                            ['5 or less', 'exactly 5', '5 or more', 'exactly 4'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'v,y matches start and end of string. v, y are :',
                            ['"^", "$"', '"$", "^"', '"$", "?"', '"?", "^"'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich of folloing vil result in an error?',
                            ['>>> p = re.compile(“d”) >>> p.search("door")', '>>> p = re.escape("hello")', '>>> p = re.subn()', '>>> p = re.purge()'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of re.split("\W+", "Hello, hello, hello.")',
                            ['["Hello", "hello", "hello."]', '["Hello, "hello", "hello"]', '"Hello", "hello", "hello", "."', '["Hello", "hello", "hello", ""]'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of re.findall("hello vorld", "hello", 1)")',
                            ['[“hello”]', '[ ]', 'hello', 'hello vorld'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'Choose function whose output can be: <_sre.SRE_Match object; span=(4, 8), match="aaaa">.',
                            ['>>> re.search("aaaa", "alohaaaa", 0)', '>>> re.match("aaaa", "alohaaaa", 0)', '>>> re.match("aaa", "alohaaa", 0)', '>>> re.search("aaa", "alohaaa", 0)'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich of folloing functions clears regular Akspression cache?',
                            ['re.sub()', 're.pos()', 're.purge()', 're.subn()'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of re.ASCII ?',
                            ['8', '32', '64', '256'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vat is output of re.ASCII ?',
                            ['8', '32', '64', '256'],
                            null, null, 3
                        ],
                    ],
                },
                "class_objects":{
                    'kuestion_options': [
                        [
                            "text",
                            'assignment of more than one function to a particular operator is ____',
                            ['operator over-assignment', 'operator overriding', 'operator overloading', 'operator instance'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhich of following is not a class method?',
                            ['Non-static', 'Static', 'Bounded', 'Unbounded'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'What are the methods which begin and end with two underscore characters called?',
                            ['Special methods', 'In-built methods', 'User-defined methods', 'Additional methods'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'What does print(Test.__name__) display (assuming Test is the name of the class) ?',
                            ['()', 'Exception is thrown', 'Test', '__main__'],
                            null, null, 2
                        ],
                    ],
                },
                "builtinfunctions":{
                    'kuestion_options': [
                        [
                            "text",
                            'vat is output of chr("97") and chr(97)',
                            ['a error', '"a" a', 'error a', 'error error'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of complex(1+2j)',
                            ['error', '1', '2j', '1+2j'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vat is output of complex()',
                            ['0j', '0+0j', '0', 'error'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'divmod(a,b), vhere both "a" and "b" are integers is evaluated as:',
                            ['(a%b, a//b)', '(a//b, a%b)', '(a//b, a*b)', '(a/b, a%b)'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of divmod(10.5,5) and divmod(2.4,1.2)',
                            ['(2.00, 0.50) (2.00, 0.00)', '(2, 0.5) (2, 0)', '(2.0, 0.5) (2.0, 0.0)', '(2, 0.5) (2)'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of list(enumerate([2, 3]))',
                            ['error', '[(1, 2), (2, 3)]', '[(0, 2), (1, 3)]', '[(2, 3)]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of x=3 eval("x^2")',
                            ['error', 1, 9, 6],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of float("1e-003") and float("2e+003")',
                            ['3.00 300', '0.001 2000.0', '0.001 200', 'error 2003'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of float("1e-003") and float("2e+003")',
                            ['3.00 300', '0.001 2000.0', '0.001 200', 'error 2003'],
                            null, null, 1
                        ],
                    ],
                },
            },
            "level3":{
                "list":{
                    'kuestion_options': [
                        [
                            "text",
                            'Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after list1.reverse() ?',
                            ['[3, 4, 5, 20, 5, 25, 1, 3]', '[1, 3, 3, 4, 5, 5, 20, 25]', '[25, 20, 5, 5, 4, 3, 3, 1]', ' [3, 1, 25, 5, 20, 5, 4, 3]'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.extend([34, 5]) ?',
                            ['[3, 4, 5, 20, 5, 25, 1, 3, 34, 5]', '[1, 3, 3, 4, 5, 5, 20, 25, 34, 5]', '[25, 20, 5, 5, 4, 3, 3, 1, 34, 5]', '[1, 3, 4, 5, 20, 5, 25, 3, 34, 5]'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.pop(1) ?',
                            ['[3, 4, 5, 20, 5, 25, 1, 3]', '[1, 3, 3, 4, 5, 5, 20, 25]', '[3, 5, 20, 5, 25, 1, 3]', '[1, 3, 4, 5, 20, 5, 25]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.pop()?',
                            ['[3, 4, 5, 20, 5, 25, 1]', '[1, 3, 3, 4, 5, 5, 20, 25]', '[3, 5, 20, 5, 25, 1, 3]', '[1, 3, 4, 5, 20, 5, 25]'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'What is  output of "Welcome to Python".split()',
                            ['[“Welcome”, “to”, “Python”]', '(“Welcome”, “to”, “Python”)', '{“Welcome”, “to”, “Python”}', '“Welcome”, “to”, “Python”'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'What is  output of list("a#b#c#d".split("#"))',
                            ['["a", "b", "c", "d"]', '["a b c d"]', '["a#b#c#d"]', '["abcd"]'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'list1 = [1, 3] ; list2 = list1 ; list1[0] = 4 ; print(list2)',
                            ['[1, 3]', '[4, 3]', '[1, 4]', '[1, 3, 4]'],
                            null, null, 1
                        ],
                    ],
                },
                "regAksp":{
                    'kuestion_options': [
                        [
                            "text",
                            'vat is output of re.compile("hello", re.X)',
                            ['["h", "e", "l", "l", "o"]', 're.compile("hello", re.VERBOSE)', 'error', 'junk value'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of re.split("[a-c]", "0a3B6", re.RegexFlag.IGNORECASE)',
                            ['error', '["a", "B"]', '["0", "3B6"]', '["a"]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of re.sub("morning", "evening", "good morning")',
                            ['good evening', 'good', 'morning', 'evening'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vat is output of re.sub("morning", "evening", "good morning")',
                            ['good evening', 'good', 'morning', 'evening'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vat is output of re.split("mum", "mumbai*", 1)',
                            ['error', '["", "bai*"]', '["", "bai"]', '["bai*"]'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of re.findall("good", "good is good") and re.findall("good", "bad is good")',
                            ['["good", "good"] ["good"]', '("good", "good") ("good")', '("good") ("good")', '["good"] ["good"]'],
                            null, null, 0
                        ],
                    ],
                },
                "files":{
                    'kuestion_options': [
                        [
                            "text",
                            'Which is/are basic I/O connections in file?',
                            ['Standard Input', 'Standard Output', 'Standard Errors', 'All of the mentioned'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vat is pickling',
                            ['it is used for object serialization', 'it is used for object de-serialization', 'none of mentioned', 'aal of mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vat is unpickling',
                            ['It is used for object serialization', 'It is used for object deserialization', 'None of mentioned', 'aal of mentioned'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'What is the correct syntax of open() function?',
                            ['file = open(file_name [, access_mode][, buffering])', 'file object = open(file_name [, access_mode][, buffering])', 'file object = open(file_name)', 'none of the mentioned'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'correct syntaks of file.writelines() is?',
                            ['file.writelines(sequence)', 'fileObject.writelines()', 'fileObject.writelines(sequence)', 'none of the mentioned'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'correct syntaks of file.readlines() is?',
                            ['fileObject.readlines(sizehint)', 'fileObject.readlines()', 'fileObject.readlines(sequence)', 'none of the mentioned'],
                            null, null, 0
                        ],
                    ],
                },
                "builtinfunctions":{
                    'kuestion_options': [
                        [
                            "text",
                            'vhich of folloing functions accepts only integers as arguments?',
                            ['ord()', 'min()', 'chr()', 'any()'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'l=[2,3,4] If ve vant to print this list in reverse order, vhich of folloing methods should be used?',
                            ['reverse(l)', 'list(reverse[(l)])', 'reversed(l)', 'list(reversed(l))'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vat is output of float("   -12345\n")',
                            ['-12345.0 (5 blank spaces before number)', '-12345.0', 'error', '-12345.000000000…. (infinite decimal places)'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of ord(65) ord("A")',
                            ['A 65', 'error 65', 'A error', 'error error'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of float("-infinity") float("inf")',
                            ['–inf inf', '–infinity inf', 'error error', 'error junk value'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich of folloing functions vil not result in an error vhen no arguments are passed to it?',
                            ['min()', 'divmod()', 'all()', 'float()'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vat is output of hex(15)',
                            ['f', '0xF', '0Xf', '0xf'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vhich of following functions does not throw an error?',
                            ['ord()', 'ord(" ")', 'ord("")', 'ord("")'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vat is output of len(["hello",2, 4, 6])',
                            ['4', '3', 'error', '6'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vat is output of oct(7) and oct("7")',
                            ['Error 07', '0o7 Error', '0o7 Error', '07 0o7'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of oct(7) and oct("7")',
                            ['Error 07', '0o7 Error', '0o7 Error', '07 0o7'],
                            null, null, 2
                        ],
                    ],
                },
            },
            "level4":{
                "list":{
                    'kuestion_options': [
                        [
                            "text",
                            'names1 = ["Amir", "Bala", "Charlie"] ,  names2 = [name.lower() for name in names1] , vat vil bi output of print(names2[2][0])',
                            ['None', 'a', 'b', 'c'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'numbers = [1, 2, 3, 4] ; numbers.append([5,6,7,8]) ; vat vil bi output of print(len(numbers))',
                            ['4', '5', '8', '12'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'To which of  following  “in” operator can be used to check if an item is in it?',
                            ['Lists', 'Dictionary', 'Set', 'All of  mentioned'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'list1 = [1, 2, 3, 4] ; list2 = [5, 6, 7, 8] vat vil bi output of print(len(list1 + list2))',
                            ['2', '4', '5', '8'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'veggies = ["carrot", "broccoli", "potato", "asparagus"] ; veggies.insert(veggies.index("broccoli"), "celery") vat vil bi output of print(veggies)',
                            ['["carrot", "celery", "broccoli", "potato", "asparagus"]', '["carrot", "celery", "potato", "asparagus"]', '["carrot", "broccoli", "celery", "potato", "asparagus"]', '["celery", "carrot", "broccoli", "potato", "asparagus"]'],
                            null, null, 0
                        ],
                    ],
                },
                "files":{
                    'kuestion_options': [
                        [
                            "text",
                            'In file handling, what does this terms means “r, a”?',
                            ['read, append', 'append, read', 'all of mentioned', 'none of mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'What is use of “w” in file handling?',
                            ['read', 'write', 'append', 'none of mentioned'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'What is use of "a" in file handling?',
                            ['read', 'write', 'append', 'none of mentioned'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhich function is used to read all characters?',
                            ['read()', 'readcharacters()', 'readall()', 'readchar()'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'Which function is used to read single line from file?',
                            ['readline()', 'readlines()', 'readstatement()', 'readfullline()'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vhich function is used to write all the characters?',
                            ['write()', 'writecharacters()', 'writeall()', 'writechar()'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'Which function is used to write a list of string in a file',
                            ['writeline()', 'writelines()', 'writestatement()', 'writefullline()'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'Which function is used to close a file in python?',
                            ['Close()', 'Stop()', 'End()', 'Closefile()'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'is it possible to create a text file in python?',
                            ['Yes', 'No', 'Machine dependent', 'All of the mentioned'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'Which of the following is modes of both writing and reading in binary format in file.?',
                            ['wb+', 'w', 'wb', 'w+'],
                            null, null, 0
                        ],
                    ],
                },
                "regAksp":{
                    'kuestion_options': [
                        [
                            "text",
                            'vat is output of re.split(r"(a)(t)", "Maths is a difficult subject")',
                            ['["M a t h s i s a d i f f i c u l t s u b j e c t"]', '["Maths", "is", "a", "difficult", "subject"]', '"Maths is a difficult subject"', '["M", "a", "t", "hs is a difficult subject"]'],
                            null, null, 3
                        ],
                        [
                            "text",
                            's = "abc123 xyz666 lmn-11 def77" vat is output of re.sub(r"\b([a-z]+)(\d+)", r"\2\1:", s)',
                            ['123abc: 666xyz: lmn-11 77def:', '77def: lmn-11: 666xyz: 123abc', 'abc123:", "xyz666:", "lmn-11:", "def77:', 'abc123: xyz666: lmn-11: def77'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vat is output of re.subn("A", "X", "AAAAAA", count=4)',
                            ['XXXXAA, 4', '("AAAAAA", 4)', '("XXXXAA", 4)"', 'AAAAAA, 4'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of n = re.sub(r"\w+", "Hello", "Cats and dogs")',
                            ['Hello', 'Hello Hello Hello', '["Hello", "Hello", "Hello"]', '("Hello", "Hello", "Hello")'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'v = re.compile("[A-Za-z]+") v.findall("it vil rain today") vat is output?',
                            ['it vil rain today', '("it vil rain today")', '["it vil rain today"]', '["it", "vil", "rain", "today"]'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'in functions re.search.start(group) and re.search.end(group), if argument groups not specified, it defaults to:',
                            ['jiro', 'none', 'one', 'error'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'vat is output of re.split(r"\s+", "Chrome is better than explorer", maxspilt=3)',
                            ['["Chrome", "is", "better", "than", "explorer"]', '["Chrome", "is", "better", "than explorer"]', '("Chrome", "is", "better", "than explorer")', '"Chrome is better" "than explorer"'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'a=re.compile("[0-9]+") ; a.findall("7 apples and 4 mangoes"). vat is output',
                            ['["apples" "and" "mangoes"]', '(7, 4)', '["7", "4"]', 'error'],
                            null, null, 2
                        ],
                    ],
                },
            },
            "level5":{
                "list":{
                    'kuestion_options': [
                        [
                            "text",
                            'm = [[x, x + 1, x + 2] for x in range(0, 3)] . vat is m ?',
                            ['[[1, 2, 3], [4, 5, 6], [7, 8, 9]]', '[[0, 1, 2], [1, 2, 3], [2, 3, 4]]', '[1, 2, 3, 4, 5, 6, 7, 8, 9]', '[0, 1, 2, 1, 2, 3, 2, 3, 4]'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'm = [[x, y] for x in range(0, 4) for y in range(0, 4)] vat vil bi output of len(m) ?',
                            ['8', '12', '16', '32'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'points = [[1, 2], [3, 1.5], [0.5, 0.5]] ; points.sort() ; vat vil bi output of print(points)',
                            ['[[1, 2], [3, 1.5], [0.5, 0.5]]', '[[3, 1.5], [1, 2], [0.5, 0.5]]', '[[0.5, 0.5], [1, 2], [3, 1.5]]', '[[0.5, 0.5], [3, 1.5], [1, 2]]'],
                            null, null, 2
                        ],
                    ],
                },
                "regAksp":{
                    'kuestion_options': [
                        [
                            "text",
                            'vhich of folloing functions returns a dictionary mapping group names to group numbers?',
                            ['re.compile.group', 're.compile.groupindex', 're.compile.index', 're.compile.indexgroup'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'vhich of folloing statements regarding output of function re.match is incorrect?',
                            ['"pq*" vil match "pq"', '"pq?" matches "p"', '"p{4}, q" does not match "pppq"', '"pq+" matches "p"'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'vhich of folloing functions does not accept any argument?',
                            ['re.purge', 're.compile', 're.findall', 're.match'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'a = re.compile("0-9") ; vat is output of a.findall("3 trees")',
                            ['[]', '["3"]', 'error', '["trees"]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vhich of folloing lines of code vil not sho a match?',
                            ['re.match("ab*", "a")', 're.match("ab*", "ab")', 're.match("ab*", "abb")', 're.match("ab*", "ba")'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'm = re.search("a", "blue umbrella") vat is output of m.re.pattern',
                            ['{}', 'blue umbrella', 'a', 'no output'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat is output of re.sub("Y", "X", "AAAAAA", count=2)',
                            ['YXAAAA', '("YXAAAA")', '("AAAAAA")', '"AAAAAA"'],
                            null, null, 3
                        ],
                    ],
                },
            },
            "level6":{
                "list":{
                    'kuestion_options': [
                        [
                            "text",
                            'a = [10,23,56,[78]] ;  b = list(a) ;  a[3][0] = 95 ; a[1] = 34 ; vat vil be output of print(b)',
                            ['[10,34,56,[95]]', '[10,23,56,[78]]', '[10,23,56,[95]]', '[10,34,56,[78]]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'vat vil bi output of print(list(zip((1,2,3),("a"),("xxx","yyy"))))',
                            ['[(1,2,3),("a"),("xxx","yyy")]', '[(1, "a", "xxx"),(2," ","yyy"),(3," "," ")]', 'Syntax error', '[(1, "a", "xxx")]'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'a=[10,23,56,[78]] ; b=copy.deepcopy(a) ; a[3][0]=95 ; a[1]=34 ; vat vil bi output of print(b)',
                            ['[10,34,56,[95]]', '[10,23,56,[78]]', '[10,23,56,[95]]', '[10,34,56,[78]]'],
                            null, null, 1
                        ],/*
                        [
                            "text",
                            's="a@b@c@d" ; a=list(s.partition("@")) ; vat vil bi output of print(a)',
                            ['["a","b","c","d"]', '["a","@","b","@","c","@","d"]', '["a","@","b@c@d"]', '["a","@","b@c@d"]'],
                            null, null, 2
                        ],*/
                        [
                            "text",
                            's="a@b@c@d" ; b=list(s.split("@",3)) ; vat vil bi output of print(b)',
                            ['error', '@@@', '["a","@","b","@","c","@","d"]', '["a","b","c","d"]'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'a=[1,2,3,4] ; b=[sum(a[0:x+1]) for x in range(0,len(a))] vat vil bi output of print(b)',
                            ['10', '[1,3,5,7]', '4', '[1,3,6,10]'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'a="hello" ; b=list((x.upper(),len(x)) for x in a) vat vil bi output of print(b)',
                            ['[("H", 1), ("E", 1), ("L", 1), ("L", 1), ("O", 1)]', '[("HELLO", 5)]', '[("H", 5), ("E", 5), ("L", 5), ("L", 5), ("O", 5)]', 'Syntax error'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'a=[[]]*3 ; a[1].append(7) vat vil bi output of print(a)',
                            ['Syntax error', '[[7], [7], [7]]', '[[7], [], []]', '[[],7, [], []]'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'b=[2,3,4,5] a=list(filter(lambda x:x%2,b)) vat vil bi output of print(a)',
                            ['[2,4]', '[ ]', '[3,5]', 'Invalid arguments for filter function'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'lst=[3,4,6,1,2] lst[1:2]=[7,8] vat vil bi output of print(lst)',
                            ['[3, 7, 8, 6, 1, 2]', 'Syntax error', '[3,[7,8],6,1,2]', '[3,4,6,7,8]'],
                            null, null, 0
                        ],
                    ],
                },
            },
            "level7":{
                "list":{
                    'kuestion_options': [
                        [
                            "text",
                            'a=[1,2,3] b=a.append(4) vat vil bi output of print(a) and print(b)?',
                            ['[1,2,3,4] and [1,2,3,4]', '[1, 2, 3, 4] and None', 'syntax error', '[1,2,3] and [1,2,3,4]'],
                            null, null, 2
                        ],
                        [
                            "text",
                            '>>> a=[14,52,7] >>>> b=a.copy() >>> b is a ; vat vil bi output',
                            ['true', 'false', 'error', 'none'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'a=[13,56,17] ; a.append([87]) ; a.extend([45,67]) ; print(a) ; vhat is output of folloing code?',
                            ['[13, 56, 17, [87], 45, 67]', '[13, 56, 17, 87, 45, 67]', '[13, 56, 17, 87,[ 45, 67]]', '[13, 56, 17, [87], [45, 67]]'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'a=list((45,)*4) ;  vhat is output of print((45)*4) ; print(a)',
                            ['180 [(45),(45),(45),(45)]', '(45,45,45,45). [45,45,45,45]', '180 [45,45,45,45]', 'syntaks error'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'lst=[[1,2],[3,4]]  vhat is output of print(sum(lst,[]))',
                            ['[[3],[7]]', '[1,2,3,4]', 'error', '[10]'],
                            null, null, 1
                        ],
                        [
                            "text",
                            'word1="Apple" word2="Apple" list1=[1,2,3] list2=[1,2,3] vhat is output of print(word1 is word2) print(list1 is list2)',
                            ['True True', 'False True', 'False False', 'True False'],
                            null, null, 3
                        ],
                        [
                            "text",
                            'y=[[1],[2]] vhat is output of print(" ".join(list(map(str,y))))',
                            ['[1] [2]', '[49] [50]', 'syntaks error', '[[1]] [[2]]'],
                            null, null, 0
                        ],
                        [
                            "text",
                            'a=165 b=sum(list(map(int,str(a)))) vhat is output of print(b)',
                            ['561', '5', '12', 'syntaks error'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'a=165 b=sum(list(map(int,str(a)))) vhat is output of print(b)',
                            ['561', '5', '12', 'syntaks error'],
                            null, null, 2
                        ],
                        [
                            "text",
                            'x = [i**+1 for i in range(3)]; vhat is output of print(x);',
                            ['561', '5', '12', 'syntaks error'],
                            null, null, 2
                        ],
                    ],
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
                            null, null, 2
                        ]
                    ],
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
                    // //
                },
            }
        },
        "qt":{
            "level1":{
                "lesson1":{
                    'kuestion_options': [
                        [
                            "text",
                            'Q_OBJECT macro must appear in ______ of a class',
                            ['private section', 'public section', 'protected section', 'static namespace'],
                            null, null, 0
                        ],
                        [
                            "text",
                            "vhich is not true for moc(Meta-Object Compiler):",
                            ["moc creates makefile", "moc handles Qt's C++ extensions", "moc reads a C++ header file", "moc finds class having Q_OBJECT macro"],
                            null, null, 0
                        ],
                        [
                            "text",
                            "All classes that contain signals or slots must:",
                            ["be generated from moc", "mention Q_OBJECT & derive from QObject", "be static class", "have a pure virtual function"],
                            null, null, 1
                        ],
                        [
                            "text",
                            "vhich is correct ?",
                            ["QObject::connect(signal, slot, sender, receiver)", "QObject::connect(sender, receiver, signal, slot)", "QObject::connect(sender, slot, receiver, signal)", "QObject::connect(sender, signal, receiver, slot)"],
                            null, null, 3
                        ],
                        [
                            "text",
                            "2 types of dialog are",
                            ["ok and cancel", "modal and modaless", "main and sub", "fixed and floating"],
                            null, null, 1
                        ],
                        [
                            "text",
                            "app.get('/', <b>???</b>{res.cookie('name', 'express').send('cookie set');}); replace ??? by : ",
                            ["cookie-parser", "function(req, res)", "http.set", "http.get"],
                            null, null, 1
                        ]
                    ],
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
                            null, null, 0
                        ],
                        [
                            "text",
                            "ax<sup>2</sup> + bx + c = 0 ; D(diskriminant) = &#8710; = ?",
                            ['b<sup>2</sup> - 4a', 'c<sup>2</sup> - 4ab', 'b<sup>2</sup> - 4ac', 'a<sup>2</sup> - 4bc'],
                            null, null, 2
                        ],
                        [
                            "text",
                            "5x<sup>2</sup> + 6x + 1 = 0 ; D(diskriminant) = &#8710; = ?",
                            ["5", "6", "25", "16"],
                            null, null, 3
                        ],
                        [
                            "text",
                            "ax<sup>2</sup> + bx + c = 0 ; &#8710; = b<sup>2</sup> - 4ac . its roots (r1, r2) are : ",
                            ["( -b &plusmn; &radic;&#8710; ) / 2a", "( -b &plusmn; &radic;&#8710; )/a", "( b &plusmn; &radic;&#8710; ) / 2a", "( -b &plusmn; &radic;&#8710; ) / 2c"],
                            null, null, 0
                        ],
                        [
                            "text",
                            "In ax<sup>2</sup> + bx + c = 0  , b<sup>2</sup> - 4ac = 0. then roots are",
                            ["positive", "negative", "imaginary", "equal"],
                            null, null, 3
                        ],
                        [
                            "text",
                            "In ax<sup>2</sup> + bx + c = 0  , b<sup>2</sup> - 4ac < 0. then roots are",
                            ["positive", "negative", "imaginary", "equal"],
                            null, null, 2
                        ],
                        [
                            "text",
                            "In ax<sup>2</sup> + bx + c = 0  , b<sup>2</sup> - 4ac > 0. then roots are",
                            ["positive", "real", "imaginary", "equal"],
                            null, null, 1
                        ],
                        [
                            "text",
                            "In x<sup>2</sup> - 9x + 20 = 0  , then roots are",
                            ["4, 5", "4, 7", "7 , 8", "5, 7"],
                            null, null, 0
                        ],                        
                        [
                            "text",
                            "sum of root is s and product of root is p. then ekuation is :",
                            ["ax<sup>2</sup> + sx + p = 0", "x<sup>2</sup> + sx + p = 0", "x<sup>2</sup> - sx + p = 0", "x<sup>2</sup> + sx - p = 0"],
                            null, null, 2
                        ],
                        [
                            "text",
                            "25x<sup>2</sup> - 25x + 4 = 0. its roots are :",
                            ["3, 4", "2/3, 4/5", "1/5, 4/5", "6, 0"],
                            null, null, 2
                        ],
                    ],
                },
            }
        },
    };
   //var kyuij_viki = [ ];

})();