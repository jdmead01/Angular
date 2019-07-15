import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }

  getPokemon() {
    const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    console.log("********************************************************");
    // console.log(bulbasaur);
    bulbasaur.subscribe(data => {
        console.log("#################################");
        console.log(data);
        console.log(data['abilities'][0]);
        console.log(data['name'] + 's ' + data['abilities'][0].ability.name + ' and ' + data.abilities[1].ability.name + '.');
        this.getNumber(data['abilities'][1].ability.url);
        this.getChlorophyllNumber(data['abilities'][0].ability.url);
        this.getMoves(data['moves'][0].move.url);
        console.log("#####################" + data['abilities'][1].ability.url);
    });
  }

  getNumber (url) {
    const overgrow = this._http.get(url);
    overgrow.subscribe(data => {
      console.log("########### I made it into getNumber #############");
      console.log(data);
      console.log(data.pokemon.length + ' Pokemon have the ' + data.name + ' ability.');
    });
  }

  getChlorophyllNumber(url) {
    const chlorophyll = this._http.get(url);
    chlorophyll.subscribe(data => {
      console.log("########### I made it into getChlorophyllNumber #############");
      console.log(data);
      console.log(data.pokemon.length + ' Pokemon have the ' + data.name + ' ability.');
    });
  }

  // I was unable to get this to work and show all the moves available to the pokemon character.. why? ************
  getMoves(url) {
    const bulbasaur = this._http.get(url);
    bulbasaur.subscribe(data => {
        console.log("Made it into getMoves ###################");
        console.log(data);
    //   console.log("########### I made it into getChlorophyllNumber #############");
    //   console.log(data);
    //   console.log(data.pokemon.length + ' Pokemon have the ' + data.name + ' ability.');
    });
  }
}
