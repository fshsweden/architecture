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
var hero_1 = require("./hero");
var hero_service_1 = require("./hero.service");
var HeroListComponent = (function () {
    function HeroListComponent(service) {
        this.service = service;
        this.name = 'Joe Sixpack';
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.heroes = this.service.getHeroes();
    };
    HeroListComponent.prototype.selectHero = function (hero, myElement) {
        this.selectedHero = hero;
        myElement.style.backgroundColor = '#FF0000';
    };
    HeroListComponent.prototype.addHero = function (hero) {
        if (hero !== '') {
            this.heroes.push(new hero_1.Hero(hero, 'unknown'));
        }
    };
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    core_1.Component({
        selector: 'hero-list',
        templateUrl: './hero-list.component.html',
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map