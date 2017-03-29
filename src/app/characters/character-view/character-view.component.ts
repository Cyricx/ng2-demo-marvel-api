import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../shared/characters-models';
import { CharactersService } from '../shared/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  character: ICharacter;

  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // access a route parameter
    const id: number = this.route.snapshot.params['id'];
    this.charactersService.getCharacter(id).subscribe(result => this.character = result);
  }
  getImage(character: ICharacter) {
    if (character && character.thumbnail) {
      // return character.thumbnail.path + '.' + character.thumbnail.extension;
      return `${character.thumbnail.path}.${character.thumbnail.extension}`;
    } else {
      return 'assets/noimage.jpg';
    }
  }
}
