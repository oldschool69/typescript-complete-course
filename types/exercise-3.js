var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var myMap = new MyMap();
myMap.setItem("key1", "48");
myMap.setItem("key2", "256");
myMap.setItem("key3", "606");
myMap.printMap();
console.log(myMap.getItem("key1"));
myMap.clear();
myMap.printMap();
var myMap2 = new MyMap();
myMap2.setItem("key1", true);
myMap2.setItem("key2", false);
myMap2.printMap();
