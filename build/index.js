(() => {
    // Імпорт бібліотеки Airtable
    var St = a(997);
    var kt = a.n(St);

    // Конфігурація Airtable з API-ключем
    kt().configure({
        apiKey: "patKhGMPAL2aUtgI7.3a33626ebf916e93789595a41ac84e801820b39b4e34eaac71e69fdc416b87c3" // API-ключ для доступу до Airtable
    });

    // Підключення до бази Airtable
    const Tt = kt().base("appkvaQayzRCLgEbk"); // Ідентифікатор бази Airtable

    // Функція для отримання параметрів запиту з URL
    function Et() {
        const e = window.location.search,
            t = new URLSearchParams(e);
        let a = "";
        for (const [e, i] of t.entries())
            "" !== a && (a += ","),
                a += `${e}=${i}`;
        return a; // Повертає параметри запиту у вигляді рядка
    }

    // Функція для створення запису в Airtable
    Tt("tblZfXxFHDxrof36b").create({
        IPAddress: l, // IP-адреса користувача
        Country: h, // Країна користувача
        DateTime: e, // Поточна дата і час
        FirstCard: t < 768 ? s + 1 : s, // Вибір першої картки
        SecondCard: t < 768 ? n + 1 : n, // Вибір другої картки
        Email: r, // Email користувача
        QueryParameters: Et() // Параметри запиту
    }).then((e => {
        d(!1), // Успішне створення запису
            i(a + 1); // Перехід до наступного кроку
    })).catch((e => {
        console.error("Error creating record:", e), // Логування помилки
            d(!1); // Відміна стану завантаження
    }));

    // Додаткова конфігурація Airtable для відписки
    kt().configure({
        apiKey: "patKhGMPAL2aUtgI7.3a33626ebf916e93789595a41ac84e801820b39b4e34eaac71e69fdc416b87c3" // API-ключ
    });

    // Підключення до тієї ж бази Airtable
    const qt = kt().base("appkvaQayzRCLgEbk"); // Ідентифікатор бази Airtable

    // Функція для відписки (unsubscribe)
    qt("tblZOhGYOMmd498x8").create({
        Date: e, // Поточна дата
        Email: i // Email користувача
    }).then((e => {
        a(!1), // Успішне створення запису
            s(""), // Очищення email
            l(!1), // Скидання стану
            r(!0), // Відображення успішного повідомлення
            c(!0); // Відображення підтвердження
    })).catch((e => {
        console.error("Error creating record:", e), // Логування помилки
            a(!1); // Відміна стану завантаження
    }));
    var e = {
        997: (e, t, a) => {
            e.exports = function e(t, a, i) {
                function s(r, o) {
                    if (!a[r]) {
                        if (!t[r]) {
                            if (n)
                                return n(r, !0);
                            var l = new Error("Cannot find module '" + r + "'");
                            throw l.code = "MODULE_NOT_FOUND",
                            l
                        }
                        var h = a[r] = {
                            exports: {}
                        };
                        t[r][0].call(h.exports, (function (e) {
                            return s(t[r][1][e] || e)
                        }
                        ), h, h.exports, e, t, a, i)
                    }
                    return a[r].exports
                }
                for (var n = void 0, r = 0; r < i.length; r++)
                    s(i[r]);
                return s
            }({
                1: [function (e, t, a) {
                    "use strict";
                    var i, s = "undefined" != typeof window ? window : "undefined" != typeof self ? self : null;
                    i = s ? "signal" in new Request("https://airtable.com") ? s.AbortController : e("abortcontroller-polyfill/dist/cjs-ponyfill").AbortController : e("abort-controller"),
                        t.exports = i
                }
                    , {
                    "abort-controller": 20,
                    "abortcontroller-polyfill/dist/cjs-ponyfill": 19
                }],
                2: [function (e, t, a) {
                    "use strict";
                    var i = function () {
                        function e(e, t, a) {
                            this.error = e,
                                this.message = t,
                                this.statusCode = a
                        }
                        return e.prototype.toString = function () {
                            return [this.message, "(", this.error, ")", this.statusCode ? "[Http code " + this.statusCode + "]" : ""].join("")
                        }
                            ,
                            e
                    }();
                    t.exports = i
                }
                    , {}],
                3: [function (e, t, a) {
                    "use strict";
                    var i = this && this.__assign || function () {
                        return i = Object.assign || function (e) {
                            for (var t, a = 1, i = arguments.length; a < i; a++)
                                for (var s in t = arguments[a])
                                    Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                            return e
                        }
                            ,
                            i.apply(this, arguments)
                    }
                        , s = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        , n = s(e("lodash/get"))
                        , r = s(e("lodash/isPlainObject"))
                        , o = s(e("lodash/keys"))
                        , l = s(e("./fetch"))
                        , h = s(e("./abort-controller"))
                        , c = s(e("./object_to_query_param_string"))
                        , d = s(e("./airtable_error"))
                        , u = s(e("./table"))
                        , f = s(e("./http_headers"))
                        , p = s(e("./run_action"))
                        , m = s(e("./package_version"))
                        , g = s(e("./exponential_backoff_with_jitter"))
                        , y = "Airtable.js/" + m.default
                        , b = function () {
                            function e(e, t) {
                                this._airtable = e,
                                    this._id = t
                            }
                            return e.prototype.table = function (e) {
                                return new u.default(this, null, e)
                            }
                                ,
                                e.prototype.makeRequest = function (e) {
                                    var t, a = this;
                                    void 0 === e && (e = {});
                                    var s = n.default(e, "method", "GET").toUpperCase()
                                        , r = this._airtable._endpointUrl + "/v" + this._airtable._apiVersionMajor + "/" + this._id + n.default(e, "path", "/") + "?" + c.default(n.default(e, "qs", {}))
                                        , o = new h.default
                                        , u = {
                                            method: s,
                                            headers: this._getRequestHeaders(Object.assign({}, this._airtable._customHeaders, null !== (t = e.headers) && void 0 !== t ? t : {})),
                                            signal: o.signal
                                        };
                                    "body" in e && function (e) {
                                        return "GET" !== e && "DELETE" !== e
                                    }(s) && (u.body = JSON.stringify(e.body));
                                    var f = setTimeout((function () {
                                        o.abort()
                                    }
                                    ), this._airtable._requestTimeout);
                                    return new Promise((function (t, s) {
                                        l.default(r, u).then((function (r) {
                                            if (clearTimeout(f),
                                                429 !== r.status || a._airtable._noRetryIfRateLimited)
                                                r.json().then((function (e) {
                                                    var i = a._checkStatusForError(r.status, e) || w(r.status, e);
                                                    i ? s(i) : t({
                                                        statusCode: r.status,
                                                        headers: r.headers,
                                                        body: e
                                                    })
                                                }
                                                )).catch((function () {
                                                    var e = w(r.status);
                                                    s(e)
                                                }
                                                ));
                                            else {
                                                var o = n.default(e, "_numAttempts", 0)
                                                    , l = g.default(o);
                                                setTimeout((function () {
                                                    var n = i(i({}, e), {
                                                        _numAttempts: o + 1
                                                    });
                                                    a.makeRequest(n).then(t).catch(s)
                                                }
                                                ), l)
                                            }
                                        }
                                        )).catch((function (e) {
                                            clearTimeout(f),
                                                e = new d.default("CONNECTION_ERROR", e.message, null),
                                                s(e)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ,
                                e.prototype.runAction = function (e, t, a, i, s) {
                                    p.default(this, e, t, a, i, s, 0)
                                }
                                ,
                                e.prototype._getRequestHeaders = function (e) {
                                    var t = new f.default;
                                    t.set("Authorization", "Bearer " + this._airtable._apiKey),
                                        t.set("User-Agent", y),
                                        t.set("Content-Type", "application/json");
                                    for (var a = 0, i = o.default(e); a < i.length; a++) {
                                        var s = i[a];
                                        t.set(s, e[s])
                                    }
                                    return t.toJSON()
                                }
                                ,
                                e.prototype._checkStatusForError = function (e, t) {
                                    var a = (null != t ? t : {
                                        error: {}
                                    }).error
                                        , i = void 0 === a ? {} : a
                                        , s = i.type
                                        , n = i.message;
                                    return 401 === e ? new d.default("AUTHENTICATION_REQUIRED", "You should provide valid api key to perform this operation", e) : 403 === e ? new d.default("NOT_AUTHORIZED", "You are not authorized to perform this operation", e) : 404 === e ? new d.default("NOT_FOUND", null != n ? n : "Could not find what you are looking for", e) : 413 === e ? new d.default("REQUEST_TOO_LARGE", "Request body is too large", e) : 422 === e ? new d.default(null != s ? s : "UNPROCESSABLE_ENTITY", null != n ? n : "The operation cannot be processed", e) : 429 === e ? new d.default("TOO_MANY_REQUESTS", "You have made too many requests in a short period of time. Please retry your request later", e) : 500 === e ? new d.default("SERVER_ERROR", "Try again. If the problem persists, contact support.", e) : 503 === e ? new d.default("SERVICE_UNAVAILABLE", "The service is temporarily unavailable. Please retry shortly.", e) : e >= 400 ? new d.default(null != s ? s : "UNEXPECTED_ERROR", null != n ? n : "An unexpected error occurred", e) : null
                                }
                                ,
                                e.prototype.doCall = function (e) {
                                    return this.table(e)
                                }
                                ,
                                e.prototype.getId = function () {
                                    return this._id
                                }
                                ,
                                e.createFunctor = function (t, a) {
                                    var i = new e(t, a)
                                        , s = function (e) {
                                            return i.doCall(e)
                                        };
                                    return s._base = i,
                                        s.table = i.table.bind(i),
                                        s.makeRequest = i.makeRequest.bind(i),
                                        s.runAction = i.runAction.bind(i),
                                        s.getId = i.getId.bind(i),
                                        s
                                }
                                ,
                                e
                        }();
                    function w(e, t) {
                        return r.default(t) ? null : new d.default("UNEXPECTED_ERROR", "The response from Airtable was invalid JSON. Please try again soon.", e)
                    }
                    t.exports = b
                }
                    , {
                    "./abort-controller": 1,
                    "./airtable_error": 2,
                    "./exponential_backoff_with_jitter": 6,
                    "./fetch": 7,
                    "./http_headers": 9,
                    "./object_to_query_param_string": 11,
                    "./package_version": 12,
                    "./run_action": 16,
                    "./table": 17,
                    "lodash/get": 77,
                    "lodash/isPlainObject": 89,
                    "lodash/keys": 93
                }],
                4: [function (e, t, a) {
                    "use strict";
                    t.exports = function (e, t, a) {
                        return void 0 === a && (a = void 0),
                            function () {
                                for (var i, s = [], n = 0; n < arguments.length; n++)
                                    s[n] = arguments[n];
                                if ("function" != typeof s[i = void 0 === a ? s.length > 0 ? s.length - 1 : 0 : a]) {
                                    for (var r = [], o = Math.max(s.length, i), l = 0; l < o; l++)
                                        r.push(s[l]);
                                    return new Promise((function (a, i) {
                                        r.push((function (e, t) {
                                            e ? i(e) : a(t)
                                        }
                                        )),
                                            e.apply(t, r)
                                    }
                                    ))
                                }
                                e.apply(t, s)
                            }
                    }
                }
                    , {}],
                5: [function (e, t, a) {
                    "use strict";
                    var i = {};
                    t.exports = function (e, t, a) {
                        return function () {
                            for (var s = [], n = 0; n < arguments.length; n++)
                                s[n] = arguments[n];
                            i[t] || (i[t] = !0,
                                console.warn(a)),
                                e.apply(this, s)
                        }
                    }
                }
                    , {}],
                6: [function (e, t, a) {
                    "use strict";
                    var i = (this && this.__importDefault || function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    )(e("./internal_config.json"));
                    t.exports = function (e) {
                        var t = i.default.INITIAL_RETRY_DELAY_IF_RATE_LIMITED * Math.pow(2, e)
                            , a = Math.min(i.default.MAX_RETRY_DELAY_IF_RATE_LIMITED, t);
                        return Math.random() * a
                    }
                }
                    , {
                    "./internal_config.json": 10
                }],
                7: [function (e, t, a) {
                    "use strict";
                    var i = (this && this.__importDefault || function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    )(e("node-fetch"))
                        , s = "undefined" != typeof window ? window : "undefined" != typeof self ? self : null;
                    t.exports = s ? s.fetch.bind(s) : i.default
                }
                    , {
                    "node-fetch": 20
                }],
                8: [function (e, t, a) {
                    "use strict";
                    t.exports = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                }
                    , {}],
                9: [function (e, t, a) {
                    "use strict";
                    var i = (this && this.__importDefault || function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    )(e("lodash/keys"))
                        , s = "undefined" != typeof window
                        , n = function () {
                            function e() {
                                this._headersByLowercasedKey = {}
                            }
                            return e.prototype.set = function (e, t) {
                                var a = e.toLowerCase();
                                "x-airtable-user-agent" === a && (a = "user-agent",
                                    e = "User-Agent"),
                                    this._headersByLowercasedKey[a] = {
                                        headerKey: e,
                                        headerValue: t
                                    }
                            }
                                ,
                                e.prototype.toJSON = function () {
                                    for (var e = {}, t = 0, a = i.default(this._headersByLowercasedKey); t < a.length; t++) {
                                        var n = a[t]
                                            , r = this._headersByLowercasedKey[n];
                                        e[s && "user-agent" === n ? "X-Airtable-User-Agent" : r.headerKey] = r.headerValue
                                    }
                                    return e
                                }
                                ,
                                e
                        }();
                    t.exports = n
                }
                    , {
                    "lodash/keys": 93
                }],
                10: [function (e, t, a) {
                    t.exports = {
                        INITIAL_RETRY_DELAY_IF_RATE_LIMITED: 5e3,
                        MAX_RETRY_DELAY_IF_RATE_LIMITED: 6e5
                    }
                }
                    , {}],
                11: [function (e, t, a) {
                    "use strict";
                    var i = this && this.__importDefault || function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                        , s = i(e("lodash/isArray"))
                        , n = i(e("lodash/isNil"))
                        , r = i(e("lodash/keys"));
                    function o(e, t, a) {
                        if (s.default(t))
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                /\[\]$/.test(e) ? a(e, n) : o(e + "[" + ("object" == typeof n && null !== n ? i : "") + "]", n, a)
                            }
                        else if ("object" == typeof t)
                            for (var l = 0, h = r.default(t); l < h.length; l++) {
                                var c = h[l];
                                o(e + "[" + c + "]", n = t[c], a)
                            }
                        else
                            a(e, t)
                    }
                    t.exports = function (e) {
                        for (var t = [], a = function (e, a) {
                            a = n.default(a) ? "" : a,
                                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(a))
                        }, i = 0, s = r.default(e); i < s.length; i++) {
                            var l = s[i];
                            o(l, e[l], a)
                        }
                        return t.join("&").replace(/%20/g, "+")
                    }
                }
                    , {
                    "lodash/isArray": 79,
                    "lodash/isNil": 85,
                    "lodash/keys": 93
                }],
                12: [function (e, t, a) {
                    "use strict";
                    t.exports = "0.12.2"
                }
                    , {}],
                13: [function (e, t, a) {
                    "use strict";
                    var i = this && this.__assign || function () {
                        return i = Object.assign || function (e) {
                            for (var t, a = 1, i = arguments.length; a < i; a++)
                                for (var s in t = arguments[a])
                                    Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                            return e
                        }
                            ,
                            i.apply(this, arguments)
                    }
                        , s = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        , n = s(e("lodash/isFunction"))
                        , r = s(e("lodash/keys"))
                        , o = s(e("./record"))
                        , l = s(e("./callback_to_promise"))
                        , h = s(e("./has"))
                        , c = e("./query_params")
                        , d = s(e("./object_to_query_param_string"))
                        , u = function () {
                            function e(e, t) {
                                this._table = e,
                                    this._params = t,
                                    this.firstPage = l.default(f, this),
                                    this.eachPage = l.default(p, this, 1),
                                    this.all = l.default(m, this)
                            }
                            return e.validateParams = function (t) {
                                for (var a = {}, i = [], s = [], n = 0, o = r.default(t); n < o.length; n++) {
                                    var l = o[n]
                                        , c = t[l];
                                    if (h.default(e.paramValidators, l)) {
                                        var d = (0,
                                            e.paramValidators[l])(c);
                                        d.pass ? a[l] = c : s.push(d.error)
                                    } else
                                        i.push(l)
                                }
                                return {
                                    validParams: a,
                                    ignoredKeys: i,
                                    errors: s
                                }
                            }
                                ,
                                e.paramValidators = c.paramValidators,
                                e
                        }();
                    function f(e) {
                        if (!n.default(e))
                            throw new Error("The first parameter to `firstPage` must be a function");
                        this.eachPage((function (t) {
                            e(null, t)
                        }
                        ), (function (t) {
                            e(t, null)
                        }
                        ))
                    }
                    function p(e, t) {
                        var a = this;
                        if (!n.default(e))
                            throw new Error("The first parameter to `eachPage` must be a function");
                        if (!n.default(t) && void 0 !== t)
                            throw new Error("The second parameter to `eachPage` must be a function or undefined");
                        var s, r, l = i({}, this._params), h = "/" + this._table._urlEncodedNameOrId() + "?" + d.default(l), u = {}, f = null;
                        if ("post" === l.method || h.length > c.URL_CHARACTER_LENGTH_LIMIT) {
                            f = l,
                                s = "post",
                                r = "/" + this._table._urlEncodedNameOrId() + "/listRecords";
                            for (var p = 0, m = Object.keys(l); p < m.length; p++) {
                                var g = m[p];
                                c.shouldListRecordsParamBePassedAsParameter(g) ? u[g] = l[g] : f[g] = l[g]
                            }
                        } else
                            s = "get",
                                u = l,
                                r = "/" + this._table._urlEncodedNameOrId();
                        var y = function () {
                            a._table._base.runAction(s, r, u, f, (function (i, s, n) {
                                if (i)
                                    t(i, null);
                                else {
                                    var r = void 0;
                                    n.offset ? (l.offset = n.offset,
                                        r = y) : r = function () {
                                            t(null)
                                        }
                                        ;
                                    var h = n.records.map((function (e) {
                                        return new o.default(a._table, null, e)
                                    }
                                    ));
                                    e(h, r)
                                }
                            }
                            ))
                        };
                        y()
                    }
                    function m(e) {
                        if (!n.default(e))
                            throw new Error("The first parameter to `all` must be a function");
                        var t = [];
                        this.eachPage((function (e, a) {
                            t.push.apply(t, e),
                                a()
                        }
                        ), (function (a) {
                            a ? e(a, null) : e(null, t)
                        }
                        ))
                    }
                    t.exports = u
                }
                    , {
                    "./callback_to_promise": 4,
                    "./has": 8,
                    "./object_to_query_param_string": 11,
                    "./query_params": 14,
                    "./record": 15,
                    "lodash/isFunction": 83,
                    "lodash/keys": 93
                }],
                14: [function (e, t, a) {
                    "use strict";
                    var i = this && this.__importDefault || function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                        ;
                    Object.defineProperty(a, "__esModule", {
                        value: !0
                    }),
                        a.shouldListRecordsParamBePassedAsParameter = a.URL_CHARACTER_LENGTH_LIMIT = a.paramValidators = void 0;
                    var s = i(e("./typecheck"))
                        , n = i(e("lodash/isString"))
                        , r = i(e("lodash/isNumber"))
                        , o = i(e("lodash/isPlainObject"))
                        , l = i(e("lodash/isBoolean"));
                    a.paramValidators = {
                        fields: s.default(s.default.isArrayOf(n.default), "the value for `fields` should be an array of strings"),
                        filterByFormula: s.default(n.default, "the value for `filterByFormula` should be a string"),
                        maxRecords: s.default(r.default, "the value for `maxRecords` should be a number"),
                        pageSize: s.default(r.default, "the value for `pageSize` should be a number"),
                        offset: s.default(r.default, "the value for `offset` should be a number"),
                        sort: s.default(s.default.isArrayOf((function (e) {
                            return o.default(e) && n.default(e.field) && (void 0 === e.direction || ["asc", "desc"].includes(e.direction))
                        }
                        )), 'the value for `sort` should be an array of sort objects. Each sort object must have a string `field` value, and an optional `direction` value that is "asc" or "desc".'),
                        view: s.default(n.default, "the value for `view` should be a string"),
                        cellFormat: s.default((function (e) {
                            return n.default(e) && ["json", "string"].includes(e)
                        }
                        ), 'the value for `cellFormat` should be "json" or "string"'),
                        timeZone: s.default(n.default, "the value for `timeZone` should be a string"),
                        userLocale: s.default(n.default, "the value for `userLocale` should be a string"),
                        method: s.default((function (e) {
                            return n.default(e) && ["get", "post"].includes(e)
                        }
                        ), 'the value for `method` should be "get" or "post"'),
                        returnFieldsByFieldId: s.default(l.default, "the value for `returnFieldsByFieldId` should be a boolean"),
                        recordMetadata: s.default(s.default.isArrayOf(n.default), "the value for `recordMetadata` should be an array of strings")
                    },
                        a.URL_CHARACTER_LENGTH_LIMIT = 15e3,
                        a.shouldListRecordsParamBePassedAsParameter = function (e) {
                            return "timeZone" === e || "userLocale" === e
                        }
                }
                    , {
                    "./typecheck": 18,
                    "lodash/isBoolean": 81,
                    "lodash/isNumber": 86,
                    "lodash/isPlainObject": 89,
                    "lodash/isString": 90
                }],
                15: [function (e, t, a) {
                    "use strict";
                    var i = this && this.__assign || function () {
                        return i = Object.assign || function (e) {
                            for (var t, a = 1, i = arguments.length; a < i; a++)
                                for (var s in t = arguments[a])
                                    Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                            return e
                        }
                            ,
                            i.apply(this, arguments)
                    }
                        , s = (this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        )(e("./callback_to_promise"))
                        , n = function () {
                            function e(e, t, a) {
                                this._table = e,
                                    this.id = t || a.id,
                                    a && (this.commentCount = a.commentCount),
                                    this.setRawJson(a),
                                    this.save = s.default(r, this),
                                    this.patchUpdate = s.default(o, this),
                                    this.putUpdate = s.default(l, this),
                                    this.destroy = s.default(h, this),
                                    this.fetch = s.default(c, this),
                                    this.updateFields = this.patchUpdate,
                                    this.replaceFields = this.putUpdate
                            }
                            return e.prototype.getId = function () {
                                return this.id
                            }
                                ,
                                e.prototype.get = function (e) {
                                    return this.fields[e]
                                }
                                ,
                                e.prototype.set = function (e, t) {
                                    this.fields[e] = t
                                }
                                ,
                                e.prototype.setRawJson = function (e) {
                                    this._rawJson = e,
                                        this.fields = this._rawJson && this._rawJson.fields || {}
                                }
                                ,
                                e
                        }();
                    function r(e) {
                        this.putUpdate(this.fields, e)
                    }
                    function o(e, t, a) {
                        var s = this;
                        a || (a = t,
                            t = {});
                        var n = i({
                            fields: e
                        }, t);
                        this._table._base.runAction("patch", "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, n, (function (e, t, i) {
                            e ? a(e) : (s.setRawJson(i),
                                a(null, s))
                        }
                        ))
                    }
                    function l(e, t, a) {
                        var s = this;
                        a || (a = t,
                            t = {});
                        var n = i({
                            fields: e
                        }, t);
                        this._table._base.runAction("put", "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, n, (function (e, t, i) {
                            e ? a(e) : (s.setRawJson(i),
                                a(null, s))
                        }
                        ))
                    }
                    function h(e) {
                        var t = this;
                        this._table._base.runAction("delete", "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, null, (function (a) {
                            a ? e(a) : e(null, t)
                        }
                        ))
                    }
                    function c(e) {
                        var t = this;
                        this._table._base.runAction("get", "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, null, (function (a, i, s) {
                            a ? e(a) : (t.setRawJson(s),
                                e(null, t))
                        }
                        ))
                    }
                    t.exports = n
                }
                    , {
                    "./callback_to_promise": 4
                }],
                16: [function (e, t, a) {
                    "use strict";
                    var i = this && this.__importDefault || function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                        , s = i(e("./exponential_backoff_with_jitter"))
                        , n = i(e("./object_to_query_param_string"))
                        , r = i(e("./package_version"))
                        , o = i(e("./fetch"))
                        , l = i(e("./abort-controller"))
                        , h = "Airtable.js/" + r.default;
                    t.exports = function e(t, a, i, r, c, d, u) {
                        var f = t._airtable._endpointUrl + "/v" + t._airtable._apiVersionMajor + "/" + t._id + i + "?" + n.default(r)
                            , p = {
                                authorization: "Bearer " + t._airtable._apiKey,
                                "x-api-version": t._airtable._apiVersion,
                                "x-airtable-application-id": t.getId(),
                                "content-type": "application/json"
                            };
                        "undefined" != typeof window ? p["x-airtable-user-agent"] = h : p["User-Agent"] = h;
                        var m = new l.default
                            , g = a.toUpperCase()
                            , y = {
                                method: g,
                                headers: p,
                                signal: m.signal
                            };
                        null !== c && ("GET" === g || "HEAD" === g ? console.warn("body argument to runAction are ignored with GET or HEAD requests") : y.body = JSON.stringify(c));
                        var b = setTimeout((function () {
                            m.abort()
                        }
                        ), t._airtable._requestTimeout);
                        o.default(f, y).then((function (n) {
                            if (clearTimeout(b),
                                429 !== n.status || t._airtable._noRetryIfRateLimited)
                                n.json().then((function (e) {
                                    var a = t._checkStatusForError(n.status, e)
                                        , i = {};
                                    Object.keys(n).forEach((function (e) {
                                        i[e] = n[e]
                                    }
                                    )),
                                        i.body = e,
                                        i.statusCode = n.status,
                                        d(a, i, e)
                                }
                                )).catch((function () {
                                    d(t._checkStatusForError(n.status))
                                }
                                ));
                            else {
                                var o = s.default(u);
                                setTimeout((function () {
                                    e(t, a, i, r, c, d, u + 1)
                                }
                                ), o)
                            }
                        }
                        )).catch((function (e) {
                            clearTimeout(b),
                                d(e)
                        }
                        ))
                    }
                }
                    , {
                    "./abort-controller": 1,
                    "./exponential_backoff_with_jitter": 6,
                    "./fetch": 7,
                    "./object_to_query_param_string": 11,
                    "./package_version": 12
                }],
                17: [function (e, t, a) {
                    "use strict";
                    var i = this && this.__assign || function () {
                        return i = Object.assign || function (e) {
                            for (var t, a = 1, i = arguments.length; a < i; a++)
                                for (var s in t = arguments[a])
                                    Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                            return e
                        }
                            ,
                            i.apply(this, arguments)
                    }
                        , s = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        , n = s(e("lodash/isPlainObject"))
                        , r = s(e("./deprecate"))
                        , o = s(e("./query"))
                        , l = e("./query_params")
                        , h = s(e("./object_to_query_param_string"))
                        , c = s(e("./record"))
                        , d = s(e("./callback_to_promise"))
                        , u = function () {
                            function e(e, t, a) {
                                if (!t && !a)
                                    throw new Error("Table name or table ID is required");
                                this._base = e,
                                    this.id = t,
                                    this.name = a,
                                    this.find = d.default(this._findRecordById, this),
                                    this.select = this._selectRecords.bind(this),
                                    this.create = d.default(this._createRecords, this),
                                    this.update = d.default(this._updateRecords.bind(this, !1), this),
                                    this.replace = d.default(this._updateRecords.bind(this, !0), this),
                                    this.destroy = d.default(this._destroyRecord, this),
                                    this.list = r.default(this._listRecords.bind(this), "table.list", "Airtable: `list()` is deprecated. Use `select()` instead."),
                                    this.forEach = r.default(this._forEachRecord.bind(this), "table.forEach", "Airtable: `forEach()` is deprecated. Use `select()` instead.")
                            }
                            return e.prototype._findRecordById = function (e, t) {
                                new c.default(this, e).fetch(t)
                            }
                                ,
                                e.prototype._selectRecords = function (e) {
                                    if (void 0 === e && (e = {}),
                                        arguments.length > 1 && console.warn("Airtable: `select` takes only one parameter, but it was given " + arguments.length + " parameters. Use `eachPage` or `firstPage` to fetch records."),
                                        n.default(e)) {
                                        var t = o.default.validateParams(e);
                                        if (t.errors.length) {
                                            var a = t.errors.map((function (e) {
                                                return "  * " + e
                                            }
                                            ));
                                            throw new Error("Airtable: invalid parameters for `select`:\n" + a.join("\n"))
                                        }
                                        return t.ignoredKeys.length && console.warn("Airtable: the following parameters to `select` will be ignored: " + t.ignoredKeys.join(", ")),
                                            new o.default(this, t.validParams)
                                    }
                                    throw new Error("Airtable: the parameter for `select` should be a plain object or undefined.")
                                }
                                ,
                                e.prototype._urlEncodedNameOrId = function () {
                                    return this.id || encodeURIComponent(this.name)
                                }
                                ,
                                e.prototype._createRecords = function (e, t, a) {
                                    var s, n = this, r = Array.isArray(e);
                                    a || (a = t,
                                        t = {}),
                                        s = i(r ? {
                                            records: e
                                        } : {
                                            fields: e
                                        }, t),
                                        this._base.runAction("post", "/" + this._urlEncodedNameOrId() + "/", {}, s, (function (e, t, i) {
                                            var s;
                                            e ? a(e) : (s = r ? i.records.map((function (e) {
                                                return new c.default(n, e.id, e)
                                            }
                                            )) : new c.default(n, i.id, i),
                                                a(null, s))
                                        }
                                        ))
                                }
                                ,
                                e.prototype._updateRecords = function (e, t, a, s, r) {
                                    var o, l = this;
                                    if (Array.isArray(t)) {
                                        var h = t;
                                        o = n.default(a) ? a : {},
                                            r = s || a;
                                        var d = e ? "put" : "patch"
                                            , u = i({
                                                records: h
                                            }, o);
                                        this._base.runAction(d, "/" + this._urlEncodedNameOrId() + "/", {}, u, (function (e, t, a) {
                                            if (e)
                                                r(e);
                                            else {
                                                var i = a.records.map((function (e) {
                                                    return new c.default(l, e.id, e)
                                                }
                                                ));
                                                r(null, i)
                                            }
                                        }
                                        ))
                                    } else {
                                        var f = t
                                            , p = a;
                                        o = n.default(s) ? s : {},
                                            r = r || s;
                                        var m = new c.default(this, f);
                                        e ? m.putUpdate(p, o, r) : m.patchUpdate(p, o, r)
                                    }
                                }
                                ,
                                e.prototype._destroyRecord = function (e, t) {
                                    var a = this;
                                    if (Array.isArray(e)) {
                                        var i = {
                                            records: e
                                        };
                                        this._base.runAction("delete", "/" + this._urlEncodedNameOrId(), i, null, (function (e, i, s) {
                                            if (e)
                                                t(e);
                                            else {
                                                var n = s.records.map((function (e) {
                                                    var t = e.id;
                                                    return new c.default(a, t, null)
                                                }
                                                ));
                                                t(null, n)
                                            }
                                        }
                                        ))
                                    } else
                                        new c.default(this, e).destroy(t)
                                }
                                ,
                                e.prototype._listRecords = function (e, t, a, s) {
                                    var n = this;
                                    s || (s = a,
                                        a = {});
                                    var r, o, d = "/" + this._urlEncodedNameOrId() + "?" + h.default(a), u = {}, f = null;
                                    if ("function" != typeof a && "post" === a.method || d.length > l.URL_CHARACTER_LENGTH_LIMIT) {
                                        r = "/" + this._urlEncodedNameOrId() + "/listRecords",
                                            f = i(i({}, e && {
                                                pageSize: e
                                            }), t && {
                                                offset: t
                                            }),
                                            o = "post";
                                        for (var p = 0, m = Object.keys(a); p < m.length; p++) {
                                            var g = m[p];
                                            l.shouldListRecordsParamBePassedAsParameter(g) ? u[g] = a[g] : f[g] = a[g]
                                        }
                                    } else
                                        o = "get",
                                            r = "/" + this._urlEncodedNameOrId() + "/",
                                            u = i({
                                                limit: e,
                                                offset: t
                                            }, a);
                                    this._base.runAction(o, r, u, f, (function (e, t, a) {
                                        if (e)
                                            s(e);
                                        else {
                                            var i = a.records.map((function (e) {
                                                return new c.default(n, null, e)
                                            }
                                            ));
                                            s(null, i, a.offset)
                                        }
                                    }
                                    ))
                                }
                                ,
                                e.prototype._forEachRecord = function (t, a, i) {
                                    var s = this;
                                    2 === arguments.length && (i = a,
                                        a = t,
                                        t = {});
                                    var n = e.__recordsPerPageForIteration || 100
                                        , r = null
                                        , o = function () {
                                            s._listRecords(n, r, t, (function (e, t, s) {
                                                if (e)
                                                    i(e);
                                                else {
                                                    for (var n = 0; n < t.length; n++)
                                                        a(t[n]);
                                                    s ? (r = s,
                                                        o()) : i()
                                                }
                                            }
                                            ))
                                        };
                                    o()
                                }
                                ,
                                e
                        }();
                    t.exports = u
                }
                    , {
                    "./callback_to_promise": 4,
                    "./deprecate": 5,
                    "./object_to_query_param_string": 11,
                    "./query": 13,
                    "./query_params": 14,
                    "./record": 15,
                    "lodash/isPlainObject": 89
                }],
                18: [function (e, t, a) {
                    "use strict";
                    function i(e, t) {
                        return function (a) {
                            return e(a) ? {
                                pass: !0
                            } : {
                                pass: !1,
                                error: t
                            }
                        }
                    }
                    i.isOneOf = function (e) {
                        return e.includes.bind(e)
                    }
                        ,
                        i.isArrayOf = function (e) {
                            return function (t) {
                                return Array.isArray(t) && t.every(e)
                            }
                        }
                        ,
                        t.exports = i
                }
                    , {}],
                19: [function (e, t, a) {
                    "use strict";
                    function i(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    function s(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var i = t[a];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    function n(e, t, a) {
                        return t && s(e.prototype, t),
                            a && s(e, a),
                            e
                    }
                    function r(e) {
                        return r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        }
                            ,
                            r(e)
                    }
                    function o(e, t) {
                        return o = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                                e
                        }
                            ,
                            o(e, t)
                    }
                    function l(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }
                    function h(e, t, a) {
                        return h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, a) {
                            var i = function (e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e));)
                                    ;
                                return e
                            }(e, t);
                            if (i) {
                                var s = Object.getOwnPropertyDescriptor(i, t);
                                return s.get ? s.get.call(a) : s.value
                            }
                        }
                            ,
                            h(e, t, a || e)
                    }
                    Object.defineProperty(a, "__esModule", {
                        value: !0
                    });
                    var c = function () {
                        function e() {
                            i(this, e),
                                Object.defineProperty(this, "listeners", {
                                    value: {},
                                    writable: !0,
                                    configurable: !0
                                })
                        }
                        return n(e, [{
                            key: "addEventListener",
                            value: function (e, t) {
                                e in this.listeners || (this.listeners[e] = []),
                                    this.listeners[e].push(t)
                            }
                        }, {
                            key: "removeEventListener",
                            value: function (e, t) {
                                if (e in this.listeners)
                                    for (var a = this.listeners[e], i = 0, s = a.length; i < s; i++)
                                        if (a[i] === t)
                                            return void a.splice(i, 1)
                            }
                        }, {
                            key: "dispatchEvent",
                            value: function (e) {
                                var t = this;
                                if (e.type in this.listeners) {
                                    for (var a = function (a) {
                                        setTimeout((function () {
                                            return a.call(t, e)
                                        }
                                        ))
                                    }, i = this.listeners[e.type], s = 0, n = i.length; s < n; s++)
                                        a(i[s]);
                                    return !e.defaultPrevented
                                }
                            }
                        }]),
                            e
                    }()
                        , d = function (e) {
                            function t() {
                                var e;
                                return i(this, t),
                                    (e = function (e, t) {
                                        return !t || "object" != typeof t && "function" != typeof t ? l(e) : t
                                    }(this, r(t).call(this))).listeners || c.call(l(e)),
                                    Object.defineProperty(l(e), "aborted", {
                                        value: !1,
                                        writable: !0,
                                        configurable: !0
                                    }),
                                    Object.defineProperty(l(e), "onabort", {
                                        value: null,
                                        writable: !0,
                                        configurable: !0
                                    }),
                                    e
                            }
                            return function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                    t && o(e, t)
                            }(t, e),
                                n(t, [{
                                    key: "toString",
                                    value: function () {
                                        return "[object AbortSignal]"
                                    }
                                }, {
                                    key: "dispatchEvent",
                                    value: function (e) {
                                        "abort" === e.type && (this.aborted = !0,
                                            "function" == typeof this.onabort && this.onabort.call(this, e)),
                                            h(r(t.prototype), "dispatchEvent", this).call(this, e)
                                    }
                                }]),
                                t
                        }(c)
                        , u = function () {
                            function e() {
                                i(this, e),
                                    Object.defineProperty(this, "signal", {
                                        value: new d,
                                        writable: !0,
                                        configurable: !0
                                    })
                            }
                            return n(e, [{
                                key: "abort",
                                value: function () {
                                    var e;
                                    try {
                                        e = new Event("abort")
                                    } catch (t) {
                                        "undefined" != typeof document ? document.createEvent ? (e = document.createEvent("Event")).initEvent("abort", !1, !1) : (e = document.createEventObject()).type = "abort" : e = {
                                            type: "abort",
                                            bubbles: !1,
                                            cancelable: !1
                                        }
                                    }
                                    this.signal.dispatchEvent(e)
                                }
                            }, {
                                key: "toString",
                                value: function () {
                                    return "[object AbortController]"
                                }
                            }]),
                                e
                        }();
                    "undefined" != typeof Symbol && Symbol.toStringTag && (u.prototype[Symbol.toStringTag] = "AbortController",
                        d.prototype[Symbol.toStringTag] = "AbortSignal"),
                        a.AbortController = u,
                        a.AbortSignal = d,
                        a.abortableFetch = function (e) {
                            "function" == typeof e && (e = {
                                fetch: e
                            });
                            var t = e
                                , a = t.fetch
                                , i = t.Request
                                , s = void 0 === i ? a.Request : i
                                , n = t.AbortController
                                , r = t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
                                , o = void 0 !== r && r;
                            if (!function (e) {
                                return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),
                                    !0) : "function" == typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController
                            }({
                                fetch: a,
                                Request: s,
                                AbortController: n,
                                __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: o
                            }))
                                return {
                                    fetch: a,
                                    Request: l
                                };
                            var l = s;
                            (l && !l.prototype.hasOwnProperty("signal") || o) && ((l = function (e, t) {
                                var a;
                                t && t.signal && (a = t.signal,
                                    delete t.signal);
                                var i = new s(e, t);
                                return a && Object.defineProperty(i, "signal", {
                                    writable: !1,
                                    enumerable: !1,
                                    configurable: !0,
                                    value: a
                                }),
                                    i
                            }
                            ).prototype = s.prototype);
                            var h = a;
                            return {
                                fetch: function (e, t) {
                                    var a = l && l.prototype.isPrototypeOf(e) ? e.signal : t ? t.signal : void 0;
                                    if (a) {
                                        var i;
                                        try {
                                            i = new DOMException("Aborted", "AbortError")
                                        } catch (e) {
                                            (i = new Error("Aborted")).name = "AbortError"
                                        }
                                        if (a.aborted)
                                            return Promise.reject(i);
                                        var s = new Promise((function (e, t) {
                                            a.addEventListener("abort", (function () {
                                                return t(i)
                                            }
                                            ), {
                                                once: !0
                                            })
                                        }
                                        ));
                                        return t && t.signal && delete t.signal,
                                            Promise.race([s, h(e, t)])
                                    }
                                    return h(e, t)
                                },
                                Request: l
                            }
                        }
                }
                    , {}],
                20: [function (e, t, a) { }
                    , {}],
                21: [function (e, t, a) {
                    var i = e("./_hashClear")
                        , s = e("./_hashDelete")
                        , n = e("./_hashGet")
                        , r = e("./_hashHas")
                        , o = e("./_hashSet");
                    function l(e) {
                        var t = -1
                            , a = null == e ? 0 : e.length;
                        for (this.clear(); ++t < a;) {
                            var i = e[t];
                            this.set(i[0], i[1])
                        }
                    }
                    l.prototype.clear = i,
                        l.prototype.delete = s,
                        l.prototype.get = n,
                        l.prototype.has = r,
                        l.prototype.set = o,
                        t.exports = l
                }
                    , {
                    "./_hashClear": 46,
                    "./_hashDelete": 47,
                    "./_hashGet": 48,
                    "./_hashHas": 49,
                    "./_hashSet": 50
                }],
                22: [function (e, t, a) {
                    var i = e("./_listCacheClear")
                        , s = e("./_listCacheDelete")
                        , n = e("./_listCacheGet")
                        , r = e("./_listCacheHas")
                        , o = e("./_listCacheSet");
                    function l(e) {
                        var t = -1
                            , a = null == e ? 0 : e.length;
                        for (this.clear(); ++t < a;) {
                            var i = e[t];
                            this.set(i[0], i[1])
                        }
                    }
                    l.prototype.clear = i,
                        l.prototype.delete = s,
                        l.prototype.get = n,
                        l.prototype.has = r,
                        l.prototype.set = o,
                        t.exports = l
                }
                    , {
                    "./_listCacheClear": 56,
                    "./_listCacheDelete": 57,
                    "./_listCacheGet": 58,
                    "./_listCacheHas": 59,
                    "./_listCacheSet": 60
                }],
                23: [function (e, t, a) {
                    var i = e("./_getNative")(e("./_root"), "Map");
                    t.exports = i
                }
                    , {
                    "./_getNative": 42,
                    "./_root": 72
                }],
                24: [function (e, t, a) {
                    var i = e("./_mapCacheClear")
                        , s = e("./_mapCacheDelete")
                        , n = e("./_mapCacheGet")
                        , r = e("./_mapCacheHas")
                        , o = e("./_mapCacheSet");
                    function l(e) {
                        var t = -1
                            , a = null == e ? 0 : e.length;
                        for (this.clear(); ++t < a;) {
                            var i = e[t];
                            this.set(i[0], i[1])
                        }
                    }
                    l.prototype.clear = i,
                        l.prototype.delete = s,
                        l.prototype.get = n,
                        l.prototype.has = r,
                        l.prototype.set = o,
                        t.exports = l
                }
                    , {
                    "./_mapCacheClear": 61,
                    "./_mapCacheDelete": 62,
                    "./_mapCacheGet": 63,
                    "./_mapCacheHas": 64,
                    "./_mapCacheSet": 65
                }],
                25: [function (e, t, a) {
                    var i = e("./_root").Symbol;
                    t.exports = i
                }
                    , {
                    "./_root": 72
                }],
                26: [function (e, t, a) {
                    var i = e("./_baseTimes")
                        , s = e("./isArguments")
                        , n = e("./isArray")
                        , r = e("./isBuffer")
                        , o = e("./_isIndex")
                        , l = e("./isTypedArray")
                        , h = Object.prototype.hasOwnProperty;
                    t.exports = function (e, t) {
                        var a = n(e)
                            , c = !a && s(e)
                            , d = !a && !c && r(e)
                            , u = !a && !c && !d && l(e)
                            , f = a || c || d || u
                            , p = f ? i(e.length, String) : []
                            , m = p.length;
                        for (var g in e)
                            !t && !h.call(e, g) || f && ("length" == g || d && ("offset" == g || "parent" == g) || u && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || o(g, m)) || p.push(g);
                        return p
                    }
                }
                    , {
                    "./_baseTimes": 35,
                    "./_isIndex": 51,
                    "./isArguments": 78,
                    "./isArray": 79,
                    "./isBuffer": 82,
                    "./isTypedArray": 92
                }],
                27: [function (e, t, a) {
                    t.exports = function (e, t) {
                        for (var a = -1, i = null == e ? 0 : e.length, s = Array(i); ++a < i;)
                            s[a] = t(e[a], a, e);
                        return s
                    }
                }
                    , {}],
                28: [function (e, t, a) {
                    var i = e("./eq");
                    t.exports = function (e, t) {
                        for (var a = e.length; a--;)
                            if (i(e[a][0], t))
                                return a;
                        return -1
                    }
                }
                    , {
                    "./eq": 76
                }],
                29: [function (e, t, a) {
                    var i = e("./_castPath")
                        , s = e("./_toKey");
                    t.exports = function (e, t) {
                        for (var a = 0, n = (t = i(t, e)).length; null != e && a < n;)
                            e = e[s(t[a++])];
                        return a && a == n ? e : void 0
                    }
                }
                    , {
                    "./_castPath": 38,
                    "./_toKey": 74
                }],
                30: [function (e, t, a) {
                    var i = e("./_Symbol")
                        , s = e("./_getRawTag")
                        , n = e("./_objectToString")
                        , r = i ? i.toStringTag : void 0;
                    t.exports = function (e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : r && r in Object(e) ? s(e) : n(e)
                    }
                }
                    , {
                    "./_Symbol": 25,
                    "./_getRawTag": 44,
                    "./_objectToString": 70
                }],
                31: [function (e, t, a) {
                    var i = e("./_baseGetTag")
                        , s = e("./isObjectLike");
                    t.exports = function (e) {
                        return s(e) && "[object Arguments]" == i(e)
                    }
                }
                    , {
                    "./_baseGetTag": 30,
                    "./isObjectLike": 88
                }],
                32: [function (e, t, a) {
                    var i = e("./isFunction")
                        , s = e("./_isMasked")
                        , n = e("./isObject")
                        , r = e("./_toSource")
                        , o = /^\[object .+?Constructor\]$/
                        , l = Function.prototype
                        , h = Object.prototype
                        , c = l.toString
                        , d = h.hasOwnProperty
                        , u = RegExp("^" + c.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                    t.exports = function (e) {
                        return !(!n(e) || s(e)) && (i(e) ? u : o).test(r(e))
                    }
                }
                    , {
                    "./_isMasked": 54,
                    "./_toSource": 75,
                    "./isFunction": 83,
                    "./isObject": 87
                }],
                33: [function (e, t, a) {
                    var i = e("./_baseGetTag")
                        , s = e("./isLength")
                        , n = e("./isObjectLike")
                        , r = {};
                    r["[object Float32Array]"] = r["[object Float64Array]"] = r["[object Int8Array]"] = r["[object Int16Array]"] = r["[object Int32Array]"] = r["[object Uint8Array]"] = r["[object Uint8ClampedArray]"] = r["[object Uint16Array]"] = r["[object Uint32Array]"] = !0,
                        r["[object Arguments]"] = r["[object Array]"] = r["[object ArrayBuffer]"] = r["[object Boolean]"] = r["[object DataView]"] = r["[object Date]"] = r["[object Error]"] = r["[object Function]"] = r["[object Map]"] = r["[object Number]"] = r["[object Object]"] = r["[object RegExp]"] = r["[object Set]"] = r["[object String]"] = r["[object WeakMap]"] = !1,
                        t.exports = function (e) {
                            return n(e) && s(e.length) && !!r[i(e)]
                        }
                }
                    , {
                    "./_baseGetTag": 30,
                    "./isLength": 84,
                    "./isObjectLike": 88
                }],
                34: [function (e, t, a) {
                    var i = e("./_isPrototype")
                        , s = e("./_nativeKeys")
                        , n = Object.prototype.hasOwnProperty;
                    t.exports = function (e) {
                        if (!i(e))
                            return s(e);
                        var t = [];
                        for (var a in Object(e))
                            n.call(e, a) && "constructor" != a && t.push(a);
                        return t
                    }
                }
                    , {
                    "./_isPrototype": 55,
                    "./_nativeKeys": 68
                }],
                35: [function (e, t, a) {
                    t.exports = function (e, t) {
                        for (var a = -1, i = Array(e); ++a < e;)
                            i[a] = t(a);
                        return i
                    }
                }
                    , {}],
                36: [function (e, t, a) {
                    var i = e("./_Symbol")
                        , s = e("./_arrayMap")
                        , n = e("./isArray")
                        , r = e("./isSymbol")
                        , o = i ? i.prototype : void 0
                        , l = o ? o.toString : void 0;
                    t.exports = function e(t) {
                        if ("string" == typeof t)
                            return t;
                        if (n(t))
                            return s(t, e) + "";
                        if (r(t))
                            return l ? l.call(t) : "";
                        var a = t + "";
                        return "0" == a && 1 / t == -1 / 0 ? "-0" : a
                    }
                }
                    , {
                    "./_Symbol": 25,
                    "./_arrayMap": 27,
                    "./isArray": 79,
                    "./isSymbol": 91
                }],
                37: [function (e, t, a) {
                    t.exports = function (e) {
                        return function (t) {
                            return e(t)
                        }
                    }
                }
                    , {}],
                38: [function (e, t, a) {
                    var i = e("./isArray")
                        , s = e("./_isKey")
                        , n = e("./_stringToPath")
                        , r = e("./toString");
                    t.exports = function (e, t) {
                        return i(e) ? e : s(e, t) ? [e] : n(r(e))
                    }
                }
                    , {
                    "./_isKey": 52,
                    "./_stringToPath": 73,
                    "./isArray": 79,
                    "./toString": 96
                }],
                39: [function (e, t, a) {
                    var i = e("./_root")["__core-js_shared__"];
                    t.exports = i
                }
                    , {
                    "./_root": 72
                }],
                40: [function (e, t, i) {
                    (function (e) {
                        var a = "object" == typeof e && e && e.Object === Object && e;
                        t.exports = a
                    }
                    ).call(this, void 0 !== a.g ? a.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }
                    , {}],
                41: [function (e, t, a) {
                    var i = e("./_isKeyable");
                    t.exports = function (e, t) {
                        var a = e.__data__;
                        return i(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
                    }
                }
                    , {
                    "./_isKeyable": 53
                }],
                42: [function (e, t, a) {
                    var i = e("./_baseIsNative")
                        , s = e("./_getValue");
                    t.exports = function (e, t) {
                        var a = s(e, t);
                        return i(a) ? a : void 0
                    }
                }
                    , {
                    "./_baseIsNative": 32,
                    "./_getValue": 45
                }],
                43: [function (e, t, a) {
                    var i = e("./_overArg")(Object.getPrototypeOf, Object);
                    t.exports = i
                }
                    , {
                    "./_overArg": 71
                }],
                44: [function (e, t, a) {
                    var i = e("./_Symbol")
                        , s = Object.prototype
                        , n = s.hasOwnProperty
                        , r = s.toString
                        , o = i ? i.toStringTag : void 0;
                    t.exports = function (e) {
                        var t = n.call(e, o)
                            , a = e[o];
                        try {
                            e[o] = void 0;
                            var i = !0
                        } catch (e) { }
                        var s = r.call(e);
                        return i && (t ? e[o] = a : delete e[o]),
                            s
                    }
                }
                    , {
                    "./_Symbol": 25
                }],
                45: [function (e, t, a) {
                    t.exports = function (e, t) {
                        return null == e ? void 0 : e[t]
                    }
                }
                    , {}],
                46: [function (e, t, a) {
                    var i = e("./_nativeCreate");
                    t.exports = function () {
                        this.__data__ = i ? i(null) : {},
                            this.size = 0
                    }
                }
                    , {
                    "./_nativeCreate": 67
                }],
                47: [function (e, t, a) {
                    t.exports = function (e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0,
                            t
                    }
                }
                    , {}],
                48: [function (e, t, a) {
                    var i = e("./_nativeCreate")
                        , s = Object.prototype.hasOwnProperty;
                    t.exports = function (e) {
                        var t = this.__data__;
                        if (i) {
                            var a = t[e];
                            return "__lodash_hash_undefined__" === a ? void 0 : a
                        }
                        return s.call(t, e) ? t[e] : void 0
                    }
                }
                    , {
                    "./_nativeCreate": 67
                }],
                49: [function (e, t, a) {
                    var i = e("./_nativeCreate")
                        , s = Object.prototype.hasOwnProperty;
                    t.exports = function (e) {
                        var t = this.__data__;
                        return i ? void 0 !== t[e] : s.call(t, e)
                    }
                }
                    , {
                    "./_nativeCreate": 67
                }],
                50: [function (e, t, a) {
                    var i = e("./_nativeCreate");
                    t.exports = function (e, t) {
                        var a = this.__data__;
                        return this.size += this.has(e) ? 0 : 1,
                            a[e] = i && void 0 === t ? "__lodash_hash_undefined__" : t,
                            this
                    }
                }
                    , {
                    "./_nativeCreate": 67
                }],
                51: [function (e, t, a) {
                    var i = /^(?:0|[1-9]\d*)$/;
                    t.exports = function (e, t) {
                        var a = typeof e;
                        return !!(t = null == t ? 9007199254740991 : t) && ("number" == a || "symbol" != a && i.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }
                }
                    , {}],
                52: [function (e, t, a) {
                    var i = e("./isArray")
                        , s = e("./isSymbol")
                        , n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
                        , r = /^\w*$/;
                    t.exports = function (e, t) {
                        if (i(e))
                            return !1;
                        var a = typeof e;
                        return !("number" != a && "symbol" != a && "boolean" != a && null != e && !s(e)) || r.test(e) || !n.test(e) || null != t && e in Object(t)
                    }
                }
                    , {
                    "./isArray": 79,
                    "./isSymbol": 91
                }],
                53: [function (e, t, a) {
                    t.exports = function (e) {
                        var t = typeof e;
                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                    }
                }
                    , {}],
                54: [function (e, t, a) {
                    var i, s = e("./_coreJsData"), n = (i = /[^.]+$/.exec(s && s.keys && s.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "";
                    t.exports = function (e) {
                        return !!n && n in e
                    }
                }
                    , {
                    "./_coreJsData": 39
                }],
                55: [function (e, t, a) {
                    var i = Object.prototype;
                    t.exports = function (e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || i)
                    }
                }
                    , {}],
                56: [function (e, t, a) {
                    t.exports = function () {
                        this.__data__ = [],
                            this.size = 0
                    }
                }
                    , {}],
                57: [function (e, t, a) {
                    var i = e("./_assocIndexOf")
                        , s = Array.prototype.splice;
                    t.exports = function (e) {
                        var t = this.__data__
                            , a = i(t, e);
                        return !(a < 0 || (a == t.length - 1 ? t.pop() : s.call(t, a, 1),
                            --this.size,
                            0))
                    }
                }
                    , {
                    "./_assocIndexOf": 28
                }],
                58: [function (e, t, a) {
                    var i = e("./_assocIndexOf");
                    t.exports = function (e) {
                        var t = this.__data__
                            , a = i(t, e);
                        return a < 0 ? void 0 : t[a][1]
                    }
                }
                    , {
                    "./_assocIndexOf": 28
                }],
                59: [function (e, t, a) {
                    var i = e("./_assocIndexOf");
                    t.exports = function (e) {
                        return i(this.__data__, e) > -1
                    }
                }
                    , {
                    "./_assocIndexOf": 28
                }],
                60: [function (e, t, a) {
                    var i = e("./_assocIndexOf");
                    t.exports = function (e, t) {
                        var a = this.__data__
                            , s = i(a, e);
                        return s < 0 ? (++this.size,
                            a.push([e, t])) : a[s][1] = t,
                            this
                    }
                }
                    , {
                    "./_assocIndexOf": 28
                }],
                61: [function (e, t, a) {
                    var i = e("./_Hash")
                        , s = e("./_ListCache")
                        , n = e("./_Map");
                    t.exports = function () {
                        this.size = 0,
                            this.__data__ = {
                                hash: new i,
                                map: new (n || s),
                                string: new i
                            }
                    }
                }
                    , {
                    "./_Hash": 21,
                    "./_ListCache": 22,
                    "./_Map": 23
                }],
                62: [function (e, t, a) {
                    var i = e("./_getMapData");
                    t.exports = function (e) {
                        var t = i(this, e).delete(e);
                        return this.size -= t ? 1 : 0,
                            t
                    }
                }
                    , {
                    "./_getMapData": 41
                }],
                63: [function (e, t, a) {
                    var i = e("./_getMapData");
                    t.exports = function (e) {
                        return i(this, e).get(e)
                    }
                }
                    , {
                    "./_getMapData": 41
                }],
                64: [function (e, t, a) {
                    var i = e("./_getMapData");
                    t.exports = function (e) {
                        return i(this, e).has(e)
                    }
                }
                    , {
                    "./_getMapData": 41
                }],
                65: [function (e, t, a) {
                    var i = e("./_getMapData");
                    t.exports = function (e, t) {
                        var a = i(this, e)
                            , s = a.size;
                        return a.set(e, t),
                            this.size += a.size == s ? 0 : 1,
                            this
                    }
                }
                    , {
                    "./_getMapData": 41
                }],
                66: [function (e, t, a) {
                    var i = e("./memoize");
                    t.exports = function (e) {
                        var t = i(e, (function (e) {
                            return 500 === a.size && a.clear(),
                                e
                        }
                        ))
                            , a = t.cache;
                        return t
                    }
                }
                    , {
                    "./memoize": 94
                }],
                67: [function (e, t, a) {
                    var i = e("./_getNative")(Object, "create");
                    t.exports = i
                }
                    , {
                    "./_getNative": 42
                }],
                68: [function (e, t, a) {
                    var i = e("./_overArg")(Object.keys, Object);
                    t.exports = i
                }
                    , {
                    "./_overArg": 71
                }],
                69: [function (e, t, a) {
                    var i = e("./_freeGlobal")
                        , s = "object" == typeof a && a && !a.nodeType && a
                        , n = s && "object" == typeof t && t && !t.nodeType && t
                        , r = n && n.exports === s && i.process
                        , o = function () {
                            try {
                                return n && n.require && n.require("util").types || r && r.binding && r.binding("util")
                            } catch (e) { }
                        }();
                    t.exports = o
                }
                    , {
                    "./_freeGlobal": 40
                }],
                70: [function (e, t, a) {
                    var i = Object.prototype.toString;
                    t.exports = function (e) {
                        return i.call(e)
                    }
                }
                    , {}],
                71: [function (e, t, a) {
                    t.exports = function (e, t) {
                        return function (a) {
                            return e(t(a))
                        }
                    }
                }
                    , {}],
                72: [function (e, t, a) {
                    var i = e("./_freeGlobal")
                        , s = "object" == typeof self && self && self.Object === Object && self
                        , n = i || s || Function("return this")();
                    t.exports = n
                }
                    , {
                    "./_freeGlobal": 40
                }],
                73: [function (e, t, a) {
                    var i = e("./_memoizeCapped")
                        , s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
                        , n = /\\(\\)?/g
                        , r = i((function (e) {
                            var t = [];
                            return 46 === e.charCodeAt(0) && t.push(""),
                                e.replace(s, (function (e, a, i, s) {
                                    t.push(i ? s.replace(n, "$1") : a || e)
                                }
                                )),
                                t
                        }
                        ));
                    t.exports = r
                }
                    , {
                    "./_memoizeCapped": 66
                }],
                74: [function (e, t, a) {
                    var i = e("./isSymbol");
                    t.exports = function (e) {
                        if ("string" == typeof e || i(e))
                            return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                    }
                }
                    , {
                    "./isSymbol": 91
                }],
                75: [function (e, t, a) {
                    var i = Function.prototype.toString;
                    t.exports = function (e) {
                        if (null != e) {
                            try {
                                return i.call(e)
                            } catch (e) { }
                            try {
                                return e + ""
                            } catch (e) { }
                        }
                        return ""
                    }
                }
                    , {}],
                76: [function (e, t, a) {
                    t.exports = function (e, t) {
                        return e === t || e != e && t != t
                    }
                }
                    , {}],
                77: [function (e, t, a) {
                    var i = e("./_baseGet");
                    t.exports = function (e, t, a) {
                        var s = null == e ? void 0 : i(e, t);
                        return void 0 === s ? a : s
                    }
                }
                    , {
                    "./_baseGet": 29
                }],
                78: [function (e, t, a) {
                    var i = e("./_baseIsArguments")
                        , s = e("./isObjectLike")
                        , n = Object.prototype
                        , r = n.hasOwnProperty
                        , o = n.propertyIsEnumerable
                        , l = i(function () {
                            return arguments
                        }()) ? i : function (e) {
                            return s(e) && r.call(e, "callee") && !o.call(e, "callee")
                        }
                        ;
                    t.exports = l
                }
                    , {
                    "./_baseIsArguments": 31,
                    "./isObjectLike": 88
                }],
                79: [function (e, t, a) {
                    var i = Array.isArray;
                    t.exports = i
                }
                    , {}],
                80: [function (e, t, a) {
                    var i = e("./isFunction")
                        , s = e("./isLength");
                    t.exports = function (e) {
                        return null != e && s(e.length) && !i(e)
                    }
                }
                    , {
                    "./isFunction": 83,
                    "./isLength": 84
                }],
                81: [function (e, t, a) {
                    var i = e("./_baseGetTag")
                        , s = e("./isObjectLike");
                    t.exports = function (e) {
                        return !0 === e || !1 === e || s(e) && "[object Boolean]" == i(e)
                    }
                }
                    , {
                    "./_baseGetTag": 30,
                    "./isObjectLike": 88
                }],
                82: [function (e, t, a) {
                    var i = e("./_root")
                        , s = e("./stubFalse")
                        , n = "object" == typeof a && a && !a.nodeType && a
                        , r = n && "object" == typeof t && t && !t.nodeType && t
                        , o = r && r.exports === n ? i.Buffer : void 0
                        , l = (o ? o.isBuffer : void 0) || s;
                    t.exports = l
                }
                    , {
                    "./_root": 72,
                    "./stubFalse": 95
                }],
                83: [function (e, t, a) {
                    var i = e("./_baseGetTag")
                        , s = e("./isObject");
                    t.exports = function (e) {
                        if (!s(e))
                            return !1;
                        var t = i(e);
                        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                    }
                }
                    , {
                    "./_baseGetTag": 30,
                    "./isObject": 87
                }],
                84: [function (e, t, a) {
                    t.exports = function (e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                    }
                }
                    , {}],
                85: [function (e, t, a) {
                    t.exports = function (e) {
                        return null == e
                    }
                }
                    , {}],
                86: [function (e, t, a) {
                    var i = e("./_baseGetTag")
                        , s = e("./isObjectLike");
                    t.exports = function (e) {
                        return "number" == typeof e || s(e) && "[object Number]" == i(e)
                    }
                }
                    , {
                    "./_baseGetTag": 30,
                    "./isObjectLike": 88
                }],
                87: [function (e, t, a) {
                    t.exports = function (e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    }
                }
                    , {}],
                88: [function (e, t, a) {
                    t.exports = function (e) {
                        return null != e && "object" == typeof e
                    }
                }
                    , {}],
                89: [function (e, t, a) {
                    var i = e("./_baseGetTag")
                        , s = e("./_getPrototype")
                        , n = e("./isObjectLike")
                        , r = Function.prototype
                        , o = Object.prototype
                        , l = r.toString
                        , h = o.hasOwnProperty
                        , c = l.call(Object);
                    t.exports = function (e) {
                        if (!n(e) || "[object Object]" != i(e))
                            return !1;
                        var t = s(e);
                        if (null === t)
                            return !0;
                        var a = h.call(t, "constructor") && t.constructor;
                        return "function" == typeof a && a instanceof a && l.call(a) == c
                    }
                }
                    , {
                    "./_baseGetTag": 30,
                    "./_getPrototype": 43,
                    "./isObjectLike": 88
                }],
                90: [function (e, t, a) {
                    var i = e("./_baseGetTag")
                        , s = e("./isArray")
                        , n = e("./isObjectLike");
                    t.exports = function (e) {
                        return "string" == typeof e || !s(e) && n(e) && "[object String]" == i(e)
                    }
                }
                    , {
                    "./_baseGetTag": 30,
                    "./isArray": 79,
                    "./isObjectLike": 88
                }],
                91: [function (e, t, a) {
                    var i = e("./_baseGetTag")
                        , s = e("./isObjectLike");
                    t.exports = function (e) {
                        return "symbol" == typeof e || s(e) && "[object Symbol]" == i(e)
                    }
                }
                    , {
                    "./_baseGetTag": 30,
                    "./isObjectLike": 88
                }],
                92: [function (e, t, a) {
                    var i = e("./_baseIsTypedArray")
                        , s = e("./_baseUnary")
                        , n = e("./_nodeUtil")
                        , r = n && n.isTypedArray
                        , o = r ? s(r) : i;
                    t.exports = o
                }
                    , {
                    "./_baseIsTypedArray": 33,
                    "./_baseUnary": 37,
                    "./_nodeUtil": 69
                }],
                93: [function (e, t, a) {
                    var i = e("./_arrayLikeKeys")
                        , s = e("./_baseKeys")
                        , n = e("./isArrayLike");
                    t.exports = function (e) {
                        return n(e) ? i(e) : s(e)
                    }
                }
                    , {
                    "./_arrayLikeKeys": 26,
                    "./_baseKeys": 34,
                    "./isArrayLike": 80
                }],
                94: [function (e, t, a) {
                    var i = e("./_MapCache");
                    function s(e, t) {
                        if ("function" != typeof e || null != t && "function" != typeof t)
                            throw new TypeError("Expected a function");
                        var a = function () {
                            var i = arguments
                                , s = t ? t.apply(this, i) : i[0]
                                , n = a.cache;
                            if (n.has(s))
                                return n.get(s);
                            var r = e.apply(this, i);
                            return a.cache = n.set(s, r) || n,
                                r
                        };
                        return a.cache = new (s.Cache || i),
                            a
                    }
                    s.Cache = i,
                        t.exports = s
                }
                    , {
                    "./_MapCache": 24
                }],
                95: [function (e, t, a) {
                    t.exports = function () {
                        return !1
                    }
                }
                    , {}],
                96: [function (e, t, a) {
                    var i = e("./_baseToString");
                    t.exports = function (e) {
                        return null == e ? "" : i(e)
                    }
                }
                    , {
                    "./_baseToString": 36
                }],
                airtable: [function (e, t, a) {
                    "use strict";
                    var i = this && this.__importDefault || function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                        , s = i(e("./base"))
                        , n = i(e("./record"))
                        , r = i(e("./table"))
                        , o = i(e("./airtable_error"))
                        , l = function () {
                            function e(t) {
                                void 0 === t && (t = {});
                                var a = e.default_config()
                                    , i = t.apiVersion || e.apiVersion || a.apiVersion;
                                if (Object.defineProperties(this, {
                                    _apiKey: {
                                        value: t.apiKey || e.apiKey || a.apiKey
                                    },
                                    _apiVersion: {
                                        value: i
                                    },
                                    _apiVersionMajor: {
                                        value: i.split(".")[0]
                                    },
                                    _customHeaders: {
                                        value: t.customHeaders || {}
                                    },
                                    _endpointUrl: {
                                        value: t.endpointUrl || e.endpointUrl || a.endpointUrl
                                    },
                                    _noRetryIfRateLimited: {
                                        value: t.noRetryIfRateLimited || e.noRetryIfRateLimited || a.noRetryIfRateLimited
                                    },
                                    _requestTimeout: {
                                        value: t.requestTimeout || e.requestTimeout || a.requestTimeout
                                    }
                                }),
                                    !this._apiKey)
                                    throw new Error("An API key is required to connect to Airtable")
                            }
                            return e.prototype.base = function (e) {
                                return s.default.createFunctor(this, e)
                            }
                                ,
                                e.default_config = function () {
                                    return {
                                        endpointUrl: "https://api.airtable.com",
                                        apiVersion: "0.1.0",
                                        apiKey: "",
                                        noRetryIfRateLimited: !1,
                                        requestTimeout: 3e5
                                    }
                                }
                                ,
                                e.configure = function (t) {
                                    var a = t.apiKey
                                        , i = t.endpointUrl
                                        , s = t.apiVersion
                                        , n = t.noRetryIfRateLimited
                                        , r = t.requestTimeout;
                                    e.apiKey = a,
                                        e.endpointUrl = i,
                                        e.apiVersion = s,
                                        e.noRetryIfRateLimited = n,
                                        e.requestTimeout = r
                                }
                                ,
                                e.base = function (t) {
                                    return (new e).base(t)
                                }
                                ,
                                e.Base = s.default,
                                e.Record = n.default,
                                e.Table = r.default,
                                e.Error = o.default,
                                e
                        }();
                    t.exports = l
                }
                    , {
                    "./airtable_error": 2,
                    "./base": 3,
                    "./record": 15,
                    "./table": 17
                }]
            }, {}, ["airtable"])("airtable")
        }
    }
        , t = {};
    function a(i) {
        var s = t[i];
        if (void 0 !== s)
            return s.exports;
        var n = t[i] = {
            exports: {}
        };
        return e[i](n, n.exports, a),
            n.exports
    }
    a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }),
            t
    }
        ,
        a.d = (e, t) => {
            for (var i in t)
                a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }
        ,
        a.g = function () {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        (() => {
            var e;
            a.g.importScripts && (e = a.g.location + "");
            var t = a.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src),
                !e)) {
                var i = t.getElementsByTagName("script");
                if (i.length)
                    for (var s = i.length - 1; s > -1 && (!e || !/^http(s?):/.test(e));)
                        e = i[s--].src
            }
            if (!e)
                throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
                a.p = e
        }
        )(),
        (() => {
            "use strict";
            const e = window.React;
            let t = {
                data: ""
            }
                , i = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
                    innerHTML: " ",
                    id: "_goober"
                })).firstChild : e || t
                , s = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
                , n = /\/\*[^]*?\*\/|  +/g
                , r = /\n+/g
                , o = (e, t) => {
                    let a = ""
                        , i = ""
                        , s = "";
                    for (let n in e) {
                        let r = e[n];
                        "@" == n[0] ? "i" == n[1] ? a = n + " " + r + ";" : i += "f" == n[1] ? o(r, n) : n + "{" + o(r, "k" == n[1] ? "" : t) + "}" : "object" == typeof r ? i += o(r, t ? t.replace(/([^,])+/g, (e => n.replace(/(^:.*)|([^,])+/g, (t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)))) : n) : null != r && (n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(),
                            s += o.p ? o.p(n, r) : n + ":" + r + ";")
                    }
                    return a + (t && s ? t + "{" + s + "}" : s) + i
                }
                , l = {}
                , h = e => {
                    if ("object" == typeof e) {
                        let t = "";
                        for (let a in e)
                            t += a + h(e[a]);
                        return t
                    }
                    return e
                }
                , c = (e, t, a, i, c) => {
                    let d = h(e)
                        , u = l[d] || (l[d] = (e => {
                            let t = 0
                                , a = 11;
                            for (; t < e.length;)
                                a = 101 * a + e.charCodeAt(t++) >>> 0;
                            return "go" + a
                        }
                        )(d));
                    if (!l[u]) {
                        let t = d !== e ? e : (e => {
                            let t, a, i = [{}];
                            for (; t = s.exec(e.replace(n, ""));)
                                t[4] ? i.shift() : t[3] ? (a = t[3].replace(r, " ").trim(),
                                    i.unshift(i[0][a] = i[0][a] || {})) : i[0][t[1]] = t[2].replace(r, " ").trim();
                            return i[0]
                        }
                        )(e);
                        l[u] = o(c ? {
                            ["@keyframes " + u]: t
                        } : t, a ? "" : "." + u)
                    }
                    let f = a && l.g ? l.g : null;
                    return a && (l.g = l[u]),
                        ((e, t, a, i) => {
                            i ? t.data = t.data.replace(i, e) : -1 === t.data.indexOf(e) && (t.data = a ? e + t.data : t.data + e)
                        }
                        )(l[u], t, i, f),
                        u
                }
                , d = (e, t, a) => e.reduce(((e, i, s) => {
                    let n = t[s];
                    if (n && n.call) {
                        let e = n(a)
                            , t = e && e.props && e.props.className || /^go/.test(e) && e;
                        n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : o(e, "") : !1 === e ? "" : e
                    }
                    return e + i + (null == n ? "" : n)
                }
                ), "");
            function u(e) {
                let t = this || {}
                    , a = e.call ? e(t.p) : e;
                return c(a.unshift ? a.raw ? d(a, [].slice.call(arguments, 1), t.p) : a.reduce(((e, a) => Object.assign(e, a && a.call ? a(t.p) : a)), {}) : a, i(t.target), t.g, t.o, t.k)
            }
            u.bind({
                g: 1
            });
            let f, p, m, g = u.bind({
                k: 1
            });
            function y(e, t) {
                let a = this || {};
                return function () {
                    let i = arguments;
                    function s(n, r) {
                        let o = Object.assign({}, n)
                            , l = o.className || s.className;
                        a.p = Object.assign({
                            theme: p && p()
                        }, o),
                            a.o = / *go\d+/.test(l),
                            o.className = u.apply(a, i) + (l ? " " + l : ""),
                            t && (o.ref = r);
                        let h = e;
                        return e[0] && (h = o.as || e,
                            delete o.as),
                            m && h[0] && m(o),
                            f(h, o)
                    }
                    return t ? t(s) : s
                }
            }
            var b = (e, t) => (e => "function" == typeof e)(e) ? e(t) : e
                , w = (() => {
                    let e = 0;
                    return () => (++e).toString()
                }
                )()
                , v = (() => {
                    let e;
                    return () => {
                        if (void 0 === e && typeof window < "u") {
                            let t = matchMedia("(prefers-reduced-motion: reduce)");
                            e = !t || t.matches
                        }
                        return e
                    }
                }
                )()
                , _ = new Map
                , x = e => {
                    if (_.has(e))
                        return;
                    let t = setTimeout((() => {
                        _.delete(e),
                            E({
                                type: 4,
                                toastId: e
                            })
                    }
                    ), 1e3);
                    _.set(e, t)
                }
                , S = (e, t) => {
                    switch (t.type) {
                        case 0:
                            return {
                                ...e,
                                toasts: [t.toast, ...e.toasts].slice(0, 20)
                            };
                        case 1:
                            return t.toast.id && (e => {
                                let t = _.get(e);
                                t && clearTimeout(t)
                            }
                            )(t.toast.id),
                            {
                                ...e,
                                toasts: e.toasts.map((e => e.id === t.toast.id ? {
                                    ...e,
                                    ...t.toast
                                } : e))
                            };
                        case 2:
                            let { toast: a } = t;
                            return e.toasts.find((e => e.id === a.id)) ? S(e, {
                                type: 1,
                                toast: a
                            }) : S(e, {
                                type: 0,
                                toast: a
                            });
                        case 3:
                            let { toastId: i } = t;
                            return i ? x(i) : e.toasts.forEach((e => {
                                x(e.id)
                            }
                            )),
                            {
                                ...e,
                                toasts: e.toasts.map((e => e.id === i || void 0 === i ? {
                                    ...e,
                                    visible: !1
                                } : e))
                            };
                        case 4:
                            return void 0 === t.toastId ? {
                                ...e,
                                toasts: []
                            } : {
                                ...e,
                                toasts: e.toasts.filter((e => e.id !== t.toastId))
                            };
                        case 5:
                            return {
                                ...e,
                                pausedAt: t.time
                            };
                        case 6:
                            let s = t.time - (e.pausedAt || 0);
                            return {
                                ...e,
                                pausedAt: void 0,
                                toasts: e.toasts.map((e => ({
                                    ...e,
                                    pauseDuration: e.pauseDuration + s
                                })))
                            }
                    }
                }
                , k = []
                , T = {
                    toasts: [],
                    pausedAt: void 0
                }
                , E = e => {
                    T = S(T, e),
                        k.forEach((e => {
                            e(T)
                        }
                        ))
                }
                , j = {
                    blank: 4e3,
                    error: 4e3,
                    success: 2e3,
                    loading: 1 / 0,
                    custom: 4e3
                }
                , A = e => (t, a) => {
                    let i = ((e, t = "blank", a) => ({
                        createdAt: Date.now(),
                        visible: !0,
                        type: t,
                        ariaProps: {
                            role: "status",
                            "aria-live": "polite"
                        },
                        message: e,
                        pauseDuration: 0,
                        ...a,
                        id: (null == a ? void 0 : a.id) || w()
                    }))(t, e, a);
                    return E({
                        type: 2,
                        toast: i
                    }),
                        i.id
                }
                , H = (e, t) => A("blank")(e, t);
            H.error = A("error"),
                H.success = A("success"),
                H.loading = A("loading"),
                H.custom = A("custom"),
                H.dismiss = e => {
                    E({
                        type: 3,
                        toastId: e
                    })
                }
                ,
                H.remove = e => E({
                    type: 4,
                    toastId: e
                }),
                H.promise = (e, t, a) => {
                    let i = H.loading(t.loading, {
                        ...a,
                        ...null == a ? void 0 : a.loading
                    });
                    return e.then((e => (H.success(b(t.success, e), {
                        id: i,
                        ...a,
                        ...null == a ? void 0 : a.success
                    }),
                        e))).catch((e => {
                            H.error(b(t.error, e), {
                                id: i,
                                ...a,
                                ...null == a ? void 0 : a.error
                            })
                        }
                        )),
                        e
                }
                ;
            var O = (e, t) => {
                E({
                    type: 1,
                    toast: {
                        id: e,
                        height: t
                    }
                })
            }
                , C = () => {
                    E({
                        type: 5,
                        time: Date.now()
                    })
                }
                , N = g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`
                , I = g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`
                , R = g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`
                , F = y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`
                , L = g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
                , P = y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${L} 1s linear infinite;
`
                , q = g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`
                , M = g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`
                , D = y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`
                , z = y("div")`
  position: absolute;
`
                , U = y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`
                , B = g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`
                , G = y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${B} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`
                , $ = ({ toast: t }) => {
                    let { icon: a, type: i, iconTheme: s } = t;
                    return void 0 !== a ? "string" == typeof a ? e.createElement(G, null, a) : a : "blank" === i ? null : e.createElement(U, null, e.createElement(P, {
                        ...s
                    }), "loading" !== i && e.createElement(z, null, "error" === i ? e.createElement(F, {
                        ...s
                    }) : e.createElement(D, {
                        ...s
                    })))
                }
                , V = e => `\n0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`
                , K = e => `\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}\n`
                , Y = y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`
                , W = y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`
                , J = e.memo((({ toast: t, position: a, style: i, children: s }) => {
                    let n = t.height ? ((e, t) => {
                        let a = e.includes("top") ? 1 : -1
                            , [i, s] = v() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [V(a), K(a)];
                        return {
                            animation: t ? `${g(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${g(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
                        }
                    }
                    )(t.position || a || "top-center", t.visible) : {
                        opacity: 0
                    }
                        , r = e.createElement($, {
                            toast: t
                        })
                        , o = e.createElement(W, {
                            ...t.ariaProps
                        }, b(t.message, t));
                    return e.createElement(Y, {
                        className: t.className,
                        style: {
                            ...n,
                            ...i,
                            ...t.style
                        }
                    }, "function" == typeof s ? s({
                        icon: r,
                        message: o
                    }) : e.createElement(e.Fragment, null, r, o))
                }
                ));
            !function (e, t, a, i) {
                o.p = void 0,
                    f = e,
                    p = void 0,
                    m = void 0
            }(e.createElement);
            var Q = ({ id: t, className: a, style: i, onHeightUpdate: s, children: n }) => {
                let r = e.useCallback((e => {
                    if (e) {
                        let a = () => {
                            let a = e.getBoundingClientRect().height;
                            s(t, a)
                        }
                            ;
                        a(),
                            new MutationObserver(a).observe(e, {
                                subtree: !0,
                                childList: !0,
                                characterData: !0
                            })
                    }
                }
                ), [t, s]);
                return e.createElement("div", {
                    ref: r,
                    className: a,
                    style: i
                }, n)
            }
                , Z = u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`
                , X = ({ reverseOrder: t, position: a = "top-center", toastOptions: i, gutter: s, children: n, containerStyle: r, containerClassName: o }) => {
                    let { toasts: l, handlers: h } = (t => {
                        let { toasts: a, pausedAt: i } = ((t = {}) => {
                            let [a, i] = (0,
                                e.useState)(T);
                            (0,
                                e.useEffect)((() => (k.push(i),
                                    () => {
                                        let e = k.indexOf(i);
                                        e > -1 && k.splice(e, 1)
                                    }
                                )), [a]);
                            let s = a.toasts.map((e => {
                                var a, i;
                                return {
                                    ...t,
                                    ...t[e.type],
                                    ...e,
                                    duration: e.duration || (null == (a = t[e.type]) ? void 0 : a.duration) || (null == t ? void 0 : t.duration) || j[e.type],
                                    style: {
                                        ...t.style,
                                        ...null == (i = t[e.type]) ? void 0 : i.style,
                                        ...e.style
                                    }
                                }
                            }
                            ));
                            return {
                                ...a,
                                toasts: s
                            }
                        }
                        )(t);
                        (0,
                            e.useEffect)((() => {
                                if (i)
                                    return;
                                let e = Date.now()
                                    , t = a.map((t => {
                                        if (t.duration === 1 / 0)
                                            return;
                                        let a = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                                        if (!(a < 0))
                                            return setTimeout((() => H.dismiss(t.id)), a);
                                        t.visible && H.dismiss(t.id)
                                    }
                                    ));
                                return () => {
                                    t.forEach((e => e && clearTimeout(e)))
                                }
                            }
                            ), [a, i]);
                        let s = (0,
                            e.useCallback)((() => {
                                i && E({
                                    type: 6,
                                    time: Date.now()
                                })
                            }
                            ), [i])
                            , n = (0,
                                e.useCallback)(((e, t) => {
                                    let { reverseOrder: i = !1, gutter: s = 8, defaultPosition: n } = t || {}
                                        , r = a.filter((t => (t.position || n) === (e.position || n) && t.height))
                                        , o = r.findIndex((t => t.id === e.id))
                                        , l = r.filter(((e, t) => t < o && e.visible)).length;
                                    return r.filter((e => e.visible)).slice(...i ? [l + 1] : [0, l]).reduce(((e, t) => e + (t.height || 0) + s), 0)
                                }
                                ), [a]);
                        return {
                            toasts: a,
                            handlers: {
                                updateHeight: O,
                                startPause: C,
                                endPause: s,
                                calculateOffset: n
                            }
                        }
                    }
                    )(i);
                    return e.createElement("div", {
                        style: {
                            position: "fixed",
                            zIndex: 9999,
                            top: 16,
                            left: 16,
                            right: 16,
                            bottom: 16,
                            pointerEvents: "none",
                            ...r
                        },
                        className: o,
                        onMouseEnter: h.startPause,
                        onMouseLeave: h.endPause
                    }, l.map((i => {
                        let r = i.position || a
                            , o = ((e, t) => {
                                let a = e.includes("top")
                                    , i = a ? {
                                        top: 0
                                    } : {
                                        bottom: 0
                                    }
                                    , s = e.includes("center") ? {
                                        justifyContent: "center"
                                    } : e.includes("right") ? {
                                        justifyContent: "flex-end"
                                    } : {};
                                return {
                                    left: 0,
                                    right: 0,
                                    display: "flex",
                                    position: "absolute",
                                    transition: v() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                                    transform: `translateY(${t * (a ? 1 : -1)}px)`,
                                    ...i,
                                    ...s
                                }
                            }
                            )(r, h.calculateOffset(i, {
                                reverseOrder: t,
                                gutter: s,
                                defaultPosition: a
                            }));
                        return e.createElement(Q, {
                            id: i.id,
                            key: i.id,
                            onHeightUpdate: h.updateHeight,
                            className: i.visible ? Z : "",
                            style: o
                        }, "custom" === i.type ? b(i.message, i) : n ? n(i) : e.createElement(J, {
                            toast: i,
                            position: r
                        }))
                    }
                    )))
                }
                , ee = H;
            const te = () => (0,
                e.createElement)(X, {
                    toastOptions: {
                        className: "emailpop",
                        duration: 3e3,
                        style: {
                            color: "white",
                            marginTop: "50px"
                        },
                        success: {
                            style: {
                                background: "rgba(16, 76, 179,0.5)"
                            }
                        },
                        error: {
                            style: {
                                background: "#FF5555"
                            }
                        }
                    }
                })
                , ae = ({ text: t, onClick: a, step: i }) => (0,
                    e.createElement)("button", {
                        onClick: a,
                        className: `${2 == i ? "stylerightnow" : ""} ${4 == i ? "futurestyle" : ""} text-lg font-semibold drop-shadow-md ${!i || 1 != i && 4 != i ? "bg-clientpurple" : "bg-clientorange"} py-2 px-10 flex flex-row justify-center items-center text-white rounded-full border-none`
                    }, t)
                , ie = a.p + "images/VectorLeft.142ee908.png"
                , se = a.p + "images/VectorRight.1affa0f5.png"
                , ne = a.p + "images/OrangeVectorLeft.436a68c4.png"
                , re = a.p + "images/OrangeVectorRight.eaa84f25.png"
                , dt = a.p + "images/Sister.0d319ab5.webp"
                , oe = a.p + "images/Hermit.2581d49e.webp"
                , le = a.p + "images/Ruler.83043b53.webp"
                , he = a.p + "images/Artist.160f1a42.webp"
                , ce = a.p + "images/Judge.530be027.webp"
                , de = a.p + "images/Prosecutor.92d87c4d.webp"
                , ue = a.p + "images/Defender.f38b4966.webp"
                , fe = a.p + "images/Fashionista.a08df2cc.webp"
                , pe = a.p + "images/Poet.b995f2ad.webp"
                , me = a.p + "images/Exorcist.51c46c08.webp"
                , ge = a.p + "images/PridefulStepdaughter.47debb9d.webp"
                , ye = a.p + "images/Detective.546ccccc.webp"
                , be = a.p + "images/Mystic.745cf575.webp"
                , we = a.p + "images/Priestess.2c83dac4.webp"
                , ve = a.p + "images/Inventor.d7238c58.webp"
                , _e = a.p + "images/FemmeFatale.6cd76c2e.webp"
                , xe = a.p + "images/Creator.5150e2c2.webp"
                , Se = a.p + "images/Destroyer.d744cd38.webp"
                , ke = a.p + "images/Liberator.fe346ed8.webp"
                , Te = a.p + "images/Lover.a0677822.webp"
                , Ee = a.p + "images/Warrior.82a2a018.webp"
                , je = a.p + "images/Robber.1223ff32.webp"
                , Ae = a.p + "images/Alchemist.9bdf174d.webp"
                , He = a.p + "images/Hedonist.364cb6f0.webp"
                , Oe = a.p + "images/Seeker.c122d3ad.webp"
                , Ce = a.p + "images/ShiftChanger.a072e3ce.webp"
                , Ne = a.p + "images/Hero.59d10c05.webp"
                , Ie = a.p + "images/Guide.122b2d5f.webp"
                , Re = a.p + "images/Athlete.417bcb7f.webp"
                , Fe = a.p + "images/Vamp.fb675394.webp"
                , Le = a.p + "images/Witch.704e5b61.webp"
                , Pe = a.p + "images/Healer.8e52df9c.webp"
                , qe = a.p + "images/Mother.9cf5bdad.webp"
                , Me = a.p + "images/Companion.f906dc8f.webp"
                , De = a.p + "images/Cinderella.644b2f97.webp"
                , ze = a.p + "images/GoodFairy.2655c0e3.webp"
                , Ue = a.p + "images/Beggar.53c861d8.webp"
                , Be = a.p + "images/Mentor.bf8e336d.webp"
                , Ge = a.p + "images/Slave.5734d454.webp"
                , $e = a.p + "images/Nerd.6414dad6.webp"
                , Ve = a.p + "images/Martyr.edb02e48.webp"
                , Ke = a.p + "images/Storyteller.08d182ad.webp"
                , Ye = a.p + "images/PennyPincher.2265d354.webp"
                , We = a.p + "images/GoodSamaritan.4de4ece5.webp"
                , Je = a.p + "images/Networker.bf262d46.webp"
                , Qe = a.p + "images/Scribe.f042f6ad.webp"
                , Ze = a.p + "images/Teacher.c84ccfc4.webp"
                , Xe = a.p + "images/Airhead.f01afd03.webp"
                , et = a.p + "images/Student.36866668.webp"
                , tt = a.p + "images/BeautyInATower.2171f2b9.webp"
                , at = a.p + "images/Virgin.d04e7841.webp"
                , it = a.p + "images/FortuneHunter.9a4356e4.webp"
                , st = a.p + "images/Victim.50de2f65.webp"
                , nt = a.p + "images/Hustler.6e7b2e26.webp"
                , rt = a.p + "images/Amuser.6ae7059e.webp"
                , ot = a.p + "images/Addict.f14dcb32.webp"
                , lt = a.p + "images/Dilettante.ad20675b.webp"
                , ht = a.p + "images/Messiah.e7788726.webp"
                , ct = a.p + "images/Visionary.ac7bf0be.webp"
                , ut = [{
                    name: "Сестра",//1
                    description: "Вона прагне бути красивою і бажаною. Її стиль — відверто сексуальний, сповнений виклику та запрошення до уваги.",
                    lightside: "Вона постійно порівнює себе з іншими жінками, через що нескінченно вдосконалює свій образ. Такі порівняння водночас викликають у неї відчуття і переваги, і меншовартості. Вона рідко приймає чоловіка, заради якого треба було б докладати зусиль — частіше вона стає для нього сестрою, а не справжньою партнеркою. Її прагнення до ідеального образу не для чоловічої уваги, а для досягнення свого внутрішнього ідеалу. Емоційно вона тримає дистанцію, що ускладнює стосунки. Її стиль — яскравий і провокативний: короткі спідниці, глибоке декольте, обтягуючі штани, яскраві кольори та високі підбори.",
                    shadowside: "Попри відвертий стиль, у глибині душі вона має негативне ставлення до свого тіла. Вона може бути забобонною або навіть богобоязливою, водночас виснажуючи себе дієтами чи витрачаючи останні гроші на «покращення» форм. Проте це не приносить їй відчуття захищеності й не покращує стосунків із чоловіками. Її образ може виглядати надто вульгарно й штучно.",
                    image: dt
                }, {
                    name: "Відлюдниця",//2
                    description: "Шляхетна й самотня, вона постійно веде внутрішню боротьбу, намагаючись здолати тіні минулого. Її приваблює естетика зів’янення, у ній поєднані втрата і професійний успіх. Вона ховається від світу у власному внутрішньому замку, загортаючись у свій одяг, ніби у захисну оболонку. Її стиль існує не для того, щоб привертати увагу, а щоб сховати все, що болить.",
                    lightside: "Відлюдниця обирає тишу і відокремлення, щоб глибше пізнати себе. Її приваблюють камені — носії древньої енергії та сили. Вона шукає сенс у знаннях, які вимагають глибокого занурення. Її дар — поєднувати пережите з мудрістю, знаходити в цьому внутрішню ясність і гармонію. Вона присвячує себе творчості, служить тому, що справді відгукується в душі. Її стиль — оригінальний і закритий, ніби кокон. Вона вибирає чорний колір, асиметрію, мінімум аксесуарів і каміння.",
                    shadowside: "Вона тікає від людей, керована страхами. Відмовляється від підтримки, замикається в минулому, у спогадах про колишні перемоги чи образах на втрачений успіх. Вона боїться старіння і самотності. Її одяг стає безформним і неохайним — як віддзеркалення внутрішнього хаосу, з яким вона вже не намагається боротися.",
                    image: oe
                }, {
                    name: "Правителька",//3
                    description: "Її холодний аристократизм поєднується з вишуканою елегантністю. Вона має тонкий, вишуканий смак. Це служить прикладом для всіх наслідувачів, що це бажаний ідеал, до якого варто прагнути. Її стиль бездоганний і надзвичайно елегантний. Її холодний аристократизм поєднується з вишуканою елегантністю. Вона має тонкий смак і задає приклад для наслідування. Її стиль бездоганний і недосяжно елегантний.",
                    lightside: "Вона випромінює впевненість, життєву силу і справжню королівську жіночність. Створює простір, де кожен може розвиватися під її захистом. Вона вміє підтримувати порядок у сім’ї, спільноті чи організації, зберігаючи баланс між контролем і турботою. Її образ — це досконала цілісність: стримана елегантність, дорогі натуральні тканини, гармонійні кольори та лаконічний крій. Вона знає силу свого іміджу і використовує стиль як інструмент впливу. В її рухах і манерах завжди відчувається вроджена гідність і велич.",
                    shadowside: "Вона схильна до тиранії, нав’язуючи жорсткі правила іншим. Вона вимагає досконалості у всьому, змушуючи оточення підлаштовуватись під її стандарти. Її влада стає обмежувальною. Одяг стає не проявом стилю, а символом контролю, замкненості й відстороненості. Вона живе в ілюзії абсолютної правоти.",
                    image: le
                }, {
                    name: "Художниця",//4
                    description: "Стиль поєднує елегантність та справді жіночу сексуальність. Її силует виразний. Вона обирає яскраві кольори та різноманітні акценти.",
                    lightside: "Мистецтво надихає її бачити красу в повсякденному житті та дарувати цей погляд іншим. Вона вірить, що прийняття своєї долі відкриває шлях до внутрішньої сили та зростання. Її секрет — вміння керувати енергією душі та натхнення. Вона застерігає від пасивності, адже справжній успіх вимагає постійного руху. Художниця виражає це не лише в творчості, а й у стилі — елегантному, живому, що підкреслює фігуру та жіночність. Якщо ви хочете потрапити на вершину, ви повинні спостерігати за тим, що з вами відбувається навколо вас.",
                    shadowside: "Вона женеться за славою, втрачаючи себе в цій гонитві. Її талант стає інструментом для поганої гри з іншими. Вона може намагатися завоювати співчуття, вдаючи з себе голодну художницю. Її стиль стає вульгарним і штучним. Вона будує образ для зовнішнього ефекту, приховуючи справжню невпевненість.",
                    image: he
                }, {
                    name: "Суддя",//5
                    description: "Одноманітність та андрогінність складають її стиль разом із використанням стриманих, приглушених кольорів.",
                    lightside: "Витончена та чесна, вона характеризується чіткістю, об'єктивним знайомством, свідомістю, досить специфічним мисленням та емоційною непідкупністю. Закон керує нею, тому вона ігнорує опозицію, особисті схильності чи людські виправдання. Вона намагається збалансувати справедливість із емпатією. Її правління випливає з праведного розподілу керівних повноважень. Ця жінка часто є начальницею, керує компанією. Суворість, офіціоз, практичні костюми та мінімум аксесуарів – ось що описує її стиль.",
                    shadowside: "Безсердечно вимагає дотримання правил, навіть коли вони шкодять тому, хто їх виконує. Вона зловживає своєю владою. Її одяг робить її схожою на лицаря в обладунках. Стиль нудний і надмірно суворий.",
                    image: ce
                }, {
                    name: "Прокурор",//6
                    description: "Перфекціонізм характеризує її стиль та одяг. Є певна строгість з особливою увагою до деталей. Вона любить світліші півтони. Прикраси носить мінімально. Вона втілює жінку, яка має силу або піднести, або розбити на шматки.",
                    lightside: "Вона шукає найглибші сенси, «над» завдання та справжнє покликання. Вона постійно схильна дотримуватися моралі та порядності інших, особливо чоловіків, щоб розкрити їхні темні махінації. Вона вимоглива як до себе, так і до інших. Її прагнення — втілювати праведність у життя. До її рис належать суворість, ідеальна чистота одягу без жодної зморшки, а також бездоганні тканини та вишивка.",
                    shadowside: "Вона використовує свою владу, щоб посилити вплив на інших. Вона прагне переконати всіх у власній непогрішності. Є ризик, що вона вдатися до примусу, аби змусити підкорятися. Для неї існує лише одна правильна думка — її власна, усі інші неправильні. Вона нетерпима до будь-яких помилок у стилі чи «надто вільного» іміджу. Її і чужий одяг стають об’єктом нездорової уваги до найменших деталей.",
                    image: de
                }, {
                    name: "Захисниця",//7
                    description: "Одяг елегантний і жіночний, але строгий. Жодних зайвих деталей чи візерунків. Її вбрання говорить про стриманість і надійність, встановлюючи чіткі межі. Воно випромінює серйозність і дистанцію, неначе мовчазно промовляє: «Я тут не для розваг, я тут, щоб захищати».",
                    lightside: "Вона дуже розумна, глибока і добре освічена. Виховання зробило її порядною та щедрою жінкою, яка завжди готова підтримати, порадити й захистити. Ви легко прив’яжетеся до неї і будете почуватиметеся у безпеці рядом з нею. Її щире співчуття надихає. Вона стоїть на захисті інших жінок від чоловічих маніпуляцій. Її стиль — класика: міді й максі довжина, мінімалізм, охайність, чисті кольори та майже відсутність аксесуарів.",
                    shadowside: "Її турбота стає нав’язливою, позбавляючи інших простору для самостійності. Вона маніпулює страхами, щоб залишатися незамінною. Її співчуття стає маскою для утримання влади. Її одяг стає надто строгим, закритим, навіть пуританським, наче демонструючи моральну перевагу та дистанцію від усього “легковажного”.",
                    image: ue
                }, {
                    name: "Модниця",//8
                    description: "Поєднання сміливості та ексцентричності характеризує кокетливу, скромну та зухвалу жінку. Вона одягається за останньою модою.",
                    lightside: "Це добре вихована та культурна жінка. Її інтерес до мистецтва забезпечує їй величезний творчий потенціал. Їй потрібно говорити про свої почуття, виражати свою інтуїцію та втілювати на практиці музичне чи художнє самовираження, що лежить в її підсвідомості. Цінує довіру. У її одязі можуть бути романтичні елементи. Образ добре продуманий та стильний. Вона цінує дизайнерський одяг та добре з ним знайома. Вона чудово стежить за останніми тенденціями та модними показами.",
                    shadowside: "Вона претендує на звання «всемогутньої та єдиної справжньої гуру моди». Вона просуває незрозумілі цінності, щоб піднести себе і свої знання до недосяжних висот. Щоб принизити своїх «конкурентів», вона не гребує плітками і розголошенням особистої інформації. Проте з часом її ж інтриги обертаються проти неї самої, руйнуючи її репутацію і залишаючи її на самоті.",
                    image: fe
                }, {
                    name: "Поетеса",//9
                    description: "Вона має витончену натуру, що також відображає її одяг. Свобода, креативність і природність — ось що вона цінує, коли йдеться про стиль. Її улюблені — довгі драпіровані тканини з воланами та м’якими хвилями. Її образ часто нагадує легкий подих вітру — живий, м’який, невимушений. Вона цінує речі з історією, що несуть у собі відлуння часу — вінтажні прикраси, ручну вишивку чи плетиво.",
                    lightside: "Мир і спокій у душі — її суть. Вона має розум, гарне виховання та освіту. Вона відкрита для творчого натхнення. Її почуття глибокі та чисті. Під час взаємодії з іншими вона випромінює любов і радість. Вона здатна вирішувати складні ситуації завдяки своїй мудрості та діям.",
                    shadowside: "Вона може перетворити ліричний дар на щось негативне або навіть саморуйнівне. Її мінливі, тривожні думки можуть проявлятися як у її вчинках, так і в зовнішньому вигляді. Її стиль ризикує перетворитися на карикатуру самої себе — занадто театральний або неохайний, коли вона втрачає внутрішній баланс.",
                    image: pe
                }, {
                    name: "Екзорцистка",//10
                    description: "Стиль та образ незвичайні, від них віє ароматом таємничості. Погляд глибокий та пізнавальний. Кольори насичені. Силует видовжений, одягнений у довгі, хвилясті тканини. Вона носить прикраси з каміння.",
                    lightside: "Вона має фізичні та духовні здібності. Потенціал її свідомості великий, але лише тоді, коли свідомість і підсвідомість гармонійні. Впевненість і сила волі, що народжуються з цієї гармонії, можуть зрушити гори. Вона опанувала свої знання та стала здатною відповідати за власні дії. Рішучість і свідоме управління власною долею приходять до усвідомлення власних життєвих завдань. Вона звільняє себе та інших від руйнівних імпульсів. Її одяг яскравий, привертає увагу. Вона носить багаті текстури з глибокими тонами, змішаними з нотками містики.",
                    shadowside: "Вона боїться зустрічі з власними демонами. Це може бути поєднання пристрастей, що ведуть до щастя, і тих, що ведуть до нещасть. Її одяг характеризується екстравагантністю – шокуючою або безкінечною суворістю.",
                    image: me
                }, {
                    name: "Горда падчерка",//11
                    description: "Амбіції та потреба у високому статусі – її стиль одягу саме про це свідчить. Дорогі матеріали, кольори, що кричать про увагу, та хутро – її улюблені речі.",
                    lightside: "Вона відчуває справжнє щастя та гордість завдяки своїй безтурботній натурі. Перебування в щасливій компанії — це її уявлення про веселощі. Вона відчуває справжнє задоволення від того, що. .. частина вищого суспільства або, як то кажуть, «гарне життя не можна заборонити». Задоволення – мета її світогляду. Все, чого вона коли-небудь очікувала, сталося. Як друг, вона може подолати внутрішні страхи, які стоять на заваді конкретним діям. Вона цінує увагу. Вона розкішно одягається, обираючи виключно відомі бренди та високоякісні тканини. Аксесуари завжди чудово поєднуються з одягом. Вона яскрава, смілива та помітна.",
                    shadowside: "Страхи ховаються глибоко під її зовнішнім настроєм «Я жива і щаслива». Вона зверхня і зациклена на брендах. За гучною демонстрацією успіху ховається відчуття нелюбові, як у падчерки, яка постійно намагається заслужити прийняття.",
                    image: ge
                }, {
                    name: "Детективка",//12
                    description: "Пристрасть — розкривати справжнє обличчя людей і висвітлювати приховане. Вона грає за правилами. Її одяг чистий, охайний, з якісних матеріалів і ахроматичних кольорів. Образ майже ідеальний. Матеріали та їхній крій високої якості. Кольори ахроматичні.",
                    lightside: "Швидка на поворотах. Її пристрасть — розривати павутину і розв’язувати вузли. Вона здатна позбутися поглядів і звичок, які втратили сенс. Перебільшує недовіру до чоловіків, зосереджена на своєму шляху. Спостереження й інтуїція дають їй силу. Вона прагне розкрити правду і допомогти іншим обрати свій шлях. Розриває ілюзії про ідеальних партнерів. Її стиль — елегантність і суворість. Вона любить костюми без принтів з дорогих натуральних тканин. Її образ ідеально гладкий, зачіска і манікюр охайні. Аксесуарів мало, кольори однотонні.",
                    shadowside: "Надмірно обережна та надмірно підозріла – саме тому вона втрачає все, що очікувала отримати. Вуайеризм – це її особливість. Інформацію вона фальсифікує як завгодно. Вона може мати схильність розлучати пари. Її зовнішність надмірно сувора та підозріла. Її контроль і прагнення знати все про всіх зрештою відштовхують від неї навіть найближчих.",
                    image: ye
                }, {
                    name: "Містик",//13
                    description: "Мудрість втілюється в її образі. Її рухи плавні, м’які та врівноважені. Стиль — витончено жіночний, з перевагою високоякісних тканин: шифону, шовку, атласу, оксамиту.",
                    lightside: "Вона шукає глибшого сенсу буття і прагне пережити єдність із початком усього живого. Її шлях — це довіра до інтуїції, відкритість до енергій космосу, снів і архетипів. Вона захоплюється нумерологією, міфами, символами і цілительськими практиками. Її самовираження — це музика, поезія, творчість, що торкається душі. Її стиль — дорогий і легкий, наповнений романтичними деталями. Вона легко поєднує спідниці й штани, обираючи комфорт і свободу руху.",
                    shadowside: "Вона впадає в самозахоплення, вважаючи себе єдиною, хто має доступ до вищих знань. Її одяг виглядає недоречним і відірваним від реальності. Вона грає роль таємничої, щоб уникати простих рішень. Її зверхність і демонстративна “просвітленість” відштовхують людей і залишають її самотньою.",
                    image: be
                }, {
                    name: "Священиця",//14
                    description: "Вона втілює доброту і завжди пропонує допомогу та духовну підтримку. Її стиль скромний і стриманий — темні сукні, однотонні тканини, прості деталі. Вона не прагне виділитися, адже для неї важливі не зовнішні атрибути, а тиша, глибина і справжня присутність поруч. Її поява заспокоює і створює відчуття безпеки.",
                    lightside: "Вона приходить у моменти болю, втрат і розчарувань, коли здається, що ви залишилися наодинці. Її присутність — це підтримка, співчуття і спокій. Вона допомагає відмовитися від наївних ідеалів і перейти до зрілої життєвої мудрості. Вказує на ваші помилки без осуду, допомагаючи прийняти відповідальність і звільнитися від тягаря. Вона проводить вас крізь духовний досвід, служачи каналом вищої енергії. Її одяг — простий, темний, без зайвих прикрас, хіба що маленький хрестик чи скромний шарф. Різні шарфи або хустки можуть служити її аксесуарами.",
                    shadowside: "Вона стає суворою і нетерпимою, вимагає дотримання правил і ритуалів. Вона моралізує і засуджує тих, хто не відповідає її стандартам. Її духовність стає маскою, за якою ховаються гнів і зверхність. Вона вказує на чужі помилки, ідеалізуючи власну “правильність”. Вона злиться та засуджує. У  її шафі мало одягу, і всі вони однакові та нудні. Вона буде носити їх, поки не протріть їх дірками.",
                    image: we
                }, {
                    name: "Архітекторка",//15
                    description: "Це жінка, яка уважно ставиться до деталей і віддає перевагу складному геометричному крою. Її стиль нагадує скульптуру чи архітектуру — чіткий, продуманий, структурований. Вона мислить формами, лініями і конструкціями, навіть у повсякденних речах шукаючи ідеальну логіку і гармонію. Її зовнішній вигляд — це відображення розуму, що перетворює творчість на точний розрахунок.",
                    lightside: "Вона орієнтована на порядок, тверезий розум, дисципліну, відповідальність і прагматизм. Її підхід завжди специфічний і продуманий. Вона вперта, рішуча й готова відповідати за власні вчинки. Вона знає: є сили, які неможливо здолати ні доброю волею, ні правильним навчанням. Тому часом потрібна сміливість узяти в руки меч. Вона стає прикладом для інших, показуючи, що не можна зраджувати власну совість і що гідне життя іноді вимагає боротьби. Її сила — у здатності створювати практичні втілення творчої енергії. Використання геометричного крою чи візерунка тканини ретельно підкреслює її фігуру.",
                    shadowside: "Її характеризують впертість, млявість і прагнення вдосконалювати все до безкінечності. Їй властива жага влади та деспотичність. Вона приймає рішення, спираючись лише на механіку, ігноруючи емоційні наслідки. Надмір геометрії та яскравих візерунків у її стилі може повністю сховати справжню особистість. Як правило, деталі перевантажують її образ.",
                    image: ve
                }, {
                    name: "Фатальна Жінка",//16
                    description: "Це жінка, від якої чоловіки не можуть відвести погляду. Її поява викликає у жінок дві протилежні реакції: захоплення, приховане бажання бути такою ж — або ж відкриту ненависть і осуд. Їй не потрібно говорити — за неї говорить її образ і тіло. Її сексуальність очевидна завдяки переважно чорному та червоному одягу. Її губи — яскраво-червоні.",
                    lightside: "Вона втілює стан душі, який у легендах називають “холодним серцем”. Це символ її впертості та здатності вистояти у будь-якій ситуації, від якої вона не очікує нічого доброго. Водночас вона переконує себе, що справжньої загрози не існує, окрім спогадів про старі рани. Вона навряд чи визнає свої помилки — у її очах завжди винні інші. Її еротична енергія обпалює і підкорює серця чоловіків. Її тіло привабливе, а силует — витончений, сповнений чуттєвості. Вона радше обирає сукні, ніж штани. Високі підбори для неї важливіші за комфорт.",
                    shadowside: "Її чуттєвість стає надмірною та хибною. Вона здатна повністю блокувати свої почуття і ставати жорсткою, егоїстичною та злою. Це жінка, яка “проковтне” одного чоловіка на сніданок, а іншого — на вечерю. Її еротизм стає показним і викликаючим.",
                    image: _e
                }, {
                    name: "Творчиня",//17
                    description: "Довірлива й стильна, ця жінка випромінює недосяжну сексуальність. Вона обирає стримані лаконічні кольори, розбавлені одним-двома акцентами. Вона полюбляє чорне. Модні тенденції її не цікавлять — вона створює їх сама.",
                    lightside: "Вона переконана, що майбутнє — в її руках. Її пристрасть — пробувати нове і створювати. Вона здатна бути водночас і вчителькою, і шукачкою. Що більше вона ділиться своїм творчим доробком, то більше розкривається сама, здобуваючи популярність і натхнення для нових ідей. Вона тримається впевнено, а її рухи зберігають бездоганний стиль. Її усмішка з’являється лише тоді, коли справді є привід. Одяг, який вона обирає, підкреслює фігуру навіть тоді, коли це оверсайз. Вона вміло поєднує речі і завжди носить якісне взуття, часто — на підборах. Стиль доповнюють сумка, аксесуари та окуляри.",
                    shadowside: "Їй завжди бракує часу, бо вона невпинно прагне рухатися вперед. Її переслідує нав’язлива потреба поспішати, залишаючи без завершення розпочате, адже ідей у неї завжди більше, ніж завершених справ. Вона надмірно зациклюється на підборі образів і втрачає терпіння, так і не завершивши власний стиль. Є ризик, що вона перетворюється на шопоголічку.",
                    image: xe
                }, {
                    name: "Руйнівниця",//18
                    description: "Ця авангардна жінка — екстравагантна і не схожа на інших. Її характер визначає вибір одягу. Вона висміює масову моду і з уламків її руїн створює власний стиль.",
                    lightside: "Жар її душі проявляється у спразі до життя, пристрасті й ентузіазмі. Водночас це часто виливається в нетерплячість, імпульсивність і схильність усе руйнувати. Вона створює нове з уламків зруйнованих авторитетів. Її внутрішня енергія здатна струсити цілі пласти життя, розтопити кригу застарілих ритуалів, звичаїв і вірувань, вдихаючи свіже повітря у все застигле. Вона звільняє того, хто носить у собі силу руйнування, щоб на місці старого проріс новий шлях. Вона протестує проти моди для мас — це не для неї. Її стиль має бути індивідуальним, різноманітним, концептуальним, наповненим бунтарським духом і самоіронією. Те, що здається несумісним, раптом складається в єдиний цілісний образ.",
                    shadowside: "Вона хоче все й одразу, якнайшвидше. Якщо не отримує бажаного негайно, дратується, заводиться і стає надмірно агресивною. У ній можуть прокинутися руйнівні сили, які штовхають її ламати чужі мрії й потенціал. Вона бореться за ідеали, але не думає про їхню практичну цінність. Її стиль перетворюється на суцільний кіч.",
                    image: Se
                }, {
                    name: "Визволителька",//19
                    description: "Це надзвичайно активна жінка, цілковито занурена у свою місію і завжди готова до ризикованих кроків. Її жіночна елегантність сміливо поєднується з чоловічими елементами в одязі — це її візитна картка. Її стиль і макіяж бездоганні, а аксесуари — вишукані та дорогі.",
                    lightside: "Вона уособлює безмежну впевненість у собі, любить життя та всі його радощі — власність, владу, розмах. Її талант — організаторський, вона прагне лідерства і здатна вести за собою. Вона звільняє себе та інших від застарілих уявлень, діючи з енергією та натхненням. Часто ця жінка, вирісши в обмежених умовах, досягає успіху завдяки розуму й наполегливості, коли з’являються сприятливі можливості. Вона полюбляє костюми з піджаком, а її образ завжди елегантний, практичний і жіночний.",
                    shadowside: "Хоча вона вимагає свободи, сама легко стає тиранкою. Вона ігнорує межі й правила. Її характеризують нарцисизм, самозахоплення, амбіційність і культ марнославства. Часто вона не здатна впоратися з хаосом і не вміє організовувати час. Вона ставить нереальні строки для своїх планів, які так і залишаються лише намірами. Її стиль перетворюється на консервативний, надто нудний і строгий.",
                    image: ke
                }, {
                    name: "Коханка",//20
                    description: "Її стиль виражає сексуальність і підкреслює все, що потребує акценту. Вона — спокусниця. Вона носить туфлі на високих підборах і поєднує червоний і чорний кольори в дорогих матеріалах, як-от мереживо та оксамит. Чоловіки завжди звертають увагу на таку жінку.",
                    lightside: "Вона має величезну пристрасть, любов і відданість. Її глибокі почуття постійно натикаються на бар’єр, який вона не здатна подолати. Вона схильна приховувати свої стосунки від оточуючих. Ці стосунки нагадують вулкан, який час від часу вивергає почуття і затихає до наступного вибуху. Справжня радість і щастя відкриваються лише тоді, коли вона відмовляється від претензій і очікувань. Тільки тоді з’являється шанс зробити вибір серцем — бути з кимось без додаткових вимог. Вона — спокусниця, яка завжди ловить на собі погляди. Її одяг підкреслює фігуру, за якою вона ретельно стежить. Вона завжди з макіяжем і на підборах.",
                    shadowside: "Вона витрачає всю енергію на боротьбу, яка не має сенсу. Її пристрасть нав’язлива і ранить інших. Вірність обертається саморуйнуванням. Вона часто захоплюється одруженими чоловіками. Її одяг і стиль спрямовані на те, щоб приваблювати чоловіків, іноді переходячи межу доречності.",
                    image: Te
                }, {
                    name: "Воїтелька",//21
                    description: "Її рухає чітка мета, сила, дисципліна та залізна воля. Вона почувається впевненою в брюках, залишаючи сукні та спідниці для особливих випадків, надаючи перевагу мілітаристському стилю. Її приваблюють практичність і комфорт.",
                    lightside: "Вона — суцільний вихор енергії, сповнений творчих і фізичних сил. Вона народжує ідеї, запускає проєкти, не боїться ризикувати. Її надихають виклики, їй властиві ентузіазм і життєва яскравість. Героїзм, мужність, стоїцизм і готовність до самопожертви постійно змагаються в ній з особистими амбіціями. Її образ побудований на чітких лініях і строгих формах, у яких відчувається сила. Вбрання лаконічне, з приглушеними, темними, маскувальними кольорами, аксесуарів — мінімум.",
                    shadowside: "Вона готова знехтувати моральними принципами заради перемоги, не помічаючи болю інших. Її терпіння виснажене, вона вибухає гнівом і пристрастю. Ризикує вигоріти, захлинаючись у вирі справ, проєктів і ідей. Їй необхідно навчитися зупинятися й концентруватися. Її стиль стає надто жорстким і чоловічим.",
                    image: Ee
                }, {
                    name: "Розбійниця",//22
                    description: "Вона звикла покладатися лише на себе і принципово не просить допомоги в чоловіків. Її виклик світу — це відкрите протиставлення себе іншим. Вона обирає одяг темних відтінків, шкіру та джинс. У її стилі — тату і явна сексуальність.",
                    lightside: "Вона навчилася жити самостійно. Її відмова приймати допомогу від чоловіків категорична — вона визнає їх лише як друзів. Її виклик змушує інших відчути власні страхи, пов’язані з вибором і змінами, яких вимагає справжня свобода. Вона готова йти до кінця, долаючи будь-які обставини. Проте, як і в казці про Герду з «Снігової королеви», за цією бронею маленької розбійниці ховається чутливе серце. Її одяг, макіяж і зачіска завжди викликають увагу. Вона змішує стилі й обожнює шокувати оточення.",
                    shadowside: "Нею часто керує похмурий настрій. Вона некерована, примхлива й уперта. Їй здається, що вона пропустила кілька важливих етапів свого розвитку й опинилася в класі, де все незрозуміло. Нові виклики тиснуть на неї, як камінь на шию. Вона схильна до саморуйнування, пригнічуючи інших. Її стиль — це відкрите протистояння. Увесь її вигляд кричить: «Нападай першою!».",
                    image: je
                }, {
                    name: "Алхімічка",//23
                    description: "Її стиль — бохо-шик із натуральними кольорами та матеріалами. Він багатошаровий і багатогранний, створює враження природності й легкості. Відтінки світлі, натуральні. Вона частково безтурботна, ніби недороблена, проте в цьому її індивідуальність і творчість. Її прикраси — східні або народні.",
                    lightside: "Її інтуїція і сприйняття часто залишаються незбагненними для інших, однак вона має глибоку впевненість у своїх знаннях. Вона володіє ключем до прихованої істини. Терпляча, чуйна, добра й прощаюча, вона спрямовує свої підсвідомі сили на благо людей — допомогу, духовне зцілення, передбачення. Її творчість і майстерність дозволяють опановувати різні інструменти, вона постійно навчається. Її образ випромінює гармонію і природну жіночність. Легкі хвилясті тканини поєднуються з комфортним шкіряним взуттям. Її одяг прикрашений фольклорними мотивами, бахромою та декоративними елементами, що створюють особливий настрій.",
                    shadowside: "Вона використовує свої духовні знання і силу, щоб зваблювати й затягувати в пастку. Їй важко зупинитися — постійно потрібно діяти, створюючи ілюзію зайнятості. Її стиль перенасичений деталями, де всього занадто багато, що робить її образ штучним і позбавленим гармонії.",
                    image: Ae
                }, {
                    name: "Гедоністка",//24
                    description: "Смілива, відкрита й упевнена в собі — такою постає ця жінка. Її зовнішність випромінює впевненість у собі та в житті. Вона відверто демонструє своє тіло. Дорогий одяг і коштовності — її улюблені речі. Енергійна й життєрадісна, вона не зважає на думку оточення. Вона знає собі ціну.",
                    lightside: "Вона надихає власним прикладом — як розірвати виснажливі стосунки, залишити ненависну роботу або голосно сказати «ні», шукаючи особистої свободи. Її творча енергія спонукає радіти життю й наповнювати його змістом. Вона святкує свою внутрішню красу, не соромиться свого тіла і підкреслює його виграшними силуетами. Їй до вподоби золото і коштовне каміння.",
                    shadowside: "Вона нетерпляча, завжди прагне швидких рішень. Гонитва за задоволеннями штовхає її до крайнощів. Вона переконує себе, що будь-які зусилля змінити ситуацію марні, і тому кидається в миттєві насолоди, навіть ціною власного здоров’я. Вона дозволяє собі все — за рахунок інших. Готова заплатити будь-яку ціну за можливість виглядати привабливо. Її стиль надмірно підкреслює тіло і межує з вульгарністю. Їй бракує критичного погляду на себе.",
                    image: He
                }, {
                    name: "Шукачка",//25
                    description: "Її одяг різноманітний і містить елементи, що нагадують фольклор або Далекий Схід. Вона носить масивні прикраси, яскраві шаровари, розписану хною шкіру. Інколи доповнює образ бінді на лобі.",
                    lightside: "Вона зробила важливий крок уперед, можливо, до омріяної незалежності. Вона вийшла за межі звичного й рушила новим шляхом. Її прагнення — свобода, пошук втраченого раю чи самореалізація. Її супроводжують піднесений настрій і зростаюча впевненість у собі, попри нестачу досвіду. Вона прагне мудрості й справедливості. Мріє стати духовною наставницею. В її стилі переважає природність і легкість, вона доповнює вбрання шарфами, натуральними аксесуарами й зручними накидками.",
                    shadowside: "Вона часто не доводить розпочате до кінця. Її гнів спрямований на тих, хто не визнає її як «просвітлену наставницю». Вона ще має подолати внутрішній розрив між почуттями й розумом, волею і бажанням, мріями й реальністю. Їй важко переконати себе, що пошук вартий продовження. Її одяг виглядає надто розслабленим і хаотично строкатим.",
                    image: Oe
                }, {
                    name: "Перевтілювачка",//26
                    description: "Вона віддає перевагу довгому, вільному одягу, оригінальним головним уборам на кшталт тюрбанів. У її стилі переважають пісочні, коричневі, золотисті й теплі відтінки. Східна екзотика, кілька прикрас і каміння доповнюють її образ.",
                    lightside: "Вона має унікальну здатність переходити між рівнями свідомості й допомагати іншим долати перші внутрішні бар’єри. Їй легко бачити потенціал і можливості в усьому. Вона допомагає змінювати зовнішність, образ або навіть внутрішній світ жінки. Веде від невпевненості до сили й самостійності. Її погляд — пронизливий і глибокий, йому хочеться довіряти. В її стилі — натуральні, багаті на фактуру матеріали, мінімум аксесуарів, тюрбан і довгий, вільний одяг.",
                    shadowside: "Хоч вона вміє змінювати себе, їй бракує терпіння, коли треба допомогти іншим. Вона тисне на оточення, нав’язуючи свою правду, закликаючи відмовитися від усього і йти лише за нею. Вона може силоміць просувати свій спосіб життя, ігноруючи чужі аргументи. Шукаючи досконалості, втрачає природність у стилі. Її погляд пронизливий і надто нав’язливий.",
                    image: Ce
                }, {
                    name: "Героїня",//27
                    description: "Сміливість, впевненість і духовна сила поєднуються в ній із загадковістю й романтизмом. Її одяг має бути зручним і функціональним, з кроєм і матеріалами, що не сковують рухів.",
                    lightside: "Вона випромінює впевненість і внутрішній спокій. Завжди лишається вірною собі, але відкрита до нових ідей і подорожей. Її сміливість і пристрасть ведуть її туди, де вона може рости й розвиватися. Вона любить увагу. Гідність дає їй велику внутрішню силу, але робить вразливою до критики й образ. Зазвичай вона фінансово незалежна й заробляє на себе сама. Розумна й практична як у справах, так і у стосунках. Вона самодостатня. Її стиль — зручний і практичний. Вона обирає натуральні матеріали й природні кольори. Їй подобаються елементи сафарі, мілітарі або ковбойського стилю — шарфи, капелюхи, ремені, взуття, які додають образу характеру й оригінальності.",
                    shadowside: "З нею непросто в близьких стосунках, бо вона не любить надовго залишатися на одному місці чи в надто емоційних відносинах. Чоловік має слідувати за нею, інакше вона йде. Вона може тікати від реальності або впадати в ілюзію героїзму. Її одяг практичний, але позбавлений виразності.",
                    image: Ne
                }, {
                    name: "Шляховказівниця",//28
                    description: "Вона — натхненниця й каталізатор нових відкриттів. У її стилі переважають натуральні матеріали, яскраві відтінки, сміливі поєднання орнаментів, геометричних візерунків, рослинних і психоделічних мотивів.",
                    lightside: "Вона — тонка, чутлива, але водночас сильна, як скеля. Її енергія, цілісність і творчість надихають. Вона ініціативна й слідує своєму покликанню, запалюючи інших на шлях відкриттів. Зустріч із нею відкриває нові горизонти, розширює свідомість і дарує можливості. Те, що раніше залишалося непоміченим, раптом спалахує новими барвами, запрошуючи до пригоди, яка вимагає сміливості та рішучості. Її силует формують чіткі лінії, природні тканини й упорядковані геометричні візерунки.",
                    shadowside: "Вона ризикує перетворити передавання духовного досвіду на спосіб заробітку, що може стати руйнівним. У стилі й поведінці вона іноді занадто педантична, втрачаючи природність і легкість.",
                    image: Ie
                }, {
                    name: "Атлетка",//29
                    description: "Ця жінка особливо дбає про своє тіло. Вона динамічна й енергійна. Її спортивний одяг підкреслює фігуру. Вона обирає функціональні речі та зручне взуття. Найчастіше її можна зустріти у спортзалі.",
                    lightside: "Вона сприймає життя як захопливий виклик і випробування. Чи вистачить у неї сил, щоб усе витримати? Її максималізм проявляється в гарячих суперечках і гострих обговореннях, як у підліткових спорах із дорослими. Вона демонструє тіло, поєднуючи це з упертістю. Швидко ображається. Часто витрачає час на пошуки способів перемоги, заробітку чи привернення уваги. Водночас вона розвиває особисту зрілість і силу духу.",
                    shadowside: "Вона егоїстично використовує свої фізичні можливості. Її відчуття непереможності та справедливості — ілюзія. Прагнення перевершити себе може коштувати їй здоров’я. Вона носить спортивний одяг скрізь і завжди, ігноруючи доречність у різних ситуаціях.",
                    image: Re
                }, {
                    name: "Жінка місяця",//30
                    description: "Ця жінка веде до таємничого царства місяця, ночі й темного світу душі. У її стилі — готичні елементи, прямі силуети й плавні лінії. Домінує чорний колір.",
                    lightside: "Її описують романтизм, неспокійна уява й мистецька фантазія. Вона екстравагантна й частково аристократична. Її основний колір — чорний, який вона поєднує з білими, червоними та пурпуровими акцентами. Її стиль — це шкіра, мереживо, сатин і органза. Яскравий макіяж на тлі темного образу робить її ще більш помітною.",
                    shadowside: "Вона відкриває дорогу в бездонну темряву душі, де можуть ховатися страхи, недовіра, кошмари й похмурі передбачення. Вона легко втрачає віру в майбутнє, у власні сили й знання, коли захоплюється ілюзіями замість реального життя. Її стиль стає настільки похмурим, що може викликати відчуття тривоги й страху.",
                    image: Fe
                }, {
                    name: "Відьма",//31
                    description: "Ця жінка особливо приваблює як своєю жіночністю, так і загадковістю. Її трохи провокативний стиль відзначається сміливістю, екстравагантністю та темними кольорами.",
                    lightside: "Цю жінку вирізняє особлива внутрішня стійкість. Вона залишається вірною собі за будь-яких обставин. Її зовнішня провокативність — це лише спосіб захистити свій внутрішній світ і особисті кордони. Вона вчить інших не боятися здаватися незручними, коли це потрібно, і не соромитися голосно сказати «ні», особливо чоловікам. Вона дивиться на життя крізь призму стриманого консерватизму. Їй до вподоби руде волосся в різних відтінках, хоча іноді вона обирає й чорне. Її приваблює незвичний, багатошаровий одяг темних кольорів. Вона із задоволенням експериментує зі своїм образом, шукаючи нові форми самовираження.",
                    shadowside: "Вона надто переймається майбутнім, що виливається в егоїзм, скупість і злісність — усе це маскує її внутрішній страх. Замість нових можливостей вона чіпляється за минуле, намагаючись витиснути з нього останню вигоду. Їй здається, що нове ненадійне, і краще залишатися в знайомому, навіть якщо це давно втратило сенс. Її слова наповнені гіркотою, що створює навколо негатив. Вона носить недоглянутий, зношений одяг, який давно втратив вигляд.",
                    image: Le
                }, {
                    name: "Цілителька",//32
                    description: "Її внутрішня гармонія глибока, а душа — сильна. Її стиль природний і етнічний, з накидками та масивними прикрасами. Вона майже не користується косметикою й надає перевагу природній зачісці. Її вибір — натуральні матеріали й каміння.",
                    lightside: "Сила цілительки народжується з гармонійної єдності свідомого і підсвідомого. Це джерело життєвої енергії, сміливості й пристрасті. Її пристрасть — допомагати іншим, відновлюючи їхнє тіло, розум і душу. Вона вміє перетворювати біль на зцілення. Її завдання — не приглушувати інстинкти й темні сили, що часто ховаються за маскою добра, а навчитися приборкувати їх любов’ю, ніжністю і наполегливістю. Її одяг — «материнський», часто з національними мотивами, що викликає довіру й бажання прихилити голову їй на коліна. Стиль природний, але виразний, доповнений етнічними прикрасами.",
                    shadowside: "Вона може стати залежною від ролі рятівниці, використовувати чужий біль для власного піднесення. З часом її допомога стає засобом контролю над тими, хто слабший. Вона легко маніпулює довірою, підживлюючи залежність від себе. Її образ застигає в одних і тих самих символах, які втрачають живу силу й перетворюються на маску, що прикриває особисте виснаження й страх втратити значущість.",
                    image: Pe
                }, {
                    name: "Матір",//33
                    description: "Досвідчена й турботлива, вона зберігає порядок і традиції, даруючи світові відчуття стабільності та спокою. Її стиль простий і невибагливий: футболки, штани, джинси, блузи та зручні куртки. Вона вибирає одяг, що дозволяє бути активною й водночас залишатися жіночною у своїй природній простоті.",
                    lightside: "Вона — втілення доброти, терпіння й надійності. Вміє створити для інших простір безпеки та любові. Її турбота проявляється не лише в словах, а в діях — вона живе для того, щоб дарувати тепло. Вона вміє слухати, підтримувати й підказувати, зберігаючи віру в людей навіть тоді, коли вони самі її втрачають. Її справжня сила — у здатності бути присутньою, не вимагаючи нічого натомість. Вона знаходить радість у простих речах: у відданості родині, у догляді, у щоденних маленьких кроках, що творять велике. Її одяг — це продовження цієї турботи: простий, зручний і теплий, створений для життя, а не для показу.",
                    shadowside: "Іноді вона надто розчиняється в ролі матері, забуваючи про себе. Її турбота стає надмірною, і вона починає нав’язувати іншим своє бачення правильного життя. Її одяг втрачає індивідуальність, стаючи лише функціональним захистом від світу.",
                    image: qe
                }, {
                    name: "Подруга",//34
                    description: "Це справжня подруга, яка завжди поруч, коли потрібна допомога. Її стиль скромний, мінімалістичний і практичний. Вона не прагне привертати до себе увагу.",
                    lightside: "Вона надійна, стабільна, віддана і самовіддана. Завжди готова захищати тих, кого любить, усіма своїми силами. Її щира радість — це успіхи інших. Вона залишається в тіні, як дружка на весіллі, ніколи не змагаючись за увагу. Її смаки часто перегукуються зі смаками близьких. Вона чутлива до потреб інших, хоча легко ранима сама. Її одяг простий і зручний, із легкими спортивними елементами. Вона обирає комфортне взуття й носить мінімум прикрас.",
                    shadowside: "Їй бракує власної ідентичності. Вона легко зраджує довіру або сама стає жертвою маніпуляцій. Часто обирає одяг лише під впливом подруги, залишаючись її тінню. Їй бракує власного стилю й думки. За цією зовнішньою відданістю приховується заздрість і таємне бажання завоювати чоловіка подруги.",
                    image: Me
                }, {
                    name: "Попелюшка",//35
                    description: "Її справжня радість — служити іншим з любов’ю та відкритим серцем. Її стиль — сухий мінімалізм і пуританська простота, позбавлені модної сезонності чи актуальності.",
                    lightside: "Вона стоїть на порозі змін. Її професіоналізм і вправність у ремеслі, торгівлі чи іншій практичній справі зрештою приносять винагороду. Вона приваблює тих, хто прагне покращити своє життя. Щойно її досвід і знання дозріють, вона зможе зробити справжній духовний прорив і віднайти свою істину. Її одяг максимально функціональний і стриманий. Вона майже не носить аксесуарів, обирає штани замість спідниць і віддає перевагу сірим, чорним і білим кольорам.",
                    shadowside: "Вона слухняна й пасивна, не має власної думки й схильна сліпо вірити людям вищого статусу. Брак грошей слугує виправданням для того, щоб не змінювати своє життя. Вона часто носить те, що просто опинилося під рукою, не надаючи значення вибору.",
                    image: De
                }, {
                    name: "Добра Фея",//36
                    description: "Її сутність — це душа, романтика, природа, легкість і любов. Вона носить вільний, багатошаровий одяг у відтінках синього, зеленого та білого.",
                    lightside: "Її радість — у гармонії, що проривається з глибини душі. Вона тонко відчуває природу і життєві сили, що дозволяє використовувати їх на благо інших. Це стає її внутрішньою опорою в моменти особистих криз. Вона надихає, направляє і діє з любов’ю, не чекаючи подяки. Її одяг — вінтажний, вільний, багатошаровий і зручний.",
                    shadowside: "Вона часто забуває про себе, завмираючи в очікуванні, що врятована нею людина врятує її у відповідь. Її життя перетворюється на ілюзію, де реальність поступається місцем мріям. Вона майже не звертає уваги на свій зовнішній вигляд і часто виглядає старомодно.",
                    image: ze
                }, {
                    name: "Жебрачка",//37
                    description: "За зовнішнім протестом у її стилі приховано духовний сенс. Вона поєднує непоєднуване, носить вільний, еклектичний одяг.",
                    lightside: "Ця жінка легко ставиться до життєвих рішень і сприймає життя як гру. Вона вміє пристосовуватись до змін, проходити злети й падіння без зайвих емоцій. Вона спритна, товариська, добра й безпосередня, хоча часто приховує свою справжню думку. В її стилі — розтягнуті светри, поношені джинси з дірками, недбалий крій і асиметрія. Вона не прагне до гармонії, але навіть у речах із секонд-хенду виглядає по-своєму стильно, ніби казкова героїня, яка колись належала до вищого світу.",
                    shadowside: "Вона легко стає залежною від інших, уникаючи зайвих зусиль. Відмовляє собі навіть у необхідному, навіть маючи на це кошти. Часто носить подароване або те, що залишилося від інших. Може виявляти жадібність.",
                    image: Ue
                }, {
                    name: "Наставниця",//38
                    description: "Бути собою — це мистецтво. Мудрість і досвід потребують передачі. Вона обирає готовий до вжитку, непомітний одяг для практичної жінки — стриманий, невибагливий, поза короткотривалими модними трендами.",
                    lightside: "Вона гармонійна і врівноважена, випромінює доброту і внутрішній спокій. Передає знання й вдосконалює своїх учнів, навчаючи приймати себе такими, які вони є. Для неї це справжнє мистецтво — прожити власне життя без страху приймати свої особливості. Вона не потребує зовнішньої підтримки й не шукає її. Її стиль — серйозний, але простий, лаконічний і завжди доречний. Вона віддає перевагу якісним речам, які витримують час. Основне — бездоганний крій і добротна тканина в спокійних тонах.",
                    shadowside: "Вона не відпускає учнів із ролі «вічного учня». Її строгість може перетворитися на надмірний контроль. Вона використовує «навчання» як спосіб вирішувати свої особисті проблеми за рахунок інших. Її сексуальність проявляється приховано — у глибоких вирізах чи розрізах, які контрастують із її строгим образом.",
                    image: Be
                }, {
                    name: "Рабиня",//39
                    description: "Її суть — покірність і примирення. Вона носить скромний одяг із відкритим декольте та комірцем-чокером. Її стиль незмінний — вона віддає перевагу сукням приглушених відтінків. Часто обирає прикраси чи елементи одягу, що нагадують комір.",
                    lightside: "У матеріальному плані в неї зазвичай усе гаразд, хтось забезпечує їй спокій і позбавляє турбот. Вона щедра, готова допомагати тим, хто цього потребує. Попри свою роль рабині, вона випромінює тепло й доброту. Її одяг стриманий і монотонний, у темних кольорах, напівприталеного силуету. Вона носить зручні туфлі на підборах, доповнюючи образ сумками та шарфами.",
                    shadowside: "Її особисте життя позбавлене балансу. Вона боїться не виправдати очікувань і легко віддає свою волю в руки іншого. В глибині душі може прагнути сексуального підкорення. Її вибір одягу часто залежить від уподобань чоловіка.",
                    image: Ge
                }, {
                    name: "Ботанка",//40
                    description: "Її стиль позбавлений смаку. Вона одягається абияк — у те, що перше потрапить під руку. Її образ виглядає випадковим і неохайним. Як сказала Америка Феррера: «Єдина причина, чому я виглядаю непривабливо, — це те, що мені подобається комфорт».",
                    lightside: "Її невичерпно приваблює інформація та таємниці Всесвіту. Найбільша пристрасть — робота або навчання. Вона може відчувати природне хвилювання й невпевненість, коли наважується залишити стару сферу й спробувати себе в новій. Вона постійно зайнята, і на шопінг для неї просто не вистачає часу.",
                    shadowside: "Вона почувається нещасною й непотрібною через невизначеність і страх втратити ґрунт під ногами. З головою занурюючись у роботу чи навчання, вона свідомо ігнорує особисте життя. Її одяг повністю позбавлений натяку на жіночність чи сексуальність.",
                    image: $e
                }, {
                    name: "Мучениця",//41
                    description: "У ній живе внутрішній конфлікт: з одного боку — бажання сховатися, з іншого — провокувати увагу. Її стиль поєднує закритий одяг і водолазки з яскравими деталями — принтами чи анімалістичними візерунками. Вона часто обирає взуття на шпильках.",
                    lightside: "Здається, вона застрягла на місці, проте за цією зовнішньою нерухомістю ховається потреба й здатність до глибоких змін. Вона надзвичайно терпляча і нерідко стає прикладом внутрішньої сили для інших. Її образ стриманий, але має легкий натяк на сексуальність — у деталях, принтах або виборі взуття.",
                    shadowside: "Вона застрягає в ролі жертви, смакуючи власні страждання. Навіть коли її біль безглуздий, вона пишається ним. Її розвиток зупиняється, але вона звинувачує у всьому світ, не усвідомлюючи, що причина всередині неї. Вона майже не відчуває радості, навіть маючи ідеальну фігуру, бо боїться бути не так зрозумілою. Тому ховається за темними кольорами й закритим одягом, що приховує її форму.",
                    image: Ve
                }, {
                    name: "Оповідачка",//42
                    description: "Її творчість живе в образах і символах. Її стиль багатошаровий, природний і яскравий. Вона ніби одягає на себе власні історії, перетворюючи кожен образ на послання для світу.",
                    lightside: "Вона наповнена творчою енергією. Через історії й символи вона виражає своє життя й надихає інших змінювати світ на краще. Вона допомагає зазирнути у свій внутрішній світ, побачити нові можливості й поглянути на ситуацію під іншим кутом. Матеріальне для неї другорядне — на першому місці духовність. Вона знає, що успіх не звалюється з неба, його треба віднайти, як скарб серед виноградників. Її стиль природний, багатошаровий, із різними текстурами натуральних тканин. Образ доповнюють виразні аксесуари. Вона вміє створювати довкола себе особливу атмосферу, яка захоплює та надихає.",
                    shadowside: "Вона може створювати небезпечні для інших історії, які заводять у ілюзії. Її життя відбувається у власних фантазіях. Вона може вдягатися надто химерно й комічно, змішуючи безліч кольорів і стилів. Її слова часто стають плутаними, а повідомлення — незрозумілими, залишаючи слухачів у розгубленості.",
                    image: Ke
                }, {
                    name: "Колекціонерка",//43
                    description: "Її одяг виражає креативність і самобутність, часто поєднуючись із модою лише випадково. Її стиль — це культ вінтажу. Вона носить речі, які для інших здаються дивними, але в її виконанні виглядають несподівано органічно.",
                    lightside: "Вона — творча особистість, і її стиль є відображенням внутрішньої індивідуальності. Вона вміє відрізняти справжнє від ілюзій і впевнено йде своїм земним шляхом. Завжди знаходить способи втілити власні ідеї та примхи. Вона приваблива, хоча не завжди надійна — інколи розчаровує себе й інших. Їй властиві нетерплячість і небажання брати на себе обов’язки. Але вона має талант підприємництва й здатна перетворити будь-що на золото. Її радість — у тому, щоб ділитися досвідом і секретами життя. Модні тренди її не цікавлять, вона має власне бачення стилю. Вона цінує вінтажні речі та унісекс, її гардероб невеликий, але ретельно підібраний. Вона надає перевагу особливим прикрасам.",
                    shadowside: "Вона накопичує не лише гроші, а й емоції. Їй властиві впертість, нечутливість і дріб’язковість. Вона боїться втратити навіть те, що давно втратило цінність. Вона скупа щодо себе, зокрема й на покупку одягу. Її гардероб часто складається зі старомодних або давно вийшлих з моди речей.",
                    image: Ye
                }, {
                    name: "Благодійниця",//44
                    description: "Вона дбає про людей, світ і довкілля. Її споживча філософія — мінімалізм. Її одяг — найпростіший: джинси, футболки, блузи, светри й кросівки.",
                    lightside: "Це людина, яка завжди готова допомогти. Вона щедра, терпляча й відкрита до інших. Її доброта — не короткочасний порив, а частина натури. Вона щиро співпереживає тим, хто переживає труднощі, і готова жертвувати власним комфортом. Вона допомагає іншим розкривати свої знання і використовувати їх на благо. Вона не боїться чужого успіху й легко ділиться ідеями. Її стиль простий і невибагливий — джинси, спортивні футболки, светри й зручне взуття. Її легко зустріти серед волонтерів.",
                    shadowside: "Вона цінує інших лише тоді, коли отримує особисту вигоду від їхньої допомоги. Звинувачує тих, хто, на її думку, живе занадто егоїстично. Її мінімалізм у стилі часто виглядає показовим і демонстративним.",
                    image: We
                }, {
                    name: "Сваха",//45
                    description: "Вона вміє об’єднувати людей, ідеї та можливості, створюючи навколо себе живу мережу зв’язків. Її стиль лаконічний, стриманий і продуманий — усе в її образі підкреслює надійність і відкритість до співпраці. Її зовнішній вигляд викликає довіру, тому куди б вона не прийшла, її швидко приймають за «свою».",
                    lightside: "Саме завдяки їй люди знаходять один одного, створюються нові союзи й запускаються спільні проєкти. Вона вміє розпізнати справжні цінності й допомагає іншим об’єднуватися навколо них. Її інтуїція й відчуття часу дозволяють їй діяти в потрібний момент. Вона терпляча і не поспішає, бо знає, що найкращі результати потребують зусиль і часу. Вона будує все крок за кроком і отримує від цього задоволення. Її гардероб стриманий і зібраний — базові речі, піджаки, спідниці чи штани, які легко поєднувати. Її образ справляє враження серйозної та надійної людини, з якою хочеться працювати.",
                    shadowside: "Вона може зловживати довірою, використовуючи людей задля власної вигоди. Обіцяє рівні можливості, але грає тільки на себе. Коли її викривають, звинувачує інших у невдячності. Її стиль з роками стає одноманітним і консервативним, що робить її образ передбачуваним і застарілим.",
                    image: Je
                }, {
                    name: "Авторка",//46
                    description: "Її тексти — живі й інтелектуальні, наповнені змістом і структурою. У стилі — андрогінність і смарт-кежуал. Вона любить експериментувати з трендами, сміливо поєднуючи те, що здається непоєднуваним. Для неї це ще один спосіб заявити про себе.",
                    lightside: "Вона завжди готова взятися за складну, довготривалу справу, якщо вона справді важлива для неї. Занурюючись у процес, вона відчуває задоволення й гордість навіть за перші кроки. Її приклад доводить: щоб почати нову справу, не обов’язково мати досвід — достатньо натхнення, інтересу й віри в себе. Вона вчиться як вперше, без наставників, опираючись лише на власні сили. Для когось це стане радістю відкриттів, для когось — випробуванням, але нові знання й досвід у будь-якому разі стануть цінними. Її успіх залежить від особистих умінь і накопиченої практики. Її стиль — вираз інтелекту і характеру: поєднання кольорів, чоловічі елементи — краватки, метелики, піджаки — все гармонійно вписується в її образ.",
                    shadowside: "Вона може спотворювати факти або присвоювати собі чужі ідеї. Для неї важливі лише вигідні результати, які легко продати. Її стиль перетворюється на недбалий — халати, безформний одяг із натяком на грубість. Вона перестає звертати увагу на свій образ і виглядає неохайно.",
                    image: Qe
                }, {
                    name: "Вчителька",//47
                    description: "Вона живе для того, щоб передавати знання іншим. Її стиль простий, функціональний і практичний — без надмірностей, зате завжди доречний.",
                    lightside: "Її терпіння — одна з найсильніших якостей. Вона вміє чекати й спостерігати, як поступово зростає людина, команда чи проєкт. Вона здатна пояснювати складні речі просто й зрозуміло, надихати на розвиток і навчання. Це розумна, освічена жінка, яка своїм прикладом показує, що справжнє задоволення приходить через послідовне зростання — у собі та в улюбленій справі. Її стиль стриманий і зручний, адже вона цінує практичність. Простий одяг, комфортне взуття та містка сумка — усе, що потрібно, щоб залишатися мобільною та ефективною.",
                    shadowside: "Вона ризикує використовувати свої знання як інструмент тиску або маніпуляцій. Вона вважає, що завжди знає, як правильно, і не терпить помилок інших. Її педагогічна місія може перетворитися на жорсткий контроль замість підтримки й розвитку.",
                    image: Ze
                }, {
                    name: "Кокетка",//48
                    description: "Безтурботна й наївна, ця жінка чутлива й неймовірно чарівна. Чоловіки обирають таких дівчат, щоб на їхньому фоні самостверджуватись як герої. Вона зазвичай носить довге волосся та короткі сукні вище колін. Її улюблений колір — рожевий з червоним відтінком. Вона обожнює взуття на високих підборах.",
                    lightside: "Вона дивиться на життя широко розплющеними очима. Спонтанність і непередбачуваність наповнюють її енергією. Вона відкрито проявляє свої емоції, ніби граючи з невідомим і дивуючись усьому новому. Як казав Платон, усі знайомства починаються з подиву, і вона володіє цим мистецтвом. Вона вміє допомогти людям побачити абсурд і смішне у звичних речах. Її простота обеззброює. Вона знає, як підкреслити свою сексуальність і не боїться захоплених поглядів. Її тіло — справжня окраса, і вона вміло демонструє його, грайливо фліртуючи зі світом.",
                    shadowside: "Їй властиві легковажність, незібраність і безлад. Її інфантильність проявляється в наївності, легковірності та надмірній емоційності, інколи — у повній недалекоглядності. Вона безтурботно ставиться до свого життя й до життя інших, заперечуючи будь-які негативні емоції. Наївність проявляється і в її стилі — надлишок рожевого, рюші, бантики й занадто короткі сукні, що не завжди відповідають її віку.",
                    image: Xe
                }, {
                    name: "Студентка",//49
                    description: "У ній поєднуються зухвала наївність і вічний пошук. Вона легко засвоює нове й підлаштовується під обставини, мов хамелеон. Її стиль — це грайлива суміш ніжності та дитячості. Вона надає перевагу коротким сукням і спідницям, облягаючому силуету, який може виглядати водночас скромно і спокусливо.",
                    lightside: "Вона допитлива, сповнена ідей і планів, що часто суперечать одне одному. Її розум і раціональність уживаються з мінливістю цілей. Її талант — легко заводити знайомства і створювати союзи з усіма, хто трапляється на шляху. Її стосунки — відкриті або раціональні. Вона вчиться не заради знань, а щоб утвердитися в житті, і готова до навчання все життя. Її сила — у відсутності жорстких принципів. Вона не жалкує і не озирається назад, байдуже ставиться до минулих партнерів. Її одяг підкреслює і сексуальність, і приховану гру.",
                    shadowside: "Вона нестабільна й легко піддається впливу середовища. Часто захоплює старших чоловіків, бо знає силу свого образу. Вона приймає короткострокові рішення й може стати жертвою власних ілюзій. Водночас її цілі — прагматичні: вирішити матеріальні проблеми через стосунки. Вона вагається між знанням і дією, використовуючи зовнішність як інструмент пошуку підтримки.",
                    image: et
                }, {
                    name: "Прекрасна у Вежі",//50
                    description: "Вона — загадка, яка дарує чоловікові шанс вразити її та завоювати. Її стиль нагадує вікторіанську епоху: сукні з високими комірами, закрите декольте, довге волосся. Вона — втілення образу жінки з розбитим серцем.",
                    lightside: "Вона надихає інших вміти чекати слушного моменту для змін. Її приклад вчить бачити глибший сенс у досягненнях і дає чоловікам шанс відчути власну силу й стати опорою для себе. Її стиль — романтичний, із довгими сукнями, оздобленими рюшами, воланами, жабо або краватками. Вона обирає образ, що нагадує героїнь старовинних романів.",
                    shadowside: "Вона живе у світі романтичних ілюзій, вірячи, що варто лише чекати, і мрії збудуться самі собою. Вона пасивно очікує свого лицаря, дивлячись на нього згори, ніби з вежі. Її одяг із «присмаком» минулого стає для неї цією вежою-захистом. Вона може ігнорувати справжню любов, тримаючись за фантазійний образ, якого чекає все життя.",
                    image: tt
                }, {
                    name: "Незаймана",//51
                    description: "Вона — втілення чистоти й невинності, мрійниця, яка ніби не торкнулася жодного гріха. Її стиль — жіночний, із довгими спідницями та сукнями ніжно-рожевих відтінків. Її присутність створює навколо атмосферу тендітної, недоторканої краси.",
                    lightside: "Вона ховається від реального світу у своїх фантазіях і спогадах, живучи в уявному просторі, що нагадує дитинство. Її мрії наївні, іноді з відтінком релігійної піднесеності. Вона постійно ставить собі одне й те саме запитання: «А що як?..» Вірить, що життя має бути простим і легким, тому уникає ризику. Вона бережно охороняє символічну чистоту свого серця й душі. Її стиль — ляльковий, з довгими закритими сукнями, витонченим силуетом і ніжною кольоровою гамою. Її невинна жіночність приваблює тих, хто шукає «ідеальну» жінку, недоторкану реальністю.",
                    shadowside: "Вона живе лише у мріях, відчуваючи себе зайвою в грі великого кохання. Близькість лякає її. Її інфантильний стиль — це втеча від самої себе, від дорослого життя й реальних труднощів. Вона ховається за маскою невинності, щоб уникати рішень і відповідальності за власне життя.",
                    image: at
                }, {
                    name: "Мисливиця за Вдачею",//52
                    description: "Її впізнають за сексуальністю, чуттєвістю й внутрішнім викликом. Вона демонструє свою жіночність і сміливість у виборі одягу, охоче підкреслюючи виразну фігуру. Її волосся зазвичай довге, а улюблене взуття — туфлі на високих підборах.",
                    lightside: "Це жінка-індивідуалістка, розумна, незалежна й винахідлива, з яскравою уявою. Вона вміє розв’язувати особисті проблеми самостійно й прагне бути вільною від матеріальної залежності. За її привабливою зовнішністю ховається холодний розрахунок, однак її поведінка завжди прозора й передбачувана. Вона вміє дивитися на стосунки збоку, щоб краще розуміти власні страхи. Її граційні рухи роблять її чудовою танцівницею. Її стиль — жіночний, сексуальний і відкритий, завжди акцентує увагу на фігурі. Вона обирає сукні й спідниці, вміло користується макіяжем і ретельно доглядає за собою. Її губи приваблюють своєю чутливістю. Її образ створює навколо ауру жінки, яка знає, чого хоче.",
                    shadowside: "У стосунках вона може бути жорсткою, хитрою й ненадійною. Її краса — поверхнева, а тому становить небезпеку для тих, хто піддається її чарам. Вона вміє маніпулювати, легко обриваючи зв’язки, щойно втрачає до них інтерес або знаходить вигідніший варіант. Її стосунки сповнені холодної розважливості та тонкої, часто їдкої іронії. Її одяг завжди містить відверті сексуальні сигнали: глибокі вирізи, розрізи на спідницях, оголені плечі, руки й ноги.",
                    image: it
                }, {
                    name: "Жертва",//53
                    description: "Життя немов провокує її на біль і страждання, а інколи — й на ситуації насильства, які повторюються надто часто. Її стиль — відвертий, сексуально провокативний: напівпрозорі тканини, обтягуючі речі, що підкреслюють тіло. Для неї ідеальна фігура має надзвичайне значення.",
                    lightside: "Вона здатна вивільнити те, що довго залишалося пригніченим і непоміченим. Її сила — у здатності почати все з чистого аркуша, звільнившись від токсичних стосунків і внутрішніх обмежень, як-от сором’язливість чи страх. Вона допомагає іншим не застрягати в ролі жертви й закликає взяти відповідальність за власне життя. Вона відкриває тіньові сторони особистості, які раніше залишалися прихованими. Її стиль — сміливий і привабливий, вона обирає речі, що притягують погляди, і не боїться демонструвати своє тіло.",
                    shadowside: "Вона застрягає в ролі жертви, постійно скаржачись на життя й шукаючи співчуття. Їй важко захищати власні межі. Її одяг стає надто відвертим, коротким або провокативним, що робить її вразливою до маніпуляцій і небажаної уваги. Часто вона сама несвідомо провокує ситуації, у яких потім знову опиняється в ролі постраждалої.",
                    image: st
                }, {
                    name: "Аферистка",//54
                    description: "Вона живе моментом, спрагло шукаючи нових вражень. Для неї не існує меж, обмежень чи відповідальності. Її образ яскравий, зухвалий і сексуальний. Фігура — головна зброя. Вона носить короткі сукні, високі підбори й помітний макіяж.",
                    lightside: "Її талант — поєднувати мистецтво з потребами ринку. Вона ризикує, діє сміливо й провокативно. У стосунках вона завжди тримає дистанцію, граючи на поверхні, не дозволяючи зазирнути вглиб. Її легка, невимушена поведінка надихає інших жінок бути сміливими й виживати навіть у складних умовах. Вона ніби запитує: яку ціну ти готова заплатити за ілюзію безпеки? Її стиль викликає і кидає виклик. Довге розпущене волосся, облягаючий одяг, глибоке декольте й яскраві кольори формують її привабливий, грайливий образ.",
                    shadowside: "Вона легко потрапляє в залежність від чоловіків, керується лише власною вигодою, виправдовуючи все тим, що це “потрібно для неї”. Її стосунки поверхневі, без відповідальності й глибини. Усередині — напруження й невпевненість, які вона маскує блиском. Вона завжди обирає матеріальні вигоди й комфорт, відмовляючись від справжньої самостійності. Її стиль стає вульгарним і надто відвертим — видно білизну, спідниці надто короткі, а взуття — на височезній платформі. Вона часто перетворює свою сексуальність на товар.",
                    image: nt
                }, {
                    name: "Розважальниця",//55
                    description: "У її природі поєднуються невинність і спокуса, неслухняність і зухвалість, підсилені інфантильними рисами. Її стиль балансує між дитячою наївністю та сексуальністю: гольфи, панчохи, мамині підбори, легкі сукенки та мереживні колготки.",
                    lightside: "Вона легко поводиться з людьми, наповнює простір фліртом і легковажними обіцянками. Її життя схоже на казку, в якій усе здається трохи нереальним. Вона слухає лише свою інтуїцію, навіть коли інші сумніваються. Її гардероб складається з коротких суконь, силуету “А”, білизняних елементів — мережива, в’язаних деталей, стрічок для волосся. Вона вміло поєднує дитячі й сексуальні акценти, створюючи грайливий, спокусливий образ.",
                    shadowside: "Вона шукає легких перемог, уникаючи справжньої відповідальності й зусиль. Її любов спрямована не на людину, а на статус чи ідеальний образ. Її стиль залишається надто дитячим і відвертим, навіть коли це вже не відповідає її вікові: короткі сукні, пишні рукави, рюші — все це створює ефект інфантильності, за якою вона ховається від дорослого світу.",
                    image: rt
                }, {
                    name: "Залежна",//56
                    description: "Це чутлива й вразлива жінка, сповнена сумнівів і внутрішньої боротьби. Її стиль — м’який, затишний і природний. Вона обирає одяг для комфорту, віддаючи перевагу приємним на дотик тканинам.",
                    lightside: "Вона настільки тонко реагує на думки оточення, що часто не має сил діяти самостійно. Вона легко потрапляє в залежні стосунки, які їй шкодять, але водночас здатна помічати залежності в інших і допомагати їх подолати. Її стиль — жіночний, м’який, природний. Вона обирає тканини, що дарують тілу приємні відчуття, як-от кашемір чи шовк. Її образ — це чуттєвий оверсайз і білизняний стиль з оголеними зонами, але завжди в комфортному взутті.",
                    shadowside: "Її невпевненість у собі руйнує її гідність і штовхає в стан пригнічення. Вона живе у відчутті невдачі та внутрішньої порожнечі. Вона зраджує свої справжні цінності заради порятунку стосунків, які вже давно втратили сенс. Вона дозволяє залежності керувати її життям, а одяг використовує як захист і втечу від реальності.",
                    image: ot
                }, {
                    name: "Дилетантка",//57
                    description: "Вона — зухвала новачка, що провокує й викликає тривогу. Її стиль концептуальний, нестандартний і зрозумілий лише небагатьом. Вона має власне бачення того, що і як носити, і свідомо ігнорує загальноприйняті правила моди, щоб заявити про свою унікальність.",
                    lightside: "Вона кмітлива, активна й наповнена енергією, яка може як піднімати, так і руйнувати. Часто привертає до себе увагу через скандали чи провокації, майстерно граючи на інтригах і гострих коментарях. Навіть не маючи достатньої освіти, вона отримує задоволення від діяльності й постійного руху. Її стиль — попередження про небезпеку стати поверхневою. Вона практична, швидка й винахідлива у матеріальних питаннях. Її одяг — це інтелектуальна заява: асиметрія, відкриті шви, еклектика. Вона створює або замовляє речі під себе, наче дизайнер власного стилю.",
                    shadowside: "Вона дратує оточення своєю токсичністю й нещирістю. Любить прикидатися знавчою, хоча насправді її знання поверхові. Її «дружба» часто фальшива і вигідна лише їй. Її стиль — це наслідування дизайнерського підходу без глибини й смаку, що межує з кічем.",
                    image: lt
                }, {
                    name: "Месія",//58
                    description: "Вона закохана в себе і в саме життя. Її стиль спрямований на те, щоб підкреслювати свою привабливість: обтягуючий одяг, яскраві аксесуари, виразний макіяж і високі підбори — невід’ємна частина її образу.",
                    lightside: "Вона радіє життю й ділиться цим натхненням з іншими. Її щирість і віра в краще випромінюють світло, а дії наповнені дитячою безпосередністю. Вона мудра у своїй простоті й отримує справжнє задоволення від активності, легко надихає інших і може стати душею команди. Її допомога завжди йде від серця, без прагнення виглядати жертвою чи мученицею. Вона сміливо носить те, що їй до душі — сукні та спідниці, які підкреслюють фігуру, відкрите тіло й високі підбори.",
                    shadowside: "Її перебільшена наївність іноді переростає в інфантильність і демонстративність. Вона надто впевнена у своїй «особливій» місії допомагати, вважаючи, що лише її підтримка справді важлива. Вона може ігнорувати доречність в одязі, з’явившись у недоречному вбранні навіть на серйозних заходах — наприклад, у мініспідниці на похороні.",
                    image: ht
                }, {
                    name: "Візіонерка",//59
                    description: "Вона отримує неймовірне задоволення від відчуття власної унікальності та неповторного стилю. Її образ завжди вирізняється серед інших і підкреслює її особливий смак.",
                    lightside: "Вона надзвичайно чутлива до творчого натхнення і володіє природним даром бачити суть речей без зайвих пояснень. Її сприйняття гармонійне й налаштоване на пульс самого життя. Вона сміливо переходить від відомого до невідомого, відчуваючи те, що ще приховане від інших. Її призначення — проголошувати бачення майбутнього, не очікуючи вигоди для себе. Вона допомагає долати труднощі, які здавалися нездоланними. Її натхнення живить юнацький максималізм, завдяки якому вона робить неможливе. Її стиль — завжди особливий, вона вміє виділятися з натовпу, залишаючись жіночною та витонченою. Її аксесуари — продумані й креативні, адже вона вірить, що справжня краса живе в деталях.",
                    shadowside: "Вона часто стикається з нерозумінням і може почуватися самотньою. Насмішки й осуд залишають у ній глибокі рани. Вона може посміхатись зовні, але всередині ховає біль. Страх бути відкинутою заважає їй вільно самовиражатися. Вона надто сильно прислухається до чужих думок, втрачаючи власну творчу силу.",
                    image: ct
                }, {
                    name: "Сестра",//
                    description: "Вона прагне бути красивою і бажаною. Її стиль — відверто сексуальний, сповнений виклику та запрошення до уваги.",
                    lightside: "Вона постійно порівнює себе з іншими жінками, через що нескінченно вдосконалює свій образ. Такі порівняння водночас викликають у неї відчуття і переваги, і меншовартості. Вона рідко приймає чоловіка, заради якого треба було б докладати зусиль — частіше вона стає для нього сестрою, а не справжньою партнеркою. Її прагнення до ідеального образу не для чоловічої уваги, а для досягнення свого внутрішнього ідеалу. Емоційно вона тримає дистанцію, що ускладнює стосунки. Її стиль — яскравий і провокативний: короткі спідниці, глибоке декольте, обтягуючі штани, яскраві кольори та високі підбори.",
                    shadowside: "Попри відвертий стиль, у глибині душі вона має негативне ставлення до свого тіла. Вона може бути забобонною або навіть богобоязливою, водночас виснажуючи себе дієтами чи витрачаючи останні гроші на «покращення» форм. Проте це не приносить їй відчуття захищеності й не покращує стосунків із чоловіками. Її образ може виглядати надто вульгарно й штучно.",
                    image: dt
                }, {
                    name: "Відлюдниця",//
                    description: "Шляхетна й самотня, вона постійно веде внутрішню боротьбу, намагаючись здолати тіні минулого. Її приваблює естетика зів’янення, у ній поєднані втрата і професійний успіх. Вона ховається від світу у власному внутрішньому замку, загортаючись у свій одяг, ніби у захисну оболонку. Її стиль існує не для того, щоб привертати увагу, а щоб сховати все, що болить.",
                    lightside: "Відлюдниця обирає тишу і відокремлення, щоб глибше пізнати себе. Її приваблюють камені — носії древньої енергії та сили. Вона шукає сенс у знаннях, які вимагають глибокого занурення. Її дар — поєднувати пережите з мудрістю, знаходити в цьому внутрішню ясність і гармонію. Вона присвячує себе творчості, служить тому, що справді відгукується в душі. Її стиль — оригінальний і закритий, ніби кокон. Вона вибирає чорний колір, асиметрію, мінімум аксесуарів і каміння.",
                    shadowside: "Вона тікає від людей, керована страхами. Відмовляється від підтримки, замикається в минулому, у спогадах про колишні перемоги чи образах на втрачений успіх. Вона боїться старіння і самотності. Її одяг стає безформним і неохайним — як віддзеркалення внутрішнього хаосу, з яким вона вже не намагається боротися.",
                    image: oe
                }]
                , ft = ({ windowwidth: t, style: a, centerCard: i, i: s, step: n }) => {
                    let r, o, l = "border-clientpurple";
                    return 1 == n && (l = "border-clientorange"),
                        t < 768 ? (r = "400px",
                            o = "200px") : i == s ? (r = "500px",
                                o = "250px") : (r = "470px",
                                    o = "235px"),
                        (0,
                            e.createElement)("div", null, (0,
                                e.createElement)("div", {
                                    style: {
                                        minWidth: o
                                    },
                                    className: `flex flex-col justify-center items-center ${i == s && t > 768 && `border-2 ${l} rounded-[35px]  overflow-hidden`} ${t > 768 && i != s && "opacity-50"}`
                                }, (0,
                                    e.createElement)("img", {
                                        src: a.image,
                                        width: o,
                                        style: {
                                            maxWidth: o,
                                            maxHeight: r
                                        },
                                        alt: "style"
                                    }), (t > 768 && i == s || t < 768) && (0,
                                        e.createElement)("div", {
                                            className: "mt-0 md:mt-[-20px] w-full pr-5 pb-5 flex justify-end text-lg  font-bold " + (0 == n ? "text-clientpurple" : "text-clientorange")
                                        }, `${t < 768 ? s + 1 : s}/59`)))
                }
                , pt = ({ windowwidth: t, scrollRef: a, onScroll: i, centerCard: s, step: n }) => {
                    let r = ut;
                    return t < 786 && (r = ut.slice(1, -1)),
                        (0,
                            e.createElement)(e.Fragment, null, (0,
                                e.createElement)("div", {
                                    onScroll: i,
                                    className: "w-[200px] md:w-[720px] overflow-hidden flex items-center scrollcontainer",
                                    ref: a
                                }, r.map(((a, i) => (0,
                                    e.createElement)(ft, {
                                        windowwidth: t,
                                        key: a,
                                        style: a,
                                        centerCard: s,
                                        i,
                                        step: n
                                    })))))
                }
                , mt = ({ windowwidth: t, step: a, scrollRef: i, centerCard: s, setCenterCard: n }) => {
                    const [r, o] = (0,
                        e.useState)(!1)
                        , l = 235;
                    function h(e, t, a) {
                        var i = e.scrollLeft
                            , s = t - i
                            , n = 0
                            , r = function () {
                                n += 20;
                                var t = Math.easeInOutQuad(n, i, s, a);
                                e.scrollLeft = t,
                                    n < a ? setTimeout(r, 20) : o(!1)
                            };
                        r()
                    }
                    Math.easeInOutQuad = function (e, t, a, i) {
                        return (e /= i / 2) < 1 ? a / 2 * e * e + t : -a / 2 * (--e * (e - 2) - 1) + t
                    }
                        ;
                    const c = `Виберіть картку, яка найкраще відображає ${0 === a ? "ваш поточний стиль" : "стиль вашої мрії "}`;
                    return (0,
                        e.createElement)(e.Fragment, null, 0 === a && (0,
                            e.createElement)("h2", {
                                style: {
                                    fontFamily: "Roboto"
                                },
                                className: "text-xl md:text-[40px] font-bold text-center"
                            }, (0,
                                e.createElement)("span", {
                                    className: "text-clientpurple"
                                }, "У якому стилі"), " я зараз ?"), 1 === a && (0,
                                    e.createElement)("h2", {
                                        style: {
                                            fontFamily: "Roboto"
                                        },
                                        className: "text-xl md:text-[40px] font-bold text-center"
                                    }, " Який стиль ", (0,
                                        e.createElement)("span", {
                                            className: "text-clientorange"
                                        }, "моєї мрії"), " ?"), (0,
                                            e.createElement)("p", {
                                                className: "text-base md:text-xl  font-normal text-center mt-3"
                                            }, c), (0,
                                                e.createElement)("div", {
                                                    key: a,
                                                    className: " mt-2 md:mt-5 flex justify-center"
                                                }, (0,
                                                    e.createElement)("div", {
                                                        onClick: () => {
                                                            var e;
                                                            r || (o(!0),
                                                                e = t <= 768 ? i.current.scrollLeft - 200 : i.current.scrollLeft - l,
                                                                h(i.current, e, 400))
                                                        }
                                                        ,
                                                        className: "absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                                                    }, (0,
                                                        e.createElement)("img", {
                                                            key: a,
                                                            src: 0 === a ? ie : ne
                                                        })), (0,
                                                            e.createElement)(pt, {
                                                                windowwidth: t,
                                                                scrollRef: i,
                                                                onScroll: () => {
                                                                    if (t <= 768) {
                                                                        const e = i.current.scrollLeft
                                                                            , t = 200 * Math.round(e / 200);
                                                                        n(t / 200)
                                                                    } else {
                                                                        const e = i.current.scrollLeft
                                                                            , t = Math.round(e / l) * l;
                                                                        n(t / l + 1)
                                                                    }
                                                                }
                                                                ,
                                                                centerCard: s,
                                                                step: a
                                                            }), (0,
                                                                e.createElement)("div", {
                                                                    onClick: () => {
                                                                        var e;
                                                                        r || (o(!0),
                                                                            e = t <= 768 ? i.current.scrollLeft + 200 : i.current.scrollLeft + l,
                                                                            h(i.current, e, 400))
                                                                    }
                                                                    ,
                                                                    className: "absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                                                                }, (0,
                                                                    e.createElement)("img", {
                                                                        key: a,
                                                                        src: 0 === a ? se : re
                                                                    }))))
                }
                , gt = ({ step: t, currentStyle: a, dreamStyle: i }) => {
                    let s = ut;
                    window.innerWidth < 786 && (s = ut.slice(1, -1));
                    const n = 2 == t ? s[a] : s[i];
                    return (0,
                        e.createElement)("div", {
                            className: `w-full flex gap-5 rounded-[20px] p-5 ${2 == t && " bg-[#F3C3FF40] "} ${4 == t && " bg-[#FFC7CE40] "}`
                        }, (0,
                            e.createElement)("div", {
                                className: "w-3/4 flex flex-col gap-2"
                            }, (0,
                                e.createElement)("h4", {
                                    className: "font-bold text-xl md:text-2xl",
                                    style: {
                                        fontFamily: "Roboto"
                                    }
                                }, n.name), (0,
                                    e.createElement)("p", {
                                        className: "font-normal text-base md:text-lg"
                                    }, n.description)), (0,
                                        e.createElement)("div", {
                                            className: "w-1/4 mt-[-50px] flex justify-end"
                                        }, (0,
                                            e.createElement)("img", {
                                                src: n.image,
                                                width: 115,
                                                height: 223,
                                                className: "max max-w-[115px] max-h-[223px]"
                                            })))
                }
                , yt = ({ heading: t, step: a, currentStyle: i, dreamStyle: s }) => {
                    let n = ut;
                    window.innerWidth < 786 && (n = ut.slice(1, -1));
                    const r = 2 == a ? n[i] : n[s]
                        , o = "Світла Сторона" == t ? r.lightside : r.shadowside;
                    return (0,
                        e.createElement)("div", {
                            className: `${2 == a && " bg-[#F3C3FF40] "} ${4 == a && " bg-[#FFC7CE40] "} p-5 rounded-[20px]`
                        }, (0,
                            e.createElement)("div", {
                                className: "scrollcontent max-h-80 overflow-y-auto w-full flex flex-col gap-2  p-5"
                            }, (0,
                                e.createElement)("h4", {
                                    className: "font-bold text-xl md:text-lg",
                                    style: {
                                        fontFamily: "Roboto"
                                    }
                                }, t), (0,
                                    e.createElement)("p", {
                                        className: "font-normal text-base md:text-lg"
                                    }, o)))
                }
                , bt = ({ step: t }) => (0,
                    e.createElement)("div", {
                        className: "w-full flex flex-col justify-center gap-2 p-5 border-l-2 "
                    }, (0,
                        e.createElement)("p", {
                            className: "font-normal text-base md:text-lg"
                        }, "Ось опис ", 2 == t ? "вашого поточного стилю моди" : "стилю моди вашої мрії", "."), (0,
                            e.createElement)("p", {
                                className: "font-normal text-base md:text-lg"
                            }, "Світла сторона представляє позитивні якості та сильні сторони карти."), (0,
                                e.createElement)("p", {
                                    className: "font-normal text-base md:text-lg"
                                }, "Тіньова сторона - це потенційні негативні прояви та пастки, якщо довести справу до крайнощів."))
                , wt = ({ step: t, currentStyle: a, dreamStyle: i }) => {
                    const s = 2 == t ? "#A362F6" : "#F97585";
                    return (0,
                        e.createElement)("div", {
                            className: "w-full flex flex-col gap-5"
                        }, (0,
                            e.createElement)("style", null, `\n            .scrollcontent::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n.scrollcontent::-webkit-scrollbar-track {\n    background: white;\n    border-radius: 100vw;\n}\n\n/* Handle */\n.scrollcontent::-webkit-scrollbar-thumb {\n    background: ${s};\n    height: 50px;\n    border-radius: 100vw;\n}\n\n/* Handle on hover */\n.scrollcontent::-webkit-scrollbar-thumb:hover {\n    background: ${s};\n}\n\n        `), 2 === t && (0,
                                e.createElement)("h2", {
                                    style: {
                                        fontFamily: "Roboto"
                                    },
                                    className: "text-xl md:text-[40px] font-bold text-left"
                                }, "Мій стиль", (0,
                                    e.createElement)("span", {
                                        className: "text-clientpurple"
                                    }, " зараз !")), 4 === t && (0,
                                        e.createElement)("h2", {
                                            style: {
                                                fontFamily: "Roboto"
                                            },
                                            className: "text-xl md:text-[40px] font-bold text-left"
                                        }, "My future ", (0,
                                            e.createElement)("span", {
                                                className: "text-clientorange"
                                            }, " style !")), (0,
                                                e.createElement)("div", {
                                                    className: "w-full grid grid-cols-1 md:grid-cols-2 gap-5"
                                                }, (0,
                                                    e.createElement)(gt, {
                                                        step: t,
                                                        currentStyle: a,
                                                        dreamStyle: i
                                                    }), (0,
                                                        e.createElement)(bt, {
                                                            step: t
                                                        })), (0,
                                                            e.createElement)("div", {
                                                                className: "w-full grid grid-cols-1 md:grid-cols-2 gap-5"
                                                            }, (0,
                                                                e.createElement)(yt, {
                                                                    heading: "Світла Сторона",
                                                                    step: t,
                                                                    currentStyle: a,
                                                                    dreamStyle: i
                                                                }), (0,
                                                                    e.createElement)(yt, {
                                                                        heading: "Тіньова Сторона",
                                                                        step: t,
                                                                        currentStyle: a,
                                                                        dreamStyle: i
                                                                    })))
                }
                , vt = ({ value: t, setvalue: a, placeholder: i, type: s, purple: n, valid: r }) => (0,
                    e.createElement)("div", {
                        className: "w-full flex flex-col gap-2"
                    }, (0,
                        e.createElement)("input", {
                            type: s,
                            value: t,
                            onChange: e => a(e.target.value),
                            placeholder: i,
                            className: `h-14 w-full focus:outline-none p-5 rounded-[300px]\n          ${n && "bg-clientlightpurple placeholder:text-[#464646]"}\n          ${!n && "bg-white"}\n         ${r && !n && "border border-clientgreen"} \n         ${!r && "border border-red-500"} \n          `
                        }))
                , _t = e => 0 !== e.length && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
                , xt = () => (0,
                    e.createElement)("div", {
                        className: "animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full",
                        role: "status",
                        "aria-label": "loading"
                    }, (0,
                        e.createElement)("span", {
                            className: "sr-only"
                        }, "Loading..."));
            var St = a(997)
                , kt = a.n(St);
            kt().configure({
                apiKey: "patKhGMPAL2aUtgI7.3a33626ebf916e93789595a41ac84e801820b39b4e34eaac71e69fdc416b87c3"
            });
            const Tt = kt().base("appkvaQayzRCLgEbk");
            function Et() {
                const e = window.location.search
                    , t = new URLSearchParams(e);
                let a = "";
                for (const [e, i] of t.entries())
                    "" !== a && (a += ","),
                        a += `${e}=${i}`;
                return a
            }
            const jt = ({ windowwidth: t, step: a, setStep: i, currentStyle: s, dreamStyle: n, email: r, setEmail: o, ipAddress: l, country: h }) => {
                const [c, d] = (0,
                    e.useState)(!1)
                    , [u, f] = (0,
                        e.useState)(!0)
                    , [p, m] = (0,
                        e.useState)(!1);
                return (0,
                    e.useEffect)((() => {
                        if (p) {
                            let e = _t(r);
                            f(e)
                        }
                    }
                    ), [r]),
                    (0,
                        e.createElement)("div", {
                            className: "w-full flex flex-col md:flex-row gap-5 md:gap-0 items-center p-3 md:p-10 border-clientgreen border rounded-2xl bg-gradient-to-r from-[#78DE9540] to-[#FEFEFE1A]"
                        }, (0,
                            e.createElement)("div", {
                                className: "w-full md:w-1/2"
                            }, (0,
                                e.createElement)("h2", {
                                    style: {
                                        fontFamily: "Roboto"
                                    },
                                    className: "text-xl md:text-[36px] font-bold text-left"
                                }, "Залиште свій e-mail ", (0,
                                    e.createElement)("br", null), " ", (0,
                                        e.createElement)("span", {
                                            className: "text-clientgreen"
                                        }, " і зустріньте Нову Себе!"))), (0,
                                            e.createElement)("div", {
                                                className: "w-full md:w-1/2 flex flex-col md:flex-row gap-5 items-center"
                                            }, (0,
                                                e.createElement)(vt, {
                                                    value: r,
                                                    setvalue: o,
                                                    placeholder: "Enter your email",
                                                    type: "email",
                                                    valid: u
                                                }), c ? (0,
                                                    e.createElement)(xt, null) : (0,
                                                        e.createElement)("button", {
                                                            onClick: () => {
                                                                if (m(!0),
                                                                    !_t(r))
                                                                    return f(!1),
                                                                        void ee.error("INCORRECT EMAIL");
                                                                const e = (new Date).toISOString();
                                                                d(!0),
                                                                    Tt("tblZfXxFHDxrof36b").create({
                                                                        IPAddress: l,
                                                                        Country: h,
                                                                        DateTime: e,
                                                                        FirstCard: t < 768 ? s + 1 : s,
                                                                        SecondCard: t < 768 ? n + 1 : n,
                                                                        Email: r,
                                                                        QueryParameters: Et()
                                                                    }).then((e => {
                                                                        d(!1),
                                                                            i(a + 1)
                                                                    }
                                                                    )).catch((e => {
                                                                        console.error("Error creating record:", e),
                                                                            d(!1)
                                                                    }
                                                                    ))
                                                            }
                                                            ,
                                                            className: "text-lg font-semibold drop-shadow-md bg-clientgreen py-2 px-10 flex flex-row justify-center items-center text-white rounded-full border-none"
                                                        }, "Поділитися")))
            }
                , At = a.p + "images/greenlock.eb37648d.png"
                , Ht = ({ windowwidth: t, step: a, setStep: i, currentStyle: s, dreamStyle: n, email: r, setEmail: o, ipAddress: l, country: h }) => (0,
                    e.createElement)("div", {
                        className: "w-full flex flex-col gap-5 md:gap-14"
                    }, (0,
                        e.createElement)("div", {
                            className: "w-full flex flex-col md:flex-row gap-5"
                        }, (0,
                            e.createElement)("div", {
                                className: "w-full md:w-2/3 flex flex-col justify-center gap-2 "
                            }, (0,
                                e.createElement)("h2", {
                                    style: {
                                        fontFamily: "Roboto"
                                    },
                                    className: "text-xl md:text-[40px] font-bold text-left"
                                }, "Далі йде картка, яка описує"), (0,
                                    e.createElement)("h2", {
                                        style: {
                                            fontFamily: "Roboto"
                                        },
                                        className: "text-xl md:text-[40px] font-bold text-left text-clientgreen"
                                    }, "жінку, якою ти прагнеш бути!"), (0,
                                        e.createElement)("p", {
                                            className: "font-normal text-base md:text-lg"
                                        }, "Зазирніть за завісу таємниці! Це чарівне відкриття, яке може змінити ваше життя!"), (0,
                                            e.createElement)("p", {
                                                className: "font-normal text-base md:text-lg"
                                            }, "Поділіться з нами своєю електронною поштою, і ви відкриєте двері до свого переосмислення!"), (0,
                                                e.createElement)("p", {
                                                    className: "font-normal text-base md:text-lg"
                                                }, "Приготуйтеся підняти свою життєву гру на новий рівень!"), (0,
                                                    e.createElement)("p", {
                                                        className: "font-normal text-base md:text-lg"
                                                    }, "Якщо ви готові до змін, ми допоможемо вам їх здійснити!")), (0,
                                                        e.createElement)("div", {
                                                            className: `w-full md:w-1/3 flex justify-center items-center ${t < 768 && "hidden"}`
                                                        }, (0,
                                                            e.createElement)("img", {
                                                                src: At
                                                            }))), (0,
                                                                e.createElement)(jt, {
                                                                    windowwidth: t,
                                                                    step: a,
                                                                    setStep: i,
                                                                    currentStyle: s,
                                                                    dreamStyle: n,
                                                                    email: r,
                                                                    setEmail: o,
                                                                    ipAddress: l,
                                                                    country: h
                                                                }))
                , Ot = a.p + "images/greentick.14cf6f0c.png"
                , Ct = ({ windowwidth: t }) => (0,
                    e.createElement)("div", {
                        className: "w-full flex justify-center items-center "
                    }, (0,
                        e.createElement)("div", {
                            className: "mt-28 w-full md:w-[650px] flex flex-col gap-5 items-center p-10 rounded-2xl bg-gradient-to-r from-[#78DE9540] to-[#FEFEFE1A]"
                        }, (0,
                            e.createElement)("img", {
                                src: Ot,
                                width: 106,
                                height: 106,
                                className: "mt-[-100px]"
                            }), (0,
                                e.createElement)("h2", {
                                    style: {
                                        fontFamily: "Roboto"
                                    },
                                    className: "text-xl md:text-[36px] font-bold text-center"
                                }, "Дякуємо ", t < 768 && (0,
                                    e.createElement)("br", null), " ", (0,
                                        e.createElement)("span", {
                                            className: "text-clientgreen"
                                        }, " за те, що поділилися!")), (0,
                                            e.createElement)("p", {
                                                className: "font-normal text-base md:text-lg text-center"
                                            }, "Ми раді бачити вас на борту, коли ви вирушаєте в цю захоплюючу подорож самопізнання та переосмислення."), (0,
                                                e.createElement)("p", {
                                                    className: "font-normal text-base md:text-lg text-center"
                                                }, "Перейдіть з нами від вашого поточного модного архетипу до бажаного стилю!")))
                , Nt = a.p + "images/vectorpurple1.8c358125.png"
                , It = a.p + "images/vectorpurple2.6c204e05.png"
                , Rt = a.p + "images/vectororange1.8148bb5d.png"
                , Ft = a.p + "images/vectororange2.557f64b4.png"
                , Lt = a.p + "images/vectorgreen1.04b60e44.png"
                , Pt = a.p + "images/vectorgreen2.16e59af7.png";
            kt().configure({
                apiKey: "patKhGMPAL2aUtgI7.3a33626ebf916e93789595a41ac84e801820b39b4e34eaac71e69fdc416b87c3"
            });
            const qt = kt().base("appkvaQayzRCLgEbk")
                , { render: Mt } = wp.element;
            document.getElementById("fatefashion") && Mt((0,
                e.createElement)((() => {
                    const t = (0,
                        e.useRef)(null)
                        , [a, i] = (0,
                            e.useState)(window.innerWidth < 768 ? 0 : 1)
                        , [s, n] = (0,
                            e.useState)(1)
                        , [r, o] = (0,
                            e.useState)(2)
                        , [l, h] = (0,
                            e.useState)(0)
                        , [c, d] = (0,
                            e.useState)("")
                        , [u, f] = (0,
                            e.useState)("")
                        , [p, m] = (0,
                            e.useState)("")
                        , [g, y] = (0,
                            e.useState)(window.innerWidth);
                    (0,
                        e.useEffect)((() => {
                            fetch("https://api.ipgeolocation.io/ipgeo?apiKey=50aab359d8bd4997a90e9391e541ea47", {
                                method: "GET"
                            }).then((e => e.json())).then((e => {
                                m(e.country_name),
                                    f(e.ip)
                            }
                            )).catch((e => {
                                console.log("Error:", e)
                            }
                            )),
                                g <= 768 && (document.getElementById("designimages").style.display = "none")
                        }
                        ), []),
                        (0,
                            e.useEffect)((() => {
                                const e = document.getElementById("subscribebutton").querySelector("a");
                                if (0 == l || 2 == l) {
                                    document.body.style.background = "linear-gradient(133.37deg, #FFFFFF 62.44%, #760BFF 191.39%)";
                                    const e = document.getElementById("subscribebutton").querySelector("a");
                                    e.style.borderColor = "#A362F6",
                                        e.style.color = "#A362F6"
                                } else
                                    1 == l || 4 == l ? (document.body.style.background = "linear-gradient(130.21deg, #FFFFFF 49.38%, #FF0B0B 259.13%)",
                                        e.style.borderColor = "#F97585",
                                        e.style.color = "#F97585") : 3 != l && 5 != l || (document.body.style.background = "linear-gradient(130.41deg, #FFFFFF 54.39%, #94D9A8 124.12%)",
                                            e.style.borderColor = "#6FC889",
                                            e.style.color = "#6FC889");
                                0 == l ? document.querySelector("#coloredheader h2").style.color = "#A362F6" : 1 == l ? document.querySelector("#coloredheader h2").style.color = "#F97585" : Array.from(document.getElementsByClassName("headerheading")).map((e => {
                                    e.style.display = "none"
                                }
                                ))
                            }
                            ), [l]);
                    let b = "Виберіть картку, яка найкраще відображає ваш ";
                    return b += 0 == l ? "поточний стиль" : "стиль вашої мрії",
                        b += " ",
                        (0,
                            e.createElement)(e.Fragment, null, (0,
                                e.createElement)(te, null), (0,
                                    e.createElement)("div", {
                                        id: "designimages",
                                        className: "w-screen overflow-x-hidden"
                                    }, 2 == l && (0,
                                        e.createElement)(e.Fragment, null, (0,
                                            e.createElement)("img", {
                                                src: Nt,
                                                className: "absolute right-0 top-0 z-[-1] opacity-40 mt-[-100px] mr-[-100px]"
                                            }), (0,
                                                e.createElement)("img", {
                                                    src: It,
                                                    className: "absolute right-0 bottom-0 z-[-1] opacity-40 mt-[-100px] mr-[-50px]"
                                                })), 4 == l && (0,
                                                    e.createElement)(e.Fragment, null, (0,
                                                        e.createElement)("img", {
                                                            src: Rt,
                                                            className: "absolute right-0 top-0 z-[-1] opacity-40 mt-[-100px] mr-[-100px]"
                                                        }), (0,
                                                            e.createElement)("img", {
                                                                src: Ft,
                                                                className: "absolute right-0 bottom-0 z-[-1] opacity-40 mt-[-100px] mr-[-50px]"
                                                            })), 5 == l && (0,
                                                                e.createElement)(e.Fragment, null, (0,
                                                                    e.createElement)("img", {
                                                                        src: Lt,
                                                                        style: {
                                                                            maxHeight: "90vh"
                                                                        },
                                                                        className: "absolute right-0 top-0 z-[-1] opacity-40 mr-32 mt-[-100px]"
                                                                    }), (0,
                                                                        e.createElement)("img", {
                                                                            src: Pt,
                                                                            style: {
                                                                                maxHeight: "60vh"
                                                                            },
                                                                            className: "absolute right-0 bottom-[100] z-[-1] opacity-40 mr-[-150px] mt-[170px] "
                                                                        }))), (0,
                                                                            e.createElement)("div", {
                                                                                className: `w-full flex flex-col text-[#464646] ${l < 2 && " md:mt-[-150px]"}`
                                                                            }, l < 2 && (0,
                                                                                e.createElement)(e.Fragment, null, (0,
                                                                                    e.createElement)(mt, {
                                                                                        windowwidth: g,
                                                                                        step: l,
                                                                                        scrollRef: t,
                                                                                        centerCard: a,
                                                                                        setCenterCard: i
                                                                                    }), (0,
                                                                                        e.createElement)("div", {
                                                                                            className: "w-full flex justify-center mt-2 " + (l > 1 ? "md:mt-10" : "md:mt-5")
                                                                                        }, (0,
                                                                                            e.createElement)(ae, {
                                                                                                text: "Підтвердити",
                                                                                                onClick: () => {
                                                                                                    0 == l ? (n(a),
                                                                                                        i(g < 768 ? 0 : 1)) : o(a),
                                                                                                        h(l + 1)
                                                                                                }
                                                                                                ,
                                                                                                step: l
                                                                                            }))), (2 == l || 4 == l) && (0,
                                                                                                e.createElement)(e.Fragment, null, (0,
                                                                                                    e.createElement)(wt, {
                                                                                                        step: l,
                                                                                                        currentStyle: s,
                                                                                                        dreamStyle: r
                                                                                                    })), 3 == l && (0,
                                                                                                        e.createElement)(e.Fragment, null, (0,
                                                                                                            e.createElement)(Ht, {
                                                                                                                step: l,
                                                                                                                setStep: h,
                                                                                                                currentStyle: s,
                                                                                                                dreamStyle: r,
                                                                                                                email: c,
                                                                                                                setEmail: d,
                                                                                                                ipAddress: u,
                                                                                                                country: p,
                                                                                                                windowwidth: g
                                                                                                            })), 5 == l && (0,
                                                                                                                e.createElement)(e.Fragment, null, (0,
                                                                                                                    e.createElement)(Ct, {
                                                                                                                        windowwidth: g
                                                                                                                    })), l >= 2 && 3 != l && l < 5 && (0,
                                                                                                                        e.createElement)("div", {
                                                                                                                            className: "w-full flex justify-center mt-10"
                                                                                                                        }, (0,
                                                                                                                            e.createElement)(ae, {
                                                                                                                                text: "Далі",
                                                                                                                                onClick: () => {
                                                                                                                                    h(l + 1)
                                                                                                                                }
                                                                                                                                ,
                                                                                                                                step: l
                                                                                                                            }))))
                }
                ), null), document.getElementById("fatefashion")),
                document.getElementById("fatefashionunsubscribe") && Mt((0,
                    e.createElement)((() => {
                        const [t, a] = (0,
                            e.useState)(!1)
                            , [i, s] = (0,
                                e.useState)("")
                            , [n, r] = (0,
                                e.useState)(!0)
                            , [o, l] = (0,
                                e.useState)(!1)
                            , [h, c] = (0,
                                e.useState)(!1);
                        return (0,
                            e.useEffect)((() => {
                                if (o) {
                                    let e = _t(i);
                                    r(e)
                                }
                            }
                            ), [i]),
                            (0,
                                e.createElement)("div", {
                                    className: "w-full flex flex-col gap-5 items-center"
                                }, (0,
                                    e.createElement)(te, null), (0,
                                        e.createElement)(vt, {
                                            value: i,
                                            setvalue: s,
                                            placeholder: "Enter your email",
                                            type: "email",
                                            purple: !0,
                                            valid: n
                                        }), t ? (0,
                                            e.createElement)(xt, null) : (0,
                                                e.createElement)("button", {
                                                    onClick: () => {
                                                        if (l(!0),
                                                            !_t(i))
                                                            return r(!1),
                                                                void ee.error("INCORRECT EMAIL");
                                                        const e = (new Date).toISOString();
                                                        a(!0),
                                                            qt("tblZOhGYOMmd498x8").create({
                                                                Date: e,
                                                                Email: i
                                                            }).then((e => {
                                                                a(!1),
                                                                    s(""),
                                                                    l(!1),
                                                                    r(!0),
                                                                    c(!0)
                                                            }
                                                            )).catch((e => {
                                                                console.error("Error creating record:", e),
                                                                    a(!1)
                                                            }
                                                            ))
                                                    }
                                                    ,
                                                    className: "w-full text-lg font-semibold drop-shadow-md bg-clientpurple py-2 px-10 flex flex-row justify-center items-center text-white rounded-full border-none"
                                                }, "Unsubscribe"), 1 == h && (0,
                                                    e.createElement)("p", {
                                                        className: "font-normal text-base md:text-lg"
                                                    }, "Будь ласка, знайдіть лист у вашій поштовій скриньці та підтвердіть відписку"))
                    }
                    ), null), document.getElementById("fatefashionunsubscribe"))
        }
        )()
}
)();
