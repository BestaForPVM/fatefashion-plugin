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
                    description: "Вона orients to the beautiful. Her clothing expresses sexuality and invitation.",
                    lightside: "She tends to compare herself to others; thus she might be correcting her image endlessly. Comparisons with others bring about a sense of superiority and inferiority at the same time. Usually, she will not accept a partner for whom she has to make an effort. She is more likely to be a sister to him, rather than a partner. Perfecting her own image is not for the sake of masculine attention but in pursuit of an inner ideal. A man remains unaccepted at the level of feelings, which has a profound effect on her relationship with him. She yearns for attention in all possible ways. Her Robotos are openly sexual, the skirts short, the cleavage deep, the pants tight and the colors bright - with high heels.",
                    shadowside: "Her attitude on the physical side of the world, and especially of her body, is negative. This woman might be highly superstitious or even God-fearing. Nevertheless, she will torture her body with various diets or spend all her savings on improving her body shapes. However, at the same time, this will not provide her with security and will definitely not improve her relationships with men. This woman might appear quite vulgar.",
                    image: dt
                }, {
                    name: "Відлюдниця",//2
                    description: "Шляхетна й самотня, постійно мучиться, намагаючись подолати тіні минулого. Її естетика – це в’янення та професійний успіх. Концентрується на внутрішньому світі, ховаючись у одязі як у внутрішній фортеці. Одяг призначений не підкреслювати винятковість, а ховати.",
                    lightside: "Відлюдниця відокремилася від світу, щоб знайти внутрішній шлях до концентрації на духовному житті. Її приваблюють каміння, вона вивчає їхню енергетику. Цікавиться галузями знань, які вимагають серйозного вивчення. Об'єднує в собі глибокі емоційні переживання з високим рівнем знань, набуваючи ясності, сили та здатності до самоприйняття. Служить власній творчості. Її стиль оригінальний і унікальний – наче вона вкрита коконом. Переважають чорний колір, асиметричні лінії, мінімум аксесуарів та каміння.",
                    shadowside: "Тікає від суспільства через страхи. Відмовляється від допомоги, замикається у власному світі, наповненому минулими «подвигами», гнівом через втрату популярності чи страхом старіння. Вибирає мішковатий та неохайний одяг.",
                    image: oe
                }, {
                    name: "Правителька",//3
                    description: "Холодна аристократичність поєднується з витонченим елегантом. Має тонкий, високий смак, ставлячи зразок для наслідування. Її стиль – бездоганна вишуканість.",
                    lightside: "Випромінює життєву енергію та королівську жіночність. Володіє організаторським талантом, створюючи атмосферу для розвитку потенціалу оточуючих. Вміє підтримувати порядок у домі, країні, світі. Пильно дбає про гардероб як важливу частину іміджу. Розуміє, як одяг підкреслює статус. Вибирає натуральні дорогі тканини з гармонійними кольорами та чіткими кроями. Аксесуари використовуються обережно. Поведінка завжди королівська.",
                    shadowside: "Схильна до тиранії. Нав'язує суворі правила не лише собі, а й іншим. Контролює через дріб'язкові вимоги. Може стати пихатою при запереченні її влади. Одяг церемоніальний, закритий, що підкреслює суворість – ніби в'язниця.",
                    image: le
                }, {
                    name: "Мисткиня",//4
                    description: "Стиль комбінує елегантність та справжню жіночу сексуальність. Силует підкреслений. Обирає яскраві кольори та різні акценти.",
                    lightside: "Мистецтво надихає бачити прекрасне, ігноруючи буденність. Стиль – доля, яка веде на вершину через прийняття себе. Використовує елегантні стильні елементи, підкреслюючи жіночність. Обирає якісні тканини, сукні з чіткими лініями, підкреслюючи природну красу без надмірності.",
                    shadowside: "Може стати символом залежності від слави. Талант використовує для маніпуляцій. В образі переважає вульгарність. Схильна до експлуатації мистецтва для особистої вигоди, використовуючи творчість як інструмент контролю.",
                    image: he
                }, {
                    name: "Суддя",//5
                    description: "Уніформа та андрогінність з приглушеними кольорами. Стиль позбавлений гендерних ознак, акцент на функціональності.",
                    lightside: "Відзначається ясністю думок, об'єктивністю та принциповістю. Часто займає керівні посади. В одязі – строгі костюми з мінімалістичним дизайном, відсутність декоративних елементів. Підкреслює професійний статус через лаконічність.",
                    shadowside: "Безсердечно вимагає дотримання правил навіть у шкоду інтересам людей. Стиль стає нудним та репресивним, нагадуючи форму військовослужбовця. Використовує одяг як інструмент дистанціювання.",
                    image: ce
                }, {
                    name: "Прокурорка",//6
                    description: "Перфекціоністський стиль з патологічною увагою до деталей. Втілює жінку, яка володіє владою виносити вироки.",
                    lightside: "Шукає абсолютну істину в кожній ситуації. Вимагає від себе та інших найвищих стандартів. Тканини завжди ідеально випрасувані, шви – безупречні. Використовує одяг як продовження свого авторитету.",
                    shadowside: "Трансформує справедливість у фанатизм. Не терпить найменших відхилень від норм. Використовує дрібні недоліки в одязі оточуючих як привід для критики. Власний гардероб нагадує колекцію мундирів.",
                    image: de
                }, {
                    name: "Захисниця",//7
                    description: "Елегантний жіночий стиль з акцентом на практичності. Відсутні зайві деталі чи прикраси.",
                    lightside: "Освічена та емоційно зріла, завжди готова надати допомогу. Носить класичні костюми з прямими лініями, однотонні блузи. Мінімалізм у вбранні підкреслює її зосередженість на суті, а не формі.",
                    shadowside: "Використовує образ «рятівниці» для маніпуляцій. Навмисно створює ситуації, де інші відчувають себе зобов'язаними. Одяг стає засобом демонстрації моральної переваги.",
                    image: ue
                }, {
                    name: "Модниця",//8
                    description: "Експериментує з останніми трендами, поєднуючи сміливість з ексцентричністю. Постійно оновлює гардероб.",
                    lightside: "Культурна та обізнана в мистецтві, вміє створювати гармонійні образи. Цінує авторський дизайн. Носить різноманітні стилі – від авангарду до ретро, демонструючи високий рівень стильової грамотності.",
                    shadowside: "Перетворює моду на ідола. Використовує знання про тренди для знецінення стилю інших. Схильна до інтриг та поширення неправдивої інформації про конкуренток.",
                    image: fe
                }, {
                    name: "Поетеса",//9
                    description: "Витончений стиль з елементами романтизму. Переважають м'які драпірування та природні тканини.",
                    lightside: "Мрійлива натура з глибоким внутрішнім світом. Відкрита натхненню, пише вірші та прозу. Носить довгі сукні з шифону, вовняні кардигани, використовує пастельні тони. Образ доповнюють літературні алюзії.",
                    shadowside: "Перетворює творчість на саморуйнівний процес. Використовує поезію для маніпуляції почуттями. В одязі – безладні комбінації, що відображають емоційні кризи.",
                    image: pe
                }, {
                    name: "Екзорцистка",//10
                    description: "Містичний стиль з елементами езотерики. Довгі плащі, капюшони, амулети з камінням.",
                    lightside: "Володіє надзвичайною інтуїцією та психічними здібностями. Використовує одяг як захисний бар'єр. Переважають багряні, індіго та чорні тони. Аксесуари мають символічне значення.",
                    shadowside: "Захоплюється окультними практиками до небезпечного рівня. Використовує містичні символи в образі для залякування. Гардероб нагадує театральні костюми.",
                    image: me
                }, {
                    name: "Гордовита Пасербиця",//11
                    description: "Амбіції та потреба у високому статусі виражаються через одяг. Віддає перевагу дорогим тканинам, яскравим кольорам та хутру.",
                    lightside: "Відчуває справжнє щастя через свою безтурботність. Знаходить задоволення у приналежності до вищого суспільства. Як подруга, допомагає подолати внутрішні страхи. Квітуче від уваги. Одягається розкішно, вибираючи виключно відомі бренди та якісні тканини. Аксесуари завжди ідеально поєднуються з одягом. Вона яскрава, смілива та помітна.",
                    shadowside: "Глибоко приховані страхи під зовнішньою маскою щастя. Пихата та маніакально захоплена брендами. Ставиться зверхньо до тих, хто не відповідає її статусу.",
                    image: ge
                }, {
                    name: "Детективка",//12
                    description: "Пристрасть розкривати справжнє обличчя людей. Грає за правилами. Її одяг завжди чистий та охайний. Образ близький до ідеального. Тканини та крій високоякісні. Використовує ахроматичні кольори.",
                    lightside: "Швидко орієнтується у ситуаціях. Прагне розплутати будь-які складності. Використовує спостережливість та інтуїцію. Допомагає іншим побачити реальність, а не ідеалізований образ. Стиль - це елегантність і суворість. Обожнює костюми, але уникає будь-яких принтів. Одяг пошитий з дорогих натуральних матеріалів.",
                    shadowside: "Надмірно обережна та підозріла, через що втрачає можливі. Схильна до вовеїризму. Може навмисно підігравати інформацію. Може мати тенденцію до руйнування пар. Її зовнішність надто сувора та підозріла.",
                    image: ye
                }, {
                    name: "Містикиня",//13
                    description: "Мудрість у жіночій формі. Рухи плавні, м'які та благородні. Стиль ретельно жіночний. Віддає перевагу всесвітньо визнаним якісним тканинам - шифону, шовку, атласу, оксамиту тощо.",
                    lightside: "Шукає трансцендентного досвіду. Прагне звільнитися від пасток свідомості. Відкрита до космосу та його потоків. Вивчає нумерологію, аналіз снів, стародавні міфи. Одягається дорого та вишукано з романтичними елементами. Носить ювелірні вироби з дорогоцінних металів.",
                    shadowside: "Може марення про зв'язок з божественністю. Її одяг часто не відповідає контексту ситуації. Може стати надмірно захопленою окультними практиками.",
                    image: be
                }, {
                    name: "Священиця",//14
                    description: "Втілення доброти, що пропонує допомогу та духовну підтримку. Одяг у монохромних тонах. Скромно вдягнена у темні кольори.",
                    lightside: "З'являється в моменти смутку, болю чи розпачу. Не дозволить залишитися на самоті з горем. Її допомога полягає у переході до більш зрілої філософії життя. Майже не звертає уваги на одяг, як правило, носить темні сукні. Єдиною прикрасою може бути маленький хрестик.",
                    shadowside: "Надто строга. Все має відбуватися за правилами або ритуалами. Постійно моралізує. Гардероб складається з однойменних нудних речей, які носить до дір.",
                    image: we
                }, {
                    name: "Винахідниця",//15
                    description: "Дуже орієнтована на деталі у своєму одязі. Віддає перевагу складному геометричному крою. Її стиль - це поєднання скульптурного та архітектурного.",
                    lightside: "Орієнтована на порядок, трезвий розум та дисципліну. Її концепції конкретні. Вперта, рішуча та відповідальна. Вміння генерувати практичні вирази для творчої енергії. Використовує геометричні крої, які підкреслюють фігуру.",
                    shadowside: "Впертість, млявість та бажання безупинно удосконалювати. Може приймати рішення на основі механіки без урахування емоційних наслідків. Деталі часто перевантажують її образ.",
                    image: ve
                }, {
                    name: "Фатальна Жінка",//16
                    description: "Жінка, до якої чоловіки не можуть не обертатися. Викликає дві реакції у жінок: захопленя чи ненависть. Її образ говорить сам за себе. Сексуальність підкреслена переважно чорним та червоним кольорами.",
                    lightside: "Відображає стан душі, який можна назвати 'холоднокровністю'. Її еротична енергія поневолює чоловічі серця. Її тіло красиве, а силует сповнений чуттєвості. Віддає перевагу сукням перед брюками. Високі підбори важливіші за комфорт.",
                    shadowside: "Чуттєвість може проявлятися хибно. Здатна блокувати свої почуття, стаючи злою егоїсткою. Її еротизм надто відвертий.",
                    image: _e
                }, {
                    name: "Творчиня",//17
                    description: "Довірлива та стильна, з недосяжною сексуальністю. Вибирає стримані лаконічні кольори, розбавлені одним-двома акцентами. Любить чорний. Не слідує за модними тенденціями, бо створює їх сама.",
                    lightside: "Переконана, що майбутнє в її руках. Здатна бути одночасно вчителем і шукачем. Чим більше вона ділиться своєю творчістю, тим більш відомою стає. Підтримує зовнішню позу та впевнений стиль рухів. Одяг підкреслює фігуру, навіть коли він вільний. Завжди носить якісне взуття, часто на високих підборах.",
                    shadowside: "Постійно відчуває потребу рухатися вперед. Завжди поспішає та не вистачає часу. Може не вистачати терпіння завершувати розпочаті проекти. Схильна до шопоголізму.",
                    image: xe
                }, {
                    name: "Руйнівниця",//18
                    description: "Авангардна жінка, екстравагантна та не схожа на інших. Насміхається над панівною модою, руйнуючи її та створюючи власний стиль із уламків.",
                    lightside: "Жага до життя виявляється в ентузіазмі та пристрасті. Її внутрішня енергія руйнує застарілі ритуали та вірування, звільняючи місце для нового життя. Протестує проти масових трендів. Стиль має бути індивідуальним, концептуальним, наповненим бунтарським духом.",
                    shadowside: "Хоче все і відразу. Якщо не виходить, стає агресивною. Може руйнувати мрії інших. Її стиль - абсолютний кіч.",
                    image: Se
                }, {
                    name: "Визволителька",//19
                    description: "Найактивніша жінка, завжди готова до ризикованих пригод. Її жіноча елегантність сміливо використовує чоловічі деталі одягу - це її візитівка. І стиль, і макіяж бездоганні. Аксесуари - це розкішні, якісно виготовлені предмети.",
                    lightside: "Втілює безмежну впевненість у собі. Талант організатора, який прагне лідерства. Любить життя та його радощі - майно, владу, велич. Створює атмосферу розквіту та стабільності.",
                    shadowside: "Може стати тираном. Використовує владу для контролю над іншими. Її стиль часто надто консервативний.",
                    image: ke
                }, {
                    name: "Коханка",//20
                    description: "Відверто сексуальні образи з мереживом та оксамитом. Висока увага до деталей.",
                    lightside: "Вірна та пристрасна. Спокуслива, але не вульгарна. Має чуттєвий, але контрольований образ. Вибирає якісні матеріали, що підкреслюють жіночність. Завжди дотримується тонкої межі між сексуальністю та вишуканістю.",
                    shadowside: "Може стати емоційно залежною. Використовує сексуальність для маніпуляцій. Її образ може стати надто провокаційним.",
                    image: Te
                }, {
                    name: "Воїтелька",//21
                    description: "Військовий стиль, що поєднує функціональність із чіткими лініями. Основними матеріалами є бавовна, шерсть та технічні тканини. Кольорова гамма — камуфляжні та темні тони.",
                    lightside: "Втілює енергію та підприємливість. Її стиль відображає дисциплінованість і здатність до швидких рішень. Основу гардеробу складають універсальні речі: куртки-бомбери, комбінезони, чіткі вертикальні лінії крою. Взуття завжди зручне і практичне. Майстерно поєднує жіночність із функціональністю військового стилю.",
                    shadowside: "Зловживає жорстокістю під виглядом прямої мови. Її агресивність виражається через надмірну маскулінізацію образу. Може свідомо вибирати одяг, що залякує оточуючих.",
                    image: Ee
                }, {
                    name: "Розбійниця",//22
                    description: "Руйнівниця соціальних норм через одяг. Шкіряні куртки, розрізані футболки, агресивні принти та татуювання як частина образу.",
                    lightside: "Справжній символ свободи. Її стиль — це сміливі експерименти з різними напрямами: від панку до гранжу. Активно використовує винтажні речі, переробляючи їх на свій лад. Головні атрибути — шкіра, метал, великі черевики.",
                    shadowside: "Гнів стає її основним мотиватором. Одяг перетворюється на броню, яка попереджає: «Не підходь!». Може свідомо шокувати провокаційними комбінаціями.",
                    image: je
                }, {
                    name: "Алхімікиня",//23
                    description: "Стиль бохо-шик із природними тканинами та етнічними мотивами. Переважають земляні та яскраві кольори: охристі, терракотові, глибокі сині.",
                    lightside: "Здатна трансформувати енергію через інтуїцію. Вбирається як мандрівниця між вимірами. Основні елементи — широкі спідниці, довгі кардигани, багатошаровість. Використовує натуральні матеріали: льон, шовк, вовну.",
                    shadowside: "Загублюється у власних сумішах стилів. Елементи різних культур поєднуються без глибинного розуміння. Образ стає штучним через надмірність деталей.",
                    image: Ae
                }, {
                    name: "Гедоністка",//24
                    description: "Сміливий показ тіла через відверті силуети та яскраві кольори. Матеріали — шовк, атлас, прозорі тканини. Акцент на декольте та спинах.",
                    lightside: "Навчає любити своє тіло без сорому. Використовує золоті аксесуари, дорогоцінне каміння. Сукні підкреслюють жіночні форми без вульгарності. Майстерно балансує між відвертістю і вишуканістю.",
                    shadowside: "Перетворює насолоду на нав'язливу ідею. Може ексгібіціоністувати через надто відвертий одяг. Втрачає почуття міри в демонстрації статевої привабливості.",
                    image: He
                }, {
                    name: "Невольниця",//25
                    description: "Романтичні бліді тони (пепельно-рожевий, блакитний) у поєднанні зі строгими формами. Тканини — шифон, оксамит.",
                    lightside: "Демонструє емоційну вразливість через одяг. Вибирає ніжні пастельні відтінки, дрібні квіткові принти. Стиль — м'який, повітряний, з елементами історичних костюмів.",
                    shadowside: "Надмірна жертвенність у стилі. Одяг стає символом страждання — надто вільний, немов для непосильного тіла. Забороняє собі будь-яку яскравість.",
                    image: Oe
                }, {
                    name: "Shift Changer",//26
                    description: "Улюбленим одягом є довгий, драпірований одяг, оригінальні головні убори, схожі на тюрбани. Переважають пісочний, коричневий із золотом або низка відтінків. Східна оригінальність, кілька прикрас і каміння складають її вбрання",
                    lightside: "Видатна здібність - переходити через різні рівні свідомості та допомагати іншим переступити через їхній перший поріг. Загалом вона має здатність бачити потенціал і можливості в усьому. Це здатність допомагати у зміні фізичної форми, образу чи внутрішнього світу жінки. Рух від тієї, якій не вистачає довіри до себе, до тієї, яка належить до тих, хто впевнений у собі і незалежний. У неї глибоко пронизливий погляд, і люди хочуть їй довіряти. Стиль Shift Changer здебільшого передбачає натуральні, багаті матеріали з невеликою кількістю аксесуарів, окрім вже згаданого тюрбану та вільно спадаючого довгого одяг.",
                    shadowside: "Хоча вона має здатність змінювати власну фізичну форму, вона може втратити терпіння, коли справа доходить до допомоги іншим. Вона здатна негативно оцінювати навколишнє середовище і пропонувати іншим відмежуватися від інших і підкоритися лише її керівництву. Ця жінка може намагатися нав'язати іншим свій власний спосіб життя, ігноруючи будь-які аргументи проти. Вона прагне досконалості в одязі, тому йому може бракувати природності. Погляд у неї «пронизливий».",
                    image: Ce
                }, {
                    name: "Ненажера",//27
                    description: "Виразно ретро стиль із натяком на театральність. Великі кольорові плями, епатажні аксесуари, яскраві макияжі.",
                    lightside: "Несе радість і легкість у буденність. Її гардероб — це калейдоскоп винтажних знахідок. Особливість — комбінування непоєднуваного: пір'я з джинсою, стрази з грубими взуттям.",
                    shadowside: "Жадоба до всього яскравого стає маніакальною. Втрачає стиль у погоні за увагою. Образ перевантажений елементами.",
                    image: Ne
                }, {
                    name: "Guide",//28
                    description: "This person is an inspirer, a catalyst for new discoveries. Natural materials predominate. She values bright hues and bravely combines various motifs, geometric patterns and plant-like and psychedelic elements.",
                    lightside: "She has a sensitive nature; she is loyal and honest. However, at the same time, she is as strong as a boulder. Energy, integrity and creativity describe her. She has initiative. This woman inspires others as she enacts her own vocational calling. Upon meeting her, discoveries, consciousness expansion and newly opened opportunities will meet you. Some sort of details you’d never noticed before suddenly light up in different colors, pulling you into a new, still unknown field. An invitation awaits you to an adventure, which requires courage and determination, consisting of a bright stroke in the grayness of the everyday atmosphere. Clear-cut lines form the silhouette covered in natural cloths and orderly, geometric patterns.",
                    shadowside: "A transmittal of spiritual experience might squeeze out some financial gain, and that could prove overwhelming. She might be overly pedantic in her dress as well as in life.",
                    image: Ie
                }, {
                    name: "Athlete",//29
                    description: "This woman is especially concerned with her own body. She is dynamic and full of energy. Her sporty clothing emphasizes her figure. She selects clothing made for athletics and comfortable footwear. You are likely to meet her in a sports gym.",
                    lightside: "She values life as an entertaining challenge or as a test. Will she have sufficient energy for it? The maximalism inherent in her thinking manifests by heated arguments and fierce discussions, the kind teenagers like between themselves and against adults. Demonstrations of her body couple with stubbornness. She is rather quick to feel insulted. A good deal of time gets wasted in her attempts to understand how to win and how to earn or get more money and/or attention. Personal enlightenment and a strong spirit are the sides she is developing.",
                    shadowside: "She egoistically exploits her athletic capabilities. Her sense of inviolability and justice is false. The commitment to achieve physical limitations comes at the expense of health. She walks around everywhere wearing only her sporty style, paying no attention to the surroundings.",
                    image: Re
                }, {
                    name: "Vamp",//30
                    description: "This woman leads to the mysterious kingdom of the moon, of night, and into the dark world of the soul. Gothic style elements, straight silhouettes and flowing lines mark her clothing. Black is the predominate color.",
                    lightside: "Romanticism, restless imagination and artistic fantasy - these describe her. She is extravagant and partly aristocratic. Black is her predominate color mixed with white, red and purple elements. Leather, lace, satin and organza fabrics are her markings. Makeup against a dark backdrop is showy.",
                    shadowside: "She opens a road into a bottomless soul, which may be hiding fear, distrust, nightmares and gloomy prophesies. Mistrust in tomorrow and in one’s own knowledge and abilities can appear when some esoteric group exchanges itself for real life. Her style is quite gloomy that can call forth a threat of fear.",
                    image: Fe
                }, {
                    name: "Witch",//31
                    description: "This woman is especially attractive, as a woman and as a mystery. Her slightly upsetting style is unusual, marked by courage, extravagance and dark colors.",
                    lightside: "An especially strong spine characterizes this woman. She will remain true to herself under any sorts of circumstances. While she may be outwardly upsetting, this is how she safeguards her inner world along with her own personal boundaries. She teaches others not to fear being unpleasant, if necessary, and loudly state NO, especially to men. The outlook on life is conservative. Red hair in one or another hue of brightness is favored, though the hair could be black. Uncommon items of dark-colored, multi-layered clothing attract her. This woman enjoys experimenting with her image.",
                    shadowside: "She is overly concerned about tomorrow. This manifests in selfishness, thriftiness and maliciousness, which mask her inner fear. She doesn’t interact. Instead, she hopelessly strives to squeeze some last benefit from the past instead of paving a new path for herself, along with new possibilities. The reason she doesn’t want to recognize new possibilities is that she doesn’t think they are reliable. It is better to continue in the activities, relationships or lifestyle to which she is accustomed, even if these are pitiful, and she no longer enjoys them. She doesn’t love her husband or children or, in general, people. Her talks are spiteful and these generate a negative atmosphere. She wears disorderly, long ago worn-out clothes, which are practically rags.",
                    image: Le
                }, {
                    name: "Healer",//32
                    description: "Her inner harmony runs deep, and her soul is strong. Naturalness and ethnicity predominate in her style, which includes cloaks and chunky pieces of jewelry. She wears a minimum of makeup and a natural hairdo. The materials she uses are natural and include stones.",
                    lightside: "The power of a healer comes because of a harmonious interaction between the conscious and subconscious. The expression of such a balance includes a vital power, courage and passion. Passion manifests as a desire to serve others by restructuring their body, mind and soul. She has the ability to turn pain into healing. Her purpose is not for teaching how to hide instincts and, often enough, frightening, archaic forces are behind a mask of doing good. Rather, it is to learn how to tame that power with love, tenderness and persistence. This is the way to gain control over stored energy, which, up to now, she had squandered on handling darker instincts and other forces. She chooses “motherly” clothing, often containing nationalistic motifs. Her clothing provides her with additional trust along with a desire to have a good cry on her knees. The style is natural but bright, emphasized by ethnic accessories.",
                    shadowside: "She could exploit those who need help. Plus she wears the same clothes day in and day out.",
                    image: Pe
                }, {
                    name: "Mother",//33
                    description: "A do-gooder with experience, she maintains orderliness and traditions. Comfort and practicality are the main aspects of her apparel - T-shirts, slacks, jeans, shirts and blouses, usually adding a blouson style shirt/jacket.",
                    lightside: "Goodness, reliability and realism describe her along with her diligent and productive work. She tends to be sincere, patient and teaching, marked by unconditional love. Her joy comes from giving new life. Her clothes are simple, neat, practical, thrifty and universal, which have the features of a uniform.",
                    shadowside: "Hyper-care, control, destructive love and repression of children’s personalities could overtake her. She seemingly challenges those who want to become independent with guilt feelings. Of greatest importance to her when she selects her clothing are children, work and country. She is likely to buy her child an extra pair of shoes rather than some needed piece of apparel for herself. Frequently she will wear out clothing already used by others. The clothing in her closet comes in two categories - old items for “home” and those for wearing “out to visit” but not by their actual designation. She tends to choose clothes in a style hiding her body. Tights or leggings, stretched out knit tops and a formless jacket would constitute her choices.",
                    image: qe
                }, {
                    name: "Companion",//34
                    description: "This true friend always arrives to help. Her clothes are modest, minimalistic and practical. The style is unassuming.",
                    lightside: "She is reliable, stable, loyal, persevering and selfless. She’ll go to the defense of her friend with all she’s got. Your success will prompt her sincere happiness. She will stay in her friend’s shadow, like a bridesmaid to the bride, and never steal the limelight. Her taste tends to be like her friend’s taste. She is sensitive to the needs of others and is easily hurt herself. The style of her selection will be modest minimalism. It will be practical with sporty elements. Shoes will be comfortable and sporty. She wears very little jewelry.",
                    shadowside: "She lacks a personal identity. Betrayal and a misuse of trust may mark her. She is unable to choose her own clothing; instead, she buys it only under the advice of her friend who is her shadow. Frequently she not only lacks her own opinion but her own style as well. Her apparel reflects this. Secretly she is jealous of her friend and daydreams about sleeping with her boyfriend.",
                    image: Me
                }, {
                    name: "Cinderella",//35
                    description: "Her joy comes from serving others with love and an open heart. A dry kind of minimalism and Puritanism describe her choice in clothing, which are beyond the boundaries of seasonality or time.",
                    lightside: "She stands at the threshold. Professional and deft in crafts, trade or some other practical activity are features that are likely as not to bring her rewards. People who want to better or improve their lives are welcome to approach her. As soon as all the information she has gathered becomes qualitative enough, spiritual growth becomes possible, and she will find her way to the truth at long last. Her apparel tends to be maximally functional and reserved. Accessories are quite sparse. Slacks, not skirts, are her preference. Hues of grays, black and white predominate.",
                    shadowside: "Obedient and passive, she does not have an opinion of her own. She is likely to believe what people in higher social positions say. A lack of money is the excuse she uses to keep from changing her lifestyle and destiny. She is likely to wear whatever happens to be at hand.",
                    image: De
                }, {
                    name: "Good Fairy",//36
                    description: "The soul, romanticism, nature, lightness and love are of importance. She wears her clothing falling freely. It is comfortable and composed of multiple layers. The colors she likes are blues on a backdrop of green and white.",
                    lightside: "Her joy of life comes from acquired concord, a harmony bursting from the depths of her soul. She grasps the inner nature and the surrounding forces in life, which allow her to make use of them in the aid of other people. This provides her with strength during times of personal crises. She inspires and redirects by acting with love, never expecting thanks. The clothing she selects is vintage, freely flowing, comfortable and multi-layered.",
                    shadowside: "She often forgets herself. Stagnation ensues when a person stops upon reaching some achievement. Life proceeds in a dream world. She actually hopes the one she saved will do the same for her. Since she doesn’t pay much attention to her clothing, she appears old-fashioned.",
                    image: ze
                }, {
                    name: "Beggar",//37
                    description: "A spiritual meaning hides behind the external protest. Dress matches the unmatchable, leans toward the eclectic and hangs loose.",
                    lightside: "The woman who doesn’t much care which way something is resolved is, in a certain sense, a player. She is capable of adapting to life’s challenges and go through its ups and downs without becoming overly excited. Her features are agility, communicability and good-natured spontaneity without trivializing matters or, actually, not having or hiding an opinion. Her tendency is to wear what appears messy at first glance - stretched out and overly sized sweaters, worn and holey jeans, inaccurate cuts and asymmetrical contours. Some usual match is lacking in her style. Nevertheless, even if she finds she has to wear donated clothes or those bought at the second-hand, Humana shops, she will still be stylish in some unusual manner. This is a fairy tale heroine in disguise, though she had originated from an upper crust social status.",
                    shadowside: "Dependency on others happens due to her not making the extra effort. She doesn’t allow herself to get any clothing, even when she has the money for it. Gifts and pieces left over from other family members make up her apparel. She can be greedy.",
                    image: Ue
                }, {
                    name: "Mentor",//38
                    description: "Being oneself is an art. Wisdom and experience must be transmitted. Her selection consists of ready-made clothing for the matter-of-fact woman - unpretentious and unassuming, the kind that doesn’t go out of style in one season.",
                    lightside: "She is harmonious and balanced exuding goodness and a calmness of the spirit. She transmits wisdom and improves her schoolchild character. Accepting yourself as you are - that’s her motto. It takes wisdom to live one’s own life and remain unafraid of one’s own forms. Support is unnecessary, so there is no need to look for it. A suitable style involves seriousness with subtlety and simplicity. Priority clothing selections are for good quality items. She dresses tastefully and does not stand out in a crowd. It is a classic look insubordinate to the passage of time. The key to apparel choice involves the cut and the material, which must be ideal. The cloth is always high quality with an excellent cut and peaceful colors.",
                    shadowside: "She won’t allow the schoolchild to leave behind the image of a learner. Errors in style can make her overly strict. Transferring fake teaching is a way to resolve one’s own problems at the expense of others. Sexual urges could prompt the exploitation of learners for satisfaction of one’s own. Her clothing is also likely to have sexual connotations, like a deep cleavage or overly slit skirt.",
                    image: Be
                }, {
                    name: "Slave",//39
                    description: "Reconciliation and obedience are her features. Her clothing is modest with an open décolleté and a choker. The style of apparel is always the same indicating a preference for dresses. Colors are muted. She wears an item of jewelry and an element of clothing similar to a collar frequently.",
                    lightside: "Materially everything is usually OK. A caretaker blesses her by allowing her to be disinterested about worries. She is generous and wants to help. Even though she is a slave, she radiates warmth and goodness for anyone who needs it. She accepts what she cannot change by her obedience. Uniformity characterizes her apparel. The colors tend to darkness, and her silhouette is semi-formfitting. Although she wears high-heeled shoes, they will always be comfortable. Her accessories include purses along with various dress and neck scarves.",
                    shadowside: "Her personal relationships are out of balance. There is a fear of not meeting expectations. The fear of making a decision on her own will cause her to hand over her own willpower to some outside authority. Subconsciously she may be yearning for sexual submission. Her clothing selections are often dependent on her husband’s choice.",
                    image: Ge
                }, {
                    name: "Nerd",//40
                    description: "The fashion is tasteless. She dresses unattractively with whatever she has at hand. The array of clothing appears at random. 'The only reason I look unattractive is because I like comfort,' states America Ferrera.",
                    lightside: "Information and the secrets of the universe have an endless attraction for her. Her greatest passion is either work or studies. She could feel an entirely natural excitement and a lack of self-confidence, when going through the growth process involved in moving from an old profession to a new one. Time is always lacking for shopping to search for apparel.",
                    shadowside: "She could feel miserable, unhappy and rejected due to an undefined situation and a subjective fear of losing support beneath her feet. Diving fully into work, books or studies, she voluntarily disassociates herself from her personal life. Her clothing will not display even the slightest hint of femininity or sexuality.",
                    image: $e
                }, {
                    name: "Martyr",//41
                    description: "She has an internal conflict. On one side, she will disguise herself, whereas, from the other side, she will provoke attention. Her clothing reflects this by the use of closed off outer garments and polo neck wear. On the other hand, some brightly noticeable detail, some animalistic drawing or print will make her wear distinguishable. Stiletto heels are her choice in shoes.",
                    lightside: "On the surface, it may seem she has gotten stuck in some dead end. Nonetheless, beyond this external immobility, there are hidden a necessity and possibility to rethink one’s life and, consequently, incorporate the deepest of changes. This woman is unendingly patient. She will often serve as an example of strength to others. There is a mere hint in her apparel about her sexuality highlighted by some sort of accented detail, drawing or footwear.",
                    shadowside: "She is tied down to feeling sorry for herself. Even when her suffering is mindless, she will be proud of it. Stagnation or cessation in personal development marks her. She complains to the outside world, never understanding that the reason is internal, that it is her own choice. Rarely will she ever feel happy. Even when her figure is ideal, she will be afraid to be misunderstood. Thus she will hide behind darker colors, closed off outer garments and clothes that will not show off her form.",
                    image: Ve
                }, {
                    name: "Storyteller",//42
                    description: "Creativity shines by images and symbols. Multiple layers, naturalness and vividness make up her style.",
                    lightside: "This woman is filled with creative energy. The stories she tells and the symbols she displays provide her with a chance to try out and express her life. Her efforts are meant to make the world better. She helps to take a look into their own inner world, glance around and find opportunities not yet tried out for changing a situation that has formed. This has less to do with the material world. Spirituality comes first. Success does not rain down from the sky; it must be discovered. It is also entirely possible that the search will require painstaking work, the same as it would take to find a treasure in a grape plantation. Her apparel tends to naturalness and comfort. It is multi-layered. Fabrics are natural in multiple textures. Pronounced accessories finish off her look.",
                    shadowside: "She may create tales that are harmful to others. Her life exists in her fantasies. She may dress oddly and even rather comically in a variety of colors.",
                    image: Ke
                }, {
                    name: "Penny-pincher",//43
                    description: "Her clothing expresses creativity and individuality. These seem to fall alongside fashion. It is a cult of vintage.",
                    lightside: "She is a creative personality, so her style is an expression of personal individuality. Her ability involves distinguishing the real from the unreal. The earthy pathways are the ones she walks. She always finds the means to implement her own ideas and whims. The personage is loveable but not very reliable. Sometimes she disappoints herself and her intimates. At times she is impatient and unwilling to enact her responsibilities. The gift of entrepreneurship and creativity is hers, and she can turn anything into gold. Her happiness comes from exchanging life’s secrets and experiences with others. She pays no heed to the latest in fashion trends since she has her own understanding about style. Vintage and unisex are valued for apparel. Her collection of clothing is minimal. She appreciates certain kinds of jewelry.",
                    shadowside: "She accumulates money and emotions. An unnecessary stubbornness, lack of sensitivity and penny-pinching characterize her. A fear haunts her that she will lose what she has, even when her belongings are of little value. She will be stingy with money for herself, even for clothing. Some kinds of old-fashioned and out-of-fashion garments make up her apparel.",
                    image: Ye
                }, {
                    name: "Good Samaritan",//44
                    description: "She cares about others, the world and ecology. Her philosophy on consumerism is minimalistic. Items of apparel are ordinary, usually consisting of jeans, blouses, T-shirts and sports shoes.",
                    lightside: "A person who is always ready to help, she is generous and tolerant. Talk is not about some short-term impulse of demonstrative chivalry but about inherent features of character, the natural and the constant. She empathizes with those who have fallen on hard times and she is prepared to sacrifice. She assists others in discovering honorable ways to use their knowledge and abilities. With her, there are no constraints about others possibly being more intelligent than she is who might take over her ideas. She pays no attention to clothing and dresses very simply. Her apparel will probably consist merely of jeans, sports shirts, sports shoes and sweaters. You could easily run into such a woman among groups of volunteer workers.",
                    shadowside: "Her satisfaction and recognition of you come only for the help you’ve offered to her personally. She blames those who, in her opinion, live overly egoistically. Her apparel is demonstratively minimalistic.",
                    image: We
                }, {
                    name: "Networker",//45
                    description: "She connects people and processes. Her style is orderly, laconic and simple. Matches to her apparel are those that understandably raise her trustworthiness. Everywhere she goes, she is accepted as 'one’s own'.",
                    lightside: "People’s fates interweave due to her. She strengthens unity as she disseminates information. She gathers a circle of the like-minded around herself. Relationship form due to her talent. Upon taking control of her empathy, she calls forth trustworthiness easily. She embodies a yearning to have ownership, to be convinced about the future and realistic values and to be in harmony with the surrounding reality. The ability to recognize what is real and what isn’t and what is worth doing and what isn’t comes from her strong senses and instinct. Her sense of timeliness is excellent: she grasps that true values 'ripen' slowly and she is able to wait patiently. Patience is her feature, and she will not recognize hurriedness. Actions and their results are of utmost importance to her. Thus she is prepared to move in small steps and she even finds joy in this. Some time ago, she may have been a matchmaker but today, you will probably run into this woman in the course of network marketing. There is orderliness to her apparel. She wants clear-cut matches between her jackets, shirts and skirts or slacks. The standard, basic apparel takes priority. This way she looks reliable.",
                    shadowside: "She may manipulate people in search of personal benefit. This can make her annoying and out-of-line. She attracts others with promises of equality and opportunities but only looks out for herself. Then she tends to blame others of ingratitude. Year after year, she is probably wearing clothes in the same style, which makes her look old-fashioned.",
                    image: Je
                }, {
                    name: "Scribe",//46
                    description: "Her write-ups of events are lively, notable for intellectuality and functionalism. Her style is androgynous and smartly casual. She likes experimenting with trends and often matches what is hard to match. However, this does not dismay her but simply offers her an additional chance to advertise herself.",
                    lightside: "She is always prepared to take on a lengthy and difficult job so long as it is of special importance to her. Immersed in her own activities, she feels pleasure and takes pride in her initial results. This serves as an example of how to engage in some new activity without having the necessary skills or experience for it. All it takes is a burning desire coupled with interest and faith, something akin to starting school once again. Only this time, one can only rely on oneself, since there is no teacher available. Either the joy of discovery will mark this period, depending on the readiness of the student to accept the new, or it will seem overly tortuous and difficult. In any case, the acquired knowledge and experience will be beneficial and valuable to everyone. Success depends all around on personal know-how and accumulated experience. The apparel expresses individuality and intellectualism. Ordinarily, there is a match of colors with one another. There are masculine elements contained in the apparel, like a bowtie, necktie or jacket, coordinated in an intellectual style.",
                    shadowside: "She could engage in distorting facts or plagiarizing the works of others. Money alone will prompt the provision of required facts. Predominate in her apparel could be a 'dressing-gown' or 'bathrobe' style containing a certain brutality. She does not pay her image the needed attention.",
                    image: Qe
                }, {
                    name: "Teacher",//47
                    description: "She engages in passing information to others. Her style values practicality and functionalism.",
                    lightside: "Her patience provides her with an ability to wait and observe slow growth. She has the capability of transmitting information, experience and wisdom in an easy and attractive form. This is a smart and well-educated woman. She provides an example of how long-term, consistent growth both personally and within one’s activities can provide satisfaction with one’s work and its results. Her dress is reserved, because she values practicality and functionalism - comfortable clothing along with a roomy handbag.",
                    shadowside: "She could be manipulating or abusing her students. She always knows what’s best and what’s bad. Intolerance of mistakes made by others is possible.",
                    image: Ze
                }, {
                    name: "Airhead",//48
                    description: "Easygoing and naive, this woman is sensitive and overwhelmingly charming. Gentlemen choose naive gigglers so, along their side, they can become heroes. Her hair is generally long, whereas her dresses do not cover her knees. Her favorite color is a pinkish red hue. She adores high-heeled shoes.",
                    lightside: "She looks at life with wide-open eyes. Spontaneity and unpredictability are part of her zest for life. She lays bare her emotions fearlessly, seemingly carelessly and heads for the unknown, mysterious and unexpected. Plato said all acquaintances start from wonderment, something she has in capacity. She helps people laugh at the absurdity and hypocrisy. Her simplicity charms everyone. This woman knows how to emphasize her sexuality; she does not fear prying eyes. Her figure is gorgeous, and she displays it gracefully as she flirts with the world.",
                    shadowside: "Carelessness, confusion and disorderliness are her features. Her infantilism comes with all its signs - frivolity, innocence, fervor and, quite often, dumbness. Her outlook on her own life and that of other people tends to be inconsiderate. However, she denies negative emotions. Naivety appears in her style, the same as in her life. She likes clothes with infantile elements - pinks are in surplus. She wears ruffles and frills and especially short dresses without consideration of her age.",
                    image: Xe
                }, {
                    name: "Студентка",//49
                    description: "Вона має нахабну невинність і вічно перебуває у пошуках. Її здібності включають в себе розуміння, прийняття і включення нової інформації. Ця молода жінка - хамелеон, який легко пристосовується до обставин. У її стилі хитро переплітаються ніжність і дитячість. Сукні та спідниці короткі. Силует підтягнутий, з одного боку він може здаватися скромним, а з іншого - спокусливим.",
                    lightside: "Ця допитлива жінка сповнена ідей і планів, які суперечать один одному. Вона може бути розумною і раціональною, але її цілі дуже нестабільні. Її талант полягає в тому, щоб об'єднуватися і укладати союзи з усіма, хто трапляється на її шляху. Відносини, як правило, вільні або раціонально орієнтовані. Навчання використовується як форма для вкорінення в житті, тому вона відкрита до навчання протягом усього життя. Вона дуже сильна, тому що повністю вільна від укорінених принципів. Жаль і каяття їй чужі, і вона не цікавиться долею жодного колишнього «партнера». Її одяг підкреслює сексуальність і обман.",
                    shadowside: "Нестабільність - це мітка. Ці жінки легко вводять в оману старших чоловіків, оскільки їхнє зовнішнє оточення має величезну владу. Вона схильна приймати короткострокові рішення. Вона може стати жертвою оманливих емоцій. Тим не менш, її мета здається позитивною - відмова від емоційних зв'язків заради вирішення матеріальних проблем. Вона не поспішає, коли справа доходить до перетворення знань на дії. Одяг для неї - ключ до пошуку прихильників.",
                    image: et
                }, {
                    name: "Красуня у вежі",//50
                    description: "Жінка - це загадка, яка дає чоловікові шанс справити на неї враження і завоювати її. Її одяг нагадує вікторіанські часи. Її декольте аж до шиї прикрите. Вона є втіленням красивої жінки з розбитим серцем",
                    lightside: "Вона надихає інших чекати відповідного моменту для змін. Її викладання передбачає бачення набагато глибшого рівня досягнень. Це дає шанс, особливо чоловікам, відчути власну силу і покластися на себе. Віддає перевагу прикрасам з довгого волосся. Її стиль - романтичний, тому вона може носити сукні нижче колін. Її сукні бувають з різноманітними оборками, розкльошені або плісировані, з комірцем-стійкою або жабо, можливо, навіть з краваткою",
                    shadowside: "Вона чекає на лицаря. Її заразили романтичні ілюзії, які дають їй надію на те, що мрії в майбутньому здійсняться. Все, що потрібно - це пасивно чекати. Якби лицар з'явився в її житті, вона б дивилася на нього, ніби з «вежі». Саме тому її пріоритетний вибір в одязі матиме «аромат» старовини, який слугуватиме їй вежею. Ця жінка ігнорує увагу того, хто по-справжньому закоханий у неї, оскільки чекає на «лицаря» своїх фантазій.",
                    image: tt
                }, {
                    name: "Virgin",//51
                    description: "She is the vision of innocence, devoid of any sins, and a dreamer. Her apparel is feminine including long skirts, as a rule. These are bright in fresh pinkish hues.",
                    lightside: "She hides from the real world in her daydreams and her memories and lives in a world of her own imaginings, usually one meant for childhood. Her fantasies are naive and, sometimes, colored with strong tones of religiosity. As a daydreamer, she spends her time torturing herself with one main doubt, 'What if?' She imagines that everything will be all right, easy and simple, so she takes no risks. She upholds a symbolic cleanliness of her heart and soul. The style of dress is somewhat childish and doll-like consisting of closed, lengthened dresses, a silhouette with a slim waistline and gentle colors.",
                    shadowside: "Dreams, dreams and nothing but daydreams are her mode. She feels lost, crossed out of the list of participants in the 'games of great love'. Intimacy is something she fears greatly. Her manner of dress is infantile - it’s her effort to run away from herself, from the adult world and from hardships.",
                    image: at
                }, {
                    name: "Fortune Hunter",//52
                    description: "Sexuality, sensitivity and a challenge are her markers. She displays sexuality and courage in her dress. Her figure tends to be expressive, and she displays it with pleasure. Her hair is long. She wears high heels.",
                    lightside: "This is an emancipated woman, an individualist. She is smart, independent and inventive with a fabulous imagination. She is capable of thoughtfully resolving personal problems. Her mental abilities free her from material dependence. However, a cold calculating woman hides behind her outer attractiveness. Her motives are transparent, and her behavior, predictable. It helps looking at relationships 'from afar' to understand what causes anxiety. Graceful movements make her a wonderful dancer. Her style is feminine, sexy and open. Streamlining her silhouette is a way to display her figure. She selects dresses and skirts to wear. Her lovely figure is very feminine. The application of makeup is excellent. She takes care of herself. Her lips are sensitive.",
                    shadowside: "She can be vicious in her relationships, cunning, deceitful and unreliable. Since her beauty and attractiveness are superficial, she can be highly dangerous. By double-dealing, she manipulates others. She can break off a relationship without hesitation whenever some situation no longer satisfies her or whenever she is offered something better. There is a certain coldness in her relationships. She expresses herself with a subtle and even a biting irony. Her clothing gives off clear and rather straightforward sexual signals: low cut dresses/blouses, slit skirts and bared arms, shoulders and legs.",
                    image: it
                }, {
                    name: "Victim",//53
                    description: "Life gets provoked causing pain and even for forced violence, which come to pass rather often. Her dress may be overly sexy and provocative. She chooses nearly see-through materials and tightly fitting clothes. An ideal figure has great meaning for her.",
                    lightside: "She is the one who helps something that has been long hidden or repressed to become reborn and liberated. This proves to be the manifestation of a true beginning. She liberates herself from a harmful individual, from 'needless' features like shyness, fearfulness or such. She will protect you from the temptation of making a victim of yourself and encourage you to take responsibility for your own life. The shadowy side of our personalities, which we had not even considered previously, will open up by her guidance. The choice of apparel will be courageous. She likes the sorts of dresses that call for attention, so she watches her body, and has no fear of demonstrating it.",
                    shadowside: "Hopelessness and fear cause her endless complaints. She plays the part of the victim to gain more attention and to call forth pity. She is incapable of defending her personal boundaries. She dresses in a way that shows off too much or is too short, which will prove sexually provocative.",
                    image: st
                }, {
                    name: "Hustler",//54
                    description: "The essence is living through experiences. There are no boundaries, limitations or responsibilities. The image is bright, carefree and sexy. Her figure is of utmost importance. Dresses are short. She wears high heels and vivid makeup.",
                    lightside: "A match is made between artistry and the needs of the market. She is inclined to take risks, to be brave. Alienation almost always accompanies personal relationships or their basis is merely self-interest. It is akin to a light reflecting playfully on the surface of water but never penetrating within it. Her behavior is loose. She provides other women with courage and teaches them to survive unfavorable circumstances. It’s as if she were asking - what price are you ready to pay for security while in captivity? Her style is so sexy it challenges an onlooker. Her long hair is worn loose and her clothing, form fitting. She shows off her cleavage with a deep cut. The colors are bright.",
                    shadowside: "She stumbles into dependencies on men. Her own interests are most important to her, and whatever is useful to her is right. Her relationships are carefree and immature. She has no desire to be responsible. Contacts are superficial. There is an internal nervousness. She opts for material values and security over and above self-reliance. She has a vulgar, overly open style: her underwear could be 'accidentally' visible and her skirts too short. She wears high heels of high platform shoes.",
                    image: nt
                }, {
                    name: "Amuser",//55
                    description: "Innocence and sin - disobedience and insolence mix in with the infantile. Innocence in clothing matches up with sexual provocation: knee-high socks, leg warmers or skintight stockings with mama's high heels, a light dress and lace tights.",
                    lightside: "Her behavior is very easy going, filled with flirtations and empty promises. Happenings seem unreal with an illusionary comprehension. This woman is ready to follow her intuition, even when others have serious doubts. Childish Robotos and miniskirts fill up her wardrobe. She has an A-type silhouette and includes lingerie elements in her apparel, such as lace, crocheted items and hair ribbons. Her wardrobe is a match of childish and sexy pieces.",
                    shadowside: "She relies on success, not on hard work. Love is not directed at a person but rather at an imaginary person, at status and image. Her clothing is infantile, openly mini by form, puffed-up sleeves and ruffles, even when she is over 40 years of age.",
                    image: rt
                }, {
                    name: "Addict",//56
                    description: "This is a sensitive, vulnerable woman filled with doubts. Clothing is meant for comfort. The fabrics must be natural and soft.",
                    lightside: "She reacts to opinions of others so sensitively that she has nearly no energy left to act on her own. Very often unnecessary attachments that are harmful to her tie her down. She is quick to spot addictions and offer help to resist them. Her style encompasses naturalness, femininity and gentleness. Fabrics must be pleasant to the touch, like cashmere and silk. She embodies a sexy oversize and wears lingerie style displaying bared parts. Footwear is meant for comfort.",
                    shadowside: "A lack of self-confidence diminishes her self-respect; therefore sadness hits her. A lack of success and emptiness define her. She’s digging her own grave by rejecting something of special value merely for the sake of salvaging relationships, which are ailing as it is. She allows dependency to dominate over and above her spiritual needs. Clothing serves as a hideaway.",
                    image: ot
                }, {
                    name: "Dilettante",//57
                    description: "This upstart is provocative and anxiety ridden. Apparel is conceptual, and she wears what is non-standard. Few understand her. She has her own understanding about what to wear and how to wear it.",
                    lightside: "Quick-witted and active, this woman exudes self-confidence. There is an overflow of pure energy, which can have a positive as well as a negative effect. She tends to make use of scandals and conflicts to gain popularity for herself. She is a master at insinuations, behind the scenes intrigues and biting commentaries. Even when she lacks the necessary education, she finds pleasure in being active. She warns about a danger of becoming superficial. When it comes to material matters, she handles them practically, subtly, smartly and quickly. She is a clothing designer, which she either orders or sews on her own. Predominately the cuts and seams are open and asymmetrical, marked by eclecticism. An intellectual fashionista, she expresses her own meanings by her apparel.",
                    shadowside: "She is overly irritating, since she tends to be harmful and ill-willed. She tries to show off about having much deeper knowledge of matters than she does in truth. Friendship might be feigned, so long as this satisfies her interests. Her style is that of a beginning designer. There are pretenses but little style - it’s kitsch.",
                    image: lt
                }, {
                    name: "Messiah",//58
                    description: "She loves herself along with life itself. The choice of her clothing is for demonstrating her figure, since she is convinced of her own desirability. She wears loud accessories, expressive makeup and high heels.",
                    lightside: "She delights in life. Her sincerity shines in confidence of the future. Everything is done seemingly with the heart of a child. She is wise in her innocence and simplicity. Action gives her joy, and she acts enthusiastically and successfully. She might be the soul of a team. Her assistance to others comes happily and unselfishly. The help she provides does not relate to some sort of effort to run away from oneself, something so characteristic of people who like to sacrifice themselves in behalf of others. Boldly she carries around what she likes, which is usually the kinds of clothes that show off her figure and barelegged in high heels. Dresses and skirts take priority.",
                    shadowside: "The exaggerated naïveté can bring around childish behavior. There is overconfidence in the belief that she is the only one whose help to you has a chance of winning. Despite the position she might hold or the seriousness of an event, she just might wear clothing unsuitable for the occasion, age or job position. Don’t be surprised if she arrives at a funeral wearing a mini skirt.",
                    image: ht
                }, {
                    name: "Visionary",//59
                    description: "A tremendous emotional satisfaction comes from always feeling one's individual stroke and original taste in clothing.",
                    lightside: "This woman is sensitive to creative inspiration. She has the gift of perception coming from her inner being. Since she can grasp the essence of understanding, she doesn’t even try to understand with her mind. Her comprehension is healthy, in harmony with the pulse of life itself. Her movements go from the known into the unknown. She is able to foretell, what others are yet unable to see. Pronouncing a vision, without expecting personal benefit, is her tendency. She is the one to help resolve problems that seemed insurmountable for a long time. The air she breathes is that of youthful maximalism. This is exactly what serves her in overcoming that which others were unable to do. She selects an exceptional style for herself so she always stands out in a crowd. Her femininity shines through all her images. Her use of accessories is smartly creative. God resides in the details, she proclaims.",
                    shadowside: "There is the emotional disappointment. She can end up misunderstood and feel lonely. Making fun of her, others have left deep scars. She may be smiling on the outside but weeping inside. Fear interferes with self-expression. She listens to the opinions of others too much, thereby marring her own creativity.",
                    image: ct
                }, {
                    name: "Сестра",//
                    description: "Орієнтується на прекрасне. Її одяг виражає сексуальність та запрошення.",
                    lightside: "Вона схильна порівнювати себе з іншими, тому може безкінечно корегувати свій образ. Порівняння з іншими викликає одночасне відчуття переваги та неповноцінності. Зазвичай вона не приймає партнера, для якого потрібно докладати зусиль. Швидше буде сестрою для нього, ніж партнеркою. Вдосконалення свого образу відбувається не для чоловічої уваги, а заради внутрішнього ідеалу. Чоловік залишається неприйнятим на рівні почуттів, що глибоко впливає на їхні стосунки. Вона прагне уваги всіма можливими способами. Її образи відкрито сексуальні: короткі спідниці, глибокий декольте, облягаючі брюки та яскраві кольори на високих підборах.",
                    shadowside: "Її ставлення до фізичного світу, особливо до власного тіла, негативне. Може бути суєвірною або навіть богобоязливою. Проте мучитиме тіло дієтами або витрачатиме всі заощадження на корекцію фігури. Однак це не дасть їй впевненості та погіршить стосунки з чоловіками. Може виглядати досить вульгарно.",
                    image: dt
                }, {
                    name: "Відлюдниця",//
                    description: "Шляхетна й самотня, постійно мучиться, намагаючись подолати тіні минулого. Її естетика – це в’янення та професійний успіх. Концентрується на внутрішньому світі, ховаючись у одязі як у внутрішній фортеці. Одяг призначений не підкреслювати винятковість, а ховати.",
                    lightside: "Відлюдниця відокремилася від світу, щоб знайти внутрішній шлях до концентрації на духовному житті. Її приваблюють каміння, вона вивчає їхню енергетику. Цікавиться галузями знань, які вимагають серйозного вивчення. Об'єднує в собі глибокі емоційні переживання з високим рівнем знань, набуваючи ясності, сили та здатності до самоприйняття. Служить власній творчості. Її стиль оригінальний і унікальний – наче вона вкрита коконом. Переважають чорний колір, асиметричні лінії, мінімум аксесуарів та каміння.",
                    shadowside: "Тікає від суспільства через страхи. Відмовляється від допомоги, замикається у власному світі, наповненому минулими «подвигами», гнівом через втрату популярності чи страхом старіння. Вибирає мішковатий та неохайний одяг.",
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
