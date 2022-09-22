/* ==========================================================
 * bootstrap-affix.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
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
 * ========================================================== */
!function (t) { "use strict"; var f = function (f, o) { this.options = t.extend({}, t.fn.affix.defaults, o), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)).on("click.affix.data-api", t.proxy(function () { setTimeout(t.proxy(this.checkPosition, this), 1) }, this)), this.$element = t(f), this.checkPosition() }; f.prototype.checkPosition = function () { if (this.$element.is(":visible")) { var f, o = t(document).height(), i = this.$window.scrollTop(), n = this.$element.offset(), s = this.options.offset, e = s.bottom, a = s.top; "object" != typeof s && (e = a = s), "function" == typeof a && (a = s.top()), "function" == typeof e && (e = s.bottom()), f = (null == this.unpin || !(i + this.unpin <= n.top)) && (null != e && n.top + this.$element.height() >= o - e ? "bottom" : null != a && i <= a && "top"), this.affixed !== f && (this.affixed = f, this.unpin = "bottom" == f ? n.top - i : null, this.$element.removeClass("affix affix-top affix-bottom").addClass("affix" + (f ? "-" + f : ""))) } }; var o = t.fn.affix; t.fn.affix = function (o) { return this.each(function () { var i = t(this), n = i.data("affix"); n || i.data("affix", n = new f(this, "object" == typeof o && o)), "string" == typeof o && n[o]() }) }, t.fn.affix.Constructor = f, t.fn.affix.defaults = { offset: 0 }, t.fn.affix.noConflict = function () { return t.fn.affix = o, this }, t(window).on("load", function () { t('[data-spy="affix"]').each(function () { var f = t(this), o = f.data(); o.offset = o.offset || {}, o.offsetBottom && (o.offset.bottom = o.offsetBottom), o.offsetTop && (o.offset.top = o.offsetTop), f.affix(o) }) }) }(window.jQuery);