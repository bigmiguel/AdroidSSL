Date.CultureInfo = {
    name: "en-US",
    englishName: "English (United States)",
    nativeName: "English (United States)",
    dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    abbreviatedDayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    shortestDayNames: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
    firstLetterDayNames: [ "S", "M", "T", "W", "T", "F", "S" ],
    monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    abbreviatedMonthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },
    abbreviatedTimeZoneStandard: {
        GMT: "-000",
        EST: "-0400",
        CST: "-0500",
        MST: "-0600",
        PST: "-0700"
    },
    abbreviatedTimeZoneDST: {
        GMT: "-000",
        EDT: "-0500",
        CDT: "-0600",
        MDT: "-0700",
        PDT: "-0800"
    }
};

Date.getMonthNumberFromName = function(name) {
    var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase();
    for (var i = 0; n.length > i; i++) if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) return i;
    return -1;
};

Date.getDayNumberFromName = function(name) {
    var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, s = (Date.CultureInfo.shortestDayNames, 
    name.toLowerCase());
    for (var i = 0; n.length > i; i++) if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) return i;
    return -1;
};

Date.isLeapYear = function(year) {
    return 0 === year % 4 && 0 !== year % 100 || 0 === year % 400;
};

Date.getDaysInMonth = function(year, month) {
    return [ 31, Date.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][month];
};

Date.getTimezoneOffset = function(s, dst) {
    return dst || false ? Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];
};

Date.getTimezoneAbbreviation = function(offset, dst) {
    var p, n = dst || false ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
    for (p in n) if (n[p] === offset) return p;
    return null;
};

Date.prototype.clone = function() {
    return new Date(this.getTime());
};

Date.prototype.compareTo = function(date) {
    if (isNaN(this)) throw new Error(this);
    if (date instanceof Date && !isNaN(date)) return this > date ? 1 : date > this ? -1 : 0;
    throw new TypeError(date);
};

Date.prototype.equals = function(date) {
    return 0 === this.compareTo(date);
};

Date.prototype.between = function(start, end) {
    var t = this.getTime();
    return t >= start.getTime() && end.getTime() >= t;
};

Date.prototype.addMilliseconds = function(value) {
    this.setMilliseconds(this.getMilliseconds() + value);
    return this;
};

Date.prototype.addSeconds = function(value) {
    return this.addMilliseconds(1e3 * value);
};

Date.prototype.addMinutes = function(value) {
    return this.addMilliseconds(6e4 * value);
};

Date.prototype.addHours = function(value) {
    return this.addMilliseconds(36e5 * value);
};

Date.prototype.addDays = function(value) {
    return this.addMilliseconds(864e5 * value);
};

Date.prototype.addWeeks = function(value) {
    return this.addMilliseconds(6048e5 * value);
};

Date.prototype.addMonths = function(value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

Date.prototype.addYears = function(value) {
    return this.addMonths(12 * value);
};

Date.prototype.add = function(config) {
    if ("number" == typeof config) {
        this._orient = config;
        return this;
    }
    var x = config;
    (x.millisecond || x.milliseconds) && this.addMilliseconds(x.millisecond || x.milliseconds);
    (x.second || x.seconds) && this.addSeconds(x.second || x.seconds);
    (x.minute || x.minutes) && this.addMinutes(x.minute || x.minutes);
    (x.hour || x.hours) && this.addHours(x.hour || x.hours);
    (x.month || x.months) && this.addMonths(x.month || x.months);
    (x.year || x.years) && this.addYears(x.year || x.years);
    (x.day || x.days) && this.addDays(x.day || x.days);
    return this;
};

Date._validate = function(value, min, max, name) {
    if ("number" != typeof value) throw new TypeError(value + " is not a Number.");
    if (min > value || value > max) throw new RangeError(value + " is not a valid value for " + name + ".");
    return true;
};

Date.validateMillisecond = function(n) {
    return Date._validate(n, 0, 999, "milliseconds");
};

Date.validateSecond = function(n) {
    return Date._validate(n, 0, 59, "seconds");
};

Date.validateMinute = function(n) {
    return Date._validate(n, 0, 59, "minutes");
};

Date.validateHour = function(n) {
    return Date._validate(n, 0, 23, "hours");
};

Date.validateDay = function(n, year, month) {
    return Date._validate(n, 1, Date.getDaysInMonth(year, month), "days");
};

Date.validateMonth = function(n) {
    return Date._validate(n, 0, 11, "months");
};

Date.validateYear = function(n) {
    return Date._validate(n, 1, 9999, "seconds");
};

Date.prototype.set = function(config) {
    var x = config;
    x.millisecond || 0 === x.millisecond || (x.millisecond = -1);
    x.second || 0 === x.second || (x.second = -1);
    x.minute || 0 === x.minute || (x.minute = -1);
    x.hour || 0 === x.hour || (x.hour = -1);
    x.day || 0 === x.day || (x.day = -1);
    x.month || 0 === x.month || (x.month = -1);
    x.year || 0 === x.year || (x.year = -1);
    -1 != x.millisecond && Date.validateMillisecond(x.millisecond) && this.addMilliseconds(x.millisecond - this.getMilliseconds());
    -1 != x.second && Date.validateSecond(x.second) && this.addSeconds(x.second - this.getSeconds());
    -1 != x.minute && Date.validateMinute(x.minute) && this.addMinutes(x.minute - this.getMinutes());
    -1 != x.hour && Date.validateHour(x.hour) && this.addHours(x.hour - this.getHours());
    -1 !== x.month && Date.validateMonth(x.month) && this.addMonths(x.month - this.getMonth());
    -1 != x.year && Date.validateYear(x.year) && this.addYears(x.year - this.getFullYear());
    -1 != x.day && Date.validateDay(x.day, this.getFullYear(), this.getMonth()) && this.addDays(x.day - this.getDate());
    x.timezone && this.setTimezone(x.timezone);
    x.timezoneOffset && this.setTimezoneOffset(x.timezoneOffset);
    return this;
};

Date.prototype.clearTime = function() {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

Date.prototype.isLeapYear = function() {
    var y = this.getFullYear();
    return 0 === y % 4 && 0 !== y % 100 || 0 === y % 400;
};

Date.prototype.isWeekday = function() {
    return !(this.is().sat() || this.is().sun());
};

Date.prototype.getDaysInMonth = function() {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.moveToFirstDayOfMonth = function() {
    return this.set({
        day: 1
    });
};

Date.prototype.moveToLastDayOfMonth = function() {
    return this.set({
        day: this.getDaysInMonth()
    });
};

Date.prototype.moveToDayOfWeek = function(day, orient) {
    var diff = (day - this.getDay() + 7 * (orient || 1)) % 7;
    return this.addDays(0 === diff ? diff += 7 * (orient || 1) : diff);
};

Date.prototype.moveToMonth = function(month, orient) {
    var diff = (month - this.getMonth() + 12 * (orient || 1)) % 12;
    return this.addMonths(0 === diff ? diff += 12 * (orient || 1) : diff);
};

Date.prototype.getDayOfYear = function() {
    return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 864e5);
};

Date.prototype.getWeekOfYear = function(firstDayOfWeek) {
    var y = this.getFullYear(), m = this.getMonth(), d = this.getDate();
    var dow = firstDayOfWeek || Date.CultureInfo.firstDayOfWeek;
    var offset = 8 - new Date(y, 0, 1).getDay();
    8 == offset && (offset = 1);
    var daynum = (Date.UTC(y, m, d, 0, 0, 0) - Date.UTC(y, 0, 1, 0, 0, 0)) / 864e5 + 1;
    var w = Math.floor((daynum - offset + 7) / 7);
    if (w === dow) {
        y--;
        var prevOffset = 8 - new Date(y, 0, 1).getDay();
        w = 2 == prevOffset || 8 == prevOffset ? 53 : 52;
    }
    return w;
};

Date.prototype.isDST = function() {
    console.log("isDST");
    return "D" == this.toString().match(/(E|C|M|P)(S|D)T/)[2];
};

Date.prototype.getTimezone = function() {
    return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST());
};

Date.prototype.setTimezoneOffset = function(s) {
    var here = this.getTimezoneOffset(), there = -6 * Number(s) / 10;
    this.addMinutes(there - here);
    return this;
};

Date.prototype.setTimezone = function(s) {
    return this.setTimezoneOffset(Date.getTimezoneOffset(s));
};

Date.prototype.getUTCOffset = function() {
    var r, n = -10 * this.getTimezoneOffset() / 6;
    if (0 > n) {
        r = (n - 1e4).toString();
        return r[0] + r.substr(2);
    }
    r = (n + 1e4).toString();
    return "+" + r.substr(1);
};

Date.prototype.getDayName = function(abbrev) {
    return abbrev ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()];
};

Date.prototype.getMonthName = function(abbrev) {
    return abbrev ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()];
};

Date.prototype._toString = Date.prototype.toString;

Date.prototype.toString = function(format) {
    var self = this;
    var p = function p(s) {
        return 1 == s.toString().length ? "0" + s : s;
    };
    return format ? format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function(format) {
        switch (format) {
          case "hh":
            return p(13 > self.getHours() ? self.getHours() : self.getHours() - 12);

          case "h":
            return 13 > self.getHours() ? self.getHours() : self.getHours() - 12;

          case "HH":
            return p(self.getHours());

          case "H":
            return self.getHours();

          case "mm":
            return p(self.getMinutes());

          case "m":
            return self.getMinutes();

          case "ss":
            return p(self.getSeconds());

          case "s":
            return self.getSeconds();

          case "yyyy":
            return self.getFullYear();

          case "yy":
            return self.getFullYear().toString().substring(2, 4);

          case "dddd":
            return self.getDayName();

          case "ddd":
            return self.getDayName(true);

          case "dd":
            return p(self.getDate());

          case "d":
            return self.getDate().toString();

          case "MMMM":
            return self.getMonthName();

          case "MMM":
            return self.getMonthName(true);

          case "MM":
            return p(self.getMonth() + 1);

          case "M":
            return self.getMonth() + 1;

          case "t":
            return 12 > self.getHours() ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);

          case "tt":
            return 12 > self.getHours() ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;

          case "zzz":
          case "zz":
          case "z":
            return "";
        }
    }) : this._toString();
};

Date.now = function() {
    return new Date();
};

Date.today = function() {
    return Date.now().clearTime();
};

Date.prototype._orient = 1;

Date.prototype.next = function() {
    this._orient = 1;
    return this;
};

Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function() {
    this._orient = -1;
    return this;
};

Date.prototype._is = false;

Date.prototype.is = function() {
    this._is = true;
    return this;
};

Number.prototype._dateElement = "day";

Number.prototype.fromNow = function() {
    var c = {};
    c[this._dateElement] = this;
    return Date.now().add(c);
};

Number.prototype.ago = function() {
    var c = {};
    c[this._dateElement] = -1 * this;
    return Date.now().add(c);
};

(function() {
    var $D = Date.prototype, $N = Number.prototype;
    var de, dx = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), mx = "january february march april may june july august september october november december".split(/\s/), px = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/);
    var df = function(n) {
        return function() {
            if (this._is) {
                this._is = false;
                return this.getDay() == n;
            }
            return this.moveToDayOfWeek(n, this._orient);
        };
    };
    for (var i = 0; dx.length > i; i++) $D[dx[i]] = $D[dx[i].substring(0, 3)] = df(i);
    var mf = function(n) {
        return function() {
            if (this._is) {
                this._is = false;
                return this.getMonth() === n;
            }
            return this.moveToMonth(n, this._orient);
        };
    };
    for (var j = 0; mx.length > j; j++) $D[mx[j]] = $D[mx[j].substring(0, 3)] = mf(j);
    var ef = function(j) {
        return function() {
            "s" != j.substring(j.length - 1) && (j += "s");
            return this["add" + j](this._orient);
        };
    };
    var nf = function(n) {
        return function() {
            this._dateElement = n;
            return this;
        };
    };
    for (var k = 0; px.length > k; k++) {
        de = px[k].toLowerCase();
        $D[de] = $D[de + "s"] = ef(px[k]);
        $N[de] = $N[de + "s"] = nf(de);
    }
})();

Date.prototype.toJSONString = function() {
    return this.toString("yyyy-MM-ddThh:mm:ssZ");
};

Date.prototype.toShortDateString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);
};

Date.prototype.toLongDateString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);
};

Date.prototype.toShortTimeString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);
};

Date.prototype.toLongTimeString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);
};

Date.prototype.getOrdinal = function() {
    switch (this.getDate()) {
      case 1:
      case 21:
      case 31:
        return "st";

      case 2:
      case 22:
        return "nd";

      case 3:
      case 23:
        return "rd";

      default:
        return "th";
    }
};

(function() {
    Date.Parsing = {
        Exception: function(s) {
            this.message = "Parse error at '" + s.substring(0, 10) + " ...'";
        }
    };
    var $P = Date.Parsing;
    var _ = $P.Operators = {
        rtoken: function(r) {
            return function(s) {
                var mx = s.match(r);
                if (mx) return [ mx[0], s.substring(mx[0].length) ];
                throw new $P.Exception(s);
            };
        },
        token: function() {
            return function(s) {
                return _.rtoken(new RegExp("^s*" + s + "s*"))(s);
            };
        },
        stoken: function(s) {
            return _.rtoken(new RegExp("^" + s));
        },
        until: function(p) {
            return function(s) {
                var qx = [], rx = null;
                while (s.length) {
                    try {
                        rx = p.call(this, s);
                    } catch (e) {
                        qx.push(rx[0]);
                        s = rx[1];
                        continue;
                    }
                    break;
                }
                return [ qx, s ];
            };
        },
        many: function(p) {
            return function(s) {
                var rx = [], r = null;
                while (s.length) {
                    try {
                        r = p.call(this, s);
                    } catch (e) {
                        return [ rx, s ];
                    }
                    rx.push(r[0]);
                    s = r[1];
                }
                return [ rx, s ];
            };
        },
        optional: function(p) {
            return function(s) {
                var r = null;
                try {
                    r = p.call(this, s);
                } catch (e) {
                    return [ null, s ];
                }
                return [ r[0], r[1] ];
            };
        },
        not: function(p) {
            return function(s) {
                try {
                    p.call(this, s);
                } catch (e) {
                    return [ null, s ];
                }
                throw new $P.Exception(s);
            };
        },
        ignore: function(p) {
            return p ? function(s) {
                var r = null;
                r = p.call(this, s);
                return [ null, r[1] ];
            } : null;
        },
        product: function() {
            var px = arguments[0], qx = Array.prototype.slice.call(arguments, 1), rx = [];
            for (var i = 0; px.length > i; i++) rx.push(_.each(px[i], qx));
            return rx;
        },
        cache: function(rule) {
            var cache = {}, r = null;
            return function(s) {
                try {
                    r = cache[s] = cache[s] || rule.call(this, s);
                } catch (e) {
                    r = cache[s] = e;
                }
                if (r instanceof $P.Exception) throw r;
                return r;
            };
        },
        any: function() {
            var px = arguments;
            return function(s) {
                var r = null;
                for (var i = 0; px.length > i; i++) {
                    if (null == px[i]) continue;
                    try {
                        r = px[i].call(this, s);
                    } catch (e) {
                        r = null;
                    }
                    if (r) return r;
                }
                throw new $P.Exception(s);
            };
        },
        each: function() {
            var px = arguments;
            return function(s) {
                var rx = [], r = null;
                for (var i = 0; px.length > i; i++) {
                    if (null == px[i]) continue;
                    try {
                        r = px[i].call(this, s);
                    } catch (e) {
                        throw new $P.Exception(s);
                    }
                    rx.push(r[0]);
                    s = r[1];
                }
                return [ rx, s ];
            };
        },
        all: function() {
            var px = arguments, _ = _;
            return _.each(_.optional(px));
        },
        sequence: function(px, d, c) {
            d = d || _.rtoken(/^\s*/);
            c = c || null;
            if (1 == px.length) return px[0];
            return function(s) {
                var r = null, q = null;
                var rx = [];
                for (var i = 0; px.length > i; i++) {
                    try {
                        r = px[i].call(this, s);
                    } catch (e) {
                        break;
                    }
                    rx.push(r[0]);
                    try {
                        q = d.call(this, r[1]);
                    } catch (ex) {
                        q = null;
                        break;
                    }
                    s = q[1];
                }
                if (!r) throw new $P.Exception(s);
                if (q) throw new $P.Exception(q[1]);
                if (c) try {
                    r = c.call(this, r[1]);
                } catch (ey) {
                    throw new $P.Exception(r[1]);
                }
                return [ rx, r ? r[1] : s ];
            };
        },
        between: function(d1, p, d2) {
            d2 = d2 || d1;
            var _fn = _.each(_.ignore(d1), p, _.ignore(d2));
            return function(s) {
                var rx = _fn.call(this, s);
                return [ [ rx[0][0], r[0][2] ], rx[1] ];
            };
        },
        list: function(p, d, c) {
            d = d || _.rtoken(/^\s*/);
            c = c || null;
            return p instanceof Array ? _.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) : _.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c));
        },
        set: function(px, d, c) {
            d = d || _.rtoken(/^\s*/);
            c = c || null;
            return function(s) {
                var r = null, p = null, q = null, rx = null, best = [ [], s ], last = false;
                for (var i = 0; px.length > i; i++) {
                    q = null;
                    p = null;
                    r = null;
                    last = 1 == px.length;
                    try {
                        r = px[i].call(this, s);
                    } catch (e) {
                        continue;
                    }
                    rx = [ [ r[0] ], r[1] ];
                    if (r[1].length > 0 && !last) try {
                        q = d.call(this, r[1]);
                    } catch (ex) {
                        last = true;
                    } else last = true;
                    last || 0 !== q[1].length || (last = true);
                    if (!last) {
                        var qx = [];
                        for (var j = 0; px.length > j; j++) i != j && qx.push(px[j]);
                        p = _.set(qx, d).call(this, q[1]);
                        if (p[0].length > 0) {
                            rx[0] = rx[0].concat(p[0]);
                            rx[1] = p[1];
                        }
                    }
                    rx[1].length < best[1].length && (best = rx);
                    if (0 === best[1].length) break;
                }
                if (0 === best[0].length) return best;
                if (c) {
                    try {
                        q = c.call(this, best[1]);
                    } catch (ey) {
                        throw new $P.Exception(best[1]);
                    }
                    best[1] = q[1];
                }
                return best;
            };
        },
        forward: function(gr, fname) {
            return function(s) {
                return gr[fname].call(this, s);
            };
        },
        replace: function(rule, repl) {
            return function(s) {
                var r = rule.call(this, s);
                return [ repl, r[1] ];
            };
        },
        process: function(rule, fn) {
            return function(s) {
                var r = rule.call(this, s);
                return [ fn.call(this, r[0]), r[1] ];
            };
        },
        min: function(min, rule) {
            return function(s) {
                var rx = rule.call(this, s);
                if (min > rx[0].length) throw new $P.Exception(s);
                return rx;
            };
        }
    };
    var _generator = function(op) {
        return function() {
            var args = null, rx = [];
            arguments.length > 1 ? args = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array && (args = arguments[0]);
            if (!args) return op.apply(null, arguments);
            for (var i = 0, px = args.shift(); px.length > i; i++) {
                args.unshift(px[i]);
                rx.push(op.apply(null, args));
                args.shift();
                return rx;
            }
        };
    };
    var gx = "optional not ignore cache".split(/\s/);
    for (var i = 0; gx.length > i; i++) _[gx[i]] = _generator(_[gx[i]]);
    var _vector = function(op) {
        return function() {
            return arguments[0] instanceof Array ? op.apply(null, arguments[0]) : op.apply(null, arguments);
        };
    };
    var vx = "each any all".split(/\s/);
    for (var j = 0; vx.length > j; j++) _[vx[j]] = _vector(_[vx[j]]);
})();

(function() {
    var flattenAndCompact = function(ax) {
        var rx = [];
        for (var i = 0; ax.length > i; i++) ax[i] instanceof Array ? rx = rx.concat(flattenAndCompact(ax[i])) : ax[i] && rx.push(ax[i]);
        return rx;
    };
    Date.Grammar = {};
    Date.Translator = {
        hour: function(s) {
            return function() {
                this.hour = Number(s);
            };
        },
        minute: function(s) {
            return function() {
                this.minute = Number(s);
            };
        },
        second: function(s) {
            return function() {
                this.second = Number(s);
            };
        },
        meridian: function(s) {
            return function() {
                this.meridian = s.slice(0, 1).toLowerCase();
            };
        },
        timezone: function(s) {
            return function() {
                var n = s.replace(/[^\d\+\-]/g, "");
                n.length ? this.timezoneOffset = Number(n) : this.timezone = s.toLowerCase();
            };
        },
        day: function(x) {
            var s = x[0];
            return function() {
                this.day = Number(s.match(/\d+/)[0]);
            };
        },
        month: function(s) {
            return function() {
                this.month = 3 == s.length ? Date.getMonthNumberFromName(s) : Number(s) - 1;
            };
        },
        year: function(s) {
            return function() {
                var n = Number(s);
                this.year = s.length > 2 ? n : n + (Date.CultureInfo.twoDigitYearMax > n + 2e3 ? 2e3 : 1900);
            };
        },
        rday: function(s) {
            return function() {
                switch (s) {
                  case "yesterday":
                    this.days = -1;
                    break;

                  case "tomorrow":
                    this.days = 1;
                    break;

                  case "today":
                    this.days = 0;
                    break;

                  case "now":
                    this.days = 0;
                    this.now = true;
                }
            };
        },
        finishExact: function(x) {
            x = x instanceof Array ? x : [ x ];
            var now = new Date();
            this.year = now.getFullYear();
            this.month = now.getMonth();
            this.day = 1;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            for (var i = 0; x.length > i; i++) x[i] && x[i].call(this);
            this.hour = "p" == this.meridian && 13 > this.hour ? this.hour + 12 : this.hour;
            if (this.day > Date.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
            var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
            this.timezone ? r.set({
                timezone: this.timezone
            }) : this.timezoneOffset && r.set({
                timezoneOffset: this.timezoneOffset
            });
            return r;
        },
        finish: function(x) {
            x = x instanceof Array ? flattenAndCompact(x) : [ x ];
            if (0 === x.length) return null;
            for (var i = 0; x.length > i; i++) "function" == typeof x[i] && x[i].call(this);
            if (this.now) return new Date();
            var today = Date.today();
            var expression = !!(null != this.days || this.orient || this.operator);
            if (expression) {
                var gap, mod, orient;
                orient = "past" == this.orient || "subtract" == this.operator ? -1 : 1;
                if (this.weekday) {
                    this.unit = "day";
                    gap = Date.getDayNumberFromName(this.weekday) - today.getDay();
                    mod = 7;
                    this.days = gap ? (gap + orient * mod) % mod : orient * mod;
                }
                if (this.month) {
                    this.unit = "month";
                    gap = this.month - today.getMonth();
                    mod = 12;
                    this.months = gap ? (gap + orient * mod) % mod : orient * mod;
                    this.month = null;
                }
                this.unit || (this.unit = "day");
                if (null == this[this.unit + "s"] || null != this.operator) {
                    this.value || (this.value = 1);
                    if ("week" == this.unit) {
                        this.unit = "day";
                        this.value = 7 * this.value;
                    }
                    this[this.unit + "s"] = this.value * orient;
                }
                return today.add(this);
            }
            this.meridian && this.hour && (this.hour = 13 > this.hour && "p" == this.meridian ? this.hour + 12 : this.hour);
            this.weekday && !this.day && (this.day = today.addDays(Date.getDayNumberFromName(this.weekday) - today.getDay()).getDate());
            this.month && !this.day && (this.day = 1);
            return today.set(this);
        }
    };
    var _fn, _ = Date.Parsing.Operators, g = Date.Grammar, t = Date.Translator;
    g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/);
    g.timePartDelimiter = _.stoken(":");
    g.whiteSpace = _.rtoken(/^\s*/);
    g.generalDelimiter = _.rtoken(/^(([\s\,]|at|on)+)/);
    var _C = {};
    g.ctoken = function(keys) {
        var fn = _C[keys];
        if (!fn) {
            var c = Date.CultureInfo.regexPatterns;
            var kx = keys.split(/\s+/), px = [];
            for (var i = 0; kx.length > i; i++) px.push(_.replace(_.rtoken(c[kx[i]]), kx[i]));
            fn = _C[keys] = _.any.apply(null, px);
        }
        return fn;
    };
    g.ctoken2 = function(key) {
        return _.rtoken(Date.CultureInfo.regexPatterns[key]);
    };
    g.h = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour));
    g.hh = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/), t.hour));
    g.H = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour));
    g.HH = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour));
    g.m = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.minute));
    g.mm = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.minute));
    g.s = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.second));
    g.ss = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.second));
    g.hms = _.cache(_.sequence([ g.H, g.mm, g.ss ], g.timePartDelimiter));
    g.t = _.cache(_.process(g.ctoken2("shortMeridian"), t.meridian));
    g.tt = _.cache(_.process(g.ctoken2("longMeridian"), t.meridian));
    g.z = _.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), t.timezone));
    g.zz = _.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/), t.timezone));
    g.zzz = _.cache(_.process(g.ctoken2("timezone"), t.timezone));
    g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([ g.tt, g.zzz ]));
    g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix);
    g.d = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/), _.optional(g.ctoken2("ordinalSuffix"))), t.day));
    g.dd = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/), _.optional(g.ctoken2("ordinalSuffix"))), t.day));
    g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"), function(s) {
        return function() {
            this.weekday = s;
        };
    }));
    g.M = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/), t.month));
    g.MM = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/), t.month));
    g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month));
    g.y = _.cache(_.process(_.rtoken(/^(\d\d?)/), t.year));
    g.yy = _.cache(_.process(_.rtoken(/^(\d\d)/), t.year));
    g.yyy = _.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/), t.year));
    g.yyyy = _.cache(_.process(_.rtoken(/^(\d\d\d\d)/), t.year));
    _fn = function() {
        return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext")));
    };
    g.day = _fn(g.d, g.dd);
    g.month = _fn(g.M, g.MMM);
    g.year = _fn(g.yyyy, g.yy);
    g.orientation = _.process(g.ctoken("past future"), function(s) {
        return function() {
            this.orient = s;
        };
    });
    g.operator = _.process(g.ctoken("add subtract"), function(s) {
        return function() {
            this.operator = s;
        };
    });
    g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday);
    g.unit = _.process(g.ctoken("minute hour day week month year"), function(s) {
        return function() {
            this.unit = s;
        };
    });
    g.value = _.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/), function(s) {
        return function() {
            this.value = s.replace(/\D/g, "");
        };
    });
    g.expression = _.set([ g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM ]);
    _fn = function() {
        return _.set(arguments, g.datePartDelimiter);
    };
    g.mdy = _fn(g.ddd, g.month, g.day, g.year);
    g.ymd = _fn(g.ddd, g.year, g.month, g.day);
    g.dmy = _fn(g.ddd, g.day, g.month, g.year);
    g.date = function(s) {
        return (g[Date.CultureInfo.dateElementOrder] || g.mdy).call(this, s);
    };
    g.format = _.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(fmt) {
        if (g[fmt]) return g[fmt];
        throw Date.Parsing.Exception(fmt);
    }), _.process(_.rtoken(/^[^dMyhHmstz]+/), function(s) {
        return _.ignore(_.stoken(s));
    }))), function(rules) {
        return _.process(_.each.apply(null, rules), t.finishExact);
    });
    var _F = {};
    var _get = function(f) {
        return _F[f] = _F[f] || g.format(f)[0];
    };
    g.formats = function(fx) {
        if (fx instanceof Array) {
            var rx = [];
            for (var i = 0; fx.length > i; i++) rx.push(_get(fx[i]));
            return _.any.apply(null, rx);
        }
        return _get(fx);
    };
    g._formats = g.formats([ "yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d" ]);
    g._start = _.process(_.set([ g.date, g.time, g.expression ], g.generalDelimiter, g.whiteSpace), t.finish);
    g.start = function(s) {
        try {
            var r = g._formats.call({}, s);
            if (0 === r[1].length) return r;
        } catch (e) {}
        return g._start.call({}, s);
    };
})();

Date._parse = Date.parse;

Date.parse = function(s) {
    var r = null;
    if (!s) return null;
    try {
        r = Date.Grammar.start.call({}, s);
    } catch (e) {
        return null;
    }
    return 0 === r[1].length ? r[0] : null;
};

Date.getParseFunction = function(fx) {
    var fn = Date.Grammar.formats(fx);
    return function(s) {
        var r = null;
        try {
            r = fn.call({}, s);
        } catch (e) {
            return null;
        }
        return 0 === r[1].length ? r[0] : null;
    };
};

Date.parseExact = function(s, fx) {
    return Date.getParseFunction(fx)(s);
};