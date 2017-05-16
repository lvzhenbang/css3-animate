+ function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.carousel"),
                i = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : i.slide;
            r || o.data("bs.carousel", r = new n(this, i)), "number" == typeof e ? r.to(e) : s ? r[s]() : i.interval && r.pause().cycle()
        })
    }
    var n = function(e, n) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            o = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var r = "prev" == t ? -1 : 1,
            i = (n + r) % this.$items.length;
        return this.$items.eq(i)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, o) {
        var r = this.$element.find(".item.active"),
            i = o || this.getItemForDirection(e, r),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (i.hasClass("active")) return this.sliding = !1;
        var c = i[0],
            u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: a });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(i)]);
                d && d.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", { relatedTarget: c, direction: a });
            return t.support.transition && this.$element.hasClass("slide") ? (i.addClass(e), i[0].offsetWidth, r.addClass(a), i.addClass(a), r.one("bsTransitionEnd", function() { i.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(f) }, 0) }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = o, this
    };
    var r = function(n) {
        var o, r = t(this),
            i = t(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var s = t.extend({}, i.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (s.interval = !1), e.call(i, s), a && i.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery)
;


+ function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);