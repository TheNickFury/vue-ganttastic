import S from "dayjs";
import { inject as dt, computed as H, defineComponent as Q, ref as $, watch as at, openBlock as E, createElementBlock as T, Fragment as tt, renderList as et, unref as C, normalizeStyle as L, renderSlot as G, createElementVNode as I, toDisplayString as q, createTextVNode as nt, createCommentVNode as V, toRefs as rt, nextTick as $t, createBlock as J, Teleport as ee, createVNode as _t, Transition as ne, withCtx as N, getCurrentScope as re, onScopeDispose as ae, getCurrentInstance as oe, onMounted as Lt, useSlots as ie, provide as ut, normalizeClass as wt, withModifiers as se, mergeProps as le, TransitionGroup as ue } from "vue";
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gt = { exports: {} };
(function(t, h) {
  (function(o, n) {
    t.exports = n();
  })(K, function() {
    var o = "day";
    return function(n, v, m) {
      var f = function(e) {
        return e.add(4 - e.isoWeekday(), o);
      }, r = v.prototype;
      r.isoWeekYear = function() {
        return f(this).year();
      }, r.isoWeek = function(e) {
        if (!this.$utils().u(e))
          return this.add(7 * (e - this.isoWeek()), o);
        var a, i, c, p, w = f(this), g = (a = this.isoWeekYear(), i = this.$u, c = (i ? m.utc : m)().year(a).startOf("year"), p = 4 - c.isoWeekday(), c.isoWeekday() > 4 && (p += 7), c.add(p, o));
        return w.diff(g, "week") + 1;
      }, r.isoWeekday = function(e) {
        return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7);
      };
      var s = r.startOf;
      r.startOf = function(e, a) {
        var i = this.$utils(), c = !!i.u(a) || a;
        return i.p(e) === "isoweek" ? c ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : s.bind(this)(e, a);
      };
    };
  });
})(Gt);
const ce = Gt.exports;
var It = { exports: {} };
(function(t, h) {
  (function(o, n) {
    t.exports = n();
  })(K, function() {
    return function(o, n) {
      n.prototype.isSameOrBefore = function(v, m) {
        return this.isSame(v, m) || this.isBefore(v, m);
      };
    };
  });
})(It);
const de = It.exports;
var Rt = { exports: {} };
(function(t, h) {
  (function(o, n) {
    t.exports = n();
  })(K, function() {
    return function(o, n) {
      n.prototype.isSameOrAfter = function(v, m) {
        return this.isSame(v, m) || this.isAfter(v, m);
      };
    };
  });
})(Rt);
const fe = Rt.exports;
var Ht = { exports: {} };
(function(t, h) {
  (function(o, n) {
    t.exports = n();
  })(K, function() {
    return function(o, n, v) {
      n.prototype.isBetween = function(m, f, r, s) {
        var e = v(m), a = v(f), i = (s = s || "()")[0] === "(", c = s[1] === ")";
        return (i ? this.isAfter(e, r) : !this.isBefore(e, r)) && (c ? this.isBefore(a, r) : !this.isAfter(a, r)) || (i ? this.isBefore(e, r) : !this.isAfter(e, r)) && (c ? this.isAfter(a, r) : !this.isBefore(a, r));
      };
    };
  });
})(Ht);
const ge = Ht.exports;
var At = { exports: {} };
(function(t, h) {
  (function(o, n) {
    t.exports = n();
  })(K, function() {
    var o = "week", n = "year";
    return function(v, m, f) {
      var r = m.prototype;
      r.week = function(s) {
        if (s === void 0 && (s = null), s !== null)
          return this.add(7 * (s - this.week()), "day");
        var e = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var a = f(this).startOf(n).add(1, n).date(e), i = f(this).endOf(o);
          if (a.isBefore(i))
            return 1;
        }
        var c = f(this).startOf(n).date(e).startOf(o).subtract(1, "millisecond"), p = this.diff(c, o, !0);
        return p < 0 ? f(this).startOf("week").week() : Math.ceil(p);
      }, r.weeks = function(s) {
        return s === void 0 && (s = null), this.week(s);
      };
    };
  });
})(At);
const he = At.exports;
var Wt = { exports: {} };
(function(t, h) {
  (function(o, n) {
    t.exports = n();
  })(K, function() {
    return function(o, n) {
      var v = n.prototype, m = v.format;
      v.format = function(f) {
        var r = this, s = this.$locale();
        if (!this.isValid())
          return m.bind(this)(f);
        var e = this.$utils(), a = (f || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(i) {
          switch (i) {
            case "Q":
              return Math.ceil((r.$M + 1) / 3);
            case "Do":
              return s.ordinal(r.$D);
            case "gggg":
              return r.weekYear();
            case "GGGG":
              return r.isoWeekYear();
            case "wo":
              return s.ordinal(r.week(), "W");
            case "w":
            case "ww":
              return e.s(r.week(), i === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return e.s(r.isoWeek(), i === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return e.s(String(r.$H === 0 ? 24 : r.$H), i === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(r.$d.getTime() / 1e3);
            case "x":
              return r.$d.getTime();
            case "z":
              return "[" + r.offsetName() + "]";
            case "zzz":
              return "[" + r.offsetName("long") + "]";
            default:
              return i;
          }
        });
        return m.bind(this)(a);
      };
    };
  });
})(Wt);
const me = Wt.exports;
var zt = { exports: {} };
(function(t, h) {
  (function(o, n) {
    t.exports = n();
  })(K, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, v = /\d\d/, m = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, r = {}, s = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, e = function(g) {
      return function(d) {
        this[g] = +d;
      };
    }, a = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var _ = d.match(/([+-]|\d\d)/g), B = 60 * _[1] + (+_[2] || 0);
        return B === 0 ? 0 : _[0] === "+" ? -B : B;
      }(g);
    }], i = function(g) {
      var d = r[g];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, c = function(g, d) {
      var _, B = r.meridiem;
      if (B) {
        for (var u = 1; u <= 24; u += 1)
          if (g.indexOf(B(u, 0, d)) > -1) {
            _ = u > 12;
            break;
          }
      } else
        _ = g === (d ? "pm" : "PM");
      return _;
    }, p = { A: [f, function(g) {
      this.afternoon = c(g, !1);
    }], a: [f, function(g) {
      this.afternoon = c(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [v, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [m, e("seconds")], ss: [m, e("seconds")], m: [m, e("minutes")], mm: [m, e("minutes")], H: [m, e("hours")], h: [m, e("hours")], HH: [m, e("hours")], hh: [m, e("hours")], D: [m, e("day")], DD: [v, e("day")], Do: [f, function(g) {
      var d = r.ordinal, _ = g.match(/\d+/);
      if (this.day = _[0], d)
        for (var B = 1; B <= 31; B += 1)
          d(B).replace(/\[|\]/g, "") === g && (this.day = B);
    }], M: [m, e("month")], MM: [v, e("month")], MMM: [f, function(g) {
      var d = i("months"), _ = (i("monthsShort") || d.map(function(B) {
        return B.slice(0, 3);
      })).indexOf(g) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], MMMM: [f, function(g) {
      var d = i("months").indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, e("year")], YY: [v, function(g) {
      this.year = s(g);
    }], YYYY: [/\d{4}/, e("year")], Z: a, ZZ: a };
    function w(g) {
      var d, _;
      d = g, _ = r && r.formats;
      for (var B = (g = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(k, M, O) {
        var Y = O && O.toUpperCase();
        return M || _[O] || o[O] || _[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, W, P) {
          return W || P.slice(1);
        });
      })).match(n), u = B.length, x = 0; x < u; x += 1) {
        var l = B[x], b = p[l], y = b && b[0], D = b && b[1];
        B[x] = D ? { regex: y, parser: D } : l.replace(/^\[|\]$/g, "");
      }
      return function(k) {
        for (var M = {}, O = 0, Y = 0; O < u; O += 1) {
          var R = B[O];
          if (typeof R == "string")
            Y += R.length;
          else {
            var W = R.regex, P = R.parser, j = k.slice(Y), U = W.exec(j)[0];
            P.call(M, U), k = k.replace(U, "");
          }
        }
        return function(z) {
          var F = z.afternoon;
          if (F !== void 0) {
            var Z = z.hours;
            F ? Z < 12 && (z.hours += 12) : Z === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(M), M;
      };
    }
    return function(g, d, _) {
      _.p.customParseFormat = !0, g && g.parseTwoDigitYear && (s = g.parseTwoDigitYear);
      var B = d.prototype, u = B.parse;
      B.parse = function(x) {
        var l = x.date, b = x.utc, y = x.args;
        this.$u = b;
        var D = y[1];
        if (typeof D == "string") {
          var k = y[2] === !0, M = y[3] === !0, O = k || M, Y = y[2];
          M && (Y = y[2]), r = this.$locale(), !k && Y && (r = _.Ls[Y]), this.$d = function(j, U, z) {
            try {
              if (["x", "X"].indexOf(U) > -1)
                return new Date((U === "X" ? 1e3 : 1) * j);
              var F = w(U)(j), Z = F.year, st = F.month, Xt = F.day, Kt = F.hours, Zt = F.minutes, Jt = F.seconds, te = F.milliseconds, kt = F.zone, gt = new Date(), ht = Xt || (Z || st ? 1 : gt.getDate()), mt = Z || gt.getFullYear(), lt = 0;
              Z && !st || (lt = st > 0 ? st - 1 : gt.getMonth());
              var pt = Kt || 0, vt = Zt || 0, yt = Jt || 0, bt = te || 0;
              return kt ? new Date(Date.UTC(mt, lt, ht, pt, vt, yt, bt + 60 * kt.offset * 1e3)) : z ? new Date(Date.UTC(mt, lt, ht, pt, vt, yt, bt)) : new Date(mt, lt, ht, pt, vt, yt, bt);
            } catch {
              return new Date("");
            }
          }(l, D, b), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), O && l != this.format(D) && (this.$d = new Date("")), r = {};
        } else if (D instanceof Array)
          for (var R = D.length, W = 1; W <= R; W += 1) {
            y[1] = D[W - 1];
            var P = _.apply(this, y);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            W === R && (this.$d = new Date(""));
          }
        else
          u.call(this, x);
      };
    };
  });
})(zt);
const pe = zt.exports, Ft = Symbol("CHART_ROWS_KEY"), Pt = Symbol("CONFIG_KEY"), jt = Symbol("EMIT_BAR_EVENT_KEY"), Ut = Symbol("BAR_CONTAINER_KEY");
function A() {
  const t = dt(Pt);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Nt = "YYYY-MM-DD HH:mm";
function ot(t = A()) {
  const { chartStart: h, chartEnd: o, barStart: n, barEnd: v, dateFormat: m } = t, f = H(() => s(h.value)), r = H(() => s(o.value)), s = (a, i) => {
    let c;
    if (i !== void 0 && typeof a != "string" && !(a instanceof Date) && (c = i === "start" ? a[n.value] : a[v.value]), typeof a == "string")
      c = a;
    else if (a instanceof Date)
      return S(a);
    const p = m.value || Nt;
    return S(c, p, !0);
  };
  return {
    chartStartDayjs: f,
    chartEndDayjs: r,
    toDayjs: s,
    format: (a, i) => i === !1 ? a instanceof Date ? a : S(a).toDate() : (typeof a == "string" || a instanceof Date ? s(a) : a).format(i)
  };
}
function Vt() {
  const { precision: t } = A(), { chartStartDayjs: h, chartEndDayjs: o } = ot(), n = H(() => {
    switch (t == null ? void 0 : t.value) {
      case "hour":
        return "day";
      case "day":
        return "month";
      case "date":
      case "week":
        return "month";
      case "month":
        return "year";
      default:
        throw new Error(
          "Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'"
        );
    }
  }), v = H(() => {
    switch (t.value) {
      case "date":
        return "day";
      case "week":
        return "isoWeek";
      default:
        return t.value;
    }
  }), m = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "WW",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: H(() => {
      const r = [], s = [], e = o.value.diff(h.value, "minutes", !0), a = n.value, i = v.value;
      let c = h.value, p = h.value;
      for (; p.isSameOrBefore(o.value); ) {
        const w = p.endOf(i), d = w.isAfter(o.value) ? o.value.diff(p, "minutes", !0) / e * 100 : w.diff(p, "minutes", !0) / e * 100;
        s.push({
          label: p.format(m[t == null ? void 0 : t.value]),
          value: String(p),
          date: p.toDate(),
          width: String(d) + "%"
        }), p = w.add(1, i === "isoWeek" ? "week" : i).startOf(i);
      }
      for (; c.isSameOrBefore(o.value); ) {
        const w = c.endOf(a), d = w.isAfter(o.value) ? o.value.diff(c, "minutes", !0) / e * 100 : w.diff(c, "minutes", !0) / e * 100;
        r.push({
          label: c.format(m[a]),
          value: String(c),
          date: c.toDate(),
          width: String(d) + "%"
        }), c = w.add(1, a).startOf(a);
      }
      return { upperUnits: r, lowerUnits: s };
    })
  };
}
const ve = { class: "g-grid-container" }, ye = /* @__PURE__ */ Q({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {},
    highlightDates: {},
    chartStart: {},
    chartEnd: {}
  },
  setup(t) {
    const h = t, { colors: o } = A(), { timeaxisUnits: n } = Vt(), v = $([]);
    function m(a) {
      const i = a % 19, c = Math.floor(a / 100), p = a % 100, w = Math.floor(c / 4), g = c % 4, d = Math.floor((c + 8) / 25), _ = Math.floor((c - d + 1) / 3), B = (19 * i + c - w - _ + 15) % 30, u = Math.floor(p / 4), x = p % 4, l = (32 + 2 * g + 2 * u - B - x) % 7, b = Math.floor((i + 11 * B + 22 * l) / 451), y = Math.floor((B + l - 7 * b + 114) / 31), D = (B + l - 7 * b + 114) % 31 + 1;
      return S(`${a}-${y}-${D}`);
    }
    function f(a, i) {
      const c = S(a), p = S(i), w = [], g = [
        "01-01",
        "01-06",
        "04-25",
        "05-01",
        "06-02",
        "08-15",
        "11-01",
        "12-08",
        "12-25",
        "12-26"
      ], d = c.year(), _ = p.year();
      for (let u = d; u <= _; u++) {
        const x = m(u), l = x.add(1, "day");
        g.push(x.format("MM-DD")), g.push(l.format("MM-DD"));
      }
      let B = c;
      for (; B.isBefore(p) || B.isSame(p, "day"); ) {
        const u = B.format("YYYY-MM-DD"), x = B.format("MM-DD");
        (B.day() === 6 || B.day() === 0) && w.push(u), g.includes(x) && w.push(u), B = B.add(1, "day");
      }
      return w;
    }
    const r = S(h.chartStart).format("YYYY-MM-DD"), s = S(h.chartEnd).add(1, "month").format("YYYY-MM-DD"), e = f(r, s);
    return v.value = [...e, ...h.highlightDates], at(
      () => h.chartStart,
      () => {
        const a = S(h.chartStart).format("YYYY-MM-DD"), i = S(h.chartEnd).add(1, "month").format("YYYY-MM-DD"), c = f(a, i);
        v.value = [...c, ...h.highlightDates];
      }
    ), (a, i) => (E(), T("div", ve, [
      (E(!0), T(tt, null, et(C(n).lowerUnits, ({ label: c, value: p, date: w, width: g }) => {
        var d, _;
        return E(), T("div", {
          key: c,
          class: "g-grid-line",
          style: L({
            width: g,
            background: ((d = v.value) == null ? void 0 : d.includes(C(S)(w).format("YYYY-MM-DD"))) || ((_ = a.highlightedUnits) == null ? void 0 : _.includes(Number(p))) ? C(o).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
function Dt() {
  const t = dt(Ft);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
const be = { class: "g-label-column-rows" }, we = /* @__PURE__ */ Q({
  __name: "GGanttLabelColumn",
  setup(t) {
    const { font: h, colors: o, labelColumnTitle: n, rowHeight: v } = A(), m = Dt();
    return (f, r) => (E(), T("div", {
      class: "g-label-column",
      style: L({ fontFamily: C(h), color: C(o).text })
    }, [
      G(f.$slots, "label-column-title", {}, () => [
        I("div", {
          class: "g-label-column-header",
          style: L({ background: C(o).primary })
        }, q(C(n)), 5)
      ]),
      I("div", be, [
        (E(!0), T(tt, null, et(C(m)(), ({ label: s }, e) => (E(), T("div", {
          key: `${s}_${e}`,
          class: "g-label-column-row",
          style: L({
            background: e % 2 === 0 ? C(o).ternary : C(o).quartenary,
            height: `${C(v)}px`
          })
        }, [
          G(f.$slots, "label-column-row", { label: s }, () => [
            I("span", null, q(s), 1)
          ])
        ], 4))), 128))
      ])
    ], 4));
  }
});
const xe = { class: "g-timeaxis" }, Be = { class: "g-timeunits-container" }, _e = { class: "g-timeunits-container" }, De = /* @__PURE__ */ Q({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: h, colors: o } = A(), { timeaxisUnits: n } = Vt();
    return (v, m) => (E(), T("div", xe, [
      I("div", Be, [
        (E(!0), T(tt, null, et(C(n).upperUnits, ({ label: f, value: r, date: s, width: e }, a) => (E(), T("div", {
          key: f,
          class: "g-upper-timeunit",
          style: L({
            background: a % 2 === 0 ? C(o).primary : C(o).secondary,
            color: C(o).text,
            width: e
          })
        }, [
          G(v.$slots, "upper-timeunit", {
            label: f,
            value: r,
            date: s
          }, () => [
            nt(q(f), 1)
          ])
        ], 4))), 128))
      ]),
      I("div", _e, [
        (E(!0), T(tt, null, et(C(n).lowerUnits, ({ label: f, value: r, date: s, width: e }, a) => (E(), T("div", {
          key: f,
          class: "g-timeunit",
          style: L({
            background: a % 2 === 0 ? C(o).ternary : C(o).quartenary,
            color: C(o).text,
            flexDirection: C(h) === "hour" ? "column" : "row",
            alignItems: C(h) === "hour" ? "" : "center",
            width: e
          })
        }, [
          G(v.$slots, "timeunit", {
            label: f,
            value: r,
            date: s
          }, () => [
            nt(q(f), 1)
          ]),
          C(h) === "hour" ? (E(), T("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: L({ background: C(o).text })
          }, null, 4)) : V("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const ke = "cadetblue", Ce = /* @__PURE__ */ Q({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    modelValue: { type: Boolean }
  },
  setup(t) {
    const h = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      date: "DD. MMMM YYYY",
      month: "DD. MMMM YYYY",
      week: "DD. MMMM YYYY (WW)"
    }, o = t, { bar: n } = rt(o), { precision: v, font: m, barStart: f, barEnd: r, rowHeight: s } = A(), e = $("0px"), a = $("0px");
    at(
      () => o.bar,
      async () => {
        var l;
        await $t();
        const d = ((l = n == null ? void 0 : n.value) == null ? void 0 : l.ganttBarConfig.id) || "";
        if (!d)
          return;
        const _ = document.getElementById(d), { top: B, left: u } = (_ == null ? void 0 : _.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, x = Math.max(u, 10);
        e.value = `${B + s.value - 10}px`, a.value = `${x}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const i = H(() => {
      var d, _;
      return ((_ = (d = n == null ? void 0 : n.value) == null ? void 0 : d.ganttBarConfig.style) == null ? void 0 : _.background) || ke;
    }), { toDayjs: c } = ot(), p = H(() => {
      var d;
      return (d = n.value) == null ? void 0 : d[f.value];
    }), w = H(() => {
      var d;
      return (d = n.value) == null ? void 0 : d[r.value];
    }), g = H(() => {
      if (!(n != null && n.value))
        return "";
      const d = h[v.value], _ = c(p.value).format(d), B = c(w.value).format(d);
      return `${_} \u2013 ${B}`;
    });
    return (d, _) => (E(), J(ee, { to: "body" }, [
      _t(ne, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: N(() => [
          d.modelValue ? (E(), T("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: L({
              top: e.value,
              left: a.value,
              fontFamily: C(m)
            })
          }, [
            I("div", {
              class: "g-gantt-tooltip-color-dot",
              style: L({ background: i.value })
            }, null, 4),
            G(d.$slots, "default", {
              bar: C(n),
              barStart: p.value,
              barEnd: w.value
            }, () => [
              nt(q(g.value), 1)
            ])
          ], 4)) : V("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function ft(t = A()) {
  const { dateFormat: h, chartSize: o } = t, { chartStartDayjs: n, chartEndDayjs: v, toDayjs: m, format: f } = ot(t), r = H(() => v.value.diff(n.value, "minutes"));
  return {
    mapTimeToPosition: (a) => {
      const i = o.width.value || 0, c = m(a).diff(n.value, "minutes", !0);
      return Math.ceil(c / r.value * i);
    },
    mapPositionToTime: (a) => {
      const i = o.width.value || 0, c = a / i * r.value;
      return f(n.value.add(c, "minutes"), h.value);
    }
  };
}
const Ee = /* @__PURE__ */ Q({
  __name: "GGanttCurrentTime",
  setup(t) {
    const { mapTimeToPosition: h } = ft(), o = $(S()), { colors: n, dateFormat: v, currentTimeLabel: m } = A(), f = H(() => {
      const r = v.value || "YYYY-MM-DD HH:mm";
      return h(S(o.value, r).format(r));
    });
    return (r, s) => (E(), T("div", {
      class: "g-grid-current-time",
      style: L({
        left: `${f.value}px`
      })
    }, [
      I("div", {
        class: "g-grid-current-time-marker",
        style: L({
          border: `1px dashed ${C(n).markerCurrentTime}`
        })
      }, null, 4),
      I("span", {
        class: "g-grid-current-time-text",
        style: L({ color: C(n).markerCurrentTime })
      }, [
        G(r.$slots, "current-time-label", {}, () => [
          nt(q(C(m)), 1)
        ])
      ], 4)
    ], 4));
  }
});
var Ct;
const it = typeof window < "u";
it && ((Ct = window == null ? void 0 : window.navigator) == null ? void 0 : Ct.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Me(t) {
  return typeof t == "function" ? t() : C(t);
}
function Oe(t) {
  return t;
}
function Te(t) {
  return re() ? (ae(t), !0) : !1;
}
function Ye(t, h = !0) {
  oe() ? Lt(t) : h ? t() : $t(t);
}
function ct(t) {
  var h;
  const o = Me(t);
  return (h = o == null ? void 0 : o.$el) != null ? h : o;
}
const qt = it ? window : void 0;
it && window.document;
it && window.navigator;
it && window.location;
function Se(t, h = !1) {
  const o = $(), n = () => o.value = Boolean(t());
  return n(), Ye(n, h), o;
}
const xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bt = "__vueuse_ssr_handlers__";
xt[Bt] = xt[Bt] || {};
xt[Bt];
var Et = Object.getOwnPropertySymbols, $e = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, Ge = (t, h) => {
  var o = {};
  for (var n in t)
    $e.call(t, n) && h.indexOf(n) < 0 && (o[n] = t[n]);
  if (t != null && Et)
    for (var n of Et(t))
      h.indexOf(n) < 0 && Le.call(t, n) && (o[n] = t[n]);
  return o;
};
function Ie(t, h, o = {}) {
  const n = o, { window: v = qt } = n, m = Ge(n, ["window"]);
  let f;
  const r = Se(() => v && "ResizeObserver" in v), s = () => {
    f && (f.disconnect(), f = void 0);
  }, e = at(() => ct(t), (i) => {
    s(), r.value && v && i && (f = new ResizeObserver(h), f.observe(i, m));
  }, { immediate: !0, flush: "post" }), a = () => {
    s(), e();
  };
  return Te(a), {
    isSupported: r,
    stop: a
  };
}
function Re(t, h = { width: 0, height: 0 }, o = {}) {
  const { window: n = qt, box: v = "content-box" } = o, m = H(() => {
    var s, e;
    return (e = (s = ct(t)) == null ? void 0 : s.namespaceURI) == null ? void 0 : e.includes("svg");
  }), f = $(h.width), r = $(h.height);
  return Ie(t, ([s]) => {
    const e = v === "border-box" ? s.borderBoxSize : v === "content-box" ? s.contentBoxSize : s.devicePixelContentBoxSize;
    if (n && m.value) {
      const a = ct(t);
      if (a) {
        const i = n.getComputedStyle(a);
        f.value = parseFloat(i.width), r.value = parseFloat(i.height);
      }
    } else if (e) {
      const a = Array.isArray(e) ? e : [e];
      f.value = a.reduce((i, { inlineSize: c }) => i + c, 0), r.value = a.reduce((i, { blockSize: c }) => i + c, 0);
    } else
      f.value = s.contentRect.width, r.value = s.contentRect.height;
  }, o), at(() => ct(t), (s) => {
    f.value = s ? h.width : 0, r.value = s ? h.height : 0;
  }), {
    width: f,
    height: r
  };
}
var Mt;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Mt || (Mt = {}));
var He = Object.defineProperty, Ot = Object.getOwnPropertySymbols, Ae = Object.prototype.hasOwnProperty, We = Object.prototype.propertyIsEnumerable, Tt = (t, h, o) => h in t ? He(t, h, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[h] = o, ze = (t, h) => {
  for (var o in h || (h = {}))
    Ae.call(h, o) && Tt(t, o, h[o]);
  if (Ot)
    for (var o of Ot(h))
      We.call(h, o) && Tt(t, o, h[o]);
  return t;
};
const Fe = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
ze({
  linear: Oe
}, Fe);
const Yt = {
  default: {
    primary: "#eeeeee",
    secondary: "#E0E0E0",
    ternary: "#F5F5F5",
    quartenary: "#ededed",
    hoverHighlight: "rgba(204, 216, 219, 0.5)",
    markerCurrentTime: "#000",
    text: "#404040",
    background: "white"
  },
  creamy: {
    primary: "#ffe8d9",
    secondary: "#fcdcc5",
    ternary: "#fff6f0",
    quartenary: "#f7ece6",
    hoverHighlight: "rgba(230, 221, 202, 0.5)",
    markerCurrentTime: "#000",
    text: "#542d05",
    background: "white"
  },
  crimson: {
    primary: "#a82039",
    secondary: "#c41238",
    ternary: "#db4f56",
    quartenary: "#ce5f64",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  dark: {
    primary: "#404040",
    secondary: "#303030",
    ternary: "#353535",
    quartenary: "#383838",
    hoverHighlight: "rgba(159, 160, 161, 0.5)",
    markerCurrentTime: "#fff",
    text: "white",
    background: "#525252",
    toast: "#1f1f1f"
  },
  flare: {
    primary: "#e08a38",
    secondary: "#e67912",
    ternary: "#5e5145",
    quartenary: "#665648",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  fuchsia: {
    primary: "#de1d5a",
    secondary: "#b50b41",
    ternary: "#ff7da6",
    quartenary: "#f2799f",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  grove: {
    primary: "#3d9960",
    secondary: "#288542",
    ternary: "#72b585",
    quartenary: "#65a577",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  "material-blue": {
    primary: "#0D47A1",
    secondary: "#1565C0",
    ternary: "#42a5f5",
    quartenary: "#409fed",
    hoverHighlight: "rgba(110, 165, 196, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  sky: {
    primary: "#b5e3ff",
    secondary: "#a1d6f7",
    ternary: "#d6f7ff",
    quartenary: "#d0edf4",
    hoverHighlight: "rgba(193, 202, 214, 0.5)",
    markerCurrentTime: "#000",
    text: "#022c47",
    background: "white"
  },
  slumber: {
    primary: "#2a2f42",
    secondary: "#2f3447",
    ternary: "#35394d",
    quartenary: "#2c3044",
    hoverHighlight: "rgba(179, 162, 127, 0.5)",
    markerCurrentTime: "#fff",
    text: "#ffe0b3",
    background: "#38383b",
    toast: "#1f1f1f"
  },
  vue: {
    primary: "#258a5d",
    secondary: "#41B883",
    ternary: "#35495E",
    quartenary: "#2a3d51",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  }
}, Pe = { class: "g-gantt-rows-container" }, je = /* @__PURE__ */ Q({
  __name: "GGanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    currentTime: { type: Boolean },
    currentTimeLabel: { default: "" },
    dateFormat: { type: [String, Boolean], default: Nt },
    width: { default: "100%" },
    hideTimeaxis: { type: Boolean, default: !1 },
    colorScheme: { default: "default" },
    grid: { type: Boolean, default: !1 },
    pushOnOverlap: { type: Boolean, default: !1 },
    noOverlap: { type: Boolean, default: !1 },
    rowHeight: { default: 40 },
    highlightedUnits: { default: () => [] },
    highlightDates: { default: () => [] },
    font: { default: "inherit" },
    labelColumnTitle: { default: "" },
    labelColumnWidth: { default: "150px" }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(t, { emit: h }) {
    const o = t, n = h, { width: v, font: m, colorScheme: f } = rt(o), r = ie(), s = H(
      () => typeof f.value != "string" ? f.value : Yt[f.value] || Yt.default
    ), e = () => {
      var l;
      const u = (l = r.default) == null ? void 0 : l.call(r), x = [];
      return u && u.forEach((b) => {
        var y;
        if ((y = b.props) != null && y.bars) {
          const { label: D, bars: k } = b.props;
          x.push({ label: D, bars: k });
        } else
          Array.isArray(b.children) && b.children.forEach((D) => {
            var M;
            const k = D;
            if ((M = k == null ? void 0 : k.props) != null && M.bars) {
              const { label: O, bars: Y } = k.props;
              x.push({ label: O, bars: Y });
            }
          });
      }), x;
    }, a = $(!1), i = $(!1), c = $(void 0);
    let p;
    const w = (u) => {
      p && clearTimeout(p), p = setTimeout(() => {
        a.value = !0;
      }, 800), c.value = u;
    }, g = () => {
      clearTimeout(p), a.value = !1;
    }, d = (u, x, l, b) => {
      switch (u.type) {
        case "click":
          n("click-bar", { bar: x, e: u, datetime: l });
          break;
        case "mousedown":
          n("mousedown-bar", { bar: x, e: u, datetime: l });
          break;
        case "mouseup":
          n("mouseup-bar", { bar: x, e: u, datetime: l });
          break;
        case "dblclick":
          n("dblclick-bar", { bar: x, e: u, datetime: l });
          break;
        case "mouseenter":
          w(x), n("mouseenter-bar", { bar: x, e: u });
          break;
        case "mouseleave":
          g(), n("mouseleave-bar", { bar: x, e: u });
          break;
        case "dragstart":
          i.value = !0, n("dragstart-bar", { bar: x, e: u });
          break;
        case "drag":
          n("drag-bar", { bar: x, e: u });
          break;
        case "dragend":
          i.value = !1, n("dragend-bar", { bar: x, e: u, movedBars: b });
          break;
        case "contextmenu":
          n("contextmenu-bar", { bar: x, e: u, datetime: l });
          break;
      }
    }, _ = $(null), B = Re(_);
    return ut(Ft, e), ut(Pt, {
      ...rt(o),
      colors: s,
      chartSize: B
    }), ut(jt, d), (u, x) => (E(), T("div", null, [
      I("div", {
        class: wt([{ "labels-in-column": !!u.labelColumnTitle }])
      }, [
        u.labelColumnTitle ? (E(), J(we, {
          key: 0,
          style: L({
            width: u.labelColumnWidth
          })
        }, {
          "label-column-title": N(() => [
            G(u.$slots, "label-column-title")
          ]),
          "label-column-row": N(({ label: l }) => [
            G(u.$slots, "label-column-row", { label: l })
          ]),
          _: 3
        }, 8, ["style"])) : V("", !0),
        I("div", {
          ref_key: "ganttChart",
          ref: _,
          class: wt(["g-gantt-chart", { "with-column": u.labelColumnTitle }]),
          style: L({ width: C(v), background: s.value.background, fontFamily: C(m) })
        }, [
          u.hideTimeaxis ? V("", !0) : (E(), J(De, { key: 0 }, {
            "upper-timeunit": N(({ label: l, value: b, date: y }) => [
              G(u.$slots, "upper-timeunit", {
                label: l,
                value: b,
                date: y
              })
            ]),
            timeunit: N(({ label: l, value: b, date: y }) => [
              G(u.$slots, "timeunit", {
                label: l,
                value: b,
                date: y
              })
            ]),
            _: 3
          })),
          u.grid ? (E(), J(ye, {
            key: 1,
            "chart-start": u.chartStart,
            "chart-end": u.chartEnd,
            "highlighted-units": u.highlightedUnits,
            "highlight-dates": u.highlightDates
          }, null, 8, ["chart-start", "chart-end", "highlighted-units", "highlight-dates"])) : V("", !0),
          u.currentTime ? (E(), J(Ee, { key: 2 }, {
            "current-time-label": N(() => [
              G(u.$slots, "current-time-label")
            ]),
            _: 3
          })) : V("", !0),
          I("div", Pe, [
            G(u.$slots, "default")
          ])
        ], 6)
      ], 2),
      _t(Ce, {
        "model-value": a.value || i.value,
        bar: c.value
      }, {
        default: N(() => [
          G(u.$slots, "bar-tooltip", { bar: c.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ]));
  }
});
function St(t, h = () => null, o = () => null, n = A()) {
  const { barStart: v, barEnd: m, pushOnOverlap: f } = n, r = $(!1);
  let s = 0, e;
  const { mapPositionToTime: a } = ft(n), { toDayjs: i } = ot(n), c = (u) => {
    const x = document.getElementById(t.ganttBarConfig.id);
    if (!x)
      return;
    switch (s = u.clientX - (x.getBoundingClientRect().left || 0), u.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", e = g;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", e = d;
        break;
      default:
        e = w;
    }
    r.value = !0, window.addEventListener("mousemove", e), window.addEventListener("mouseup", B);
  }, p = () => {
    var l;
    const u = document.getElementById(t.ganttBarConfig.id), x = (l = u == null ? void 0 : u.closest(".g-gantt-row-bars-container")) == null ? void 0 : l.getBoundingClientRect();
    return { barElement: u, barContainer: x };
  }, w = (u) => {
    const { barElement: x, barContainer: l } = p();
    if (!x || !l)
      return;
    const b = x.getBoundingClientRect().width, y = u.clientX - l.left - s, D = y + b;
    _(y, D) || (t[v.value] = a(y), t[m.value] = a(D), h(u, t));
  }, g = (u) => {
    const { barElement: x, barContainer: l } = p();
    if (!x || !l)
      return;
    const b = u.clientX - l.left, y = a(b);
    i(y).isSameOrAfter(i(t, "end")) || (t[v.value] = y, h(u, t));
  }, d = (u) => {
    const { barElement: x, barContainer: l } = p();
    if (!x || !l)
      return;
    const b = u.clientX - l.left, y = a(b);
    i(y).isSameOrBefore(i(t, "start")) || (t[m.value] = y, h(u, t));
  }, _ = (u, x) => {
    if (!f.value)
      return !1;
    const l = t.ganttBarConfig.dragLimitLeft, b = t.ganttBarConfig.dragLimitRight;
    return u && l != null && u < l || x && b != null && x > b;
  }, B = (u) => {
    r.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", e), window.removeEventListener("mouseup", B), o(u, t);
  };
  return {
    isDragging: r,
    initDrag: c
  };
}
function Qt() {
  const t = dt(jt);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function Ue() {
  const t = A(), h = Dt(), o = Qt(), { pushOnOverlap: n, barStart: v, barEnd: m, noOverlap: f, dateFormat: r } = t, s = /* @__PURE__ */ new Map(), { toDayjs: e, format: a } = ot(), i = (l, b) => {
    const { initDrag: y } = St(l, p, B, t);
    o({ ...b, type: "dragstart" }, l), y(b), u(l);
  }, c = (l, b) => {
    const y = l.ganttBarConfig.bundle;
    y != null && (h().forEach((D) => {
      D.bars.forEach((k) => {
        if (k.ganttBarConfig.bundle === y) {
          const M = k === l ? B : () => null, { initDrag: O } = St(k, p, M, t);
          O(b), u(k);
        }
      });
    }), o({ ...b, type: "dragstart" }, l));
  }, p = (l, b) => {
    o({ ...l, type: "drag" }, b), w(b);
  }, w = (l) => {
    if (!(n != null && n.value))
      return;
    let b = l, { overlapBar: y, overlapType: D } = g(b);
    for (; y; ) {
      u(y);
      const k = e(b[v.value]), M = e(b[m.value]), O = e(y[v.value]), Y = e(y[m.value]);
      let R;
      switch (D) {
        case "left":
          R = Y.diff(k, "minutes", !0), y[m.value] = a(b[v.value], r.value), y[v.value] = a(
            O.subtract(R, "minutes"),
            r.value
          );
          break;
        case "right":
          R = M.diff(O, "minutes", !0), y[v.value] = a(M, r.value), y[m.value] = a(
            Y.add(R, "minutes"),
            r.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      y && (D === "left" || D === "right") && d(y, R, D), b = y, { overlapBar: y, overlapType: D } = g(y);
    }
  }, g = (l) => {
    var W, P;
    let b, y, D;
    const k = (P = (W = h().find((j) => j.bars.includes(l))) == null ? void 0 : W.bars) != null ? P : [], M = e(l[v.value]), O = e(l[m.value]);
    return { overlapBar: k.find((j) => {
      if (j === l)
        return !1;
      const U = e(j[v.value]), z = e(j[m.value]);
      return b = M.isBetween(U, z), y = O.isBetween(U, z), D = U.isBetween(M, O) || z.isBetween(M, O), b || y || D;
    }), overlapType: b ? "left" : y ? "right" : D ? "between" : null };
  }, d = (l, b, y) => {
    u(l), l.ganttBarConfig.bundle && h().forEach((D) => {
      D.bars.forEach((k) => {
        k.ganttBarConfig.bundle === l.ganttBarConfig.bundle && k !== l && (u(k), _(k, b, y));
      });
    });
  }, _ = (l, b, y) => {
    switch (y) {
      case "left":
        l[v.value] = a(
          e(l, "start").subtract(b, "minutes"),
          r.value
        ), l[m.value] = a(
          e(l, "end").subtract(b, "minutes"),
          r.value
        );
        break;
      case "right":
        l[v.value] = a(
          e(l, "start").add(b, "minutes"),
          r.value
        ), l[m.value] = a(e(l, "end").add(b, "minutes"), r.value);
    }
    w(l);
  }, B = (l, b) => {
    x();
    const y = {
      ...l,
      type: "dragend"
    };
    o(y, b, void 0, new Map(s)), s.clear();
  }, u = (l) => {
    if (!s.has(l)) {
      const b = l[v.value], y = l[m.value];
      s.set(l, { oldStart: b, oldEnd: y });
    }
  }, x = () => {
    if (n.value || !f.value)
      return;
    let l = !1;
    s.forEach((b, y) => {
      const { overlapBar: D } = g(y);
      D != null && (l = !0);
    }), l && s.forEach(({ oldStart: b, oldEnd: y }, D) => {
      D[v.value] = b, D[m.value] = y;
    });
  };
  return {
    initDragOfBar: i,
    initDragOfBundle: c
  };
}
function Ne() {
  const { pushOnOverlap: t } = A(), h = Dt(), o = (f) => {
    const r = [];
    return f != null && h().forEach((s) => {
      s.bars.forEach((e) => {
        e.ganttBarConfig.bundle === f && r.push(e);
      });
    }), r;
  }, n = (f) => {
    if (!t.value || f.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const s of ["left", "right"]) {
      const e = s, { gapDistanceSoFar: a, bundleBarsAndGapDist: i } = v(
        f,
        0,
        e
      );
      let c = a;
      const p = i;
      if (!p)
        continue;
      for (let g = 0; g < p.length; g++) {
        const d = p[g].bar, _ = p[g].gapDistance;
        o(d.ganttBarConfig.bundle).filter(
          (u) => u !== d
        ).forEach((u) => {
          const x = v(u, _, e), l = x.gapDistanceSoFar, b = x.bundleBarsAndGapDist;
          l != null && (!c || l < c) && (c = l), b.forEach((y) => {
            p.find((D) => D.bar === y.bar) || p.push(y);
          });
        });
      }
      const w = document.getElementById(f.ganttBarConfig.id);
      c != null && e === "left" ? f.ganttBarConfig.dragLimitLeft = w.offsetLeft - c : c != null && e === "right" && (f.ganttBarConfig.dragLimitRight = w.offsetLeft + w.offsetWidth + c);
    }
    o(f.ganttBarConfig.bundle).forEach((s) => {
      s.ganttBarConfig.dragLimitLeft = f.ganttBarConfig.dragLimitLeft, s.ganttBarConfig.dragLimitRight = f.ganttBarConfig.dragLimitRight;
    });
  }, v = (f, r = 0, s) => {
    const e = f.ganttBarConfig.bundle ? [{ bar: f, gapDistance: r }] : [];
    let a = f, i = m(a, s);
    if (s === "left")
      for (; i; ) {
        const c = document.getElementById(a.ganttBarConfig.id), p = document.getElementById(i.ganttBarConfig.id), w = p.offsetLeft + p.offsetWidth;
        if (r += c.offsetLeft - w, i.ganttBarConfig.immobile)
          return { gapDistanceSoFar: r, bundleBarsAndGapDist: e };
        i.ganttBarConfig.bundle && e.push({
          bar: i,
          gapDistance: r
        }), a = i, i = m(i, "left");
      }
    if (s === "right")
      for (; i; ) {
        const c = document.getElementById(a.ganttBarConfig.id), p = document.getElementById(i.ganttBarConfig.id), w = c.offsetLeft + c.offsetWidth;
        if (r += p.offsetLeft - w, i.ganttBarConfig.immobile)
          return { gapDistanceSoFar: r, bundleBarsAndGapDist: e };
        i.ganttBarConfig.bundle && e.push({
          bar: i,
          gapDistance: r
        }), a = i, i = m(i, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: e };
  }, m = (f, r) => {
    var i, c;
    const s = document.getElementById(f.ganttBarConfig.id), e = (c = (i = h().find((p) => p.bars.includes(f))) == null ? void 0 : i.bars) != null ? c : [];
    let a = [];
    return r === "left" ? a = e.filter((p) => {
      const w = document.getElementById(p.ganttBarConfig.id);
      return w && w.offsetLeft < s.offsetLeft && p.ganttBarConfig.pushOnOverlap !== !1;
    }) : a = e.filter((p) => {
      const w = document.getElementById(p.ganttBarConfig.id);
      return w && w.offsetLeft > s.offsetLeft && p.ganttBarConfig.pushOnOverlap !== !1;
    }), a.length > 0 ? a.reduce((p, w) => {
      const g = document.getElementById(p.ganttBarConfig.id), d = document.getElementById(w.ganttBarConfig.id), _ = Math.abs(g.offsetLeft - s.offsetLeft), B = Math.abs(d.offsetLeft - s.offsetLeft);
      return _ < B ? p : w;
    }, a[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: n
  };
}
const Ve = ["id"], qe = { class: "g-gantt-bar-label" }, Qe = ["innerHTML"], Xe = /* @__PURE__ */ I("div", { class: "g-gantt-bar-handle-left" }, null, -1), Ke = /* @__PURE__ */ I("div", { class: "g-gantt-bar-handle-right" }, null, -1), Ze = /* @__PURE__ */ Q({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(t) {
    const h = t, o = Qt(), n = A(), { rowHeight: v } = n, { bar: m } = rt(h), { mapTimeToPosition: f, mapPositionToTime: r } = ft(), { initDragOfBar: s, initDragOfBundle: e } = Ue(), { setDragLimitsOfGanttBar: a } = Ne(), i = $(!1), c = H(() => m.value.ganttBarConfig);
    function p(k) {
      c.value.bundle != null ? e(m.value, k) : s(m.value, k), i.value = !0;
    }
    const w = () => {
      a(m.value), !c.value.immobile && (window.addEventListener("mousemove", p, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", p), i.value = !1;
        },
        { once: !0 }
      ));
    }, g = dt(Ut), d = (k) => {
      var Y;
      k.preventDefault(), k.type === "mousedown" && w();
      const M = (Y = g == null ? void 0 : g.value) == null ? void 0 : Y.getBoundingClientRect();
      if (!M)
        return;
      const O = r(k.clientX - M.left);
      o(k, m.value, O);
    }, { barStart: _, barEnd: B, width: u, chartStart: x, chartEnd: l, chartSize: b } = n, y = $(0), D = $(0);
    return Lt(() => {
      at(
        [m, u, x, l, b.width],
        () => {
          y.value = f(m.value[_.value]), D.value = f(m.value[B.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (k, M) => (E(), T("div", {
      id: c.value.id,
      class: wt(["g-gantt-bar", c.value.class || ""]),
      style: L({
        ...c.value.style,
        position: "absolute",
        top: `${C(v) * 0.1}px`,
        left: `${y.value}px`,
        width: `${D.value - y.value}px`,
        height: `${C(v) * 0.8}px`,
        zIndex: i.value ? 3 : 2
      }),
      onMousedown: d,
      onClick: d,
      onDblclick: d,
      onMouseenter: d,
      onMouseleave: d,
      onContextmenu: d
    }, [
      I("div", qe, [
        G(k.$slots, "default", { bar: C(m) }, () => [
          I("div", null, q(c.value.label || ""), 1),
          c.value.html ? (E(), T("div", {
            key: 0,
            innerHTML: c.value.html
          }, null, 8, Qe)) : V("", !0)
        ])
      ]),
      c.value.hasHandles ? (E(), T(tt, { key: 0 }, [
        Xe,
        Ke
      ], 64)) : V("", !0)
    ], 46, Ve));
  }
});
const Je = /* @__PURE__ */ Q({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: h }) {
    const o = t, n = h, { rowHeight: v, colors: m, labelColumnTitle: f } = A(), { highlightOnHover: r } = rt(o), s = $(!1), e = H(() => ({
      height: `${v.value}px`,
      background: (r == null ? void 0 : r.value) && s.value ? m.value.hoverHighlight : null
    })), { mapPositionToTime: a } = ft(), i = $(null);
    ut(Ut, i);
    const c = (w) => {
      var B;
      const g = (B = i.value) == null ? void 0 : B.getBoundingClientRect();
      if (!g) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const d = w.clientX - g.left, _ = a(d);
      n("drop", { e: w, datetime: _ });
    }, p = (w) => !w || /^\s*$/.test(w);
    return (w, g) => (E(), T("div", {
      class: "g-gantt-row",
      style: L(e.value),
      onDragover: g[0] || (g[0] = se((d) => s.value = !0, ["prevent"])),
      onDragleave: g[1] || (g[1] = (d) => s.value = !1),
      onDrop: g[2] || (g[2] = (d) => c(d)),
      onMouseover: g[3] || (g[3] = (d) => s.value = !0),
      onMouseleave: g[4] || (g[4] = (d) => s.value = !1)
    }, [
      !p(w.label) && !C(f) ? (E(), T("div", {
        key: 0,
        class: "g-gantt-row-label",
        style: L({ background: C(m).primary, color: C(m).text })
      }, [
        G(w.$slots, "label", {}, () => [
          nt(q(w.label), 1)
        ])
      ], 4)) : V("", !0),
      I("div", le({
        ref_key: "barContainer",
        ref: i,
        class: "g-gantt-row-bars-container"
      }, w.$attrs), [
        _t(ue, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: N(() => [
            (E(!0), T(tt, null, et(w.bars, (d) => (E(), J(Ze, {
              key: d.ganttBarConfig.id,
              bar: d
            }, {
              default: N(() => [
                G(w.$slots, "bar-label", { bar: d })
              ]),
              _: 2
            }, 1032, ["bar"]))), 128))
          ]),
          _: 3
        })
      ], 16)
    ], 36));
  }
});
function tn() {
  S.extend(de), S.extend(fe), S.extend(ge), S.extend(pe), S.extend(he), S.extend(ce), S.extend(me);
}
const an = {
  install(t, h) {
    tn(), t.component("GGanttChart", je), t.component("GGanttRow", Je);
  }
};
function X(t, h = "top") {
  if (!t || typeof document > "u")
    return;
  const o = document.head, n = document.createElement("style");
  h === "top" && o.firstChild ? o.insertBefore(n, o.firstChild) : o.appendChild(n), n.appendChild(document.createTextNode(t));
}
X(`
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  border-radius: 5px;
}
.with-column {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.g-gantt-rows-container {
  position: relative;
}
.labels-in-column {
  display: flex;
  flex-direction: row;
}
.highlighted-day {
  color: darkred;
}
`, "top");
X(`
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
}
.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}
.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
`, "top");
X(`
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
}
.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
`, "top");
X(`
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 4;
  display: flex;
  flex-direction: column;
}
.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}
.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
`, "top");
X(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
`, "top");
X(`
.g-grid-current-time {
  position: absolute;
  height: 100%;
  display: flex;
  z-index: 5;
  pointer-events: none;
}
.g-grid-current-time-marker {
  width: 0px;
  height: calc(100% - 2px);
  display: flex;
}
.g-grid-current-time-text {
  font-size: x-small;
}
`, "top");
X(`
.g-label-column {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(64, 64, 64);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  font-size: 0.9em;
}
.g-label-column-header {
  width: 100%;
  height: 80px;
  min-height: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
}
.g-label-column-rows {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
}
.g-label-column-row {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.1rem 0.3rem;
  overflow: hidden;
  white-space: normal;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.g-label-column-row:last-child {
  border-bottom-left-radius: 5px;
}
`, "top");
X(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
  opacity: 0;
}
`, "top");
export {
  je as GGanttChart,
  Je as GGanttRow,
  an as default,
  tn as extendDayjs,
  an as ganttastic
};
