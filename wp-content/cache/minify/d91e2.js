!function(d) {
    "use strict";
    window.qodefAddonsCore = {},
    qodefAddonsCore.shortcodes = {},
    qodefAddonsCore.body = d("body"),
    qodefAddonsCore.html = d("html"),
    qodefAddonsCore.windowWidth = d(window).width(),
    qodefAddonsCore.windowHeight = d(window).height(),
    qodefAddonsCore.scroll = 0,
    d(document).ready(function() {
        qodefAddonsCore.scroll = d(window).scrollTop(),
        C.init(),
        e.init(),
        t.init()
    }),
    d(window).resize(function() {
        qodefAddonsCore.windowWidth = d(window).width(),
        qodefAddonsCore.windowHeight = d(window).height()
    }),
    d(window).scroll(function() {
        qodefAddonsCore.scroll = d(window).scrollTop()
    }),
    d(window).load(function() {
        o.init()
    });
    var C = {
        init: function(e) {
            this.holder = d(".qodef-qi-swiper-container"),
            d.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                C.initSlider(d(this))
            })
        },
        initSlider: function(e) {
            var o = C.getOptions(e)
              , t = C.getEvents(e, o);
            new Swiper(e,Object.assign(o, t))
        },
        getOptions: function(e) {
            var o = void 0 !== e.data("options") ? e.data("options") : {}
              , t = void 0 !== o.partialValue && "" !== o.partialValue ? parseFloat(o.partialValue) : 0
              , n = void 0 !== o.spaceBetween && "" !== o.spaceBetween ? o.spaceBetween : 0
              , d = void 0 !== o.spaceBetweenTablet && "" !== o.spaceBetweenTablet ? o.spaceBetweenTablet : 0
              , i = void 0 !== o.spaceBetweenMobile && "" !== o.spaceBetweenMobile ? o.spaceBetweenMobile : 0
              , r = void 0 !== o.slidesPerView && "" !== o.slidesPerView ? "auto" === o.slidesPerView ? "auto" : parseInt(o.slidesPerView) + t : 1 + t
              , a = void 0 !== o.centeredSlides && "" !== o.centeredSlides && o.centeredSlides
              , s = void 0 !== o.sliderScroll && "" !== o.sliderScroll && o.sliderScroll
              , l = void 0 !== o.effect && "" !== o.effect ? o.effect : "slide"
              , f = void 0 === o.loop || "" === o.loop || o.loop
              , c = void 0 === o.autoplay || "" === o.autoplay || o.autoplay
              , h = void 0 !== o.speed && "" !== o.speed ? parseInt(o.speed, 10) : 5e3
              , u = void 0 !== o.speedAnimation && "" !== o.speedAnimation ? parseInt(o.speedAnimation, 10) : 800
              , q = void 0 !== o.customStages && "" !== o.customStages && o.customStages
              , m = void 0 !== o.outsideNavigation && "yes" === o.outsideNavigation
              , _ = m ? ".swiper-button-next-" + o.unique : e.find(".swiper-button-next")
              , p = m ? ".swiper-button-prev-" + o.unique : e.find(".swiper-button-prev")
              , g = void 0 !== o.outsidePagination && "yes" === o.outsidePagination ? ".swiper-pagination-" + o.unique : e.find(".swiper-pagination");
            !1 !== c && 5e3 !== h ? c = {
                delay: h,
                disableOnInteraction: !1
            } : !1 !== c && (c = {
                disableOnInteraction: !1
            });
            var v = void 0 !== o.slidesPerView1440 && "" !== o.slidesPerView1440 ? parseInt(o.slidesPerView1440, 10) + t : "auto" === o.slidesPerView ? "auto" : 5 + t
              , w = void 0 !== o.slidesPerView1366 && "" !== o.slidesPerView1366 ? parseInt(o.slidesPerView1366, 10) + t : "auto" === o.slidesPerView ? "auto" : 4 + t
              , b = void 0 !== o.slidesPerView1024 && "" !== o.slidesPerView1024 ? parseInt(o.slidesPerView1024, 10) + t : "auto" === o.slidesPerView ? "auto" : 3 + t
              , m = void 0 !== o.slidesPerView768 && "" !== o.slidesPerView768 ? parseInt(o.slidesPerView768, 10) + t : "auto" === o.slidesPerView ? "auto" : 2 + t
              , h = void 0 !== o.slidesPerView680 && "" !== o.slidesPerView680 ? parseInt(o.slidesPerView680, 10) + t : "auto" === o.slidesPerView ? "auto" : 1 + t
              , t = void 0 !== o.slidesPerView480 && "" !== o.slidesPerView480 ? parseInt(o.slidesPerView480, 10) + t : "auto" === o.slidesPerView ? "auto" : 1 + t;
            return q || (r < 2 ? m = b = w = v = r : r < 3 ? b = w = v = r : r < 4 ? w = v = r : r < 5 && (v = r)),
            Object.assign({
                slidesPerView: r,
                centeredSlides: a,
                sliderScroll: s,
                loopedSlides: "12",
                spaceBetween: n,
                effect: l,
                autoplay: c,
                loop: f,
                speed: u,
                navigation: {
                    nextEl: _,
                    prevEl: p
                },
                pagination: {
                    el: g,
                    type: "bullets",
                    clickable: !0
                },
                grabCursor: !0,
                breakpoints: {
                    0: {
                        slidesPerView: t,
                        spaceBetween: i
                    },
                    481: {
                        slidesPerView: h,
                        spaceBetween: i
                    },
                    681: {
                        slidesPerView: m,
                        spaceBetween: d
                    },
                    769: {
                        slidesPerView: b,
                        spaceBetween: d
                    },
                    1025: {
                        slidesPerView: w
                    },
                    1367: {
                        slidesPerView: v
                    },
                    1441: {
                        slidesPerView: r
                    }
                }
            }, C.getSliderDatas(e))
        },
        getSliderDatas: function(e) {
            var o, t = e.data(), n = {};
            for (o in t)
                t.hasOwnProperty(o) && "options" !== o && void 0 !== t[o] && "" !== t[o] && (n[o] = t[o]);
            return n
        },
        getEvents: function(t, e) {
            return {
                on: {
                    init: function() {
                        var o;
                        t.addClass("qodef-swiper--initialized"),
                        e.sliderScroll && (o = !1,
                        t.on("mousewheel", function(e) {
                            e.preventDefault(),
                            o || (o = !0,
                            e.deltaY < 0 ? t[0].swiper.slideNext() : t[0].swiper.slidePrev(),
                            setTimeout(function() {
                                o = !1
                            }, 1e3))
                        })),
                        qodefAddonsCore.body.trigger("qodefAddons_trigger_after_swiper_init", [t, e])
                    }
                }
            }
        }
    };
    qodefAddonsCore.qodefSwiper = C,
    "function" != typeof Object.assign && (Object.assign = function(e) {
        if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
        e = Object(e);
        for (var o = 1; o < arguments.length; o++) {
            var t = arguments[o];
            if (null !== t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }
    );
    var e = {
        init: function() {
            this.holder = d(".qodef-qi-fslightbox-popup"),
            this.holder.length && refreshFsLightbox()
        }
    };
    qodefAddonsCore.qodefLightboxPopup = e;
    var o = {
        init: function() {
            this.holder = d(".qodef-qi--has-appear:not(.qodef-qi--appeared)"),
            this.holder.length && this.holder.each(function() {
                var e, o, t = d(this), e = (e = 10,
                o = 400,
                Math.floor(Math.random() * (o - e) + e)), n = d(this).attr("data-appear-delay");
                n ? (n = "random" === n ? e : n,
                qodefAddonsCore.qodefIsInViewport.check(t, function() {
                    setTimeout(function() {
                        t.addClass("qodef-qi--appeared")
                    }, n)
                })) : qodefAddonsCore.qodefIsInViewport.check(t, function() {
                    t.addClass("qodef-qi--appeared")
                })
            })
        }
    };
    qodefAddonsCore.qodefAppear = o,
    qodefAddonsCore.qodefIsInViewport = {
        check: function(o, t, n) {
            var e, d;
            o.length && (e = void 0 !== o.data("viewport-offset") ? o.data("viewport-offset") : .15,
            (d = new IntersectionObserver(function(e) {
                !0 === e[0].isIntersecting && (t.call(o),
                !1 !== n && d.disconnect())
            }
            ,{
                threshold: [e]
            })).observe(o[0]))
        }
    };
    var t = {
        init: function() {
            var e;
            this.holder = d("#qi-addons-for-elementor-page-inline-style"),
            !this.holder.length || (e = this.holder.data("style")).length && d("head").append('<style type="text/css">' + e + "</style>")
        }
    };
    qodefAddonsCore.qodefWaitForImages = {
        check: function(e, o) {
            if (e.length) {
                var t = e.find("img");
                if (t.length)
                    for (var n = 0, d = 0; d < t.length; d++) {
                        var i, r = t[d];
                        r.complete ? ++n === t.length && o.call(e) : ((i = new Image).addEventListener("load", function() {
                            if (++n === t.length)
                                return o.call(e),
                                !1
                        }, !1),
                        i.src = r.src)
                    }
            }
        }
    }
}(jQuery),
function(o) {
    "use strict";
    o(document).ready(function() {
        d.init()
    }),
    o(window).resize(function() {
        d.reInit()
    }),
    o(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            d.init()
        })
    });
    var d = {
        init: function(e) {
            this.holder = o(".qodef-layout--masonry"),
            o.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                d.createMasonry(o(this))
            })
        },
        reInit: function(e) {
            this.holder = o(".qodef-layout--masonry"),
            o.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                var e = o(this).find(".qodef-grid-inner");
                "function" == typeof e.isotope && e.isotope("layout")
            })
        },
        createMasonry: function(o) {
            var t = o.find(".qodef-grid-inner")
              , n = t.find(".qodef-grid-item");
            qodefAddonsCore.qodefWaitForImages.check(t, function() {
                var e;
                "function" == typeof t.isotope && (t.isotope({
                    layoutMode: "packery",
                    itemSelector: ".qodef-grid-item",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".qodef-grid-masonry-sizer",
                        gutter: ".qodef-grid-masonry-gutter"
                    }
                }),
                o.hasClass("qodef-items--fixed") && (e = d.getFixedImageSize(t, n),
                d.setFixedImageProportionSize(t, n, e)),
                t.isotope("layout")),
                t.addClass("qodef--masonry-init")
            })
        },
        getFixedImageSize: function(e, o) {
            var t = e.find(".qodef-item--square");
            if (t.length) {
                var n = t.find("img")
                  , t = n.width()
                  , n = n.height();
                return t !== n ? Math.round(n) : Math.round(t)
            }
            e = e.find(".qodef-grid-masonry-sizer").width(),
            o = parseInt(o.css("paddingLeft"), 10);
            return Math.round(e - 2 * o)
        },
        setFixedImageProportionSize: function(e, o, t) {
            var n = parseInt(o.css("paddingLeft"))
              , d = (e.find(".qodef-item--square"),
            e.find(".qodef-item--landscape"))
              , i = e.find(".qodef-item--portrait")
              , r = e.find(".qodef-item--huge-square")
              , e = qodefAddonsCore.windowWidth <= 680;
            o.css("height", t),
            d.length && d.css("height", Math.round(t / 2)),
            i.length && i.css("height", Math.round(2 * (t + n))),
            e || (d.length && d.css("height", t),
            r.length && r.css("height", Math.round(2 * (t + n))))
        }
    };
    qodefAddonsCore.qodefMasonryLayout = d
}(jQuery),
function(n) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_accordion = {},
    n(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = n(".qodef-accordion"),
            this.holder.length && this.holder.each(function() {
                o.initItem(n(this))
            })
        },
        initItem: function(e) {
            e.hasClass("qodef-behavior--accordion") && o.initAccordion(e),
            e.hasClass("qodef-behavior--toggle") && o.initToggle(e),
            e.addClass("qodef--init")
        },
        initAccordion: function(e) {
            e.accordion({
                animate: "swing",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "auto"
            })
        },
        initToggle: function(e) {
            var o = e.find(".qodef-e-title-holder")
              , t = o.next();
            e.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"),
            o.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"),
            t.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
            o.each(function() {
                var e = n(this);
                e.hover(function() {
                    e.toggleClass("ui-state-hover")
                }),
                e.on("click", function() {
                    e.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"),
                    e.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                })
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_accordion.qodefAccordion = o
}(jQuery),
function(i) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text = {},
    i(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = i(".qodef-animated-text.qodef--animated-by-letter"),
            this.holder.length && this.holder.each(function() {
                e.initItem(i(this))
            })
        },
        initItem: function(d) {
            d.find(".qodef-e-word-holder").each(function() {
                let e = i(this).text()
                  , o = "";
                for (var t = 0; t < e.length; t++)
                    o += '<span class="qodef-e-character">' + e.charAt(t) + "</span>";
                i(this).html(o)
            });
            let e = d.find(".qodef-e-character");
            e.each(function(e) {
                let o = i(this)
                  , t = d.hasClass("qodef--appear-from-left") ? 40 : 60
                  , n = e * t + "ms";
                o.css("transition-delay", n)
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text.qodefAppear = qodefAddonsCore.qodefAppear,
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text.qodefAnimatedText = e
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_before_after = {},
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-before-after"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-before-after-image-holder")
              , t = o.data("offset") / 100
              , n = "horizontal"
              , d = o.siblings(".qodef-handle-text");
            o.parents(".qodef-before-after").hasClass("qodef--vertical") && (n = "vertical"),
            qodefAddonsCore.qodefWaitForImages.check(o, function() {
                o.css("visibility", "visible"),
                o.twentytwenty({
                    orientation: n,
                    default_offset_pct: t
                }),
                d.length && o.find(".twentytwenty-handle").prepend(d)
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_before_after.qodefBeforeAfter = o
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_button = {},
    e(document).ready(function() {
        o.init()
    }),
    e(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            o.init()
        })
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-button"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o;
            e.hasClass("qodef-type--icon-boxed") && (o = e.find(".qodef-m-icon"),
            e = e.find(".qodef-m-text").outerHeight(),
            o.css("width", e))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_button.qodefButton = o
}(jQuery),
function(r) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_cards_gallery = {},
    r(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = r(".qodef-cards-gallery"),
            this.holder.length && this.holder.each(function() {
                e.initItem(r(this))
            })
        },
        initItem: function(t) {
            var n, d = t.find(".qodef-m-card"), i = t.data("orientation");
            switch (i) {
            case "left":
                n = "0 0 0 20%";
                break;
            case "right":
                n = "0 20% 0 0"
            }
            r(d.get().reverse()).each(function(e) {
                var o = r(this);
                o.on("click", function() {
                    if (!d.last().is(o))
                        return "both" === i && (n = o.index() % 2 ? "0 0 0 20%" : "0 0 0 -20%"),
                        o.addClass("qodef-out").animate({
                            margin: n
                        }, 200, "swing", function() {
                            o.detach(),
                            o.insertAfter(d.last()).animate({
                                margin: "0"
                            }, 200, "swing", function() {
                                o.removeClass("qodef-out")
                            }),
                            d = t.find(".qodef-m-card")
                        }),
                        !1
                })
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_cards_gallery.qodefCardsGallery = e
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_charts = {},
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-charts"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            qodefAddonsCore.qodefIsInViewport.check(e, function() {
                o.generateChartData(e)
            })
        },
        generateChartData: function(d) {
            var e = (e = d.data("type")) ? "pie" : "doughnut"
              , o = d.data("values")
              , t = d.data("labels")
              , i = d.data("background-colors")
              , r = d.data("hover-background-colors")
              , n = d.data("border-colors")
              , a = d.data("hover-border-colors")
              , s = d.data("border-width")
              , l = d.data("hover-border-width")
              , f = d.data("enable-legend")
              , c = d.data("legend-position")
              , h = d.data("legend-alignment")
              , u = d.data("legend-bar-width")
              , q = d.data("legend-bar-height")
              , m = d.data("legend-bar-margin")
              , _ = d.data("legend-label-color")
              , p = d.data("legend-label-font")
              , g = d.data("legend-label-font-size")
              , v = d.data("legend-label-font-weight")
              , w = d.data("legend-label-line-height")
              , b = d.data("aspect-ratio");
            let C = d.data("pattern-images"), y = !1, A, x = {
                type: e,
                data: {
                    datasets: [{
                        data: o,
                        backgroundColor: i,
                        hoverBackgroundColor: r,
                        borderColor: n,
                        hoverBorderColor: a,
                        borderWidth: s,
                        hoverBorderWidth: l,
                        borderAlign: "center",
                        pattern: C
                    }],
                    labels: t
                },
                options: {
                    responsive: !0,
                    aspectRatio: b,
                    animation: {
                        animateScale: !0,
                        animateRotate: !0
                    },
                    plugins: {
                        legend: {
                            display: f,
                            position: c,
                            align: h,
                            labels: {
                                boxWidth: u,
                                boxHeight: q,
                                padding: m,
                                color: _,
                                font: {
                                    family: p,
                                    size: g,
                                    weight: v,
                                    lineHeight: w
                                }
                            }
                        },
                        tooltip: {
                            titleFontSize: 13,
                            titleFontStyle: "regular",
                            displayColors: !1,
                            cornerRadius: 5,
                            caretSize: 6
                        }
                    }
                }
            };
            d.addClass("qodef--init"),
            C.forEach(function(e, t) {
                var n;
                e && (y = !0,
                (n = new Image).src = C[t],
                n.onload = function() {
                    var e = d.find("canvas")[0].getContext("2d")
                      , o = e.createPattern(n, "repeat");
                    i[t] = o,
                    r[t] = o,
                    A = new Chart(e,x)
                }
                )
            }),
            y || (w = d.find("canvas"),
            A = new Chart(w,x))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_charts.qodefCharts = o
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_clients_slider = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_clients_slider.qodefSwiper = qodefAddonsCore.qodefSwiper
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_countdown = {},
    e(document).ready(function() {
        t.init()
    });
    var t = {
        init: function() {
            this.countdowns = e(".qodef-countdown"),
            this.countdowns.length && this.countdowns.each(function() {
                t.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-date")
              , e = t.generateOptions(e);
            t.initCountdown(o, e)
        },
        generateOptions: function(e) {
            var o = {};
            return o.date = void 0 !== e.data("date") ? e.data("date") : null,
            o.hide = void 0 !== e.data("hide") ? e.data("hide") : null,
            o.monthLabel = void 0 !== e.data("month-label") ? e.data("month-label") : "Month",
            o.monthLabelPlural = void 0 !== e.data("month-label-plural") ? e.data("month-label-plural") : "Months",
            o.dayLabel = void 0 !== e.data("day-label") ? e.data("day-label") : "Day",
            o.dayLabelPlural = void 0 !== e.data("day-label-plural") ? e.data("day-label-plural") : "Days",
            o.hourLabel = void 0 !== e.data("hour-label") ? e.data("hour-label") : "Hour",
            o.hourLabelPlural = void 0 !== e.data("hour-label-plural") ? e.data("hour-label-plural") : "Hours",
            o.minuteLabel = void 0 !== e.data("minute-label") ? e.data("minute-label") : "Minute",
            o.minuteLabelPlural = void 0 !== e.data("minute-label-plural") ? e.data("minute-label-plural") : "Minutes",
            o.secondLabel = void 0 !== e.data("second-label") ? e.data("second-label") : "Second",
            o.secondLabelPlural = void 0 !== e.data("second-label-plural") ? e.data("second-label-plural") : "Seconds",
            o
        },
        initCountdown: function(c, h) {
            var u = new Date(h.date).getTime()
              , q = setInterval(function() {
                var e = (new Date).getTime()
                  , o = u - e
                  , t = Math.floor(o / 2592e6)
                  , n = Math.floor(o % 2592e6 / 864e5)
                  , d = Math.floor(o % 864e5 / 36e5)
                  , i = Math.floor(o % 36e5 / 6e4)
                  , r = Math.floor(o % 6e4 / 1e3);
                "mon" === h.hide && (n = Math.floor(o / 864e5));
                var a = c.find(".qodef-months")
                  , s = c.find(".qodef-days")
                  , l = c.find(".qodef-hours")
                  , f = c.find(".qodef-minutes")
                  , e = c.find(".qodef-seconds");
                a.find(".qodef-label").html(1 === t ? h.monthLabel : h.monthLabelPlural),
                s.find(".qodef-label").html(1 === n ? h.dayLabel : h.dayLabelPlural),
                l.find(".qodef-label").html(1 === d ? h.hourLabel : h.hourLabelPlural),
                f.find(".qodef-label").html(1 === i ? h.minuteLabel : h.minuteLabelPlural),
                e.find(".qodef-label").html(1 === r ? h.secondLabel : h.secondLabelPlural),
                t = t < 10 ? "0" + t : t,
                n = n < 10 ? "0" + n : n,
                d = d < 10 ? "0" + d : d,
                i = i < 10 ? "0" + i : i,
                r = r < 10 ? "0" + r : r,
                a.find(".qodef-digit").html(t),
                s.find(".qodef-digit").html(n),
                l.find(".qodef-digit").html(d),
                f.find(".qodef-digit").html(i),
                e.find(".qodef-digit").html(r),
                o < 0 && (clearInterval(q),
                a.find(".qodef-label").html(h.monthLabelPlural),
                s.find(".qodef-label").html(h.dayLabelPlural),
                l.find(".qodef-label").html(h.hourLabelPlural),
                f.find(".qodef-label").html(h.minuteLabelPlural),
                e.find(".qodef-label").html(h.secondLabelPlural),
                a.find(".qodef-digit").html("00"),
                s.find(".qodef-digit").html("00"),
                l.find(".qodef-digit").html("00"),
                f.find(".qodef-digit").html("00"),
                e.find(".qodef-digit").html("00"))
            }, 1e3)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_countdown.qodefCountdown = t
}(jQuery),
function(r) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_counter = {},
    r(document).ready(function() {
        n.init()
    });
    var n = {
        init: function() {
            this.counters = r(".qodef-counter"),
            this.counters.length && this.counters.each(function() {
                n.initItem(r(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-digit")
              , t = n.generateOptions(e);
            qodefAddonsCore.qodefIsInViewport.check(e, function() {
                n.counterScript(o, t)
            })
        },
        generateOptions: function(e) {
            var o = {};
            return o.start = void 0 !== e.data("start-digit") && "" !== e.data("start-digit") ? e.data("start-digit") : 0,
            o.end = void 0 !== e.data("end-digit") && "" !== e.data("end-digit") ? e.data("end-digit") : null,
            o.step = void 0 !== e.data("step-digit") && "" !== e.data("step-digit") ? e.data("step-digit") : 1,
            o.delay = void 0 !== e.data("step-delay") && "" !== e.data("step-delay") ? parseInt(e.data("step-delay"), 10) : 100,
            o.txt = void 0 !== e.data("digit-label") && "" !== e.data("digit-label") ? String(e.data("digit-label")) : "",
            o
        },
        counterScript: function(e, o) {
            var t = r.extend({
                start: 0,
                end: null,
                step: 1,
                delay: 50,
                txt: ""
            }, o || {})
              , n = t.start
              , d = t.end;
            e.text(n + t.txt);
            var i = setInterval(function() {
                null !== d && d <= n || (n += t.step,
                d <= n && (n = d,
                clearInterval(i)),
                e.text(n + t.txt))
            }, t.delay)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_counter.qodefCounter = n
}(jQuery),
function(t) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel = {},
    t(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.sliders = t(".qodef-device-carousel"),
            this.sliders.length && this.sliders.each(function() {
                e.initItem(t(this))
            })
        },
        initItem: function(e) {
            const o = e.find(".qodef-device-carousel-device .qodef-qi-swiper-container");
            o.each(function() {
                let e = t(this);
                e.hasClass("qodef-swiper--initialized") || qodefAddonsCore.qodefSwiper.initSlider(e)
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel.qodefSwiper = qodefAddonsCore.qodefSwiper,
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel.qodefDeviceCarousel = e
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_slider = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_slider.qodefSwiper = qodefAddonsCore.qodefSwiper
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_faq = {},
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-faq.qodef-behavior--accordion"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o;
            e.hasClass("qodef-behavior--accordion") && (o = 0,
            e.hasClass("qodef-closed") && (o = !1),
            e.accordion({
                animate: "swing",
                collapsible: !0,
                active: o,
                icons: "",
                heightStyle: "content"
            }),
            e.addClass("qodef--init"))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_faq.qodefFAQ = o
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_graphs = {},
    e(document).ready(function() {
        n.init()
    });
    var n = {
        init: function() {
            this.holder = e(".qodef-graphs"),
            this.holder.length && this.holder.each(function() {
                n.initItem(e(this))
            })
        },
        initItem: function(t) {
            qodefAddonsCore.qodefIsInViewport.check(t, function() {
                t.addClass("qodef--init");
                var e = t.find("canvas")
                  , o = n.generateChartData(t, e);
                new Chart(e,o)
            })
        },
        generateChartData: function(e, o) {
            var t = (t = e.data("type")) ? "line" : "bar"
              , n = e.data("ticks")
              , d = e.data("fill")
              , i = e.data("linear")
              , r = e.data("values")
              , a = e.data("item-labels")
              , s = e.data("labels")
              , l = e.data("background-colors")
              , f = e.data("hover-background-colors")
              , c = e.data("border-colors")
              , h = e.data("hover-border-colors")
              , u = e.data("border-width")
              , q = e.data("hover-border-width")
              , m = e.data("bar-size")
              , _ = e.data("cat-size")
              , p = e.data("enable-legend")
              , g = e.data("legend-position")
              , v = e.data("legend-alignment")
              , w = e.data("legend-bar-width")
              , b = e.data("legend-bar-height")
              , C = e.data("legend-bar-margin")
              , y = e.data("legend-label-color")
              , A = e.data("legend-label-font")
              , x = e.data("legend-label-font-size")
              , e = e.data("legend-label-font-weight")
              , I = [];
            return r.forEach(function(e, o) {
                var t = {};
                t.data = r[o].split(","),
                t.label = a[o],
                t.backgroundColor = l[o],
                t.hoverBackgroundColor = f[o],
                t.borderColor = c[o],
                t.hoverBorderColor = h[o],
                t.borderWidth = u,
                t.hoverBorderWidth = q,
                t.pointBackgroundColor = "rgba(0,0,0,0)",
                t.pointBorderColor = "rgba(0,0,0,0)",
                t.pointHoverBackgroundColor = "rgba(0,0,0,0)",
                t.pointHoverBorderColor = "rgba(0,0,0,0)",
                t.cubicInterpolationMode = "default",
                t.fill = d[o],
                t.barPercentage = m,
                t.categoryPercentage = _,
                t.tension = i[o],
                I.push(t)
            }),
            qodefAddonsCore.windowWidth <= 480 && (p = !1),
            {
                type: t,
                data: {
                    labels: s,
                    datasets: I
                },
                options: {
                    responsive: !0,
                    aspectRatio: 1.7,
                    hover: {
                        mode: "nearest",
                        intersect: !0
                    },
                    plugins: {
                        legend: {
                            display: p,
                            position: g,
                            align: v,
                            labels: {
                                boxWidth: w,
                                boxHeight: b,
                                padding: C,
                                color: y,
                                font: {
                                    family: A,
                                    size: x,
                                    weight: e
                                }
                            }
                        },
                        tooltip: {
                            mode: "nearest",
                            intersect: !1,
                            titleFontSize: 13,
                            titleFontStyle: "regular",
                            displayColors: !1,
                            cornerRadius: 5,
                            caretSize: 6
                        }
                    },
                    scales: {
                        x: {
                            display: !0,
                            scaleLabel: {
                                display: !0
                            },
                            ticks: {
                                fontColor: "#c4c4c4",
                                fontFamily: '"DM Sans"',
                                fontSize: 16,
                                padding: 10
                            },
                            grid: {
                                color: "#dbdbdb",
                                tickLength: 30
                            }
                        },
                        y: {
                            display: !0,
                            scaleLabel: {
                                display: !0
                            },
                            suggestedMax: n.max,
                            suggestedMin: n.min,
                            ticks: {
                                stepSize: n.step,
                                fontColor: "#c4c4c4",
                                fontFamily: '"DM Sans"',
                                fontSize: 16,
                                padding: 10
                            },
                            gridLines: {
                                color: "#dbdbdb",
                                tickMarkLength: 30
                            }
                        }
                    }
                }
            }
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_graphs.qodefGraphs = n
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_icon_with_text = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_icon_with_text.qodefAppear = qodefAddonsCore.qodefAppear
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery.qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry.qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout,
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry.qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest.qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout,
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest.qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider.qodefSwiper = qodefAddonsCore.qodefSwiper,
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider.qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_info_button = {},
    e(document).ready(function() {
        o.init()
    }),
    e(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            o.init()
        })
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-info-button"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o;
            e.hasClass("qodef-type--icon-boxed") && (o = e.find(".qodef-m-icon"),
            e = e.find(".qodef-m-text-holder").outerHeight(),
            o.css("width", e))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_info_button.qodefInfoButton = o
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner = {}
}(jQuery),
function(d) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_link_showcase = {},
    d(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = d(".qodef-interactive-link-showcase"),
            this.holder.length && this.holder.each(function() {
                e.initItem(d(this))
            })
        },
        initItem: function(e) {
            var t = e.find(".qodef-e-image")
              , n = e.find(".qodef-m-item");
            t.eq(0).addClass("qodef--active"),
            n.eq(0).addClass("qodef--active"),
            n.on("touchstart mouseenter", function(e) {
                var o = d(this);
                (!qodefAddonsCore.html.hasClass("touchevents") || !o.hasClass("qodef--active") && 680 < qodefAddonsCore.windowWidth) && (e.preventDefault(),
                t.removeClass("qodef--active").eq(o.index()).addClass("qodef--active"),
                n.removeClass("qodef--active").eq(o.index()).addClass("qodef--active"))
            }).on("touchend mouseleave", function() {
                var e = d(this);
                (!qodefAddonsCore.html.hasClass("touchevents") || !e.hasClass("qodef--active") && 680 < qodefAddonsCore.windowWidth) && (n.removeClass("qodef--active").eq(e.index()).addClass("qodef--active"),
                t.removeClass("qodef--active").eq(e.index()).addClass("qodef--active"))
            }),
            e.addClass("qodef--init")
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_link_showcase.qodefInteractiveLinkShowcase = e
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_item_showcase = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_item_showcase.qodefAppear = qodefAddonsCore.qodefAppear
}(jQuery),
function(t) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_message_box = {},
    t(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = t(".qodef-message-box"),
            this.holder.length && this.holder.each(function() {
                e.initItem(t(this))
            })
        },
        initItem: function(e) {
            let o = e.closest(".elementor-element");
            o.addClass("q-message-box-holder"),
            e.find(".qodef-m-close-icon").on("click", function(e) {
                t(this).parent().addClass("qodef-hidden"),
                o.addClass("qodef-hidden"),
                o.animate({
                    height: 0
                }, {
                    queue: !1
                })
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_message_box.qodefMessageBoxList = e
}(jQuery),
function(a) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_parallax_images = {},
    a(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.images = a(".qodef-parallax-images"),
            this.images.length && (a(window).on("load", function() {
                o.initParallaxElements()
            }),
            this.images.each(function() {
                o.initItem(a(this))
            }))
        },
        initItem: function(e) {
            o.parallaxElements(e)
        },
        parallaxElements: function(e) {
            var o = e.find(".qodef-m-images")
              , t = o.find(".qodef-e-parallax-image")
              , n = o.find(".qodef-e-main-image img")
              , d = o.find(".qodef-e-main-image").attr("data-parallax-main")
              , e = 40
              , i = -50
              , o = 30
              , r = 15;
            1024 < qodefAddonsCore.windowWidth && (void 0 !== d && !1 !== d && (e = d,
            o = Math.abs(parseInt(e / .9, 10))),
            n.attr("data-parallax", '{"y" : ' + e + ' , "smoothness": ' + o + "}"),
            t.each(function() {
                var e = a(this)
                  , o = e.find("img")
                  , e = e.attr("data-parallax");
                void 0 !== e && !1 !== e && (i = e,
                r = Math.abs(parseInt(i / 2.5, 10))),
                o.attr("data-parallax", '{"y" : ' + i + ' , "smoothness": ' + r + "}")
            }))
        },
        initParallaxElements: function() {
            a(".qodef-parallax-images [data-parallax]").length && ParallaxScroll.init()
        }
    };
    a(window).on("load", function() {
        this.images = a(".qodef-parallax-images"),
        this.images.length && (o.initParallaxElements(),
        setTimeout(function() {
            qodefCore.body.hasClass("e--ua-firefox") && o.initParallaxElements()
        }, 300))
    }),
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_parallax_images.qodefParallaxImages = o
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider = {},
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.sliders = e(".qodef-preview-slider"),
            this.sliders.length && this.sliders.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o = e.find("> .qodef-qi-swiper-container .swiper-slide-active")
              , t = e.find(".qodef-preview-slider-device-holder")
              , n = e.find("> .qodef-qi-swiper-container")
              , d = e.find(".qodef-preview-slider-device-holder .qodef-qi-swiper-container");
            t.width(o.width()),
            t.css("top", o.height()),
            t = n.find(".swiper-slide").length,
            (o = d[0].swiper.params).loopedSlides = t,
            o.autoplay = "false",
            n[0].swiper.autoplay.stop(),
            d[0].swiper.destroy();
            let i = new Swiper(d,Object.assign(o));
            n[0].swiper.controller.control = i,
            n[0].swiper.controller.by = "slide",
            n[0].swiper.controller.inverse = !0,
            i.controller.control = n[0].swiper,
            n[0].swiper.autoplay.start(),
            e.addClass("qodef--visible")
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider.qodefSwiper = qodefAddonsCore.qodefSwiper,
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider.qodefPreviewSlider = o
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_process = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_process.qodefAppear = qodefAddonsCore.qodefAppear
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_circle = {},
    e(document).ready(function() {
        d.init()
    });
    var d = {
        init: function() {
            this.holder = e(".qodef-progress-bar-circle"),
            this.holder.length && this.holder.each(function() {
                d.initItem(e(this))
            })
        },
        initItem: function(n) {
            qodefAddonsCore.qodefIsInViewport.check(n, function() {
                n.addClass("qodef--init");
                var e = n.find(".qodef-m-canvas")
                  , o = d.generateBarData(n)
                  , t = n.data("number") / 100;
                d.initCircleBar(e, o, t)
            })
        },
        generateBarData: function(e) {
            var o = e.data("active-line-width")
              , t = e.data("active-line-color")
              , n = e.data("inactive-line-width")
              , d = e.data("inactive-line-color")
              , i = void 0 !== e.data("duration") && "" !== e.data("duration") ? parseInt(e.data("duration"), 10) : 1200
              , r = e.data("text-color")
              , e = e.width();
            return {
                color: t,
                strokeWidth: 100 * o / e,
                trailColor: d,
                trailWidth: 100 * n / e,
                svgStyle: {
                    display: "block",
                    width: "100%"
                },
                text: {
                    className: "qodef-m-value",
                    style: {
                        color: r
                    },
                    autoStyleContainer: !1
                },
                easing: "linear",
                duration: i,
                from: {
                    color: d
                },
                to: {
                    color: t
                },
                step: function(e, o) {
                    o.setText(Math.round(100 * o.value()) + '<sup class="qodef-m-percentage">%</sup>')
                }
            }
        },
        initCircleBar: function(e, o, t) {
            d.checkBar(e) && new ProgressBar.Circle(e[0],o).animate(t)
        },
        checkBar: function(e) {
            return !e.find("svg").length
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_circle.qodefProgressBar = d
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_horizontal = {},
    e(document).ready(function() {
        d.init()
    });
    var d = {
        init: function() {
            this.holder = e(".qodef-progress-bar-horizontal"),
            this.holder.length && this.holder.each(function() {
                d.initItem(e(this))
            })
        },
        initItem: function(n) {
            qodefAddonsCore.qodefIsInViewport.check(n, function() {
                n.addClass("qodef--init");
                var e = n.find(".qodef-m-canvas")
                  , o = d.generateBarData(n)
                  , t = n.data("number") / 100;
                d.initHorizontalBar(e, o, t, n)
            })
        },
        generateBarData: function(t) {
            var e = t.data("active-line-width")
              , o = t.data("active-line-color")
              , n = t.data("inactive-line-width")
              , d = t.data("inactive-line-color")
              , i = void 0 !== t.data("duration") && "" !== t.data("duration") ? parseInt(t.data("duration"), 10) : 1200
              , r = t.data("percentage-type")
              , a = t.width();
            return {
                color: o,
                strokeWidth: 100 * e / a,
                trailColor: d,
                trailWidth: 100 * n / a,
                svgStyle: {
                    display: "block",
                    width: "100%"
                },
                easing: "easeInOut",
                duration: i,
                from: {
                    color: d
                },
                to: {
                    color: o
                },
                step: function(e, o) {
                    o = Math.round(100 * o.value());
                    t.find(".qodef-m-value-inner").html(o + '<span class="qodef-m-percentage">%</span>'),
                    "floating-above" !== r && "floating-on" !== r || (t.find(".qodef-m-value")[0].style.left = o + "%")
                }
            }
        },
        initHorizontalBar: function(e, o, t, n) {
            d.checkBar(e) && (e = new ProgressBar.Line(e[0],o),
            "yes" === n.data("gradient-fill") && d.generateGradient(n),
            void 0 !== (o = n.data("pattern")) && n.find("svg").css("background-image", 'url("' + o + '")'),
            e.animate(t))
        },
        checkBar: function(e) {
            return !e.find("svg").length
        },
        generateGradient: function(e) {
            for (var o = "http://www.w3.org/2000/svg", t = document.createElementNS(o, "defs"), n = document.createElementNS(o, "linearGradient"), d = [{
                color: e.data("gradient-start"),
                offset: "0%"
            }, {
                color: e.data("gradient-end"),
                offset: "100%"
            }], i = 0, r = d.length; i < r; i++) {
                var a = document.createElementNS(o, "stop");
                a.setAttribute("offset", d[i].offset),
                a.setAttribute("stop-color", d[i].color),
                n.appendChild(a)
            }
            n.id = "Gradient-" + e.data("rand-id"),
            n.setAttribute("gradientUnits", "userSpaceOnUse"),
            n.setAttribute("x1", "0"),
            n.setAttribute("x2", e.data("number") + "%"),
            n.setAttribute("y1", "0"),
            n.setAttribute("y2", "0"),
            t.appendChild(n),
            e[0].querySelector(".qodef-m-canvas svg").appendChild(t),
            e[0].querySelector(".qodef-m-canvas svg path:nth-child(2)").setAttribute("stroke", "url(#Gradient-" + e.data("rand-id") + ")")
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_horizontal.qodefProgressBar = d
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_vertical = {},
    e(document).ready(function() {
        a.init()
    });
    var a = {
        init: function() {
            this.holder = e(".qodef-progress-bar-vertical"),
            this.holder.length && this.holder.each(function() {
                a.initItem(e(this))
            })
        },
        initItem: function(n) {
            qodefAddonsCore.qodefIsInViewport.check(n, function() {
                n.addClass("qodef--init");
                var e = n.find(".qodef-m-canvas")
                  , o = a.generateBarData(n)
                  , t = n.data("number") / 100;
                a.initVerticalBar(e, o, t, n),
                n.hasClass("qodef-percentage--floating-top") && n.find(".qodef-m-inner").width(n.find(".qodef-m-canvas svg").width())
            })
        },
        generateBarData: function(t) {
            var e = t.data("bar-height")
              , o = t.data("active-line-width")
              , n = t.data("active-line-color")
              , d = t.data("inactive-line-width")
              , i = t.data("inactive-line-color")
              , r = void 0 !== t.data("duration") && "" !== t.data("duration") ? parseInt(t.data("duration"), 10) : 1200
              , a = t.data("percentage-type");
            return {
                color: n,
                strokeWidth: 100 * o / e,
                trailColor: i,
                trailWidth: 100 * d / e,
                svgStyle: {
                    display: "block",
                    height: e + "px",
                    transform: "scaleY(-1)"
                },
                easing: "linear",
                duration: r,
                from: {
                    color: i
                },
                to: {
                    color: n
                },
                step: function(e, o) {
                    o = Math.round(100 * o.value());
                    t.find(".qodef-m-value").html(o + '<span class="qodef-m-percentage">%</span>'),
                    "floating-top" === a && (t.find(".qodef-m-value")[0].style.bottom = o + "%",
                    t.find(".qodef-m-title")[0].style.bottom = o + "%")
                }
            }
        },
        initVerticalBar: function(e, o, t, n) {
            var d, i, r;
            a.checkBar(e) && (d = new ProgressBar.Line(e[0],o),
            "yes" === n.data("gradient-fill") && a.generateGradient(n),
            i = n[0].querySelector(".qodef-m-canvas svg"),
            r = n[0].querySelector(".qodef-m-canvas svg path:first-of-type"),
            o = (e = n[0].querySelector(".qodef-m-canvas svg path:last-of-type")).getAttribute("stroke-width"),
            i.setAttribute("viewBox", "0 0 " + o + " 100"),
            r.setAttribute("d", "M " + o / 2 + ",0 L " + o / 2 + ",100"),
            e.setAttribute("d", "M " + o / 2 + ",0 L " + o / 2 + ",100"),
            void 0 !== (o = n.data("pattern")) && n.find("svg").css("background-image", 'url("' + o + '")'),
            d.animate(t))
        },
        checkBar: function(e) {
            return !e.find("svg").length
        },
        generateGradient: function(e) {
            for (var o = "http://www.w3.org/2000/svg", t = document.createElementNS(o, "defs"), n = document.createElementNS(o, "linearGradient"), d = [{
                color: e.data("gradient-start"),
                offset: "0%"
            }, {
                color: e.data("gradient-end"),
                offset: "100%"
            }], i = 0, r = d.length; i < r; i++) {
                var a = document.createElementNS(o, "stop");
                a.setAttribute("offset", d[i].offset),
                a.setAttribute("stop-color", d[i].color),
                n.appendChild(a)
            }
            n.id = "Gradient-" + e.data("rand-id"),
            n.setAttribute("gradientUnits", "userSpaceOnUse"),
            n.setAttribute("x1", "0"),
            n.setAttribute("x2", "0"),
            n.setAttribute("y1", "0"),
            n.setAttribute("y2", e.data("number") + "%"),
            t.appendChild(n),
            e[0].querySelector(".qodef-m-canvas svg").appendChild(t),
            e[0].querySelector(".qodef-m-canvas svg path:nth-child(2)").setAttribute("stroke", "url(#Gradient-" + e.data("rand-id") + ")")
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_vertical.qodefProgressBar = a
}(jQuery),
function(h) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_table_of_contents = {},
    h(document).ready(function() {
        u.init()
    });
    var u = {
        init: function() {
            this.holder = h(".qodef-table-of-contents"),
            this.holder.length && this.holder.each(function() {
                u.initItem(h(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-table-content")
              , t = void 0 !== o.data("excluded-tags") ? o.data("excluded-tags") : ""
              , n = void 0 !== o.data("excluded-cids") ? o.data("excluded-cids") : ""
              , a = void 0 !== o.data("type") ? o.data("type") : "ul"
              , s = e.find(".qodef-m-table-content > " + a)
              , l = ""
              , f = {}
              , c = [".qodef-e-number", ".qodef-e-mark"]
              , n = u.prepareHeadings(t, n, ["h1", "h2", "h3", "h4", "h5", "h6"]);
            n.length && (n.each(function(e) {
                var o, t, n, d = h(this), i = d.clone(), r = u.prepareId(c, i, l);
                l += r.id + ";",
                f[e] = {
                    id: r.finalID,
                    tag: d.prop("tagName").replace("H", "")
                },
                0 < e && (o = d.prop("tagName").replace("H", ""),
                (t = f[e - 1].tag) < o ? ((n = s.find("a[href=#" + f[e - 1].id + "]").parent()).append("<" + a + ">"),
                s = n.find(a).first()) : o < t && (e = u.findSiblings(o, e, f),
                s = s.parents(".qodef-m-table-content").find("a[href=#" + e + "]").parent().parents(a).first())),
                d.attr("id", r.finalID),
                s.append('<li><a href="#' + r.finalID + '">' + i.text() + "</a></li>")
            }),
            o.find("li > a").each(function() {
                h(this).on("click", function(e) {
                    e.preventDefault();
                    var o = h(this)
                      , e = o.attr("href");
                    u.animateAnchor(o, e)
                })
            }))
        },
        prepareHeadings: function(e, o, t) {
            var n, d = [], i = "";
            if (0 < e.length)
                for (var r = e.split(","), a = 0; a < r.length; a++)
                    -1 !== t.indexOf(r[a]) && t.splice(t.indexOf(r[a]), 1);
            if (0 < o.length)
                for (var s = o.split(","), a = 0; a < s.length; a++)
                    i += ":not(" + s[a] + ")";
            t = t.join(i + ", ") + i,
            (n = h(t)).length && n.each(function(e) {
                for (var o = h(this), t = 0; t < s.length; t++)
                    if (o.parents(s[t]).length)
                        return void d.push(e)
            });
            for (a = d.length - 1; 0 <= a; a--)
                n.splice(d[a], 1);
            return n
        },
        prepareId: function(e, o, t) {
            var n, d = {};
            return e.forEach(function(e) {
                o.find(e).remove()
            }),
            d.id = o.text().trim().replaceAll(" ", "_").replaceAll(/[^a-zA-Z_]+/g, ""),
            0 !== t.length ? (n = new RegExp(d.id + ";","g"),
            e = 0,
            null !== (n = t.match(n)) && (e = n.length),
            d.finalID = 0 !== e ? d.id + "____" + (e += 1) : d.id) : d.finalID = d.id,
            d
        },
        findSiblings: function(e, o, t) {
            if (0 === o)
                return t[0].id;
            o -= 1;
            return t[o].tag > e ? u.findSiblings(e, o, t) : t[o].id
        },
        animateAnchor: function(e, o) {
            var t, n = window.scrollY, d = h(o).offset().top, i = d < n ? -1 : 1, r = 50, o = h("#wpadminbar");
            o.length && (d -= o.height());
            var a = function() {
                var e;
                n !== d && (Math.abs(n - d) <= 100 && (r = 8),
                (-1 == i && n < d || 1 == i && d < n) && (n = d),
                e = u.easingFunction((n - d) / n),
                h("html, body").scrollTop(n - (n - d) * e),
                n += i * r,
                t = requestAnimationFrame(a))
            };
            a(),
            h(window).one("wheel touchstart", function() {
                cancelAnimationFrame(t)
            })
        },
        easingFunction: function(e) {
            return 0 == e ? 0 : Math.pow(1024, e - 1)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_table_of_contents.qodefTableOfContents = u
}(jQuery),
function(n) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_horizontal = {},
    n(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = n(".qodef-tabs-horizontal"),
            this.holder.length && this.holder.each(function() {
                e.initItems(n(this))
            })
        },
        initItems: function(e) {
            e.children(".qodef-tabs-horizontal-content").each(function(e) {
                e += 1;
                var o = n(this)
                  , t = o.attr("id")
                  , o = o.parent().find(".qodef-tabs-horizontal-navigation li:nth-child(" + e + ") a")
                  , e = o.attr("href");
                -1 < (t = "#" + t).indexOf(e) && o.attr("href", t)
            }),
            e.addClass("qodef--init").tabs()
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_horizontal.qodefTabsHorizontal = e
}(jQuery),
function(n) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_vertical = {},
    n(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = n(".qodef-tabs-vertical"),
            this.holder.length && this.holder.each(function() {
                e.initItems(n(this))
            })
        },
        initItems: function(e) {
            e.children(".qodef-tabs-vertical-content").each(function(e) {
                e += 1;
                var o = n(this)
                  , t = o.attr("id")
                  , o = o.parent().find(".qodef-tabs-vertical-navigation li:nth-child(" + e + ") a")
                  , e = o.attr("href");
                -1 < (t = "#" + t).indexOf(e) && o.attr("href", t)
            }),
            e.addClass("qodef--init").tabs()
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_vertical.qodefTabsVertical = e
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_testimonials_slider = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_testimonials_slider.qodefSwiper = qodefAddonsCore.qodefSwiper
}(jQuery),
function(n) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_text_marquee = {},
    n(document).ready(function() {
        d.init()
    });
    var d = {
        init: function() {
            this.holder = n(".qodef-text-marquee"),
            this.holder.length && this.holder.each(function() {
                d.initItem(n(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-text");
            o.each(function(e) {
                n(this).data("x", 0)
            }),
            requestAnimationFrame(function() {
                d.loop(e, o, .05)
            })
        },
        inRange: function(e) {
            return qodefAddonsCore.scroll + qodefAddonsCore.windowHeight >= e.offset().top && qodefAddonsCore.scroll < e.offset().top + e.height()
        },
        loop: function(e, o, t) {
            if (!d.inRange(e))
                return requestAnimationFrame(function() {
                    d.loop(e, o, t)
                }),
                !1;
            o.each(function(e) {
                var o = n(this);
                o.css("transform", "translate3d(" + o.data("x") + "%, 0, 0)"),
                o.data("x", (o.data("x") - t).toFixed(2)),
                o.offset().left < -o.width() - 25 && o.data("x", 100 * Math.abs(e - 1))
            }),
            requestAnimationFrame(function() {
                d.loop(e, o, t)
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_text_marquee.qodefTextMarquee = d
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline = {},
    e(document).ready(function() {
        s.init()
    }),
    e(window).resize(function() {
        s.init()
    });
    var s = {
        init: function() {
            this.holder = e(".qodef-timeline"),
            this.holder.length && this.holder.each(function() {
                s.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o, t, n, d, i, r, a;
            e.hasClass("qodef-timeline--horizontal") && (o = e.find(".qodef-e-item"),
            t = e.find(".qodef-grid-inner"),
            n = e.width(),
            d = o.length,
            r = i = 0,
            a = e.data("options"),
            1 < d && (r = (i = 1440 < qodefAddonsCore.windowWidth ? n / a.colNum : 1366 < qodefAddonsCore.windowWidth ? n / a.colNum1440 : 1024 < qodefAddonsCore.windowWidth ? n / a.colNum1366 : 768 < qodefAddonsCore.windowWidth ? n / a.colNum1024 : 680 < qodefAddonsCore.windowWidth ? n / a.colNum768 : 480 < qodefAddonsCore.windowWidth ? n / a.colNum680 : n / a.colNum480) * d,
            e.data("movement", i),
            e.data("moved", 0),
            t.width(r),
            t.css("transform", "translateX(0)"),
            qodefAddonsCore.body.trigger("qi_addons_for_elementor_trigger_timeline_before_init_movement", [e, o]),
            s.initMovement(e)))
        },
        initMovement: function(o) {
            var t = o.data("movement")
              , n = o.find(".qodef-grid-inner")
              , d = o.width()
              , i = n.width()
              , e = o.find(".qodef-nav-prev")
              , r = o.find(".qodef-nav-next");
            e.off().on("click", function(e) {
                e.preventDefault();
                e = parseFloat(o.data("moved"));
                e < -1 && (n.css("transform", "translateX( " + (e = e + t) + "px)"),
                o.data("moved", e))
            }),
            r.off().on("click", function(e) {
                e.preventDefault();
                e = parseFloat(o.data("moved"));
                -e + t < i - d + 1 && (n.css("transform", "translateX( " + (e = e - t) + "px)"),
                o.data("moved", e))
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline.qodefTimeline = s,
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline.qodefAppear = qodefAddonsCore.qodefAppear
}(jQuery),
function(d) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_typeout_text = {},
    d(document).ready(function() {
        e.init()
    }),
    d(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            e.init()
        })
    });
    var e = {
        init: function() {
            this.holder = d(".qodef-typeout-text"),
            this.holder.length && this.holder.each(function() {
                e.initItem(d(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-typeout")
              , t = e.data("strings")
              , n = void 0 !== e.data("cursor") ? e.data("cursor") : "";
            o.find(".qodef-typeout-item").each(function() {
                t.push(d(this).text())
            }),
            o.each(function() {
                var e = d(this)
                  , o = {
                    strings: t,
                    typeSpeed: 90,
                    backDelay: 700,
                    loop: !0,
                    contentType: "text",
                    loopCount: !1,
                    cursorChar: n
                };
                e.hasClass("qodef--initialized") || (new Typed(e[0],o),
                e.addClass("qodef--initialized"))
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_typeout_text.qodefTypeoutText = e
}(jQuery),
function(n) {
    "use strict";
    var e = "qi_addons_for_elementor_blog_list";
    qodefAddonsCore.shortcodes[e] = {},
    n(document).ready(function() {
        o.init()
    }),
    n(window).resize(function() {
        o.init()
    });
    var o = {
        init: function() {
            var e = n(".qodef-blog-shortcode");
            e.length && o.resize(e)
        },
        resize: function(e) {
            e = e.find(".qodef-e-media iframe");
            e.length && e.each(function() {
                var e = n(this)
                  , o = e.attr("width")
                  , t = e.attr("height")
                  , t = e.width() / o * t;
                e.css("height", t)
            })
        }
    };
    qodefAddonsCore.shortcodes[e].qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup,
    qodefAddonsCore.shortcodes[e].qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout,
    qodefAddonsCore.shortcodes[e].qodefAddonsCoreResizeIframes = o
}(jQuery),
function() {
    "use strict";
    var e = "qi_addons_for_elementor_blog_slider";
    qodefAddonsCore.shortcodes[e] = {},
    qodefAddonsCore.shortcodes[e].qodefSwiper = qodefAddonsCore.qodefSwiper,
    qodefAddonsCore.shortcodes[e].qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button = {},
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-woo-shortcode-add-to-cart"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(s) {
            qodefAddonsCore.shortcodes.qi_addons_for_elementor_button.qodefButton.init(s),
            e("body").on("added_to_cart", function(e) {
                var o = s.find(".added_to_cart:not(.qodef-button)");
                if (o.length) {
                    for (var t = o.siblings(".add_to_cart_button"), n = ["button", "product_type_simple", "add_to_cart_button", "ajax_add_to_cart", "added"], d = t.attr("class"), i = t.find(".qodef-m-border"), r = t.find(".qodef-m-inner-border"), t = t.find(".qodef-m-icon"), a = 0; a < n.length; a++)
                        d = d.replace(n[a], "");
                    o.addClass(d),
                    o.wrapInner('<span class="qodef-m-text">'),
                    i.length && (i = i.clone(),
                    o.append(i)),
                    t.length && (t = t.clone(),
                    o.append(t)),
                    r.length && (r = r.clone(),
                    o.append(r))
                }
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart = o
}(jQuery),
function() {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_category_list = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_category_list.qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout
}(jQuery),
function(e) {
    "use strict";
    var o = "qi_addons_for_elementor_product_list";
    qodefAddonsCore.shortcodes[o] = {},
    qodefAddonsCore.shortcodes[o].qodefLightboxPopup = qodefAddonsCore.qodefLightboxPopup,
    qodefAddonsCore.shortcodes[o].qodefMasonryLayout = qodefAddonsCore.qodefMasonryLayout,
    e(document).ready(function() {
        t.init()
    });
    var t = {
        init: function() {
            this.holder = e(".qodef-woo-shortcode-product-list"),
            this.holder.length && this.holder.each(function() {
                t.initItem(e(this))
            })
        },
        initItem: function(e) {
            qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart.initItem(e)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_list.changeViewCart = t
}(jQuery),
function(e) {
    "use strict";
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider = {},
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.qodefSwiper = qodefAddonsCore.qodefSwiper,
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-woo-shortcode-product-slider"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart.initItem(e)
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.changeViewCart = o
}(jQuery),
function(e) {
    "use strict";
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-interactive-banner"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o, t;
            e.hasClass("qodef-layout--from-bottom") && (t = e.find(".qodef-m-text-holder"),
            o = e.find(".qodef-m-movement"),
            t = t.outerHeight(!0),
            o.css("transform", "translateY(" + t + "px) translateZ(0)"),
            setTimeout(function() {
                e.addClass("qodef--visible")
            }, 400))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner.qodefInteractiveBannerFromBottom = o
}(jQuery),
function(e) {
    "use strict";
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-interactive-banner"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            var o, t;
            e.hasClass("qodef-layout--revealing") && (t = e.find(".qodef-m-content-inner > .qodef-m-text"),
            o = e.find(".qodef-m-button"),
            t = t.outerHeight(!0),
            o.css("transform", "translateY(-" + t + "px) translateZ(0)"),
            setTimeout(function() {
                e.addClass("qodef--visible")
            }, 400))
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner.qodefInteractiveBannerReveal = o
}(jQuery),
function(n) {
    "use strict";
    n(document).on("qi_addons_for_elementor_trigger_timeline_before_init_movement", function(e, o, t) {
        o.hasClass("qodef-timeline-layout--horizontal-alternating") && d.init(t)
    });
    var d = {
        init: function(e) {
            var t = 0;
            e.length && (e.each(function() {
                var e = n(this)
                  , o = e.find(".qodef-e-content-holder")
                  , e = e.find(".qodef-e-top-holder")
                  , o = o.height();
                o < e.height() && (o = e.height()),
                t < o && (t = o)
            }),
            e.each(function() {
                var e = n(this)
                  , o = e.find(".qodef-e-content-holder");
                e.find(".qodef-e-top-holder").height(t),
                o.height(t)
            }))
        }
    }
}(jQuery),
function(r) {
    "use strict";
    r(document).on("qi_addons_for_elementor_trigger_timeline_before_init_movement", function(e, o, t) {
        o.hasClass("qodef-timeline-layout--horizontal-standard") && n.init(o, t)
    });
    var n = {
        init: function(e, o) {
            var n = 0
              , d = 0
              , i = parseInt(o.find(".qodef-e-top-holder").css("paddingBottom"))
              , e = e.find(".qodef-nav-prev, .qodef-nav-next");
            o.length && (o.each(function() {
                var e = r(this)
                  , o = e.find(".qodef-e-content-holder").height()
                  , e = e.find(".qodef-e-top-holder").height();
                n < e && (n = e),
                d < o && (d = o)
            }),
            o.each(function() {
                var e = r(this)
                  , o = e.find(".qodef-e-content-holder")
                  , t = e.find(".qodef-e-top-holder")
                  , e = e.find(".qodef-e-line-holder");
                t.height(n),
                o.height(d),
                e.css("top", n + i)
            }),
            e.css("top", n + i))
        }
    }
}(jQuery),
function(d) {
    "use strict";
    d(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = d(".qodef-woo-shortcode-product-list"),
            this.holder.length && this.holder.each(function() {
                e.initItem(d(this))
            })
        },
        initItem: function(e) {
            !e.hasClass("qodef-item-layout--info-below-swap") || (e = e.find(".qodef-grid-item")).length && e.each(function() {
                var e = d(this).find(".qodef-e-swap-holder")
                  , o = e.find(".qodef-woo-product-price span")
                  , t = e.find(".qodef-e-to-swap .qodef-button")
                  , n = t.outerWidth()
                  , t = t.outerHeight();
                n < o.width() && (n = o.width()),
                t < o.height() && (t = o.height()),
                e.css({
                    width: n += 2,
                    height: t
                }),
                e.addClass("qodef--initialized")
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_list.qodefProductListSwap = e
}(jQuery),
function(d) {
    "use strict";
    d(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = d(".qodef-woo-shortcode-product-slider"),
            this.holder.length && this.holder.each(function() {
                e.initItem(d(this))
            })
        },
        initItem: function(e) {
            !e.hasClass("qodef-item-layout--info-below-swap") || (e = e.find(".qodef-e")).length && e.each(function() {
                var e = d(this).find(".qodef-e-swap-holder")
                  , o = e.find(".qodef-woo-product-price span")
                  , t = e.find(".qodef-e-to-swap .qodef-button")
                  , n = t.outerWidth()
                  , t = t.outerHeight();
                n < o.width() && (n = o.width()),
                t < o.height() && (t = o.height()),
                e.css({
                    width: n += 2,
                    height: t
                }),
                e.addClass("qodef--initialized")
            })
        }
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.qodefProductListSwap = e
}(jQuery);
