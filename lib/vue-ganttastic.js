import $ from "dayjs";
import { inject as ct, computed as H, defineComponent as Q, openBlock as E, createElementBlock as T, Fragment as tt, renderList as et, unref as C, normalizeStyle as S, renderSlot as L, createElementVNode as I, toDisplayString as q, createTextVNode as nt, createCommentVNode as V, toRefs as rt, ref as G, watch as dt, nextTick as St, createBlock as J, Teleport as ee, createVNode as _t, Transition as ne, withCtx as N, getCurrentScope as re, onScopeDispose as ae, getCurrentInstance as oe, onMounted as Lt, useSlots as ie, provide as lt, normalizeClass as wt, withModifiers as se, mergeProps as le, TransitionGroup as ue } from "vue";
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gt = { exports: {} };
(function(t, m) {
  (function(o, e) {
    t.exports = e();
  })(K, function() {
    var o = "day";
    return function(e, y, h) {
      var f = function(n) {
        return n.add(4 - n.isoWeekday(), o);
      }, r = y.prototype;
      r.isoWeekYear = function() {
        return f(this).year();
      }, r.isoWeek = function(n) {
        if (!this.$utils().u(n))
          return this.add(7 * (n - this.isoWeek()), o);
        var a, s, d, p, w = f(this), g = (a = this.isoWeekYear(), s = this.$u, d = (s ? h.utc : h)().year(a).startOf("year"), p = 4 - d.isoWeekday(), d.isoWeekday() > 4 && (p += 7), d.add(p, o));
        return w.diff(g, "week") + 1;
      }, r.isoWeekday = function(n) {
        return this.$utils().u(n) ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7);
      };
      var i = r.startOf;
      r.startOf = function(n, a) {
        var s = this.$utils(), d = !!s.u(a) || a;
        return s.p(n) === "isoweek" ? d ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : i.bind(this)(n, a);
      };
    };
  });
})(Gt);
const ce = Gt.exports;
var It = { exports: {} };
(function(t, m) {
  (function(o, e) {
    t.exports = e();
  })(K, function() {
    return function(o, e) {
      e.prototype.isSameOrBefore = function(y, h) {
        return this.isSame(y, h) || this.isBefore(y, h);
      };
    };
  });
})(It);
const de = It.exports;
var Rt = { exports: {} };
(function(t, m) {
  (function(o, e) {
    t.exports = e();
  })(K, function() {
    return function(o, e) {
      e.prototype.isSameOrAfter = function(y, h) {
        return this.isSame(y, h) || this.isAfter(y, h);
      };
    };
  });
})(Rt);
const fe = Rt.exports;
var Ht = { exports: {} };
(function(t, m) {
  (function(o, e) {
    t.exports = e();
  })(K, function() {
    return function(o, e, y) {
      e.prototype.isBetween = function(h, f, r, i) {
        var n = y(h), a = y(f), s = (i = i || "()")[0] === "(", d = i[1] === ")";
        return (s ? this.isAfter(n, r) : !this.isBefore(n, r)) && (d ? this.isBefore(a, r) : !this.isAfter(a, r)) || (s ? this.isBefore(n, r) : !this.isAfter(n, r)) && (d ? this.isAfter(a, r) : !this.isBefore(a, r));
      };
    };
  });
})(Ht);
const ge = Ht.exports;
var At = { exports: {} };
(function(t, m) {
  (function(o, e) {
    t.exports = e();
  })(K, function() {
    var o = "week", e = "year";
    return function(y, h, f) {
      var r = h.prototype;
      r.week = function(i) {
        if (i === void 0 && (i = null), i !== null)
          return this.add(7 * (i - this.week()), "day");
        var n = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var a = f(this).startOf(e).add(1, e).date(n), s = f(this).endOf(o);
          if (a.isBefore(s))
            return 1;
        }
        var d = f(this).startOf(e).date(n).startOf(o).subtract(1, "millisecond"), p = this.diff(d, o, !0);
        return p < 0 ? f(this).startOf("week").week() : Math.ceil(p);
      }, r.weeks = function(i) {
        return i === void 0 && (i = null), this.week(i);
      };
    };
  });
})(At);
const he = At.exports;
var Wt = { exports: {} };
(function(t, m) {
  (function(o, e) {
    t.exports = e();
  })(K, function() {
    return function(o, e) {
      var y = e.prototype, h = y.format;
      y.format = function(f) {
        var r = this, i = this.$locale();
        if (!this.isValid())
          return h.bind(this)(f);
        var n = this.$utils(), a = (f || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(s) {
          switch (s) {
            case "Q":
              return Math.ceil((r.$M + 1) / 3);
            case "Do":
              return i.ordinal(r.$D);
            case "gggg":
              return r.weekYear();
            case "GGGG":
              return r.isoWeekYear();
            case "wo":
              return i.ordinal(r.week(), "W");
            case "w":
            case "ww":
              return n.s(r.week(), s === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return n.s(r.isoWeek(), s === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return n.s(String(r.$H === 0 ? 24 : r.$H), s === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(r.$d.getTime() / 1e3);
            case "x":
              return r.$d.getTime();
            case "z":
              return "[" + r.offsetName() + "]";
            case "zzz":
              return "[" + r.offsetName("long") + "]";
            default:
              return s;
          }
        });
        return h.bind(this)(a);
      };
    };
  });
})(Wt);
const me = Wt.exports;
var zt = { exports: {} };
(function(t, m) {
  (function(o, e) {
    t.exports = e();
  })(K, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, y = /\d\d/, h = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, r = {}, i = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, n = function(g) {
      return function(c) {
        this[g] = +c;
      };
    }, a = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(c) {
        if (!c || c === "Z")
          return 0;
        var _ = c.match(/([+-]|\d\d)/g), B = 60 * _[1] + (+_[2] || 0);
        return B === 0 ? 0 : _[0] === "+" ? -B : B;
      }(g);
    }], s = function(g) {
      var c = r[g];
      return c && (c.indexOf ? c : c.s.concat(c.f));
    }, d = function(g, c) {
      var _, B = r.meridiem;
      if (B) {
        for (var u = 1; u <= 24; u += 1)
          if (g.indexOf(B(u, 0, c)) > -1) {
            _ = u > 12;
            break;
          }
      } else
        _ = g === (c ? "pm" : "PM");
      return _;
    }, p = { A: [f, function(g) {
      this.afternoon = d(g, !1);
    }], a: [f, function(g) {
      this.afternoon = d(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [y, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [h, n("seconds")], ss: [h, n("seconds")], m: [h, n("minutes")], mm: [h, n("minutes")], H: [h, n("hours")], h: [h, n("hours")], HH: [h, n("hours")], hh: [h, n("hours")], D: [h, n("day")], DD: [y, n("day")], Do: [f, function(g) {
      var c = r.ordinal, _ = g.match(/\d+/);
      if (this.day = _[0], c)
        for (var B = 1; B <= 31; B += 1)
          c(B).replace(/\[|\]/g, "") === g && (this.day = B);
    }], M: [h, n("month")], MM: [y, n("month")], MMM: [f, function(g) {
      var c = s("months"), _ = (s("monthsShort") || c.map(function(B) {
        return B.slice(0, 3);
      })).indexOf(g) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], MMMM: [f, function(g) {
      var c = s("months").indexOf(g) + 1;
      if (c < 1)
        throw new Error();
      this.month = c % 12 || c;
    }], Y: [/[+-]?\d+/, n("year")], YY: [y, function(g) {
      this.year = i(g);
    }], YYYY: [/\d{4}/, n("year")], Z: a, ZZ: a };
    function w(g) {
      var c, _;
      c = g, _ = r && r.formats;
      for (var B = (g = c.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(D, M, O) {
        var Y = O && O.toUpperCase();
        return M || _[O] || o[O] || _[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, W, P) {
          return W || P.slice(1);
        });
      })).match(e), u = B.length, x = 0; x < u; x += 1) {
        var l = B[x], b = p[l], v = b && b[0], k = b && b[1];
        B[x] = k ? { regex: v, parser: k } : l.replace(/^\[|\]$/g, "");
      }
      return function(D) {
        for (var M = {}, O = 0, Y = 0; O < u; O += 1) {
          var R = B[O];
          if (typeof R == "string")
            Y += R.length;
          else {
            var W = R.regex, P = R.parser, j = D.slice(Y), U = W.exec(j)[0];
            P.call(M, U), D = D.replace(U, "");
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
    return function(g, c, _) {
      _.p.customParseFormat = !0, g && g.parseTwoDigitYear && (i = g.parseTwoDigitYear);
      var B = c.prototype, u = B.parse;
      B.parse = function(x) {
        var l = x.date, b = x.utc, v = x.args;
        this.$u = b;
        var k = v[1];
        if (typeof k == "string") {
          var D = v[2] === !0, M = v[3] === !0, O = D || M, Y = v[2];
          M && (Y = v[2]), r = this.$locale(), !D && Y && (r = _.Ls[Y]), this.$d = function(j, U, z) {
            try {
              if (["x", "X"].indexOf(U) > -1)
                return new Date((U === "X" ? 1e3 : 1) * j);
              var F = w(U)(j), Z = F.year, it = F.month, Xt = F.day, Kt = F.hours, Zt = F.minutes, Jt = F.seconds, te = F.milliseconds, Dt = F.zone, gt = new Date(), ht = Xt || (Z || it ? 1 : gt.getDate()), mt = Z || gt.getFullYear(), st = 0;
              Z && !it || (st = it > 0 ? it - 1 : gt.getMonth());
              var pt = Kt || 0, vt = Zt || 0, yt = Jt || 0, bt = te || 0;
              return Dt ? new Date(Date.UTC(mt, st, ht, pt, vt, yt, bt + 60 * Dt.offset * 1e3)) : z ? new Date(Date.UTC(mt, st, ht, pt, vt, yt, bt)) : new Date(mt, st, ht, pt, vt, yt, bt);
            } catch {
              return new Date("");
            }
          }(l, k, b), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), O && l != this.format(k) && (this.$d = new Date("")), r = {};
        } else if (k instanceof Array)
          for (var R = k.length, W = 1; W <= R; W += 1) {
            v[1] = k[W - 1];
            var P = _.apply(this, v);
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
  const t = ct(Pt);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Nt = "YYYY-MM-DD HH:mm";
function at(t = A()) {
  const { chartStart: m, chartEnd: o, barStart: e, barEnd: y, dateFormat: h } = t, f = H(() => i(m.value)), r = H(() => i(o.value)), i = (a, s) => {
    let d;
    if (s !== void 0 && typeof a != "string" && !(a instanceof Date) && (d = s === "start" ? a[e.value] : a[y.value]), typeof a == "string")
      d = a;
    else if (a instanceof Date)
      return $(a);
    const p = h.value || Nt;
    return $(d, p, !0);
  };
  return {
    chartStartDayjs: f,
    chartEndDayjs: r,
    toDayjs: i,
    format: (a, s) => s === !1 ? a instanceof Date ? a : $(a).toDate() : (typeof a == "string" || a instanceof Date ? i(a) : a).format(s)
  };
}
function Vt() {
  const { precision: t } = A(), { chartStartDayjs: m, chartEndDayjs: o } = at(), e = H(() => {
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
  }), y = H(() => {
    switch (t.value) {
      case "date":
        return "day";
      case "week":
        return "isoWeek";
      default:
        return t.value;
    }
  }), h = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "WW",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: H(() => {
      const r = [], i = [], n = o.value.diff(m.value, "minutes", !0), a = e.value, s = y.value;
      let d = m.value, p = m.value;
      for (; p.isSameOrBefore(o.value); ) {
        const w = p.endOf(s), c = w.isAfter(o.value) ? o.value.diff(p, "minutes", !0) / n * 100 : w.diff(p, "minutes", !0) / n * 100;
        i.push({
          label: p.format(h[t == null ? void 0 : t.value]),
          value: String(p),
          date: p.toDate(),
          width: String(c) + "%"
        }), p = w.add(1, s === "isoWeek" ? "week" : s).startOf(s);
      }
      for (; d.isSameOrBefore(o.value); ) {
        const w = d.endOf(a), c = w.isAfter(o.value) ? o.value.diff(d, "minutes", !0) / n * 100 : w.diff(d, "minutes", !0) / n * 100;
        r.push({
          label: d.format(h[a]),
          value: String(d),
          date: d.toDate(),
          width: String(c) + "%"
        }), d = w.add(1, a).startOf(a);
      }
      return { upperUnits: r, lowerUnits: i };
    })
  };
}
const ve = { class: "g-grid-container" }, ye = /* @__PURE__ */ Q({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {},
    highlightDates: {}
  },
  setup(t) {
    const m = t, { colors: o } = A(), { timeaxisUnits: e } = Vt();
    function y(a) {
      const s = a % 19, d = Math.floor(a / 100), p = a % 100, w = Math.floor(d / 4), g = d % 4, c = Math.floor((d + 8) / 25), _ = Math.floor((d - c + 1) / 3), B = (19 * s + d - w - _ + 15) % 30, u = Math.floor(p / 4), x = p % 4, l = (32 + 2 * g + 2 * u - B - x) % 7, b = Math.floor((s + 11 * B + 22 * l) / 451), v = Math.floor((B + l - 7 * b + 114) / 31), k = (B + l - 7 * b + 114) % 31 + 1;
      return $(`${a}-${v}-${k}`);
    }
    function h(a, s) {
      const d = $(a), p = $(s), w = [], g = [
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
      ], c = d.year(), _ = p.year();
      for (let u = c; u <= _; u++) {
        const x = y(u), l = x.add(1, "day");
        g.push(x.format("MM-DD")), g.push(l.format("MM-DD"));
      }
      let B = d;
      for (; B.isBefore(p) || B.isSame(p, "day"); ) {
        const u = B.format("YYYY-MM-DD"), x = B.format("MM-DD");
        (B.day() === 6 || B.day() === 0) && w.push(u), g.includes(x) && w.push(u), B = B.add(1, "day");
      }
      return w;
    }
    let f;
    const r = $(e.value.upperUnits[0].date).format("YYYY-MM-DD"), i = $(e.value.upperUnits[1].date).add(1, "month").format("YYYY-MM-DD");
    return f = [...h(r, i), ...m.highlightDates], (a, s) => (E(), T("div", ve, [
      (E(!0), T(tt, null, et(C(e).lowerUnits, ({ label: d, value: p, date: w, width: g }) => {
        var c, _;
        return E(), T("div", {
          key: d,
          class: "g-grid-line",
          style: S({
            width: g,
            background: ((c = C(f)) == null ? void 0 : c.includes(C($)(w).format("YYYY-MM-DD"))) || ((_ = a.highlightedUnits) == null ? void 0 : _.includes(Number(p))) ? C(o).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
function kt() {
  const t = ct(Ft);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
const be = { class: "g-label-column-rows" }, we = /* @__PURE__ */ Q({
  __name: "GGanttLabelColumn",
  setup(t) {
    const { font: m, colors: o, labelColumnTitle: e, rowHeight: y } = A(), h = kt();
    return (f, r) => (E(), T("div", {
      class: "g-label-column",
      style: S({ fontFamily: C(m), color: C(o).text })
    }, [
      L(f.$slots, "label-column-title", {}, () => [
        I("div", {
          class: "g-label-column-header",
          style: S({ background: C(o).primary })
        }, q(C(e)), 5)
      ]),
      I("div", be, [
        (E(!0), T(tt, null, et(C(h)(), ({ label: i }, n) => (E(), T("div", {
          key: `${i}_${n}`,
          class: "g-label-column-row",
          style: S({
            background: n % 2 === 0 ? C(o).ternary : C(o).quartenary,
            height: `${C(y)}px`
          })
        }, [
          L(f.$slots, "label-column-row", { label: i }, () => [
            I("span", null, q(i), 1)
          ])
        ], 4))), 128))
      ])
    ], 4));
  }
});
const xe = { class: "g-timeaxis" }, Be = { class: "g-timeunits-container" }, _e = { class: "g-timeunits-container" }, ke = /* @__PURE__ */ Q({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: m, colors: o } = A(), { timeaxisUnits: e } = Vt();
    return (y, h) => (E(), T("div", xe, [
      I("div", Be, [
        (E(!0), T(tt, null, et(C(e).upperUnits, ({ label: f, value: r, date: i, width: n }, a) => (E(), T("div", {
          key: f,
          class: "g-upper-timeunit",
          style: S({
            background: a % 2 === 0 ? C(o).primary : C(o).secondary,
            color: C(o).text,
            width: n
          })
        }, [
          L(y.$slots, "upper-timeunit", {
            label: f,
            value: r,
            date: i
          }, () => [
            nt(q(f), 1)
          ])
        ], 4))), 128))
      ]),
      I("div", _e, [
        (E(!0), T(tt, null, et(C(e).lowerUnits, ({ label: f, value: r, date: i, width: n }, a) => (E(), T("div", {
          key: f,
          class: "g-timeunit",
          style: S({
            background: a % 2 === 0 ? C(o).ternary : C(o).quartenary,
            color: C(o).text,
            flexDirection: C(m) === "hour" ? "column" : "row",
            alignItems: C(m) === "hour" ? "" : "center",
            width: n
          })
        }, [
          L(y.$slots, "timeunit", {
            label: f,
            value: r,
            date: i
          }, () => [
            nt(q(f), 1)
          ]),
          C(m) === "hour" ? (E(), T("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: S({ background: C(o).text })
          }, null, 4)) : V("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const De = "cadetblue", Ce = /* @__PURE__ */ Q({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    modelValue: { type: Boolean }
  },
  setup(t) {
    const m = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      date: "DD. MMMM YYYY",
      month: "DD. MMMM YYYY",
      week: "DD. MMMM YYYY (WW)"
    }, o = t, { bar: e } = rt(o), { precision: y, font: h, barStart: f, barEnd: r, rowHeight: i } = A(), n = G("0px"), a = G("0px");
    dt(
      () => o.bar,
      async () => {
        var l;
        await St();
        const c = ((l = e == null ? void 0 : e.value) == null ? void 0 : l.ganttBarConfig.id) || "";
        if (!c)
          return;
        const _ = document.getElementById(c), { top: B, left: u } = (_ == null ? void 0 : _.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, x = Math.max(u, 10);
        n.value = `${B + i.value - 10}px`, a.value = `${x}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const s = H(() => {
      var c, _;
      return ((_ = (c = e == null ? void 0 : e.value) == null ? void 0 : c.ganttBarConfig.style) == null ? void 0 : _.background) || De;
    }), { toDayjs: d } = at(), p = H(() => {
      var c;
      return (c = e.value) == null ? void 0 : c[f.value];
    }), w = H(() => {
      var c;
      return (c = e.value) == null ? void 0 : c[r.value];
    }), g = H(() => {
      if (!(e != null && e.value))
        return "";
      const c = m[y.value], _ = d(p.value).format(c), B = d(w.value).format(c);
      return `${_} \u2013 ${B}`;
    });
    return (c, _) => (E(), J(ee, { to: "body" }, [
      _t(ne, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: N(() => [
          c.modelValue ? (E(), T("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: S({
              top: n.value,
              left: a.value,
              fontFamily: C(h)
            })
          }, [
            I("div", {
              class: "g-gantt-tooltip-color-dot",
              style: S({ background: s.value })
            }, null, 4),
            L(c.$slots, "default", {
              bar: C(e),
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
  const { dateFormat: m, chartSize: o } = t, { chartStartDayjs: e, chartEndDayjs: y, toDayjs: h, format: f } = at(t), r = H(() => y.value.diff(e.value, "minutes"));
  return {
    mapTimeToPosition: (a) => {
      const s = o.width.value || 0, d = h(a).diff(e.value, "minutes", !0);
      return Math.ceil(d / r.value * s);
    },
    mapPositionToTime: (a) => {
      const s = o.width.value || 0, d = a / s * r.value;
      return f(e.value.add(d, "minutes"), m.value);
    }
  };
}
const Ee = /* @__PURE__ */ Q({
  __name: "GGanttCurrentTime",
  setup(t) {
    const { mapTimeToPosition: m } = ft(), o = G($()), { colors: e, dateFormat: y, currentTimeLabel: h } = A(), f = H(() => {
      const r = y.value || "YYYY-MM-DD HH:mm";
      return m($(o.value, r).format(r));
    });
    return (r, i) => (E(), T("div", {
      class: "g-grid-current-time",
      style: S({
        left: `${f.value}px`
      })
    }, [
      I("div", {
        class: "g-grid-current-time-marker",
        style: S({
          border: `1px dashed ${C(e).markerCurrentTime}`
        })
      }, null, 4),
      I("span", {
        class: "g-grid-current-time-text",
        style: S({ color: C(e).markerCurrentTime })
      }, [
        L(r.$slots, "current-time-label", {}, () => [
          nt(q(C(h)), 1)
        ])
      ], 4)
    ], 4));
  }
});
var Ct;
const ot = typeof window < "u";
ot && ((Ct = window == null ? void 0 : window.navigator) == null ? void 0 : Ct.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Me(t) {
  return typeof t == "function" ? t() : C(t);
}
function Oe(t) {
  return t;
}
function Te(t) {
  return re() ? (ae(t), !0) : !1;
}
function Ye(t, m = !0) {
  oe() ? Lt(t) : m ? t() : St(t);
}
function ut(t) {
  var m;
  const o = Me(t);
  return (m = o == null ? void 0 : o.$el) != null ? m : o;
}
const qt = ot ? window : void 0;
ot && window.document;
ot && window.navigator;
ot && window.location;
function $e(t, m = !1) {
  const o = G(), e = () => o.value = Boolean(t());
  return e(), Ye(e, m), o;
}
const xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bt = "__vueuse_ssr_handlers__";
xt[Bt] = xt[Bt] || {};
xt[Bt];
var Et = Object.getOwnPropertySymbols, Se = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, Ge = (t, m) => {
  var o = {};
  for (var e in t)
    Se.call(t, e) && m.indexOf(e) < 0 && (o[e] = t[e]);
  if (t != null && Et)
    for (var e of Et(t))
      m.indexOf(e) < 0 && Le.call(t, e) && (o[e] = t[e]);
  return o;
};
function Ie(t, m, o = {}) {
  const e = o, { window: y = qt } = e, h = Ge(e, ["window"]);
  let f;
  const r = $e(() => y && "ResizeObserver" in y), i = () => {
    f && (f.disconnect(), f = void 0);
  }, n = dt(() => ut(t), (s) => {
    i(), r.value && y && s && (f = new ResizeObserver(m), f.observe(s, h));
  }, { immediate: !0, flush: "post" }), a = () => {
    i(), n();
  };
  return Te(a), {
    isSupported: r,
    stop: a
  };
}
function Re(t, m = { width: 0, height: 0 }, o = {}) {
  const { window: e = qt, box: y = "content-box" } = o, h = H(() => {
    var i, n;
    return (n = (i = ut(t)) == null ? void 0 : i.namespaceURI) == null ? void 0 : n.includes("svg");
  }), f = G(m.width), r = G(m.height);
  return Ie(t, ([i]) => {
    const n = y === "border-box" ? i.borderBoxSize : y === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    if (e && h.value) {
      const a = ut(t);
      if (a) {
        const s = e.getComputedStyle(a);
        f.value = parseFloat(s.width), r.value = parseFloat(s.height);
      }
    } else if (n) {
      const a = Array.isArray(n) ? n : [n];
      f.value = a.reduce((s, { inlineSize: d }) => s + d, 0), r.value = a.reduce((s, { blockSize: d }) => s + d, 0);
    } else
      f.value = i.contentRect.width, r.value = i.contentRect.height;
  }, o), dt(() => ut(t), (i) => {
    f.value = i ? m.width : 0, r.value = i ? m.height : 0;
  }), {
    width: f,
    height: r
  };
}
var Mt;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Mt || (Mt = {}));
var He = Object.defineProperty, Ot = Object.getOwnPropertySymbols, Ae = Object.prototype.hasOwnProperty, We = Object.prototype.propertyIsEnumerable, Tt = (t, m, o) => m in t ? He(t, m, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[m] = o, ze = (t, m) => {
  for (var o in m || (m = {}))
    Ae.call(m, o) && Tt(t, o, m[o]);
  if (Ot)
    for (var o of Ot(m))
      We.call(m, o) && Tt(t, o, m[o]);
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
  setup(t, { emit: m }) {
    const o = t, e = m, { width: y, font: h, colorScheme: f } = rt(o), r = ie(), i = H(
      () => typeof f.value != "string" ? f.value : Yt[f.value] || Yt.default
    ), n = () => {
      var l;
      const u = (l = r.default) == null ? void 0 : l.call(r), x = [];
      return u && u.forEach((b) => {
        var v;
        if ((v = b.props) != null && v.bars) {
          const { label: k, bars: D } = b.props;
          x.push({ label: k, bars: D });
        } else
          Array.isArray(b.children) && b.children.forEach((k) => {
            var M;
            const D = k;
            if ((M = D == null ? void 0 : D.props) != null && M.bars) {
              const { label: O, bars: Y } = D.props;
              x.push({ label: O, bars: Y });
            }
          });
      }), x;
    }, a = G(!1), s = G(!1), d = G(void 0);
    let p;
    const w = (u) => {
      p && clearTimeout(p), p = setTimeout(() => {
        a.value = !0;
      }, 800), d.value = u;
    }, g = () => {
      clearTimeout(p), a.value = !1;
    }, c = (u, x, l, b) => {
      switch (u.type) {
        case "click":
          e("click-bar", { bar: x, e: u, datetime: l });
          break;
        case "mousedown":
          e("mousedown-bar", { bar: x, e: u, datetime: l });
          break;
        case "mouseup":
          e("mouseup-bar", { bar: x, e: u, datetime: l });
          break;
        case "dblclick":
          e("dblclick-bar", { bar: x, e: u, datetime: l });
          break;
        case "mouseenter":
          w(x), e("mouseenter-bar", { bar: x, e: u });
          break;
        case "mouseleave":
          g(), e("mouseleave-bar", { bar: x, e: u });
          break;
        case "dragstart":
          s.value = !0, e("dragstart-bar", { bar: x, e: u });
          break;
        case "drag":
          e("drag-bar", { bar: x, e: u });
          break;
        case "dragend":
          s.value = !1, e("dragend-bar", { bar: x, e: u, movedBars: b });
          break;
        case "contextmenu":
          e("contextmenu-bar", { bar: x, e: u, datetime: l });
          break;
      }
    }, _ = G(null), B = Re(_);
    return lt(Ft, n), lt(Pt, {
      ...rt(o),
      colors: i,
      chartSize: B
    }), lt(jt, c), (u, x) => (E(), T("div", null, [
      I("div", {
        class: wt([{ "labels-in-column": !!u.labelColumnTitle }])
      }, [
        u.labelColumnTitle ? (E(), J(we, {
          key: 0,
          style: S({
            width: u.labelColumnWidth
          })
        }, {
          "label-column-title": N(() => [
            L(u.$slots, "label-column-title")
          ]),
          "label-column-row": N(({ label: l }) => [
            L(u.$slots, "label-column-row", { label: l })
          ]),
          _: 3
        }, 8, ["style"])) : V("", !0),
        I("div", {
          ref_key: "ganttChart",
          ref: _,
          class: wt(["g-gantt-chart", { "with-column": u.labelColumnTitle }]),
          style: S({ width: C(y), background: i.value.background, fontFamily: C(h) })
        }, [
          u.hideTimeaxis ? V("", !0) : (E(), J(ke, { key: 0 }, {
            "upper-timeunit": N(({ label: l, value: b, date: v }) => [
              L(u.$slots, "upper-timeunit", {
                label: l,
                value: b,
                date: v
              })
            ]),
            timeunit: N(({ label: l, value: b, date: v }) => [
              L(u.$slots, "timeunit", {
                label: l,
                value: b,
                date: v
              })
            ]),
            _: 3
          })),
          u.grid ? (E(), J(ye, {
            key: 1,
            "highlighted-units": u.highlightedUnits,
            "highlight-dates": u.highlightDates
          }, null, 8, ["highlighted-units", "highlight-dates"])) : V("", !0),
          u.currentTime ? (E(), J(Ee, { key: 2 }, {
            "current-time-label": N(() => [
              L(u.$slots, "current-time-label")
            ]),
            _: 3
          })) : V("", !0),
          I("div", Pe, [
            L(u.$slots, "default")
          ])
        ], 6)
      ], 2),
      _t(Ce, {
        "model-value": a.value || s.value,
        bar: d.value
      }, {
        default: N(() => [
          L(u.$slots, "bar-tooltip", { bar: d.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ]));
  }
});
function $t(t, m = () => null, o = () => null, e = A()) {
  const { barStart: y, barEnd: h, pushOnOverlap: f } = e, r = G(!1);
  let i = 0, n;
  const { mapPositionToTime: a } = ft(e), { toDayjs: s } = at(e), d = (u) => {
    const x = document.getElementById(t.ganttBarConfig.id);
    if (!x)
      return;
    switch (i = u.clientX - (x.getBoundingClientRect().left || 0), u.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", n = g;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", n = c;
        break;
      default:
        n = w;
    }
    r.value = !0, window.addEventListener("mousemove", n), window.addEventListener("mouseup", B);
  }, p = () => {
    var l;
    const u = document.getElementById(t.ganttBarConfig.id), x = (l = u == null ? void 0 : u.closest(".g-gantt-row-bars-container")) == null ? void 0 : l.getBoundingClientRect();
    return { barElement: u, barContainer: x };
  }, w = (u) => {
    const { barElement: x, barContainer: l } = p();
    if (!x || !l)
      return;
    const b = x.getBoundingClientRect().width, v = u.clientX - l.left - i, k = v + b;
    _(v, k) || (t[y.value] = a(v), t[h.value] = a(k), m(u, t));
  }, g = (u) => {
    const { barElement: x, barContainer: l } = p();
    if (!x || !l)
      return;
    const b = u.clientX - l.left, v = a(b);
    s(v).isSameOrAfter(s(t, "end")) || (t[y.value] = v, m(u, t));
  }, c = (u) => {
    const { barElement: x, barContainer: l } = p();
    if (!x || !l)
      return;
    const b = u.clientX - l.left, v = a(b);
    s(v).isSameOrBefore(s(t, "start")) || (t[h.value] = v, m(u, t));
  }, _ = (u, x) => {
    if (!f.value)
      return !1;
    const l = t.ganttBarConfig.dragLimitLeft, b = t.ganttBarConfig.dragLimitRight;
    return u && l != null && u < l || x && b != null && x > b;
  }, B = (u) => {
    r.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", B), o(u, t);
  };
  return {
    isDragging: r,
    initDrag: d
  };
}
function Qt() {
  const t = ct(jt);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function Ue() {
  const t = A(), m = kt(), o = Qt(), { pushOnOverlap: e, barStart: y, barEnd: h, noOverlap: f, dateFormat: r } = t, i = /* @__PURE__ */ new Map(), { toDayjs: n, format: a } = at(), s = (l, b) => {
    const { initDrag: v } = $t(l, p, B, t);
    o({ ...b, type: "dragstart" }, l), v(b), u(l);
  }, d = (l, b) => {
    const v = l.ganttBarConfig.bundle;
    v != null && (m().forEach((k) => {
      k.bars.forEach((D) => {
        if (D.ganttBarConfig.bundle === v) {
          const M = D === l ? B : () => null, { initDrag: O } = $t(D, p, M, t);
          O(b), u(D);
        }
      });
    }), o({ ...b, type: "dragstart" }, l));
  }, p = (l, b) => {
    o({ ...l, type: "drag" }, b), w(b);
  }, w = (l) => {
    if (!(e != null && e.value))
      return;
    let b = l, { overlapBar: v, overlapType: k } = g(b);
    for (; v; ) {
      u(v);
      const D = n(b[y.value]), M = n(b[h.value]), O = n(v[y.value]), Y = n(v[h.value]);
      let R;
      switch (k) {
        case "left":
          R = Y.diff(D, "minutes", !0), v[h.value] = a(b[y.value], r.value), v[y.value] = a(
            O.subtract(R, "minutes"),
            r.value
          );
          break;
        case "right":
          R = M.diff(O, "minutes", !0), v[y.value] = a(M, r.value), v[h.value] = a(
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
      v && (k === "left" || k === "right") && c(v, R, k), b = v, { overlapBar: v, overlapType: k } = g(v);
    }
  }, g = (l) => {
    var W, P;
    let b, v, k;
    const D = (P = (W = m().find((j) => j.bars.includes(l))) == null ? void 0 : W.bars) != null ? P : [], M = n(l[y.value]), O = n(l[h.value]);
    return { overlapBar: D.find((j) => {
      if (j === l)
        return !1;
      const U = n(j[y.value]), z = n(j[h.value]);
      return b = M.isBetween(U, z), v = O.isBetween(U, z), k = U.isBetween(M, O) || z.isBetween(M, O), b || v || k;
    }), overlapType: b ? "left" : v ? "right" : k ? "between" : null };
  }, c = (l, b, v) => {
    u(l), l.ganttBarConfig.bundle && m().forEach((k) => {
      k.bars.forEach((D) => {
        D.ganttBarConfig.bundle === l.ganttBarConfig.bundle && D !== l && (u(D), _(D, b, v));
      });
    });
  }, _ = (l, b, v) => {
    switch (v) {
      case "left":
        l[y.value] = a(
          n(l, "start").subtract(b, "minutes"),
          r.value
        ), l[h.value] = a(
          n(l, "end").subtract(b, "minutes"),
          r.value
        );
        break;
      case "right":
        l[y.value] = a(
          n(l, "start").add(b, "minutes"),
          r.value
        ), l[h.value] = a(n(l, "end").add(b, "minutes"), r.value);
    }
    w(l);
  }, B = (l, b) => {
    x();
    const v = {
      ...l,
      type: "dragend"
    };
    o(v, b, void 0, new Map(i)), i.clear();
  }, u = (l) => {
    if (!i.has(l)) {
      const b = l[y.value], v = l[h.value];
      i.set(l, { oldStart: b, oldEnd: v });
    }
  }, x = () => {
    if (e.value || !f.value)
      return;
    let l = !1;
    i.forEach((b, v) => {
      const { overlapBar: k } = g(v);
      k != null && (l = !0);
    }), l && i.forEach(({ oldStart: b, oldEnd: v }, k) => {
      k[y.value] = b, k[h.value] = v;
    });
  };
  return {
    initDragOfBar: s,
    initDragOfBundle: d
  };
}
function Ne() {
  const { pushOnOverlap: t } = A(), m = kt(), o = (f) => {
    const r = [];
    return f != null && m().forEach((i) => {
      i.bars.forEach((n) => {
        n.ganttBarConfig.bundle === f && r.push(n);
      });
    }), r;
  }, e = (f) => {
    if (!t.value || f.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const i of ["left", "right"]) {
      const n = i, { gapDistanceSoFar: a, bundleBarsAndGapDist: s } = y(
        f,
        0,
        n
      );
      let d = a;
      const p = s;
      if (!p)
        continue;
      for (let g = 0; g < p.length; g++) {
        const c = p[g].bar, _ = p[g].gapDistance;
        o(c.ganttBarConfig.bundle).filter(
          (u) => u !== c
        ).forEach((u) => {
          const x = y(u, _, n), l = x.gapDistanceSoFar, b = x.bundleBarsAndGapDist;
          l != null && (!d || l < d) && (d = l), b.forEach((v) => {
            p.find((k) => k.bar === v.bar) || p.push(v);
          });
        });
      }
      const w = document.getElementById(f.ganttBarConfig.id);
      d != null && n === "left" ? f.ganttBarConfig.dragLimitLeft = w.offsetLeft - d : d != null && n === "right" && (f.ganttBarConfig.dragLimitRight = w.offsetLeft + w.offsetWidth + d);
    }
    o(f.ganttBarConfig.bundle).forEach((i) => {
      i.ganttBarConfig.dragLimitLeft = f.ganttBarConfig.dragLimitLeft, i.ganttBarConfig.dragLimitRight = f.ganttBarConfig.dragLimitRight;
    });
  }, y = (f, r = 0, i) => {
    const n = f.ganttBarConfig.bundle ? [{ bar: f, gapDistance: r }] : [];
    let a = f, s = h(a, i);
    if (i === "left")
      for (; s; ) {
        const d = document.getElementById(a.ganttBarConfig.id), p = document.getElementById(s.ganttBarConfig.id), w = p.offsetLeft + p.offsetWidth;
        if (r += d.offsetLeft - w, s.ganttBarConfig.immobile)
          return { gapDistanceSoFar: r, bundleBarsAndGapDist: n };
        s.ganttBarConfig.bundle && n.push({
          bar: s,
          gapDistance: r
        }), a = s, s = h(s, "left");
      }
    if (i === "right")
      for (; s; ) {
        const d = document.getElementById(a.ganttBarConfig.id), p = document.getElementById(s.ganttBarConfig.id), w = d.offsetLeft + d.offsetWidth;
        if (r += p.offsetLeft - w, s.ganttBarConfig.immobile)
          return { gapDistanceSoFar: r, bundleBarsAndGapDist: n };
        s.ganttBarConfig.bundle && n.push({
          bar: s,
          gapDistance: r
        }), a = s, s = h(s, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: n };
  }, h = (f, r) => {
    var s, d;
    const i = document.getElementById(f.ganttBarConfig.id), n = (d = (s = m().find((p) => p.bars.includes(f))) == null ? void 0 : s.bars) != null ? d : [];
    let a = [];
    return r === "left" ? a = n.filter((p) => {
      const w = document.getElementById(p.ganttBarConfig.id);
      return w && w.offsetLeft < i.offsetLeft && p.ganttBarConfig.pushOnOverlap !== !1;
    }) : a = n.filter((p) => {
      const w = document.getElementById(p.ganttBarConfig.id);
      return w && w.offsetLeft > i.offsetLeft && p.ganttBarConfig.pushOnOverlap !== !1;
    }), a.length > 0 ? a.reduce((p, w) => {
      const g = document.getElementById(p.ganttBarConfig.id), c = document.getElementById(w.ganttBarConfig.id), _ = Math.abs(g.offsetLeft - i.offsetLeft), B = Math.abs(c.offsetLeft - i.offsetLeft);
      return _ < B ? p : w;
    }, a[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: e
  };
}
const Ve = ["id"], qe = { class: "g-gantt-bar-label" }, Qe = ["innerHTML"], Xe = /* @__PURE__ */ I("div", { class: "g-gantt-bar-handle-left" }, null, -1), Ke = /* @__PURE__ */ I("div", { class: "g-gantt-bar-handle-right" }, null, -1), Ze = /* @__PURE__ */ Q({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(t) {
    const m = t, o = Qt(), e = A(), { rowHeight: y } = e, { bar: h } = rt(m), { mapTimeToPosition: f, mapPositionToTime: r } = ft(), { initDragOfBar: i, initDragOfBundle: n } = Ue(), { setDragLimitsOfGanttBar: a } = Ne(), s = G(!1), d = H(() => h.value.ganttBarConfig);
    function p(D) {
      d.value.bundle != null ? n(h.value, D) : i(h.value, D), s.value = !0;
    }
    const w = () => {
      a(h.value), !d.value.immobile && (window.addEventListener("mousemove", p, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", p), s.value = !1;
        },
        { once: !0 }
      ));
    }, g = ct(Ut), c = (D) => {
      var Y;
      D.preventDefault(), D.type === "mousedown" && w();
      const M = (Y = g == null ? void 0 : g.value) == null ? void 0 : Y.getBoundingClientRect();
      if (!M)
        return;
      const O = r(D.clientX - M.left);
      o(D, h.value, O);
    }, { barStart: _, barEnd: B, width: u, chartStart: x, chartEnd: l, chartSize: b } = e, v = G(0), k = G(0);
    return Lt(() => {
      dt(
        [h, u, x, l, b.width],
        () => {
          v.value = f(h.value[_.value]), k.value = f(h.value[B.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (D, M) => (E(), T("div", {
      id: d.value.id,
      class: wt(["g-gantt-bar", d.value.class || ""]),
      style: S({
        ...d.value.style,
        position: "absolute",
        top: `${C(y) * 0.1}px`,
        left: `${v.value}px`,
        width: `${k.value - v.value}px`,
        height: `${C(y) * 0.8}px`,
        zIndex: s.value ? 3 : 2
      }),
      onMousedown: c,
      onClick: c,
      onDblclick: c,
      onMouseenter: c,
      onMouseleave: c,
      onContextmenu: c
    }, [
      I("div", qe, [
        L(D.$slots, "default", { bar: C(h) }, () => [
          I("div", null, q(d.value.label || ""), 1),
          d.value.html ? (E(), T("div", {
            key: 0,
            innerHTML: d.value.html
          }, null, 8, Qe)) : V("", !0)
        ])
      ]),
      d.value.hasHandles ? (E(), T(tt, { key: 0 }, [
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
  setup(t, { emit: m }) {
    const o = t, e = m, { rowHeight: y, colors: h, labelColumnTitle: f } = A(), { highlightOnHover: r } = rt(o), i = G(!1), n = H(() => ({
      height: `${y.value}px`,
      background: (r == null ? void 0 : r.value) && i.value ? h.value.hoverHighlight : null
    })), { mapPositionToTime: a } = ft(), s = G(null);
    lt(Ut, s);
    const d = (w) => {
      var B;
      const g = (B = s.value) == null ? void 0 : B.getBoundingClientRect();
      if (!g) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const c = w.clientX - g.left, _ = a(c);
      e("drop", { e: w, datetime: _ });
    }, p = (w) => !w || /^\s*$/.test(w);
    return (w, g) => (E(), T("div", {
      class: "g-gantt-row",
      style: S(n.value),
      onDragover: g[0] || (g[0] = se((c) => i.value = !0, ["prevent"])),
      onDragleave: g[1] || (g[1] = (c) => i.value = !1),
      onDrop: g[2] || (g[2] = (c) => d(c)),
      onMouseover: g[3] || (g[3] = (c) => i.value = !0),
      onMouseleave: g[4] || (g[4] = (c) => i.value = !1)
    }, [
      !p(w.label) && !C(f) ? (E(), T("div", {
        key: 0,
        class: "g-gantt-row-label",
        style: S({ background: C(h).primary, color: C(h).text })
      }, [
        L(w.$slots, "label", {}, () => [
          nt(q(w.label), 1)
        ])
      ], 4)) : V("", !0),
      I("div", le({
        ref_key: "barContainer",
        ref: s,
        class: "g-gantt-row-bars-container"
      }, w.$attrs), [
        _t(ue, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: N(() => [
            (E(!0), T(tt, null, et(w.bars, (c) => (E(), J(Ze, {
              key: c.ganttBarConfig.id,
              bar: c
            }, {
              default: N(() => [
                L(w.$slots, "bar-label", { bar: c })
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
  $.extend(de), $.extend(fe), $.extend(ge), $.extend(pe), $.extend(he), $.extend(ce), $.extend(me);
}
const an = {
  install(t, m) {
    tn(), t.component("GGanttChart", je), t.component("GGanttRow", Je);
  }
};
function X(t, m = "top") {
  if (!t || typeof document > "u")
    return;
  const o = document.head, e = document.createElement("style");
  m === "top" && o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.appendChild(document.createTextNode(t));
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
export {
  je as GGanttChart,
  Je as GGanttRow,
  an as default,
  tn as extendDayjs,
  an as ganttastic
};
