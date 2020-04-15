var colorList = ["ff6a00", "0000fa", "c51414", "ff0000", "14a58f", "f01fc6", "c31dd6", "006600", "ff6a00", "0000fa", "c51414", "ff0000", "14a58f", "f01fc6", "c31dd6", "006600"];
var menuOpt = $(".menu > div");
for (var i = 0, len = menuOpt.length; i < len; i++) {
    menuOpt[i].addEventListener("mouseenter", changeColor.bind(null, i));
    menuOpt[i].addEventListener("mouseleave", changeBack.bind(null, i));
}
function changeColor (i) {
    var color = colorList[i];
    menuOpt[i].style.color = "#" + color;
    menuOpt[i].style.borderColor = "#" + color;
}
function changeBack (i) {
    if (!($(menuOpt[i]).hasClass('current'))) {
        menuOpt[i].style.color = "black";
        menuOpt[i].style.borderColor = "white";
    }
}
checkCurrent();
function checkCurrent () {
    for (var i = 0, len = menuOpt.length; i < len; i++) {
        if ($(menuOpt[i]).hasClass('current'))
            changeColor(i);
        else
            changeBack(i);
    }
}