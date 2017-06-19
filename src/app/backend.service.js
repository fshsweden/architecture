"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var logger_service_1 = require("./logger.service");
var hero_1 = require("./hero");
var HEROES = [
    new hero_1.Hero('Windstorm', 'Weather mastery'),
    new hero_1.Hero('Mr. Nice', 'Killing them with kindness'),
    new hero_1.Hero('Magneta', 'Manipulates metalic objects')
];
var BackendService = (function () {
    function BackendService(logger) {
        this.logger = logger;
    }
    BackendService.prototype.getAll = function (type) {
        if (type === hero_1.Hero) {
            // TODO get from the database
            return Promise.resolve(HEROES);
        }
        var err = new Error('Cannot get object of this type');
        this.logger.error(err);
        throw err;
    };
    return BackendService;
}());
BackendService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.Logger])
], BackendService);
exports.BackendService = BackendService;
//# sourceMappingURL=backend.service.js.map