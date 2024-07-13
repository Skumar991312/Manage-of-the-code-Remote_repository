function wish(msg, name) {
    return name + msg;
}
console.log(wish("Good morning sandeep", "Good Bay"));
console.log(wish("Good morning sandeep"));
function jay(name, msg) {
    if (msg === void 0) { msg = "Hii"; }
    return name + msg;
}
console.log(jay("Sandeep", "Good"));
console.log(jay("Sandeep"));
function baby(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + "--" + names.join(","));
}
console.log(baby("Hello", "sandeep", "kumar"));
console.log(baby("kanak", "mohan", "treeshka", "komal", "kanhiya"));
