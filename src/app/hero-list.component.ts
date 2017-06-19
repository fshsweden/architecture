import { Component, OnInit }   from '@angular/core';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';

@Component({
  selector:    'hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  name: string;

  constructor(private service: HeroService) {
    this.name = 'Joe Sixpack';
  }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero, myElement: any) {
    this.selectedHero = hero;
    myElement.style.backgroundColor = '#FF0000';
  }

  addHero(hero: string) {
    if (hero !== '') {
      this.heroes.push(new Hero(hero, 'unknown'));
    }
  }
}
