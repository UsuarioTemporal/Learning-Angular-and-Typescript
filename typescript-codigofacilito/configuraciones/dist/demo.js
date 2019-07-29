var Speaker = (function () {
    function Speaker() {
    }
    Speaker.prototype.hi = function (name) {
        console.log("hola " + name);
    };
    return Speaker;
})();
var speake = new Speaker();
console.log(speake.hi('Thom'));
console.log(speake.hi('carlos'));
