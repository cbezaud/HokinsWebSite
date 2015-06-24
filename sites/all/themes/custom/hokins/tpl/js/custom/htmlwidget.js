!function () {
    function t(t) {
        return t.replace(/([A-Z])/g, function (t, e) {
            return e.toLowerCase()
        })
    }

    function e() {
        if ("horiz" == a)var t = $(window).scrollLeft(), e = "left"; else var t = $(window).scrollTop(), e = "top";
        var o = 0;
        return f.each(function (r, n) {
            return $(n).offset()[e] > t ? !1 : void(o = r)
        }), o
    }

    function o(t) {
        var e = document.createElement("a");
        return e.href = "#" + t.id, e.className = "anim_swing", Muse.Utils.processHyperlink(e), !1
    }

    function r() {
        var t = e() + 1;
        return t < f.length ? o(f[t]) : void 0
    }

    function n() {
        var t = e() - 1;
        return t >= 0 ? o(f[t]) : void 0
    }

    var f = $("a:not([href])"), i = "Contactsm".split(/\s*,\s*/), a = "vert";
    if (i && i.length && (1 != i.length || "" != i[0])) {
        for (var l in i)i[l] = t(i[l]);
        f = f.filter(function (t, e) {
            return i.indexOf(e.id) < 0 ? e : null
        })
    }
    var s;
    switch (a) {
        case"vert":
            s = function (t, e) {
                return $(t).offset().top - $(e).offset().top
            };
            break;
        case"horiz":
            s = function (t, e) {
                return $(t).offset().left - $(e).offset().left
            };
            break;
        default:
            s = function (t, e) {
                return $(t).offset().top == $(e).offset().top ? $(t).offset().left - $(e).offset().left : $(t).offset().top - $(e).offset().top
            }
    }
    f.sort(s);
    var u = !1;
    $(document).mousewheel(function (t) {
        t.originalEvent || t;
        if (u || (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)) {
            if (u)return!1
        } else {
            if (t.deltaY < 0 || t.deltaX > 0) {
                {
                    var o = e();
                    f[o + 1], "horiz" == a ? $(window).scollLeft() : $(window).scrollTop(), "horiz" == a ? window.innerWidth : window.innerHeight, t.deltaY < 0 ? t.deltaY * t.deltaFactor * -1 : t.deltaX * t.deltaFactor
                }
                return u = true, setTimeout(function () {
                    u = !1
                }, 1000), r()
            }
            if (t.deltaY > 0 || t.deltaX < 0) {
                {
                    var o = e();
                    f[o], "horiz" == a ? $(window).scollLeft() : $(window).scrollTop(), t.deltaY > 0 ? t.deltaY * t.deltaFactor * -1 : t.deltaX * t.deltaFactor
                }
                return u = true, setTimeout(function () {
                    u = !1
                }, 1000), n()
            }
        }
    })
}();