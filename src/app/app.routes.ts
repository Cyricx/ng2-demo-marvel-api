import { Routes } from '@angular/router';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';

export const appRoutes: Routes = [
    { path: 'characters', component: CharactersListComponent },
    { path: '', redirectTo: '/characters', pathMatch: 'full' }
];
