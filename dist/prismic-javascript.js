(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fetch-everywhere"));
	else if(typeof define === 'function' && define.amd)
		define("PrismicJS", ["fetch-everywhere"], factory);
	else if(typeof exports === 'object')
		exports["PrismicJS"] = factory(require("fetch-everywhere"));
	else
		root["PrismicJS"] = factory(root["fetch-everywhere"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Variation = (function () {
    function Variation(data) {
        this.data = {};
        this.data = data;
    }
    Variation.prototype.id = function () {
        return this.data.id;
    };
    Variation.prototype.ref = function () {
        return this.data.ref;
    };
    Variation.prototype.label = function () {
        return this.data.label;
    };
    return Variation;
}());
exports.Variation = Variation;
var Experiment = (function () {
    function Experiment(data) {
        this.data = {};
        this.data = data;
        this.variations = (data.variations || []).map(function (v) {
            return new Variation(v);
        });
    }
    Experiment.prototype.id = function () {
        return this.data.id;
    };
    Experiment.prototype.googleId = function () {
        return this.data.googleId;
    };
    Experiment.prototype.name = function () {
        return this.data.name;
    };
    return Experiment;
}());
exports.Experiment = Experiment;
var Experiments = (function () {
    function Experiments(data) {
        if (data) {
            this.drafts = (data.drafts || []).map(function (exp) {
                return new Experiment(exp);
            });
            this.running = (data.running || []).map(function (exp) {
                return new Experiment(exp);
            });
        }
    }
    Experiments.prototype.current = function () {
        return this.running.length > 0 ? this.running[0] : null;
    };
    Experiments.prototype.refFromCookie = function (cookie) {
        if (!cookie || cookie.trim() === "")
            return null;
        var splitted = cookie.trim().split(" ");
        if (splitted.length < 2)
            return null;
        var expId = splitted[0];
        var varIndex = parseInt(splitted[1], 10);
        var exp = this.running.filter(function (exp) {
            return exp.googleId() == expId && exp.variations.length > varIndex;
        })[0];
        return exp ? exp.variations[varIndex].ref() : null;
    };
    return Experiments;
}());
exports.Experiments = Experiments;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.Operator = {
    at: "at",
    not: "not",
    missing: "missing",
    has: "has",
    any: "any",
    "in": "in",
    fulltext: "fulltext",
    similar: "similar",
    "number.gt": "number.gt",
    "number.lt": "number.lt",
    "number.inRange": "number.inRange",
    "date.before": "date.before",
    "date.after": "date.after",
    "date.between": "date.between",
    "date.day-of-month": "date.day-of-month",
    "date.day-of-month-after": "date.day-of-month-after",
    "date.day-of-month-before": "date.day-of-month-before",
    "date.day-of-week": "date.day-of-week",
    "date.day-of-week-after": "date.day-of-week-after",
    "date.day-of-week-before": "date.day-of-week-before",
    "date.month": "date.month",
    "date.month-before": "date.month-before",
    "date.month-after": "date.month-after",
    "date.year": "date.year",
    "date.hour": "date.hour",
    "date.hour-before": "date.hour-before",
    "date.hour-after": "date.hour-after",
    "geopoint.near": "geopoint.near"
};
function encode(value) {
    if (typeof value === 'string') {
        return "\"" + value + "\"";
    }
    else if (value instanceof Array) {
        return "[" + value.map(function (v) { return encode(v); }).join(',') + "]";
    }
    else {
        return null;
    }
}
function AtPredicate(fragment, value) {
    return "[:d = " + exports.Operator.at + "(" + fragment + ", " + encode(value) + ")]";
}
exports.AtPredicate = AtPredicate;
function NotPredicate(fragment, value) {
    return "[:d = " + exports.Operator.not + "(" + fragment + ", " + encode(value) + ")]";
}
exports.NotPredicate = NotPredicate;
function MissingPredicate(fragment) {
    return "[:d = " + exports.Operator.missing + "(" + fragment + ")]";
}
exports.MissingPredicate = MissingPredicate;
function HasPredicate(fragment) {
    return "[:d = " + exports.Operator.has + "(" + fragment + ")]";
}
exports.HasPredicate = HasPredicate;
function AnyPredicate(fragment, values) {
    return "[:d = " + exports.Operator.any + "(" + fragment + ", " + encode(values) + ")]";
}
exports.AnyPredicate = AnyPredicate;
function InPredicate(fragment, values) {
    return "[:d = " + exports.Operator["in"] + "(" + fragment + ", " + encode(values) + ")]";
}
exports.InPredicate = InPredicate;
function FulltextPredicate(fragment, value) {
    return "[:d = " + exports.Operator.fulltext + "(" + fragment + ", " + encode(value) + ")]";
}
exports.FulltextPredicate = FulltextPredicate;
function SimilarPredicate(documentId, maxResults) {
    return "[:d = " + exports.Operator.similar + "(\"" + this.documentId + "\", " + this.maxResults + ")]";
}
exports.SimilarPredicate = SimilarPredicate;
function GtPredicate(fragment, value) {
    return "[:d = " + exports.Operator["number.gt"] + "(" + fragment + ", " + value + ")]";
}
exports.GtPredicate = GtPredicate;
function LtPredicate(fragment, value) {
    return "[:d = " + exports.Operator["number.lt"] + "(" + fragment + ", " + value + ")]";
}
exports.LtPredicate = LtPredicate;
function InRangePredicate(fragment, before, after) {
    return "[:d = " + exports.Operator["number.inRange"] + "(" + fragment + ", " + this.before + ", " + this.after + ")]";
}
exports.InRangePredicate = InRangePredicate;
function DateBeforePredicate(fragment, before) {
    return "[:d = " + exports.Operator["date.before"] + "(" + fragment + ", " + this.before.getTime() + ")]";
}
exports.DateBeforePredicate = DateBeforePredicate;
function DateAfterPredicate(fragment, after) {
    return "[:d = " + exports.Operator["date.after"] + "(" + fragment + ", " + this.after.getTime() + ")]";
}
exports.DateAfterPredicate = DateAfterPredicate;
function DateBetweenPredicate(fragment, before, after) {
    return "[:d = " + exports.Operator["date.between"] + "(" + fragment + ", " + this.before.getTime() + ", " + this.after.getTime() + ")]";
}
exports.DateBetweenPredicate = DateBetweenPredicate;
function DayOfMonthPredicate(fragment, day) {
    return "[:d = " + exports.Operator["date.day-of-month"] + "(" + fragment + ", " + this.day + ")]";
}
exports.DayOfMonthPredicate = DayOfMonthPredicate;
function DayOfMonthAfterPredicate(fragment, day) {
    return "[:d = " + exports.Operator["date.day-of-month-after"] + "(" + fragment + ", " + this.day + ")]";
}
exports.DayOfMonthAfterPredicate = DayOfMonthAfterPredicate;
function DayOfMonthBeforePredicate(fragment, day) {
    return "[:d = " + exports.Operator["date.day-of-month-before"] + "(" + fragment + ", " + this.day + ")]";
}
exports.DayOfMonthBeforePredicate = DayOfMonthBeforePredicate;
function DayOfWeekPredicate(fragment, day) {
    return "[:d = " + exports.Operator["date.day-of-week"] + "(" + fragment + ", " + this.day + ")]";
}
exports.DayOfWeekPredicate = DayOfWeekPredicate;
function DayOfWeekAfterPredicate(fragment, day) {
    return "[:d = " + exports.Operator["date.day-of-week-after"] + "(" + fragment + ", " + this.day + ")]";
}
exports.DayOfWeekAfterPredicate = DayOfWeekAfterPredicate;
function DayOfWeekBeforePredicate(fragment, day) {
    return "[:d = " + exports.Operator["date.day-of-week-before"] + "(" + fragment + ", " + this.day + ")]";
}
exports.DayOfWeekBeforePredicate = DayOfWeekBeforePredicate;
function MonthPredicate(fragment, month) {
    if (typeof this.month === 'number') {
        return "[:d = " + exports.Operator["date.month"] + "(" + fragment + ", " + this.month + ")]";
    }
    else {
        return "[:d = " + exports.Operator["date.month"] + "(" + fragment + ", \"" + this.month + "\")]";
    }
}
exports.MonthPredicate = MonthPredicate;
function MonthBeforePredicate(fragment, month) {
    if (typeof this.month === 'number') {
        return "[:d = " + exports.Operator["date.month-before"] + "(" + fragment + ", " + this.month + ")]";
    }
    else {
        return "[:d = " + exports.Operator["date.month-before"] + "(" + fragment + ", \"" + this.month + "\")]";
    }
}
exports.MonthBeforePredicate = MonthBeforePredicate;
function MonthAfterPredicate(fragment, month) {
    if (typeof this.month === 'number') {
        return "[:d = " + exports.Operator["date.month-after"] + "(" + fragment + ", " + this.month + ")]";
    }
    else {
        return "[:d = " + exports.Operator["date.month-after"] + "(" + fragment + ", \"" + this.month + "\")]";
    }
}
exports.MonthAfterPredicate = MonthAfterPredicate;
function YearPredicate(fragment, year) {
    return "[:d = " + exports.Operator["date.year"] + "(" + fragment + ", " + this.year + ")]";
}
exports.YearPredicate = YearPredicate;
function HourPredicate(fragment, hour) {
    return "[:d = " + exports.Operator["date.hour"] + "(" + fragment + ", " + this.hour + ")]";
}
exports.HourPredicate = HourPredicate;
function HourBeforePredicate(fragment, hour) {
    return "[:d = " + exports.Operator["date.hour-before"] + "(" + fragment + ", " + this.hour + ")]";
}
exports.HourBeforePredicate = HourBeforePredicate;
function HourAfterPredicate(fragment, hour) {
    return "[:d = " + exports.Operator["date.hour-after"] + "(" + fragment + ", " + this.hour + ")]";
}
exports.HourAfterPredicate = HourAfterPredicate;
function NearPredicate(fragment, latitude, longitude, radius) {
    return "[:d = " + exports.Operator["geopoint.near"] + "(" + fragment + ", " + this.latitude + ", " + this.longitude + ", " + this.radius + ")]";
}
exports.NearPredicate = NearPredicate;
exports.Predicates = {
    at: AtPredicate,
    not: NotPredicate,
    missing: MissingPredicate,
    has: HasPredicate,
    any: AnyPredicate,
    "in": InPredicate,
    fulltext: FulltextPredicate,
    similar: SimilarPredicate,
    gt: GtPredicate,
    lt: LtPredicate,
    inRange: InRangePredicate,
    before: DateBeforePredicate,
    after: DateAfterPredicate,
    between: DateBetweenPredicate,
    dayOfMonth: DayOfMonthPredicate,
    dayOfMonthAfter: DayOfMonthAfterPredicate,
    dayOfMonthBefore: DayOfMonthBeforePredicate,
    dayOfWeek: DayOfWeekPredicate,
    dayOfWeekAfter: DayOfWeekAfterPredicate,
    dayOfWeekBefore: DayOfWeekBeforePredicate,
    month: MonthPredicate,
    monthBefore: MonthBeforePredicate,
    monthAfter: MonthAfterPredicate,
    year: YearPredicate,
    hour: HourPredicate,
    hourBefore: HourBeforePredicate,
    hourAfter: HourAfterPredicate,
    near: NearPredicate
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var documents_1 = __webpack_require__(7);
var api_1 = __webpack_require__(4);
var AllPredicates = __webpack_require__(1);
var experiments_1 = __webpack_require__(0);
function getApi(url, options) {
    var safeOptions = options || {};
    var api = new api_1.Api(url, safeOptions);
    //Use cached api data if available
    return new Promise(function (resolve, reject) {
        var cb = function (err, api) {
            if (safeOptions.complete)
                safeOptions.complete(err, api);
            if (err) {
                reject(err);
            }
            else {
                resolve(api);
            }
        };
        api.get(function (err, data) {
            if (!err && data) {
                api.data = data;
                api.bookmarks = data.bookmarks;
                api.experiments = new experiments_1.Experiments(data.experiments);
            }
            cb(err, api);
        });
        return api;
    });
}
module.exports = {
    experimentCookie: api_1.ExperimentCookie,
    previewCookie: api_1.PreviewCookie,
    Document: documents_1.Document,
    SearchForm: api_1.SearchForm,
    Form: api_1.Form,
    Experiments: experiments_1.Experiments,
    Predicates: AllPredicates.Predicates,
    api: getApi,
    getApi: getApi
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var predicates_1 = __webpack_require__(1);
var experiments_1 = __webpack_require__(0);
var request_1 = __webpack_require__(9);
var cache_1 = __webpack_require__(5);
var cookies_1 = __webpack_require__(6);
exports.PreviewCookie = "io.prismic.preview";
exports.ExperimentCookie = "io.prismic.experiment";
var Ref = (function () {
    function Ref(ref, label, isMaster, scheduledAt, id) {
        this.ref = ref;
        this.label = label;
        this.isMaster = isMaster;
        this.scheduledAt = scheduledAt;
        this.id = id;
    }
    return Ref;
}());
exports.Ref = Ref;
var Form = (function () {
    function Form(fields, action, name, rel, form_method, enctype) {
        this.fields = fields;
        this.action = action;
        this.name = name;
        this.rel = rel;
        this.form_method = form_method;
        this.enctype = enctype;
    }
    Form.prototype.getField = function (field) {
        return this.fields[field];
    };
    Form.prototype.getFieldSafe = function (field) {
        var f = this.fields[field];
        if (!f)
            throw new Error("Missing field " + f + " in form fields " + this.fields);
        return f;
    };
    return Form;
}());
exports.Form = Form;
var SearchForm = (function () {
    function SearchForm(api, form, data) {
        this.api = api;
        this.form = form;
        this.data = data || {};
        for (var field in form.fields) {
            if (form.getFieldSafe(field)['default']) {
                this.data[field] = [form.fields[field]['default']];
            }
        }
    }
    SearchForm.prototype.set = function (field, value) {
        var fieldDesc = this.form.getField(field);
        if (!fieldDesc)
            throw new Error("Unknown field " + field);
        var checkedValue = value === '' || value === undefined ? null : value;
        var values = this.data[field] || [];
        if (fieldDesc.multiple) {
            values = checkedValue ? values.concat([checkedValue]) : values;
        }
        else {
            values = checkedValue ? [checkedValue] : values;
        }
        this.data[field] = values;
        return this;
    };
    /**
     * Sets a ref to query on for this SearchForm. This is a mandatory
     * method to call before calling submit(), and api.form('everything').submit()
     * will not work.
     */
    SearchForm.prototype.ref = function (ref) {
        return this.set("ref", ref);
    };
    /**
     * Sets a predicate-based query for this SearchForm. This is where you
     * paste what you compose in your prismic.io API browser.
     */
    SearchForm.prototype.query = function (query) {
        if (typeof query === 'string') {
            return this.query([query]);
        }
        else if (query instanceof Array) {
            return this.set("q", ("[" + query.join("") + "]"));
        }
        else {
            throw new Error("Invalid query : " + query);
        }
    };
    /**
     * Sets a page size to query for this SearchForm. This is an optional method.
     *
     * @param {number} size - The page size
     * @returns {SearchForm} - The SearchForm itself
     */
    SearchForm.prototype.pageSize = function (size) {
        return this.set("pageSize", size);
    };
    /**
     * Restrict the results document to the specified fields
     */
    SearchForm.prototype.fetch = function (fields) {
        var strFields = fields instanceof Array ? fields.join(",") : fields;
        return this.set("fetch", strFields);
    };
    /**
     * Include the requested fields in the DocumentLink instances in the result
     */
    SearchForm.prototype.fetchLinks = function (fields) {
        var strFields = fields instanceof Array ? fields.join(",") : fields;
        return this.set("fetchLinks", strFields);
    };
    /**
     * Sets the language to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.lang = function (langCode) {
        return this.set("lang", langCode);
    };
    /**
     * Sets the page number to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.page = function (p) {
        return this.set("page", p);
    };
    /**
     * Sets the orderings to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.orderings = function (orderings) {
        if (!orderings) {
            return this;
        }
        else {
            return this.set("orderings", "[" + orderings.join(",") + "]");
        }
    };
    /**
     * Submits the query, and calls the callback function.
     */
    SearchForm.prototype.submit = function (callback) {
        var url = this.form.action;
        if (this.data) {
            var sep = (url.indexOf('?') > -1 ? '&' : '?');
            for (var key in this.data) {
                if (this.data.hasOwnProperty(key)) {
                    var values = this.data[key];
                    if (values) {
                        for (var i = 0; i < values.length; i++) {
                            url += sep + key + '=' + encodeURIComponent(values[i]);
                            sep = '&';
                        }
                    }
                }
            }
        }
        return this.api.request(url, callback);
    };
    return SearchForm;
}());
exports.SearchForm = SearchForm;
var ApiResponse = (function () {
    function ApiResponse(page, results_per_page, results_size, total_results_size, total_pages, next_page, prev_page, results) {
        this.page = page;
        this.results_per_page = results_per_page;
        this.results_size = results_size;
        this.total_results_size = total_results_size;
        this.total_pages = total_pages;
        this.next_page = next_page;
        this.prev_page = prev_page;
        this.results = results;
    }
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
var Api = (function () {
    function Api(url, options) {
        var opts = options || {};
        this.accessToken = opts.accessToken;
        this.url = url + (this.accessToken ? (url.indexOf('?') > -1 ? '&' : '?') + 'access_token=' + this.accessToken : '');
        this.req = opts.req;
        this.apiCache = opts.apiCache || new cache_1.DefaultApiCache();
        this.requestHandler = opts.requestHandler || new request_1.DefaultRequestHandler();
        this.apiCacheKey = this.url + (this.accessToken ? ('#' + this.accessToken) : '');
        this.apiDataTTL = opts.apiDataTTL || 5;
        return this;
    }
    /**
     * Fetches data used to construct the api client, from cache if it's
     * present, otherwise from calling the prismic api endpoint (which is
     * then cached).
     */
    Api.prototype.get = function (callback) {
        var _this = this;
        var cacheKey = this.apiCacheKey;
        return new Promise(function (resolve, reject) {
            var cb = function (err, value, xhr, ttl) {
                if (callback)
                    callback(err, value, xhr, ttl);
                if (value)
                    resolve(value);
                if (err)
                    reject(err);
            };
            _this.apiCache.get(cacheKey, function (err, value) {
                if (err || value) {
                    cb(err, value);
                    return;
                }
                _this.requestHandler.request(_this.url, function (err, value, xhr, ttl) {
                    if (err) {
                        cb(err, null, xhr, ttl);
                        return;
                    }
                    var parsed = _this.parse(value);
                    ttl = ttl || _this.apiDataTTL;
                    _this.apiCache.set(cacheKey, parsed, ttl, function (err) {
                        cb(err, parsed, xhr, ttl);
                    });
                });
            });
        });
    };
    /**
     * Cleans api data from the cache and fetches an up to date copy.
     *
     * @param {function} callback - Optional callback function that is called after the data has been refreshed
     * @returns {Promise}
     */
    Api.prototype.refresh = function (callback) {
        var cacheKey = this.apiCacheKey;
        return new Promise(function (resolve, reject) {
            var _this = this;
            var cb = function (err, value, xhr) {
                if (callback)
                    callback(err, value, xhr);
                if (value)
                    resolve(value);
                if (err)
                    reject(err);
            };
            this.apiCache.remove(cacheKey, function (err) {
                if (err) {
                    cb(err);
                    return;
                }
                _this.get(function (err, data) {
                    if (err) {
                        cb(err);
                        return;
                    }
                    _this.data = data;
                    _this.bookmarks = data.bookmarks;
                    _this.experiments = new experiments_1.Experiments(data.experiments);
                    cb();
                });
            });
        });
    };
    /**
     * Parses and returns the /api document.
     * This is for internal use, from outside this kit, you should call Prismic.Api()
     *
     * @param {string} data - The JSON document responded on the API's endpoint
     * @returns {Api} - The Api object that can be manipulated
     * @private
     */
    Api.prototype.parse = function (data) {
        var _this = this;
        // Parse the forms
        var forms = Object.keys(data.forms || []).reduce(function (acc, key, i) {
            if (data.forms.hasOwnProperty(key)) {
                var f = data.forms[key];
                if (_this.accessToken) {
                    f.fields['access_token'] = {};
                    f.fields['access_token']['type'] = 'string';
                    f.fields['access_token']['default'] = _this.accessToken;
                }
                var form = new Form(f.fields, f.action, f.name, f.rel, f.form_method, f.enctype);
                acc[key] = form;
                return acc;
            }
            else {
                return acc;
            }
        }, {});
        var refs = data.refs.map(function (r) {
            return new Ref(r.ref, r.label, r.isMasterRef, r.scheduledAt, r.id);
        }) || [];
        var master = refs.filter(function (r) {
            return r.isMaster === true;
        });
        var types = data.types;
        var tags = data.tags;
        if (master.length === 0) {
            throw ("No master ref.");
        }
        return {
            bookmarks: data.bookmarks || {},
            refs: refs,
            forms: forms,
            master: master[0],
            types: types,
            tags: tags,
            experiments: data.experiments,
            oauthInitiate: data['oauth_initiate'],
            oauthToken: data['oauth_token'],
            quickRoutes: data.quickRoutes
        };
    };
    /**
     * Returns a useable form from its id, as described in the RESTful description of the API.
     * For instance: api.form("everything") works on every repository (as "everything" exists by default)
     * You can then chain the calls: api.form("everything").query('[[:d = at(document.id, "UkL0gMuvzYUANCpf")]]').ref(ref).submit()
     */
    Api.prototype.form = function (formId) {
        var form = this.data.forms[formId];
        if (form) {
            return new SearchForm(this, form, {});
        }
        return null;
    };
    Api.prototype.everything = function () {
        var f = this.form("everything");
        if (!f)
            throw new Error("Missing everything form");
        return f;
    };
    /**
     * The ID of the master ref on this prismic.io API.
     * Do not use like this: searchForm.ref(api.master()).
     * Instead, set your ref once in a variable, and call it when you need it; this will allow to change the ref you're viewing easily for your entire page.
     */
    Api.prototype.master = function () {
        return this.data.master.ref;
    };
    /**
     * Returns the ref ID for a given ref's label.
     * Do not use like this: searchForm.ref(api.ref("Future release label")).
     * Instead, set your ref once in a variable, and call it when you need it; this will allow to change the ref you're viewing easily for your entire page.
     */
    Api.prototype.ref = function (label) {
        for (var i = 0; i < this.data.refs.length; i++) {
            if (this.data.refs[i].label == label) {
                return this.data.refs[i].ref;
            }
        }
        return null;
    };
    /**
     * The current experiment, or null
     */
    Api.prototype.currentExperiment = function () {
        return this.experiments.current();
    };
    Api.prototype.quickRoutesEnabled = function () {
        return this.data.quickRoutes.enabled;
    };
    /**
     * Retrieve quick routes definitions
     */
    Api.prototype.getQuickRoutes = function (callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.requestHandler.request(_this.data.quickRoutes.url, function (err, data, xhr) {
                if (callback)
                    callback(err, data, xhr);
                if (err)
                    reject(err);
                if (data)
                    resolve(data);
            });
        });
    };
    /**
     * Query the repository
     */
    Api.prototype.query = function (q, optionsOrCallback, cb) {
        var _a = typeof optionsOrCallback === 'function'
            ? { options: {}, callback: optionsOrCallback }
            : { options: optionsOrCallback || {}, callback: cb }, options = _a.options, callback = _a.callback;
        var opts = options;
        var form = this.everything();
        for (var key in opts) {
            form = form.set(key, opts[key]);
        }
        if (!opts['ref']) {
            // Look in cookies if we have a ref (preview or experiment)
            var cookieString = '';
            if (this.req) {
                cookieString = this.req.headers["cookie"] || '';
            }
            else if (typeof window !== 'undefined' && window.document) {
                cookieString = window.document.cookie || '';
            }
            var cookies = cookies_1["default"].parse(cookieString);
            var previewRef = cookies[exports.PreviewCookie];
            var experimentRef = this.experiments.refFromCookie(cookies[exports.ExperimentCookie]);
            form = form.ref(previewRef || experimentRef || this.master());
        }
        if (q) {
            form.query(q);
        }
        return form.submit(callback);
    };
    /**
     * Retrieve the document returned by the given query
     * @param {string|array|Predicate} the query
     * @param {object} additional parameters. In NodeJS, pass the request as 'req'.
     * @param {function} callback(err, doc)
     */
    Api.prototype.queryFirst = function (q, optionsOrCallback, cb) {
        var _a = typeof optionsOrCallback === 'function'
            ? { options: {}, callback: optionsOrCallback }
            : { options: optionsOrCallback || {}, callback: cb }, options = _a.options, callback = _a.callback;
        var opts = options;
        opts.page = 1;
        opts.pageSize = 1;
        return this.query(q, opts, function (err, response) {
            if (callback) {
                var result = response && response.results && response.results[0];
                callback(err, result);
            }
        }).then(function (response) {
            return response && response.results && response.results[0];
        })["catch"](function (e) {
            console.log(e);
        });
    };
    /**
     * Retrieve the document with the given id
     */
    Api.prototype.getByID = function (id, options, callback) {
        options = options || {};
        if (!options.lang)
            options.lang = '*';
        return this.queryFirst(predicates_1.Predicates.at('document.id', id), options, callback);
    };
    /**
     * Retrieve multiple documents from an array of id
     */
    Api.prototype.getByIDs = function (ids, options, callback) {
        options = options || {};
        if (!options.lang)
            options.lang = '*';
        return this.query(predicates_1.Predicates["in"]('document.id', ids), options, callback);
    };
    /**
     * Retrieve the document with the given uid
     */
    Api.prototype.getByUID = function (type, uid, options, callback) {
        options = options || {};
        if (!options.lang)
            options.lang = '*';
        return this.queryFirst(predicates_1.Predicates.at("my." + type + ".uid", uid), options, callback);
    };
    /**
     * Retrieve the singleton document with the given type
     */
    Api.prototype.getSingle = function (type, options, callback) {
        return this.queryFirst(predicates_1.Predicates.at('document.type', type), options, callback);
    };
    /**
     * Retrieve the document with the given bookmark
     */
    Api.prototype.getBookmark = function (bookmark, options, callback) {
        return new Promise(function (resolve, reject) {
            var id = this.bookmarks[bookmark];
            if (id) {
                resolve(id);
            }
            else {
                var err = new Error("Error retrieving bookmarked id");
                if (callback)
                    callback(err);
                reject(err);
            }
        }).then(function (id) {
            return this.getByID(id, options, callback);
        });
    };
    /**
     * Return the URL to display a given preview
     */
    Api.prototype.previewSession = function (token, linkResolver, defaultUrl, callback) {
        var api = this;
        return new Promise(function (resolve, reject) {
            var cb = function (err, url, xhr) {
                if (callback)
                    callback(err, url, xhr);
                if (err) {
                    reject(err);
                }
                else {
                    resolve(url);
                }
            };
            api.requestHandler.request(token, function (err, result, xhr) {
                if (err) {
                    cb(err, defaultUrl, xhr);
                    return;
                }
                try {
                    var mainDocumentId = result.mainDocument;
                    if (!mainDocumentId) {
                        cb(null, defaultUrl, xhr);
                    }
                    else {
                        api.everything().query(predicates_1.Predicates.at("document.id", mainDocumentId)).ref(token).lang('*').submit(function (err, response) {
                            if (err) {
                                cb(err);
                            }
                            try {
                                if (response.results.length === 0) {
                                    cb(null, defaultUrl, xhr);
                                }
                                else {
                                    cb(null, linkResolver(response.results[0]), xhr);
                                }
                            }
                            catch (e) {
                                cb(e);
                            }
                        });
                    }
                }
                catch (e) {
                    cb(e, defaultUrl, xhr);
                }
            });
        });
    };
    /**
     * Fetch a URL corresponding to a query, and parse the response as a Response object
     */
    Api.prototype.request = function (url, callback) {
        var api = this;
        var cacheKey = url + (this.accessToken ? ('#' + this.accessToken) : '');
        var cache = this.apiCache;
        function run(cb) {
            cache.get(cacheKey, function (err, value) {
                if (err || value) {
                    cb(err, api.response(value));
                    return;
                }
                api.requestHandler.request(url, function (err, documents, xhr, ttl) {
                    if (err) {
                        cb(err, null, xhr);
                        return;
                    }
                    if (ttl) {
                        cache.set(cacheKey, documents, ttl, function (err) {
                            cb(err, api.response(documents));
                        });
                    }
                    else {
                        cb(null, api.response(documents));
                    }
                });
            });
        }
        return new Promise(function (resolve, reject) {
            run(function (err, value, xhr) {
                if (callback)
                    callback(err, value, xhr);
                if (err)
                    reject(err);
                if (value)
                    resolve(value);
            });
        });
    };
    Api.prototype.getNextPage = function (nextPage, callback) {
        return this.request(nextPage + (this.accessToken ? '&access_token=' + this.accessToken : ''), callback);
    };
    /**
     * JSON documents to Response object
     */
    Api.prototype.response = function (documents) {
        return new ApiResponse(documents.page, documents.results_per_page, documents.results_size, documents.total_results_size, documents.total_pages, documents.next_page, documents.prev_page, documents.results || []);
    };
    return Api;
}());
exports.Api = Api;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lru_1 = __webpack_require__(8);
var DefaultApiCache = (function () {
    function DefaultApiCache(limit) {
        this.lru = lru_1.MakeLRUCache(limit);
    }
    DefaultApiCache.prototype.isExpired = function (key) {
        var entryValue = this.lru.get(key, false);
        if (entryValue) {
            return entryValue.expiredIn !== 0 && entryValue.expiredIn < Date.now();
        }
        else {
            return false;
        }
    };
    DefaultApiCache.prototype.get = function (key, cb) {
        var entryValue = this.lru.get(key, false);
        if (entryValue && !this.isExpired(key)) {
            cb(null, entryValue.data);
        }
        else {
            cb();
        }
    };
    DefaultApiCache.prototype.set = function (key, value, ttl, cb) {
        this.lru.remove(key);
        this.lru.put(key, {
            data: value,
            expiredIn: ttl ? (Date.now() + (ttl * 1000)) : 0
        });
        cb();
    };
    DefaultApiCache.prototype.remove = function (key, cb) {
        this.lru.remove(key);
        cb();
    };
    DefaultApiCache.prototype.clear = function (cb) {
        this.lru.removeAll();
        cb();
    };
    return DefaultApiCache;
}());
exports.DefaultApiCache = DefaultApiCache;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// Some portions of code from https://github.com/jshttp/cookie
var decode = decodeURIComponent;
function tryDecode(str, decode) {
    try {
        return decode(str);
    }
    catch (e) {
        return str;
    }
}
function parse(str, options) {
    if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
    }
    var obj = {};
    var opt = options || {};
    var pairs = str.split(/; */);
    var dec = opt.decode || decode;
    pairs.forEach(function (pair) {
        var eq_idx = pair.indexOf('=');
        // skip things that don't look like key=value
        if (eq_idx < 0) {
            return;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        // quoted values
        if ('"' == val[0]) {
            val = val.slice(1, -1);
        }
        // only assign once
        if (undefined == obj[key]) {
            obj[key] = tryDecode(val, dec);
        }
    });
    return obj;
}
exports["default"] = { parse: parse };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Document = (function () {
    function Document(id, type, href, tags, slug, slugs, alternateLanguages, firstPublicationDate, lastPublicationDate, data, uid, lang) {
        this.id = id;
        this.uid = uid;
        this.type = type;
        this.href = href;
        this.tags = tags;
        this.slug = slug[0];
        this.slugs = slugs;
        this.lang = lang;
        this.alternateLanguages = alternateLanguages;
        this.firstPublicationDate = firstPublicationDate ? new Date(firstPublicationDate) : null;
        this.lastPublicationDate = lastPublicationDate ? new Date(lastPublicationDate) : null,
            this.data = data;
    }
    ;
    return Document;
}());
exports.Document = Document;
var GroupDoc = (function () {
    function GroupDoc(data) {
        this.data = data;
    }
    return GroupDoc;
}());
exports.GroupDoc = GroupDoc;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
* A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
* recently used items while discarding least recently used items when its limit
* is reached.
*
* Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
* Typescript-ified by Oleksandr Nikitin <https://tvori.info>
*
* Illustration of the design:
*
*       entry             entry             entry             entry
*       ______            ______            ______            ______
*      | head |.newer => |      |.newer => |      |.newer => | tail |
*      |  A   |          |  B   |          |  C   |          |  D   |
*      |______| <= older.|______| <= older.|______| <= older.|______|
*
*  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
*/
exports.__esModule = true;
function MakeLRUCache(limit) {
    return new LRUCache(limit);
}
exports.MakeLRUCache = MakeLRUCache;
function LRUCache(limit) {
    // Current size of the cache. (Read-only).
    this.size = 0;
    // Maximum number of items this cache can hold.
    this.limit = limit;
    this._keymap = {};
}
/**
 * Put <value> into the cache associated with <key>. Returns the entry which was
 * removed to make room for the new entry. Otherwise undefined is returned
 * (i.e. if there was enough room already).
 */
LRUCache.prototype.put = function (key, value) {
    var entry = { key: key, value: value };
    // Note: No protection agains replacing, and thus orphan entries. By design.
    this._keymap[key] = entry;
    if (this.tail) {
        // link previous tail to the new tail (entry)
        this.tail.newer = entry;
        entry.older = this.tail;
    }
    else {
        // we're first in -- yay
        this.head = entry;
    }
    // add new entry to the end of the linked list -- it's now the freshest entry.
    this.tail = entry;
    if (this.size === this.limit) {
        // we hit the limit -- remove the head
        return this.shift();
    }
    else {
        // increase the size counter
        this.size++;
    }
};
/**
 * Purge the least recently used (oldest) entry from the cache. Returns the
 * removed entry or undefined if the cache was empty.
 *
 * If you need to perform any form of finalization of purged items, this is a
 * good place to do it. Simply override/replace this function:
 *
 *   var c = new LRUCache(123);
 *   c.shift = function() {
 *     var entry = LRUCache.prototype.shift.call(this);
 *     doSomethingWith(entry);
 *     return entry;
 *   }
 */
LRUCache.prototype.shift = function () {
    // todo: handle special case when limit == 1
    var entry = this.head;
    if (entry) {
        if (this.head.newer) {
            this.head = this.head.newer;
            this.head.older = undefined;
        }
        else {
            this.head = undefined;
        }
        // Remove last strong reference to <entry> and remove links from the purged
        // entry being returned:
        entry.newer = entry.older = undefined;
        // delete is slow, but we need to do this to avoid uncontrollable growth:
        delete this._keymap[entry.key];
    }
    console.log('purging ', entry.key);
    return entry;
};
/**
 * Get and register recent use of <key>. Returns the value associated with <key>
 * or undefined if not in cache.
 */
LRUCache.prototype.get = function (key, returnEntry) {
    // First, find our cache entry
    var entry = this._keymap[key];
    if (entry === undefined)
        return; // Not cached. Sorry.
    // As <key> was found in the cache, register it as being requested recently
    if (entry === this.tail) {
        // Already the most recently used entry, so no need to update the list
        return returnEntry ? entry : entry.value;
    }
    // HEAD--------------TAIL
    //   <.older   .newer>
    //  <--- add direction --
    //   A  B  C  <D>  E
    if (entry.newer) {
        if (entry === this.head)
            this.head = entry.newer;
        entry.newer.older = entry.older; // C <-- E.
    }
    if (entry.older)
        entry.older.newer = entry.newer; // C. --> E
    entry.newer = undefined; // D --x
    entry.older = this.tail; // D. --> E
    if (this.tail)
        this.tail.newer = entry; // E. <-- D
    this.tail = entry;
    return returnEntry ? entry : entry.value;
};
// ----------------------------------------------------------------------------
// Following code is optional and can be removed without breaking the core
// functionality.
/**
 * Check if <key> is in the cache without registering recent use. Feasible if
 * you do not want to chage the state of the cache, but only "peek" at it.
 * Returns the entry associated with <key> if found, or undefined if not found.
 */
LRUCache.prototype.find = function (key) {
    return this._keymap[key];
};
/**
 * Update the value of entry with <key>. Returns the old value, or undefined if
 * entry was not in the cache.
 */
LRUCache.prototype.set = function (key, value) {
    var oldvalue;
    var entry = this.get(key, true);
    if (entry) {
        oldvalue = entry.value;
        entry.value = value;
    }
    else {
        oldvalue = this.put(key, value);
        if (oldvalue)
            oldvalue = oldvalue.value;
    }
    return oldvalue;
};
/**
 * Remove entry <key> from cache and return its value. Returns undefined if not
 * found.
 */
LRUCache.prototype.remove = function (key) {
    var entry = this._keymap[key];
    if (!entry)
        return;
    delete this._keymap[entry.key]; // need to do delete unfortunately
    if (entry.newer && entry.older) {
        // relink the older entry with the newer entry
        entry.older.newer = entry.newer;
        entry.newer.older = entry.older;
    }
    else if (entry.newer) {
        // remove the link to us
        entry.newer.older = undefined;
        // link the newer entry to head
        this.head = entry.newer;
    }
    else if (entry.older) {
        // remove the link to us
        entry.older.newer = undefined;
        // link the newer entry to head
        this.tail = entry.older;
    }
    else {
        this.head = this.tail = undefined;
    }
    this.size--;
    return entry.value;
};
/** Removes all entries */
LRUCache.prototype.removeAll = function () {
    // This should be safe, as we never expose strong refrences to the outside
    this.head = this.tail = undefined;
    this.size = 0;
    this._keymap = {};
};
/**
 * Return an array containing all keys of entries stored in the cache object, in
 * arbitrary order.
 */
if (typeof Object.keys === 'function') {
    LRUCache.prototype.keys = function () { return Object.keys(this._keymap); };
}
else {
    LRUCache.prototype.keys = function () {
        var keys = [];
        for (var k in this._keymap)
            keys.push(k);
        return keys;
    };
}
/**
 * Call `fun` for each entry. Starting with the newest entry if `desc` is a true
 * value, otherwise starts with the oldest (head) enrty and moves towards the
 * tail.
 *
 * `fun` is called with 3 arguments in the context `context`:
 *   `fun.call(context, Object key, Object value, LRUCache self)`
 */
LRUCache.prototype.forEach = function (fun, context, desc) {
    var entry;
    if (context === true) {
        desc = true;
        context = undefined;
    }
    else if (typeof context !== 'object')
        context = this;
    if (desc) {
        entry = this.tail;
        while (entry) {
            fun.call(context, entry.key, entry.value, this);
            entry = entry.older;
        }
    }
    else {
        entry = this.head;
        while (entry) {
            fun.call(context, entry.key, entry.value, this);
            entry = entry.newer;
        }
    }
};
/** Returns a JSON (array) representation */
//LRUCache.prototype.toJSON = function () {
//    var s: IEntry[] = [], entry = this.head;
//    while (entry) {
//        s.push({ key: entry.key.toJSON(), value: entry.value.toJSON() });
//        entry = entry.newer;
//    }
//    return s;
//};
/** Returns a String representation */
LRUCache.prototype.toString = function () {
    var s = '', entry = this.head;
    while (entry) {
        s += String(entry.key) + ':' + entry.value;
        entry = entry.newer;
        if (entry)
            s += ' < ';
    }
    return s;
};
// Export ourselves
//if (typeof this === 'object') this.LRUCache = LRUCache; 


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function createError(status, message) {
    return {
        name: "prismic-request-error",
        message: message,
        status: status
    };
}
// Number of maximum simultaneous connections to the prismic server
var MAX_CONNECTIONS = 20;
// Number of requests currently running (capped by MAX_CONNECTIONS)
var running = 0;
// Requests in queue
var queue = [];
function fetchRequest(url, onSuccess, onError) {
    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function (response) {
        if (~~(response.status / 100 != 2)) {
            throw createError(response.status, "Unexpected status code [" + response.status + "] on URL " + url);
        }
        else {
            return response.json().then(function (json) {
                return {
                    response: response,
                    json: json
                };
            });
        }
    }).then(function (next) {
        var response = next.response;
        var json = next.json;
        var cacheControl = response.headers['cache-control'];
        var parsedCacheControl = cacheControl ? /max-age=(\d+)/.exec(cacheControl) : null;
        var ttl = parsedCacheControl ? parseInt(parsedCacheControl[1], 10) : undefined;
        onSuccess({ result: json, xhr: response, ttl: ttl });
    })["catch"](function (error) {
        onError({ error: error });
    });
}
function processQueue() {
    if (queue.length === 0 || running >= MAX_CONNECTIONS) {
        return;
    }
    running++;
    var next = queue.shift();
    fetchRequest(next.url, function (_a) {
        var result = _a.result, xhr = _a.xhr, ttl = _a.ttl;
        running--;
        next.callback(null, result, xhr, ttl);
        processQueue();
    }, function (_a) {
        var error = _a.error;
        running--;
        next.callback(error);
        processQueue();
    });
}
var DefaultRequestHandler = (function () {
    function DefaultRequestHandler() {
    }
    DefaultRequestHandler.prototype.request = function (url, cb) {
        queue.push({
            'url': url,
            'callback': cb
        });
        processQueue();
    };
    return DefaultRequestHandler;
}());
exports.DefaultRequestHandler = DefaultRequestHandler;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});