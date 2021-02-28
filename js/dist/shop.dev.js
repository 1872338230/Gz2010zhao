"use strict";

function _toConsumableArray(n) {
  if (Array.isArray(n)) {
    for (var e = 0, c = Array(n.length); e < n.length; e++) {
      c[e] = n[e];
    }

    return c;
  }

  return Array.from(n);
}

$(".header_input").on("mouseenter", function () {
  $(".header_search").fadeIn();
}), $("document").on("mouseout", function () {
  $(".header_search").fadeOut();
});
var cookie = getCookie("login"),
    str = "";

function dj() {
  var c = document.querySelector(".all1"),
      t = document.querySelector(".all2"),
      a = document.querySelectorAll(".btn");
  document.querySelectorAll(".del"), document.querySelector(".goodList"), document.querySelectorAll(".p1");
  c.onclick = function () {
    a.forEach(function (n) {
      n.checked = c.checked, t.checked = c.checked;
    });
  }, t.onclick = function () {
    a.forEach(function (n) {
      n.checked = t.checked, c.checked = t.checked;
    });
  };

  for (var n = 0; n < a.length; n++) {
    !function (e) {
      a[e].onclick = function () {
        var n = [].concat(_toConsumableArray(a)).every(function (n, e) {
          return 1 == n.checked;
        });
        t.checked = c.checked = n, 1 == a[e].checked && console.log(1);
      };
    }(n);
  }
}

function shop(c) {
  for (var n = document.querySelectorAll(".del"), e = document.querySelector(".goodList"), t = 0; t < n.length; t++) {
    !function (t) {
      n[t].onclick = function () {
        var c;
        confirm("确认删除吗？") && (c = {}, data.forEach(function (n, e) {
          e == t && (c.productId = n.productId, c.tel = n.tel);
        }), remove(c), e.removeChild(this.parentNode.parentNode));
      };
    }(t);
  }

  $(".add").click(function () {
    var e,
        n = $(this).prev().val(),
        n = parseInt(n) + 1;
    0 != n && ($(this).prev().val(n), e = $(this).attr("idx"), n = c.find(function (n) {
      return n.productId == e;
    }).num, $.ajax({
      url: "../api/updataCar.php",
      data: {
        tel: cookie,
        productId: e,
        num: ++n
      }
    }).then(function (n) {
      n = JSON.parse(n), console.log(n);
    }));
  }), $(".reduce").click(function () {
    var e,
        n = $(this).next().val(),
        n = parseInt(n) - 1;
    n <= 0 ? alert("宝贝已经不可以再减少了。") : ($(this).next().val(n), e = $(this).attr("idx"), console.log(e, c), n = c.find(function (n) {
      return n.productId == e;
    }).num, console.log(n), $.ajax({
      url: "../api/updataCar.php",
      data: {
        tel: cookie,
        productId: e,
        num: --n
      }
    }).then(function (n) {
      n = JSON.parse(n), console.log(n);
    }));
  });
}

function remove(n) {
  $.ajax({
    url: "../api/deleteCar.php",
    data: {
      tel: n.tel,
      productId: n.productId
    }
  }).then(function (n) {
    console.log(productId), n = JSON.parse(n);
  });
}

$.ajax({
  type: "get",
  url: "../api/getCarData.php",
  data: {
    tel: cookie
  }
}).then(function (a) {
  $.ajax({
    url: "../js/index.json",
    method: "get",
    dataType: "json",
    success: function success(t) {
      a = JSON.parse(a), (data = a).forEach(function (e) {
        var n = t.filter(function (n) {
          return n.productId == e.productId;
        }),
            c = a.find(function (n) {
          return n.productId == e.productId;
        });
        n[0].num1 = c.num, n.forEach(function (n) {
          var e = /([0-9]+)/.exec(n.span1),
              e = Number(n.num1) * Number(e[0]);
          str += '<div class="center2">\n                    <input type="checkbox" class="btn">\n                    <img src="' + n.imageUrl + '" alt="">\n                    <span class="span1">' + n.title + '</span>\n                    <p>\n                        <img src="../img/shop1.png" alt=""\n                            style="width: 32px; height: 32px; position: absolute; right:0px">\n                        <span>尺寸：男式 34inch</span>\n                        <span>颜色规格：蓝色</span>\n                        <span>配送方式： 快递配送</span></p>\n                    <p class=\'money\'><span style="text-decoration:line-through">' + n.span2 + "</span><span>" + n.span1 + '</span></p>\n                    <p class="p1"><span class="reduce" idx=' + n.productId + '>-</span><input type="text" value="' + n.num1 + '" class=num2><span\n                            class="add" idx=' + n.productId + ">+</span></p>\n                    <span class='total'>￥" + e + '</span>\n                    <p class="p2"><a href="javascript:void(0);">移入收藏夹</a>\n                        <a href="javascript:void(0);" class="del">删除</a>\n                        <a href="javascript:void(0);">修改配送方式</a></p></div>', $(".goodList").html(str);
        }), dj();
      });
    }
  });
}), $.ajax({
  type: "get",
  url: "../api/getCarData.php",
  data: {
    tel: cookie
  }
}).then(function (t) {
  $.ajax({
    url: "../js/index.json",
    method: "get",
    dataType: "json",
    success: function success(n) {
      t = JSON.parse(t);
      var c = [];
      t.forEach(function (e) {
        var n = t.find(function (n) {
          return n.productId == e.productId;
        });
        c.push(n);
        n.productId, n.num;
      }), shop(c);
    }
  });
}), $(".bns").click(function () {
  $("#header").css({
    "z-index": "1"
  }), $(".bg").css({
    display: "block"
  }), $(".mark1").css({
    display: "block"
  });
}), $(".foods").click(function () {
  $("#header").css({
    "z-index": "1"
  }), $(".bg").css({
    display: "block"
  }), $(".mark2").css({
    display: "block"
  });
}), $(".books").click(function () {
  $("#header").css({
    "z-index": "1"
  }), $(".bg").css({
    display: "block"
  }), $(".mark3").css({
    display: "block"
  });
}), $(".bg").click(function () {
  $(".bg").css({
    display: "none"
  }), $(".mark1").css({
    display: "none"
  }), $(".mark2").css({
    display: "none"
  }), $(".mark3").css({
    display: "none"
  });
});