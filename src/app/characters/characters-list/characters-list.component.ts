import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: any[];

  // services must be injected through constructor injection
  // a shortcut for that is private variable: type
  // compiler will link those and create a new private property on the whole object
  // private charactersService: CharactersService;
  // constructor(injectedService: CharactersService) {
  //   this.charactersService = injectedService;
  //  }
  constructor (private charactersService: CharactersService) {}

  ngOnInit() {
    // this.characters = this.charactersService.getCharacters();
    // you must subscribe to an observable to be notified when it is complete
    // or when new data comes in
    // Arrow Functions are similar visually to C# Lambda Operators
    this.charactersService.getCharacters().subscribe(result => this.characters = result);
  }

}
