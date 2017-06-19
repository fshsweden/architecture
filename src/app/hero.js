"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nextId = 1;
var Hero = (function () {
    function Hero(name, power) {
        this.name = name;
        this.power = power;
        this.id = nextId++;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map