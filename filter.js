"use strict";
(() => {
        var pe = Object.create;
        var lt = Object.defineProperty;
        var fe = Object.getOwnPropertyDescriptor;
        var de = Object.getOwnPropertyNames;
        var Ee = Object.getPrototypeOf,
            Te = Object.prototype.hasOwnProperty;
        var ge = (t, e, r) => e in t ? lt(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r;
        var Se = (t, e) => () => (e || t((e = {
            exports: {}
        }).exports, e), e.exports);
        var ye = (t, e, r, n) => {
            if (e && typeof e == "object" || typeof e == "function")
                for (let o of de(e)) !Te.call(t, o) && o !== r && lt(t, o, {
                    get: () => e[o],
                    enumerable: !(n = fe(e, o)) || n.enumerable
                });
            return t
        };
        var be = (t, e, r) => (r = t != null ? pe(Ee(t)) : {}, ye(e || !t || !t.__esModule ? lt(r, "default", {
            value: t,
            enumerable: !0
        }) : r, t));
        var ht = (t, e, r) => (ge(t, typeof e != "symbol" ? e + "" : e, r), r);
        var Xt = Se((Dn, Qt) => {
            Qt.exports = dr;

            function dr(t, e, r, n) {
                var o, s, i;
                return function() {
                    if (i = this, s = Array.prototype.slice.call(arguments), o && (r || n)) return;
                    if (!r) return m(), o = setTimeout(a, e), o;
                    o = setTimeout(m, e), t.apply(i, s);

                    function a() {
                        m(), t.apply(i, s)
                    }

                    function m() {
                        clearTimeout(o), o = null
                    }
                }
            }
        });
        var K = "fs-attributes";
        var At = "animation";
        var Ct = "cmsattribute";
        var xt = "cmscore";
        var O = "cmsfilter";
        var _t = "queryparam";
        var at = "support";
        var Ft = async (...t) => {
            var r;
            let e = [];
            for (let n of t) {
                let o = await ((r = window.fsAttributes[n]) == null ? void 0 : r.loading);
                e.push(o)
            }
            return e
        };
        var w = class {
            static activateAlerts() {
                this.alertsActivated = !0
            }
            static alert(e, r) {
                if (this.alertsActivated && window.alert(e), r === "error") throw new Error(e)
            }
        };
        ht(w, "alertsActivated", !1);
        var V = () => {};

        function I(t, e, r, n) {
            return t ? (t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n)) : V
        }
        var wt = t => t instanceof Element;
        var R = t => t instanceof HTMLInputElement,
            It = t => t instanceof HTMLSelectElement,
            Lt = t => t instanceof HTMLTextAreaElement;
        var G = t => R(t) || It(t) || Lt(t);
        var L = (t, e) => !!t && e.includes(t);
        var ct = t => t != null;
        var Q = t => typeof t == "string";
        var Y = t => t === void 0;
        var Mt = {
                wrapper: "w-dyn-list",
                list: "w-dyn-items",
                item: "w-dyn-item",
                paginationWrapper: "w-pagination-wrapper",
                paginationNext: "w-pagination-next",
                paginationPrevious: "w-pagination-previous",
                pageCount: "w-page-count",
                emptyState: "w-dyn-empty"
            },
            D = {
                formBlock: "w-form",
                checkboxField: "w-checkbox",
                checkboxInput: "w-checkbox-input",
                radioField: "w-radio",
                radioInput: "w-radio-input",
                checkboxOrRadioLabel: "w-form-label",
                checkboxOrRadioFocus: "w--redirected-focus",
                checkboxOrRadioChecked: "w--redirected-checked",
                successMessage: "w-form-done",
                errorMessage: "w-form-fail"
            };
        var P = (t, e) => (Array.isArray(e) || (e = [e]), e.map(n => t.dispatchEvent(new Event(n, {
            bubbles: !0
        }))).every(n => n));
        var {
            radioInput: he,
            checkboxOrRadioFocus: Ae,
            checkboxOrRadioChecked: Ce
        } = D, mt = (t, e = []) => {
            let {
                type: r
            } = t;
            if (R(t) && ["checkbox", "radio"].includes(r)) {
                if (!t.checked || (t.checked = !1, P(t, ["click", "input", "change"].filter(s => !e.includes(s))), r === "checkbox")) return;
                let {
                    parentElement: n
                } = t;
                if (!n) return;
                let o = n.querySelector(`.${he}`);
                if (!o) return;
                o.classList.remove(Ae, Ce);
                return
            }
            t.value = "", P(t, ["input", "change"].filter(n => !e.includes(n)))
        };
        var ut = (t, e = !0) => t.cloneNode(e);

        function $(t, e, r, n = !0) {
            let o = r ? [r] : [];
            if (!t) return o;
            let s = t.split(",").reduce((i, l) => {
                let a = l.trim();
                return (!n || a) && i.push(a), i
            }, []);
            if (e) {
                let i = s.filter(l => L(l, e));
                return i.length ? i : o
            }
            return s
        }
        var pt = t => Object.entries(t);
        var X = t => !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
        var q = (t, e) => t.every(r => e.includes(r)) && e.every(r => t.includes(r));
        var k = (t, e) => {
            let {
                type: r
            } = t, n = r === "radio";
            if (n || r === "checkbox") {
                if (!R(t) || typeof e != "boolean" || e === t.checked || n && e === !1) return;
                t.checked = e
            } else {
                if (t.value === e) return;
                t.value = e.toString()
            }
            P(t, ["click", "input", "change"])
        };

        function vt(t, e, r) {
            var o;
            let n = window.fsAttributes[t];
            return n.destroy = r || V, (o = n.resolve) == null || o.call(n, e), e
        }
        var H = (t, e = "1", r = "iife") => {
            let o = `<span class="math-inline">\{t\}</span>{r==="esm"?".esm":""}.js`;
            return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-<span class="math-inline">\{t\}@</span>{e}/${o}`
        };
        var xe = H(At, "1", "esm"),
            J = async () => {
                let {
                    fsAttributes: t
                } = window;
                t.animation || (t.animation = {});
                let {
                    animation: e
                } = t;
                if (e.import) return e.import;
                try {
                    return e.import = import(xe), e.import
                } catch (r) {
                    w.alert(`${r}`, "error");
                    return
                }
            };
        var _e = H(xt, "1"),
            Rt = async () => {
                let {
                    fsAttributes: t
                } = window;
                t.cmscore || (t.cmscore = {});
                let {
                    cmscore: e
                } = t;
                if (e.import) return e.import;
                try {
                    return e.import = import(_e), e.import.then(r => {
                        r && (e.version || (e.version = r.version))
                    }), e.import
                } catch (r) {
                    w.alert(`${r}`, "error");
                    return
                }
            };
        var Fe = `<span class="math-inline">\{K\}\-</span>{at}`,
            Dt = async () => {
                var o;
                let {
                    fsAttributes: t,
                    location: e
                } = window, {
                    host: r,
                    searchParams: n
                } = new URL(e.href);
                return !r.includes("webflow.io") || !n.has(Fe) ? !1 : (o = t.import) == null ? void 0 : o.call(t, at, "1")
            };
        var _ = t => e => `<span class="math-inline">\{t\}</span>{e?` - $ {
            e
        }
        `:""}`, Z = t => {
                let e = (o, s, i) => {
                        let l = t[o],
                            {
                                key: a,
                                values: m
                            } = l,
                            c;
                        if (!s) return `[${a}]`;
                        let u = m == null ? void 0 : m[s];
                        Q(u) ? c = u : c = u(i && "instanceIndex" in i ? i.instanceIndex : void 0);
                        let p = i && "caseInsensitive" in i && i.caseInsensitive ? "i" : "";
                        if (!(i != null && i.operator)) return `[<span class="math-inline">\{a\}\="</span>{c}"${p}]`;
                        switch (i.operator) {
                            case "prefixed":
                                return `[<span class="math-inline">\{a\}^\="</span>{c}"${p}]`;
                            case "suffixed":
                                return `
