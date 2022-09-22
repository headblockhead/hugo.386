/* ============================================================
 * bootstrap-dropdown.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function (o) { "use strict"; var n = "[data-toggle=dropdown]", t = function (n) { var t = o(n).on("click.dropdown.data-api", this.toggle); o("html").on("click.dropdown.data-api", function () { t.parent().removeClass("open") }) }; function e() { o(n).each(function () { a(o(this)).removeClass("open") }) } function a(n) { var t, e = n.attr("data-target"); return e || (e = (e = n.attr("href")) && /#/.test(e) && e.replace(/.*(?=#[^\s]*$)/, "")), (t = e && o(e)) && t.length || (t = n.parent()), t } t.prototype = { constructor: t, toggle: function (n) { var t, d, r = o(this); if (!r.is(".disabled, :disabled")) return d = (t = a(r)).hasClass("open"), e(), d || t.toggleClass("open"), r.focus(), !1 }, keydown: function (t) { var e, d, r, i, p; if (/(38|40|27)/.test(t.keyCode)) { if (e = o(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) { if (!(i = (r = a(e)).hasClass("open")) || i && 27 == t.keyCode) return 27 == t.which && r.find(n).focus(), e.click(); (d = o("[role=menu] li:not(.divider):visible a", r)).length && (p = d.index(d.filter(":focus")), 38 == t.keyCode && p > 0 && p--, 40 == t.keyCode && p < d.length - 1 && p++, ~p || (p = 0), d.eq(p).focus()) } } } }; var d = o.fn.dropdown; o.fn.dropdown = function (n) { return this.each(function () { var e = o(this), a = e.data("dropdown"); a || e.data("dropdown", a = new t(this)), "string" == typeof n && a[n].call(e) }) }, o.fn.dropdown.Constructor = t, o.fn.dropdown.noConflict = function () { return o.fn.dropdown = d, this }, o(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function (o) { o.stopPropagation() }).on("click.dropdown-menu", function (o) { o.stopPropagation() }).on("click.dropdown.data-api", n, t.prototype.toggle).on("keydown.dropdown.data-api", n + ", [role=menu]", t.prototype.keydown) }(window.jQuery);