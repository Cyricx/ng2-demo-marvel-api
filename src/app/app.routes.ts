import { Routes } from '@angular/router';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharacterViewComponent } from './characters/character-view/character-view.component';

export const appRoutes: Routes = [
    { path: 'characters', component: CharactersListComponent },
    { path: 'characters/:id', component: CharacterViewComponent },
    { path: '', redirectTo: '/characters', pathMatch: 'full' }
];
