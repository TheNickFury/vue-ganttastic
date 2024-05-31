import S from "dayjs";
import { inject as ce, computed as H, defineComponent as Q, openBlock as E, createElementBlock as M, Fragment as ee, renderList as te, unref as D, normalizeStyle as $, renderSlot as L, createElementVNode as I, toDisplayString as q, createTextVNode as ne, createCommentVNode as V, toRefs as re, ref as G, watch as de, nextTick as $e, createBlock as J, Teleport as tt, createVNode as _e, Transition as nt, withCtx as N, getCurrentScope as rt, onScopeDispose as at, getCurrentInstance as ot, onMounted as Le, useSlots as it, provide as le, normalizeClass as we, withModifiers as st, mergeProps as lt, TransitionGroup as ut } from "vue";
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ge = { exports: {} };
(function(e, m) {
  (function(a, n) {
    e.exports = n();
  })(K, function() {
    var a = "day";
    return function(n, p, d) {
      var u = function(t) {
        return t.add(4 - t.isoWeekday(), a);
      }, r = p.prototype;
      r.isoWeekYear = function() {
        return u(this).year();
      }, r.isoWeek = function(t) {
        if (!this.$utils().u(t))
          return this.add(7 * (t - this.isoWeek()), a);
        var o, s, f, y, w = u(this), g = (o = this.isoWeekYear(), s = this.$u, f = (s ? d.utc : d)().year(o).startOf("year"), y = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (y += 7), f.add(y, a));
        return w.diff(g, "week") + 1;
      }, r.isoWeekday = function(t) {
        return this.$utils().u(t) ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
      };
      var i = r.startOf;
      r.startOf = function(t, o) {
        var s = this.$utils(), f = !!s.u(o) || o;
        return s.p(t) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : i.bind(this)(t, o);
      };
    };
  });
})(Ge);
const ct = Ge.exports;
var Ie = { exports: {} };
(function(e, m) {
  (function(a, n) {
    e.exports = n();
  })(K, function() {
    return function(a, n) {
      n.prototype.isSameOrBefore = function(p, d) {
        return this.isSame(p, d) || this.isBefore(p, d);
      };
    };
  });
})(Ie);
const dt = Ie.exports;
var Re = { exports: {} };
(function(e, m) {
  (function(a, n) {
    e.exports = n();
  })(K, function() {
    return function(a, n) {
      n.prototype.isSameOrAfter = function(p, d) {
        return this.isSame(p, d) || this.isAfter(p, d);
      };
    };
  });
})(Re);
const ft = Re.exports;
var He = { exports: {} };
(function(e, m) {
  (function(a, n) {
    e.exports = n();
  })(K, function() {
    return function(a, n, p) {
      n.prototype.isBetween = function(d, u, r, i) {
        var t = p(d), o = p(u), s = (i = i || "()")[0] === "(", f = i[1] === ")";
        return (s ? this.isAfter(t, r) : !this.isBefore(t, r)) && (f ? this.isBefore(o, r) : !this.isAfter(o, r)) || (s ? this.isBefore(t, r) : !this.isAfter(t, r)) && (f ? this.isAfter(o, r) : !this.isBefore(o, r));
      };
    };
  });
})(He);
const gt = He.exports;
var Ae = { exports: {} };
(function(e, m) {
  (function(a, n) {
    e.exports = n();
  })(K, function() {
    var a = "week", n = "year";
    return function(p, d, u) {
      var r = d.prototype;
      r.week = function(i) {
        if (i === void 0 && (i = null), i !== null)
          return this.add(7 * (i - this.week()), "day");
        var t = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var o = u(this).startOf(n).add(1, n).date(t), s = u(this).endOf(a);
          if (o.isBefore(s))
            return 1;
        }
        var f = u(this).startOf(n).date(t).startOf(a).subtract(1, "millisecond"), y = this.diff(f, a, !0);
        return y < 0 ? u(this).startOf("week").week() : Math.ceil(y);
      }, r.weeks = function(i) {
        return i === void 0 && (i = null), this.week(i);
      };
    };
  });
})(Ae);
const ht = Ae.exports;
var We = { exports: {} };
(function(e, m) {
  (function(a, n) {
    e.exports = n();
  })(K, function() {
    return function(a, n) {
      var p = n.prototype, d = p.format;
      p.format = function(u) {
        var r = this, i = this.$locale();
        if (!this.isValid())
          return d.bind(this)(u);
        var t = this.$utils(), o = (u || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(s) {
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
              return t.s(r.week(), s === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return t.s(r.isoWeek(), s === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return t.s(String(r.$H === 0 ? 24 : r.$H), s === "k" ? 1 : 2, "0");
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
        return d.bind(this)(o);
      };
    };
  });
})(We);
const mt = We.exports;
var ze = { exports: {} };
(function(e, m) {
  (function(a, n) {
    e.exports = n();
  })(K, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, p = /\d\d/, d = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, r = {}, i = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, t = function(g) {
      return function(c) {
        this[g] = +c;
      };
    }, o = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(c) {
        if (!c || c === "Z")
          return 0;
        var B = c.match(/([+-]|\d\d)/g), _ = 60 * B[1] + (+B[2] || 0);
        return _ === 0 ? 0 : B[0] === "+" ? -_ : _;
      }(g);
    }], s = function(g) {
      var c = r[g];
      return c && (c.indexOf ? c : c.s.concat(c.f));
    }, f = function(g, c) {
      var B, _ = r.meridiem;
      if (_) {
        for (var h = 1; h <= 24; h += 1)
          if (g.indexOf(_(h, 0, c)) > -1) {
            B = h > 12;
            break;
          }
      } else
        B = g === (c ? "pm" : "PM");
      return B;
    }, y = { A: [u, function(g) {
      this.afternoon = f(g, !1);
    }], a: [u, function(g) {
      this.afternoon = f(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [p, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [d, t("seconds")], ss: [d, t("seconds")], m: [d, t("minutes")], mm: [d, t("minutes")], H: [d, t("hours")], h: [d, t("hours")], HH: [d, t("hours")], hh: [d, t("hours")], D: [d, t("day")], DD: [p, t("day")], Do: [u, function(g) {
      var c = r.ordinal, B = g.match(/\d+/);
      if (this.day = B[0], c)
        for (var _ = 1; _ <= 31; _ += 1)
          c(_).replace(/\[|\]/g, "") === g && (this.day = _);
    }], M: [d, t("month")], MM: [p, t("month")], MMM: [u, function(g) {
      var c = s("months"), B = (s("monthsShort") || c.map(function(_) {
        return _.slice(0, 3);
      })).indexOf(g) + 1;
      if (B < 1)
        throw new Error();
      this.month = B % 12 || B;
    }], MMMM: [u, function(g) {
      var c = s("months").indexOf(g) + 1;
      if (c < 1)
        throw new Error();
      this.month = c % 12 || c;
    }], Y: [/[+-]?\d+/, t("year")], YY: [p, function(g) {
      this.year = i(g);
    }], YYYY: [/\d{4}/, t("year")], Z: o, ZZ: o };
    function w(g) {
      var c, B;
      c = g, B = r && r.formats;
      for (var _ = (g = c.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(C, O, T) {
        var Y = T && T.toUpperCase();
        return O || B[T] || a[T] || B[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, W, P) {
          return W || P.slice(1);
        });
      })).match(n), h = _.length, x = 0; x < h; x += 1) {
        var l = _[x], b = y[l], v = b && b[0], k = b && b[1];
        _[x] = k ? { regex: v, parser: k } : l.replace(/^\[|\]$/g, "");
      }
      return function(C) {
        for (var O = {}, T = 0, Y = 0; T < h; T += 1) {
          var R = _[T];
          if (typeof R == "string")
            Y += R.length;
          else {
            var W = R.regex, P = R.parser, j = C.slice(Y), U = W.exec(j)[0];
            P.call(O, U), C = C.replace(U, "");
          }
        }
        return function(z) {
          var F = z.afternoon;
          if (F !== void 0) {
            var Z = z.hours;
            F ? Z < 12 && (z.hours += 12) : Z === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(O), O;
      };
    }
    return function(g, c, B) {
      B.p.customParseFormat = !0, g && g.parseTwoDigitYear && (i = g.parseTwoDigitYear);
      var _ = c.prototype, h = _.parse;
      _.parse = function(x) {
        var l = x.date, b = x.utc, v = x.args;
        this.$u = b;
        var k = v[1];
        if (typeof k == "string") {
          var C = v[2] === !0, O = v[3] === !0, T = C || O, Y = v[2];
          O && (Y = v[2]), r = this.$locale(), !C && Y && (r = B.Ls[Y]), this.$d = function(j, U, z) {
            try {
              if (["x", "X"].indexOf(U) > -1)
                return new Date((U === "X" ? 1e3 : 1) * j);
              var F = w(U)(j), Z = F.year, ie = F.month, Xe = F.day, Ke = F.hours, Ze = F.minutes, Je = F.seconds, et = F.milliseconds, Ce = F.zone, ge = new Date(), he = Xe || (Z || ie ? 1 : ge.getDate()), me = Z || ge.getFullYear(), se = 0;
              Z && !ie || (se = ie > 0 ? ie - 1 : ge.getMonth());
              var pe = Ke || 0, ve = Ze || 0, ye = Je || 0, be = et || 0;
              return Ce ? new Date(Date.UTC(me, se, he, pe, ve, ye, be + 60 * Ce.offset * 1e3)) : z ? new Date(Date.UTC(me, se, he, pe, ve, ye, be)) : new Date(me, se, he, pe, ve, ye, be);
            } catch {
              return new Date("");
            }
          }(l, k, b), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), T && l != this.format(k) && (this.$d = new Date("")), r = {};
        } else if (k instanceof Array)
          for (var R = k.length, W = 1; W <= R; W += 1) {
            v[1] = k[W - 1];
            var P = B.apply(this, v);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            W === R && (this.$d = new Date(""));
          }
        else
          h.call(this, x);
      };
    };
  });
})(ze);
const pt = ze.exports, Fe = Symbol("CHART_ROWS_KEY"), Pe = Symbol("CONFIG_KEY"), je = Symbol("EMIT_BAR_EVENT_KEY"), Ue = Symbol("BAR_CONTAINER_KEY");
function A() {
  const e = ce(Pe);
  if (!e)
    throw Error("Failed to inject config!");
  return e;
}
const Ne = "YYYY-MM-DD HH:mm";
function ae(e = A()) {
  const { chartStart: m, chartEnd: a, barStart: n, barEnd: p, dateFormat: d } = e, u = H(() => i(m.value)), r = H(() => i(a.value)), i = (o, s) => {
    let f;
    if (s !== void 0 && typeof o != "string" && !(o instanceof Date) && (f = s === "start" ? o[n.value] : o[p.value]), typeof o == "string")
      f = o;
    else if (o instanceof Date)
      return S(o);
    const y = d.value || Ne;
    return S(f, y, !0);
  };
  return {
    chartStartDayjs: u,
    chartEndDayjs: r,
    toDayjs: i,
    format: (o, s) => s === !1 ? o instanceof Date ? o : S(o).toDate() : (typeof o == "string" || o instanceof Date ? i(o) : o).format(s)
  };
}
function Ve() {
  const { precision: e } = A(), { chartStartDayjs: m, chartEndDayjs: a } = ae(), n = H(() => {
    switch (e == null ? void 0 : e.value) {
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
  }), p = H(() => {
    switch (e.value) {
      case "date":
        return "day";
      case "week":
        return "isoWeek";
      default:
        return e.value;
    }
  }), d = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "WW",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: H(() => {
      const r = [], i = [], t = a.value.diff(m.value, "minutes", !0), o = n.value, s = p.value;
      let f = m.value, y = m.value;
      for (; y.isSameOrBefore(a.value); ) {
        const w = y.endOf(s), c = w.isAfter(a.value) ? a.value.diff(y, "minutes", !0) / t * 100 : w.diff(y, "minutes", !0) / t * 100;
        i.push({
          label: y.format(d[e == null ? void 0 : e.value]),
          value: String(y),
          date: y.toDate(),
          width: String(c) + "%"
        }), y = w.add(1, s === "isoWeek" ? "week" : s).startOf(s);
      }
      for (; f.isSameOrBefore(a.value); ) {
        const w = f.endOf(o), c = w.isAfter(a.value) ? a.value.diff(f, "minutes", !0) / t * 100 : w.diff(f, "minutes", !0) / t * 100;
        r.push({
          label: f.format(d[o]),
          value: String(f),
          date: f.toDate(),
          width: String(c) + "%"
        }), f = w.add(1, o).startOf(o);
      }
      return { upperUnits: r, lowerUnits: i };
    })
  };
}
const vt = { class: "g-grid-container" }, yt = /* @__PURE__ */ Q({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {},
    highlightDates: {}
  },
  setup(e) {
    const m = e, { colors: a } = A(), { timeaxisUnits: n } = Ve();
    function p(t, o) {
      const s = S(t), f = S(o), y = [];
      let w = s;
      for (; w.isBefore(f) || w.isSame(f, "day"); )
        (w.day() === 6 || w.day() === 0) && y.push(w.format("YYYY-MM-DD")), w = w.add(1, "day");
      return y;
    }
    let d;
    const u = S(n.value.upperUnits[0].date).format("YYYY-MM-DD"), r = S(n.value.upperUnits[1].date).format("YYYY-MM-DD");
    return d = [...p(u, r), ...m.highlightDates], (t, o) => (E(), M("div", vt, [
      (E(!0), M(ee, null, te(D(n).lowerUnits, ({ label: s, value: f, date: y, width: w }) => {
        var g, c;
        return E(), M("div", {
          key: s,
          class: "g-grid-line",
          style: $({
            width: w,
            background: ((g = D(d)) == null ? void 0 : g.includes(D(S)(y).format("YYYY-MM-DD"))) || ((c = t.highlightedUnits) == null ? void 0 : c.includes(Number(f))) ? D(a).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
function ke() {
  const e = ce(Fe);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
const bt = { class: "g-label-column-rows" }, wt = /* @__PURE__ */ Q({
  __name: "GGanttLabelColumn",
  setup(e) {
    const { font: m, colors: a, labelColumnTitle: n, rowHeight: p } = A(), d = ke();
    return (u, r) => (E(), M("div", {
      class: "g-label-column",
      style: $({ fontFamily: D(m), color: D(a).text })
    }, [
      L(u.$slots, "label-column-title", {}, () => [
        I("div", {
          class: "g-label-column-header",
          style: $({ background: D(a).primary })
        }, q(D(n)), 5)
      ]),
      I("div", bt, [
        (E(!0), M(ee, null, te(D(d)(), ({ label: i }, t) => (E(), M("div", {
          key: `${i}_${t}`,
          class: "g-label-column-row",
          style: $({
            background: t % 2 === 0 ? D(a).ternary : D(a).quartenary,
            height: `${D(p)}px`
          })
        }, [
          L(u.$slots, "label-column-row", { label: i }, () => [
            I("span", null, q(i), 1)
          ])
        ], 4))), 128))
      ])
    ], 4));
  }
});
const xt = { class: "g-timeaxis" }, Bt = { class: "g-timeunits-container" }, _t = { class: "g-timeunits-container" }, kt = /* @__PURE__ */ Q({
  __name: "GGanttTimeaxis",
  setup(e) {
    const { precision: m, colors: a } = A(), { timeaxisUnits: n } = Ve();
    return (p, d) => (E(), M("div", xt, [
      I("div", Bt, [
        (E(!0), M(ee, null, te(D(n).upperUnits, ({ label: u, value: r, date: i, width: t }, o) => (E(), M("div", {
          key: u,
          class: "g-upper-timeunit",
          style: $({
            background: o % 2 === 0 ? D(a).primary : D(a).secondary,
            color: D(a).text,
            width: t
          })
        }, [
          L(p.$slots, "upper-timeunit", {
            label: u,
            value: r,
            date: i
          }, () => [
            ne(q(u), 1)
          ])
        ], 4))), 128))
      ]),
      I("div", _t, [
        (E(!0), M(ee, null, te(D(n).lowerUnits, ({ label: u, value: r, date: i, width: t }, o) => (E(), M("div", {
          key: u,
          class: "g-timeunit",
          style: $({
            background: o % 2 === 0 ? D(a).ternary : D(a).quartenary,
            color: D(a).text,
            flexDirection: D(m) === "hour" ? "column" : "row",
            alignItems: D(m) === "hour" ? "" : "center",
            width: t
          })
        }, [
          L(p.$slots, "timeunit", {
            label: u,
            value: r,
            date: i
          }, () => [
            ne(q(u), 1)
          ]),
          D(m) === "hour" ? (E(), M("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: $({ background: D(a).text })
          }, null, 4)) : V("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const Ct = "cadetblue", Dt = /* @__PURE__ */ Q({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    modelValue: { type: Boolean }
  },
  setup(e) {
    const m = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      date: "DD. MMMM YYYY",
      month: "DD. MMMM YYYY",
      week: "DD. MMMM YYYY (WW)"
    }, a = e, { bar: n } = re(a), { precision: p, font: d, barStart: u, barEnd: r, rowHeight: i } = A(), t = G("0px"), o = G("0px");
    de(
      () => a.bar,
      async () => {
        var l;
        await $e();
        const c = ((l = n == null ? void 0 : n.value) == null ? void 0 : l.ganttBarConfig.id) || "";
        if (!c)
          return;
        const B = document.getElementById(c), { top: _, left: h } = (B == null ? void 0 : B.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, x = Math.max(h, 10);
        t.value = `${_ + i.value - 10}px`, o.value = `${x}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const s = H(() => {
      var c, B;
      return ((B = (c = n == null ? void 0 : n.value) == null ? void 0 : c.ganttBarConfig.style) == null ? void 0 : B.background) || Ct;
    }), { toDayjs: f } = ae(), y = H(() => {
      var c;
      return (c = n.value) == null ? void 0 : c[u.value];
    }), w = H(() => {
      var c;
      return (c = n.value) == null ? void 0 : c[r.value];
    }), g = H(() => {
      if (!(n != null && n.value))
        return "";
      const c = m[p.value], B = f(y.value).format(c), _ = f(w.value).format(c);
      return `${B} \u2013 ${_}`;
    });
    return (c, B) => (E(), J(tt, { to: "body" }, [
      _e(nt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: N(() => [
          c.modelValue ? (E(), M("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: $({
              top: t.value,
              left: o.value,
              fontFamily: D(d)
            })
          }, [
            I("div", {
              class: "g-gantt-tooltip-color-dot",
              style: $({ background: s.value })
            }, null, 4),
            L(c.$slots, "default", {
              bar: D(n),
              barStart: y.value,
              barEnd: w.value
            }, () => [
              ne(q(g.value), 1)
            ])
          ], 4)) : V("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function fe(e = A()) {
  const { dateFormat: m, chartSize: a } = e, { chartStartDayjs: n, chartEndDayjs: p, toDayjs: d, format: u } = ae(e), r = H(() => p.value.diff(n.value, "minutes"));
  return {
    mapTimeToPosition: (o) => {
      const s = a.width.value || 0, f = d(o).diff(n.value, "minutes", !0);
      return Math.ceil(f / r.value * s);
    },
    mapPositionToTime: (o) => {
      const s = a.width.value || 0, f = o / s * r.value;
      return u(n.value.add(f, "minutes"), m.value);
    }
  };
}
const Et = /* @__PURE__ */ Q({
  __name: "GGanttCurrentTime",
  setup(e) {
    const { mapTimeToPosition: m } = fe(), a = G(S()), { colors: n, dateFormat: p, currentTimeLabel: d } = A(), u = H(() => {
      const r = p.value || "YYYY-MM-DD HH:mm";
      return m(S(a.value, r).format(r));
    });
    return (r, i) => (E(), M("div", {
      class: "g-grid-current-time",
      style: $({
        left: `${u.value}px`
      })
    }, [
      I("div", {
        class: "g-grid-current-time-marker",
        style: $({
          border: `1px dashed ${D(n).markerCurrentTime}`
        })
      }, null, 4),
      I("span", {
        class: "g-grid-current-time-text",
        style: $({ color: D(n).markerCurrentTime })
      }, [
        L(r.$slots, "current-time-label", {}, () => [
          ne(q(D(d)), 1)
        ])
      ], 4)
    ], 4));
  }
});
var De;
const oe = typeof window < "u";
oe && ((De = window == null ? void 0 : window.navigator) == null ? void 0 : De.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ot(e) {
  return typeof e == "function" ? e() : D(e);
}
function Tt(e) {
  return e;
}
function Mt(e) {
  return rt() ? (at(e), !0) : !1;
}
function Yt(e, m = !0) {
  ot() ? Le(e) : m ? e() : $e(e);
}
function ue(e) {
  var m;
  const a = Ot(e);
  return (m = a == null ? void 0 : a.$el) != null ? m : a;
}
const qe = oe ? window : void 0;
oe && window.document;
oe && window.navigator;
oe && window.location;
function St(e, m = !1) {
  const a = G(), n = () => a.value = Boolean(e());
  return n(), Yt(n, m), a;
}
const xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Be = "__vueuse_ssr_handlers__";
xe[Be] = xe[Be] || {};
xe[Be];
var Ee = Object.getOwnPropertySymbols, $t = Object.prototype.hasOwnProperty, Lt = Object.prototype.propertyIsEnumerable, Gt = (e, m) => {
  var a = {};
  for (var n in e)
    $t.call(e, n) && m.indexOf(n) < 0 && (a[n] = e[n]);
  if (e != null && Ee)
    for (var n of Ee(e))
      m.indexOf(n) < 0 && Lt.call(e, n) && (a[n] = e[n]);
  return a;
};
function It(e, m, a = {}) {
  const n = a, { window: p = qe } = n, d = Gt(n, ["window"]);
  let u;
  const r = St(() => p && "ResizeObserver" in p), i = () => {
    u && (u.disconnect(), u = void 0);
  }, t = de(() => ue(e), (s) => {
    i(), r.value && p && s && (u = new ResizeObserver(m), u.observe(s, d));
  }, { immediate: !0, flush: "post" }), o = () => {
    i(), t();
  };
  return Mt(o), {
    isSupported: r,
    stop: o
  };
}
function Rt(e, m = { width: 0, height: 0 }, a = {}) {
  const { window: n = qe, box: p = "content-box" } = a, d = H(() => {
    var i, t;
    return (t = (i = ue(e)) == null ? void 0 : i.namespaceURI) == null ? void 0 : t.includes("svg");
  }), u = G(m.width), r = G(m.height);
  return It(e, ([i]) => {
    const t = p === "border-box" ? i.borderBoxSize : p === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    if (n && d.value) {
      const o = ue(e);
      if (o) {
        const s = n.getComputedStyle(o);
        u.value = parseFloat(s.width), r.value = parseFloat(s.height);
      }
    } else if (t) {
      const o = Array.isArray(t) ? t : [t];
      u.value = o.reduce((s, { inlineSize: f }) => s + f, 0), r.value = o.reduce((s, { blockSize: f }) => s + f, 0);
    } else
      u.value = i.contentRect.width, r.value = i.contentRect.height;
  }, a), de(() => ue(e), (i) => {
    u.value = i ? m.width : 0, r.value = i ? m.height : 0;
  }), {
    width: u,
    height: r
  };
}
var Oe;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Oe || (Oe = {}));
var Ht = Object.defineProperty, Te = Object.getOwnPropertySymbols, At = Object.prototype.hasOwnProperty, Wt = Object.prototype.propertyIsEnumerable, Me = (e, m, a) => m in e ? Ht(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, zt = (e, m) => {
  for (var a in m || (m = {}))
    At.call(m, a) && Me(e, a, m[a]);
  if (Te)
    for (var a of Te(m))
      Wt.call(m, a) && Me(e, a, m[a]);
  return e;
};
const Ft = {
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
zt({
  linear: Tt
}, Ft);
const Ye = {
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
}, Pt = { class: "g-gantt-rows-container" }, jt = /* @__PURE__ */ Q({
  __name: "GGanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    currentTime: { type: Boolean },
    currentTimeLabel: { default: "" },
    dateFormat: { type: [String, Boolean], default: Ne },
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
  setup(e, { emit: m }) {
    const a = e, n = m, { width: p, font: d, colorScheme: u } = re(a), r = it(), i = H(
      () => typeof u.value != "string" ? u.value : Ye[u.value] || Ye.default
    ), t = () => {
      var l;
      const h = (l = r.default) == null ? void 0 : l.call(r), x = [];
      return h && h.forEach((b) => {
        var v;
        if ((v = b.props) != null && v.bars) {
          const { label: k, bars: C } = b.props;
          x.push({ label: k, bars: C });
        } else
          Array.isArray(b.children) && b.children.forEach((k) => {
            var O;
            const C = k;
            if ((O = C == null ? void 0 : C.props) != null && O.bars) {
              const { label: T, bars: Y } = C.props;
              x.push({ label: T, bars: Y });
            }
          });
      }), x;
    }, o = G(!1), s = G(!1), f = G(void 0);
    let y;
    const w = (h) => {
      y && clearTimeout(y), y = setTimeout(() => {
        o.value = !0;
      }, 800), f.value = h;
    }, g = () => {
      clearTimeout(y), o.value = !1;
    }, c = (h, x, l, b) => {
      switch (h.type) {
        case "click":
          n("click-bar", { bar: x, e: h, datetime: l });
          break;
        case "mousedown":
          n("mousedown-bar", { bar: x, e: h, datetime: l });
          break;
        case "mouseup":
          n("mouseup-bar", { bar: x, e: h, datetime: l });
          break;
        case "dblclick":
          n("dblclick-bar", { bar: x, e: h, datetime: l });
          break;
        case "mouseenter":
          w(x), n("mouseenter-bar", { bar: x, e: h });
          break;
        case "mouseleave":
          g(), n("mouseleave-bar", { bar: x, e: h });
          break;
        case "dragstart":
          s.value = !0, n("dragstart-bar", { bar: x, e: h });
          break;
        case "drag":
          n("drag-bar", { bar: x, e: h });
          break;
        case "dragend":
          s.value = !1, n("dragend-bar", { bar: x, e: h, movedBars: b });
          break;
        case "contextmenu":
          n("contextmenu-bar", { bar: x, e: h, datetime: l });
          break;
      }
    }, B = G(null), _ = Rt(B);
    return le(Fe, t), le(Pe, {
      ...re(a),
      colors: i,
      chartSize: _
    }), le(je, c), (h, x) => (E(), M("div", null, [
      I("div", {
        class: we([{ "labels-in-column": !!h.labelColumnTitle }])
      }, [
        h.labelColumnTitle ? (E(), J(wt, {
          key: 0,
          style: $({
            width: h.labelColumnWidth
          })
        }, {
          "label-column-title": N(() => [
            L(h.$slots, "label-column-title")
          ]),
          "label-column-row": N(({ label: l }) => [
            L(h.$slots, "label-column-row", { label: l })
          ]),
          _: 3
        }, 8, ["style"])) : V("", !0),
        I("div", {
          ref_key: "ganttChart",
          ref: B,
          class: we(["g-gantt-chart", { "with-column": h.labelColumnTitle }]),
          style: $({ width: D(p), background: i.value.background, fontFamily: D(d) })
        }, [
          h.hideTimeaxis ? V("", !0) : (E(), J(kt, { key: 0 }, {
            "upper-timeunit": N(({ label: l, value: b, date: v }) => [
              L(h.$slots, "upper-timeunit", {
                label: l,
                value: b,
                date: v
              })
            ]),
            timeunit: N(({ label: l, value: b, date: v }) => [
              L(h.$slots, "timeunit", {
                label: l,
                value: b,
                date: v
              })
            ]),
            _: 3
          })),
          h.grid ? (E(), J(yt, {
            key: 1,
            "highlighted-units": h.highlightedUnits,
            "highlight-dates": h.highlightDates
          }, null, 8, ["highlighted-units", "highlight-dates"])) : V("", !0),
          h.currentTime ? (E(), J(Et, { key: 2 }, {
            "current-time-label": N(() => [
              L(h.$slots, "current-time-label")
            ]),
            _: 3
          })) : V("", !0),
          I("div", Pt, [
            L(h.$slots, "default")
          ])
        ], 6)
      ], 2),
      _e(Dt, {
        "model-value": o.value || s.value,
        bar: f.value
      }, {
        default: N(() => [
          L(h.$slots, "bar-tooltip", { bar: f.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ]));
  }
});
function Se(e, m = () => null, a = () => null, n = A()) {
  const { barStart: p, barEnd: d, pushOnOverlap: u } = n, r = G(!1);
  let i = 0, t;
  const { mapPositionToTime: o } = fe(n), { toDayjs: s } = ae(n), f = (h) => {
    const x = document.getElementById(e.ganttBarConfig.id);
    if (!x)
      return;
    switch (i = h.clientX - (x.getBoundingClientRect().left || 0), h.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", t = g;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", t = c;
        break;
      default:
        t = w;
    }
    r.value = !0, window.addEventListener("mousemove", t), window.addEventListener("mouseup", _);
  }, y = () => {
    var l;
    const h = document.getElementById(e.ganttBarConfig.id), x = (l = h == null ? void 0 : h.closest(".g-gantt-row-bars-container")) == null ? void 0 : l.getBoundingClientRect();
    return { barElement: h, barContainer: x };
  }, w = (h) => {
    const { barElement: x, barContainer: l } = y();
    if (!x || !l)
      return;
    const b = x.getBoundingClientRect().width, v = h.clientX - l.left - i, k = v + b;
    B(v, k) || (e[p.value] = o(v), e[d.value] = o(k), m(h, e));
  }, g = (h) => {
    const { barElement: x, barContainer: l } = y();
    if (!x || !l)
      return;
    const b = h.clientX - l.left, v = o(b);
    s(v).isSameOrAfter(s(e, "end")) || (e[p.value] = v, m(h, e));
  }, c = (h) => {
    const { barElement: x, barContainer: l } = y();
    if (!x || !l)
      return;
    const b = h.clientX - l.left, v = o(b);
    s(v).isSameOrBefore(s(e, "start")) || (e[d.value] = v, m(h, e));
  }, B = (h, x) => {
    if (!u.value)
      return !1;
    const l = e.ganttBarConfig.dragLimitLeft, b = e.ganttBarConfig.dragLimitRight;
    return h && l != null && h < l || x && b != null && x > b;
  }, _ = (h) => {
    r.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", t), window.removeEventListener("mouseup", _), a(h, e);
  };
  return {
    isDragging: r,
    initDrag: f
  };
}
function Qe() {
  const e = ce(je);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
function Ut() {
  const e = A(), m = ke(), a = Qe(), { pushOnOverlap: n, barStart: p, barEnd: d, noOverlap: u, dateFormat: r } = e, i = /* @__PURE__ */ new Map(), { toDayjs: t, format: o } = ae(), s = (l, b) => {
    const { initDrag: v } = Se(l, y, _, e);
    a({ ...b, type: "dragstart" }, l), v(b), h(l);
  }, f = (l, b) => {
    const v = l.ganttBarConfig.bundle;
    v != null && (m().forEach((k) => {
      k.bars.forEach((C) => {
        if (C.ganttBarConfig.bundle === v) {
          const O = C === l ? _ : () => null, { initDrag: T } = Se(C, y, O, e);
          T(b), h(C);
        }
      });
    }), a({ ...b, type: "dragstart" }, l));
  }, y = (l, b) => {
    a({ ...l, type: "drag" }, b), w(b);
  }, w = (l) => {
    if (!(n != null && n.value))
      return;
    let b = l, { overlapBar: v, overlapType: k } = g(b);
    for (; v; ) {
      h(v);
      const C = t(b[p.value]), O = t(b[d.value]), T = t(v[p.value]), Y = t(v[d.value]);
      let R;
      switch (k) {
        case "left":
          R = Y.diff(C, "minutes", !0), v[d.value] = o(b[p.value], r.value), v[p.value] = o(
            T.subtract(R, "minutes"),
            r.value
          );
          break;
        case "right":
          R = O.diff(T, "minutes", !0), v[p.value] = o(O, r.value), v[d.value] = o(
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
    const C = (P = (W = m().find((j) => j.bars.includes(l))) == null ? void 0 : W.bars) != null ? P : [], O = t(l[p.value]), T = t(l[d.value]);
    return { overlapBar: C.find((j) => {
      if (j === l)
        return !1;
      const U = t(j[p.value]), z = t(j[d.value]);
      return b = O.isBetween(U, z), v = T.isBetween(U, z), k = U.isBetween(O, T) || z.isBetween(O, T), b || v || k;
    }), overlapType: b ? "left" : v ? "right" : k ? "between" : null };
  }, c = (l, b, v) => {
    h(l), l.ganttBarConfig.bundle && m().forEach((k) => {
      k.bars.forEach((C) => {
        C.ganttBarConfig.bundle === l.ganttBarConfig.bundle && C !== l && (h(C), B(C, b, v));
      });
    });
  }, B = (l, b, v) => {
    switch (v) {
      case "left":
        l[p.value] = o(
          t(l, "start").subtract(b, "minutes"),
          r.value
        ), l[d.value] = o(
          t(l, "end").subtract(b, "minutes"),
          r.value
        );
        break;
      case "right":
        l[p.value] = o(
          t(l, "start").add(b, "minutes"),
          r.value
        ), l[d.value] = o(t(l, "end").add(b, "minutes"), r.value);
    }
    w(l);
  }, _ = (l, b) => {
    x();
    const v = {
      ...l,
      type: "dragend"
    };
    a(v, b, void 0, new Map(i)), i.clear();
  }, h = (l) => {
    if (!i.has(l)) {
      const b = l[p.value], v = l[d.value];
      i.set(l, { oldStart: b, oldEnd: v });
    }
  }, x = () => {
    if (n.value || !u.value)
      return;
    let l = !1;
    i.forEach((b, v) => {
      const { overlapBar: k } = g(v);
      k != null && (l = !0);
    }), l && i.forEach(({ oldStart: b, oldEnd: v }, k) => {
      k[p.value] = b, k[d.value] = v;
    });
  };
  return {
    initDragOfBar: s,
    initDragOfBundle: f
  };
}
function Nt() {
  const { pushOnOverlap: e } = A(), m = ke(), a = (u) => {
    const r = [];
    return u != null && m().forEach((i) => {
      i.bars.forEach((t) => {
        t.ganttBarConfig.bundle === u && r.push(t);
      });
    }), r;
  }, n = (u) => {
    if (!e.value || u.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const i of ["left", "right"]) {
      const t = i, { gapDistanceSoFar: o, bundleBarsAndGapDist: s } = p(
        u,
        0,
        t
      );
      let f = o;
      const y = s;
      if (!y)
        continue;
      for (let g = 0; g < y.length; g++) {
        const c = y[g].bar, B = y[g].gapDistance;
        a(c.ganttBarConfig.bundle).filter(
          (h) => h !== c
        ).forEach((h) => {
          const x = p(h, B, t), l = x.gapDistanceSoFar, b = x.bundleBarsAndGapDist;
          l != null && (!f || l < f) && (f = l), b.forEach((v) => {
            y.find((k) => k.bar === v.bar) || y.push(v);
          });
        });
      }
      const w = document.getElementById(u.ganttBarConfig.id);
      f != null && t === "left" ? u.ganttBarConfig.dragLimitLeft = w.offsetLeft - f : f != null && t === "right" && (u.ganttBarConfig.dragLimitRight = w.offsetLeft + w.offsetWidth + f);
    }
    a(u.ganttBarConfig.bundle).forEach((i) => {
      i.ganttBarConfig.dragLimitLeft = u.ganttBarConfig.dragLimitLeft, i.ganttBarConfig.dragLimitRight = u.ganttBarConfig.dragLimitRight;
    });
  }, p = (u, r = 0, i) => {
    const t = u.ganttBarConfig.bundle ? [{ bar: u, gapDistance: r }] : [];
    let o = u, s = d(o, i);
    if (i === "left")
      for (; s; ) {
        const f = document.getElementById(o.ganttBarConfig.id), y = document.getElementById(s.ganttBarConfig.id), w = y.offsetLeft + y.offsetWidth;
        if (r += f.offsetLeft - w, s.ganttBarConfig.immobile)
          return { gapDistanceSoFar: r, bundleBarsAndGapDist: t };
        s.ganttBarConfig.bundle && t.push({
          bar: s,
          gapDistance: r
        }), o = s, s = d(s, "left");
      }
    if (i === "right")
      for (; s; ) {
        const f = document.getElementById(o.ganttBarConfig.id), y = document.getElementById(s.ganttBarConfig.id), w = f.offsetLeft + f.offsetWidth;
        if (r += y.offsetLeft - w, s.ganttBarConfig.immobile)
          return { gapDistanceSoFar: r, bundleBarsAndGapDist: t };
        s.ganttBarConfig.bundle && t.push({
          bar: s,
          gapDistance: r
        }), o = s, s = d(s, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: t };
  }, d = (u, r) => {
    var s, f;
    const i = document.getElementById(u.ganttBarConfig.id), t = (f = (s = m().find((y) => y.bars.includes(u))) == null ? void 0 : s.bars) != null ? f : [];
    let o = [];
    return r === "left" ? o = t.filter((y) => {
      const w = document.getElementById(y.ganttBarConfig.id);
      return w && w.offsetLeft < i.offsetLeft && y.ganttBarConfig.pushOnOverlap !== !1;
    }) : o = t.filter((y) => {
      const w = document.getElementById(y.ganttBarConfig.id);
      return w && w.offsetLeft > i.offsetLeft && y.ganttBarConfig.pushOnOverlap !== !1;
    }), o.length > 0 ? o.reduce((y, w) => {
      const g = document.getElementById(y.ganttBarConfig.id), c = document.getElementById(w.ganttBarConfig.id), B = Math.abs(g.offsetLeft - i.offsetLeft), _ = Math.abs(c.offsetLeft - i.offsetLeft);
      return B < _ ? y : w;
    }, o[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: n
  };
}
const Vt = ["id"], qt = { class: "g-gantt-bar-label" }, Qt = ["innerHTML"], Xt = /* @__PURE__ */ I("div", { class: "g-gantt-bar-handle-left" }, null, -1), Kt = /* @__PURE__ */ I("div", { class: "g-gantt-bar-handle-right" }, null, -1), Zt = /* @__PURE__ */ Q({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    const m = e, a = Qe(), n = A(), { rowHeight: p } = n, { bar: d } = re(m), { mapTimeToPosition: u, mapPositionToTime: r } = fe(), { initDragOfBar: i, initDragOfBundle: t } = Ut(), { setDragLimitsOfGanttBar: o } = Nt(), s = G(!1), f = H(() => d.value.ganttBarConfig);
    function y(C) {
      f.value.bundle != null ? t(d.value, C) : i(d.value, C), s.value = !0;
    }
    const w = () => {
      o(d.value), !f.value.immobile && (window.addEventListener("mousemove", y, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", y), s.value = !1;
        },
        { once: !0 }
      ));
    }, g = ce(Ue), c = (C) => {
      var Y;
      C.preventDefault(), C.type === "mousedown" && w();
      const O = (Y = g == null ? void 0 : g.value) == null ? void 0 : Y.getBoundingClientRect();
      if (!O)
        return;
      const T = r(C.clientX - O.left);
      a(C, d.value, T);
    }, { barStart: B, barEnd: _, width: h, chartStart: x, chartEnd: l, chartSize: b } = n, v = G(0), k = G(0);
    return Le(() => {
      de(
        [d, h, x, l, b.width],
        () => {
          v.value = u(d.value[B.value]), k.value = u(d.value[_.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (C, O) => (E(), M("div", {
      id: f.value.id,
      class: we(["g-gantt-bar", f.value.class || ""]),
      style: $({
        ...f.value.style,
        position: "absolute",
        top: `${D(p) * 0.1}px`,
        left: `${v.value}px`,
        width: `${k.value - v.value}px`,
        height: `${D(p) * 0.8}px`,
        zIndex: s.value ? 3 : 2
      }),
      onMousedown: c,
      onClick: c,
      onDblclick: c,
      onMouseenter: c,
      onMouseleave: c,
      onContextmenu: c
    }, [
      I("div", qt, [
        L(C.$slots, "default", { bar: D(d) }, () => [
          I("div", null, q(f.value.label || ""), 1),
          f.value.html ? (E(), M("div", {
            key: 0,
            innerHTML: f.value.html
          }, null, 8, Qt)) : V("", !0)
        ])
      ]),
      f.value.hasHandles ? (E(), M(ee, { key: 0 }, [
        Xt,
        Kt
      ], 64)) : V("", !0)
    ], 46, Vt));
  }
});
const Jt = /* @__PURE__ */ Q({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(e, { emit: m }) {
    const a = e, n = m, { rowHeight: p, colors: d, labelColumnTitle: u } = A(), { highlightOnHover: r } = re(a), i = G(!1), t = H(() => ({
      height: `${p.value}px`,
      background: (r == null ? void 0 : r.value) && i.value ? d.value.hoverHighlight : null
    })), { mapPositionToTime: o } = fe(), s = G(null);
    le(Ue, s);
    const f = (w) => {
      var _;
      const g = (_ = s.value) == null ? void 0 : _.getBoundingClientRect();
      if (!g) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const c = w.clientX - g.left, B = o(c);
      n("drop", { e: w, datetime: B });
    }, y = (w) => !w || /^\s*$/.test(w);
    return (w, g) => (E(), M("div", {
      class: "g-gantt-row",
      style: $(t.value),
      onDragover: g[0] || (g[0] = st((c) => i.value = !0, ["prevent"])),
      onDragleave: g[1] || (g[1] = (c) => i.value = !1),
      onDrop: g[2] || (g[2] = (c) => f(c)),
      onMouseover: g[3] || (g[3] = (c) => i.value = !0),
      onMouseleave: g[4] || (g[4] = (c) => i.value = !1)
    }, [
      !y(w.label) && !D(u) ? (E(), M("div", {
        key: 0,
        class: "g-gantt-row-label",
        style: $({ background: D(d).primary, color: D(d).text })
      }, [
        L(w.$slots, "label", {}, () => [
          ne(q(w.label), 1)
        ])
      ], 4)) : V("", !0),
      I("div", lt({
        ref_key: "barContainer",
        ref: s,
        class: "g-gantt-row-bars-container"
      }, w.$attrs), [
        _e(ut, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: N(() => [
            (E(!0), M(ee, null, te(w.bars, (c) => (E(), J(Zt, {
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
function en() {
  S.extend(dt), S.extend(ft), S.extend(gt), S.extend(pt), S.extend(ht), S.extend(ct), S.extend(mt);
}
const an = {
  install(e, m) {
    en(), e.component("GGanttChart", jt), e.component("GGanttRow", Jt);
  }
};
function X(e, m = "top") {
  if (!e || typeof document > "u")
    return;
  const a = document.head, n = document.createElement("style");
  m === "top" && a.firstChild ? a.insertBefore(n, a.firstChild) : a.appendChild(n), n.appendChild(document.createTextNode(e));
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
  jt as GGanttChart,
  Jt as GGanttRow,
  an as default,
  en as extendDayjs,
  an as ganttastic
};
