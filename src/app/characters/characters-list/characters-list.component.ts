import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/characters.service';
import { ICharacter, ICharacterResults, ICharacterSearch } from '../shared/characters-models';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: ICharacter[];
  total: number;
  search: ICharacterSearch = { nameStartsWith: 'a', limit: 10 };
  modelChanged: Subject<string> = new Subject<string>();

  // services must be injected through constructor injection
  // a shortcut for that is private variable: type
  // compiler will link those and create a new private property on the whole object
  // private charactersService: CharactersService;
  // constructor(injectedService: CharactersService) {
  //   this.charactersService = injectedService;
  //  }
  constructor (private charactersService: CharactersService) {
    // this is how you debounce
    this.modelChanged.debounceTime(1000).distinctUntilChanged()
      .subscribe((model) => {
        this.search.nameStartsWith = model;
        this.loadChanged();
      });

  }

  ngOnInit() {
    // this.characters = this.charactersService.getCharacters();
    // you must subscribe to an observable to be notified when it is complete
    // or when new data comes in
    // Arrow Functions are similar visually to C# Lambda Operators
    this.loadChanged();
  }

  limitChanged() {
    // don't care about what the value is, just need to change the data
    this.loadChanged();
  }

  searchChanged(text: string) {
    // we could immediately fire it off, but that would cause a lot of calls to be made for
    // each keystroke, instead we will us debouncing
    this.modelChanged.next(text);
  }

  private loadChanged() {
    this.charactersService.getCharacters(this.search).subscribe((result: ICharacterResults) => {
      this.characters = result.characters;
      this.total = result.total;
    });
  }

}
