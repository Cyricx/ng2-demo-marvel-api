import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { SettingsService } from '../../settings.service';
import { Observable } from 'rxjs/Rx';
// angular doesn't need to inject or use interfaces for html compilation or
// object construction, so module doesn't care
import { ICharacterResults, ICharacterSearch } from '../shared/characters-models';

@Injectable()
export class CharactersService {

  constructor(private http: Http, private settings: SettingsService) { }

  // typescript does have private and public, unlike c# the presumed is public
  getCharacters(search: ICharacterSearch): Observable<ICharacterResults> {

    // need request options and url parameters
    const params = new URLSearchParams();
    params.set('apikey', this.settings.apikey);

    params.set('nameStartsWith', search.nameStartsWith);
    params.set('limit', search.limit.toString());
    params.set('offset', ((search.currentPage - 1) * search.limit).toString());

    const requestOptions = new RequestOptions();
    requestOptions.search = params;

    /*
    Promises:
      Returns a single value
      Can not cancel with

    Observables:
      Can return multiple values over time (like a stream of data)
      Can cancel
      Supports man operators and functions like map, filter, reduce etc
    */
    /*
      Arrow functions have two syntax
      variable => single line assignment
      (variable) => { function code }
    */
    return this.http.get('http://gateway.marvel.com/v1/public/characters', requestOptions).map((response: Response) => {
      // .json() converts the response
      // return response.json().data.results;
      const data = response.json().data;
      return {
        characters: data.results,
        total: data.total
      };
    });
    //return CHARACTERS;
  }
}

// brief on typescript typing
// variable: type = value;
const CHARACTERS: any[] = [
  {
    'id': 1009281,
    'name': 'Doctor Doom',
    'description': '',
    'modified': '2014-03-05T13:27:07-0500',
    'thumbnail': {
      'path': 'http://i.annihil.us/u/prod/marvel/i/mg/3/60/53176bb096d17',
      'extension': 'jpg'
    },
    'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1009281',
    'comics': {
    },
    'series': {
    },
    'stories': {
    },
    'events': {
    },
    'urls': []
  },
  {
    'id': 1011103,
    'name': 'Doctor Doom (Ultimate)',
    'description': '',
    'modified': '2014-03-05T13:27:13-0500',
    'thumbnail': {
      'path': 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/53176ba52dea1',
      'extension': 'jpg'
    },
    'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1011103',
    'comics': {
    },
    'series': {
    },
    'stories': {
    },
    'events': {
    },
    'urls': []
  },
  {
    'id': 1011206,
    'name': 'Doctor Faustus',
    'description': '',
    'modified': '1969-12-31T19:00:00-0500',
    'thumbnail': {
      'path': 'http://i.annihil.us/u/prod/marvel/i/mg/e/e0/4ce5a54ac4d4b',
      'extension': 'jpg'
    },
    'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1011206',
    'comics': {
    },
    'series': {
    },
    'stories': {
    },
    'events': {
    },
    'urls': []
  },
  {
    'id': 1009276,
    'name': 'Doctor Octopus',
    'description': '',
    'modified': '2013-11-20T17:05:53-0500',
    'thumbnail': {
      'path': 'http://i.annihil.us/u/prod/marvel/i/mg/b/b0/528d31b62eaba',
      'extension': 'jpg'
    },
    'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1009276',
    'comics': {
    },
    'series': {
    },
    'stories': {
    },
    'events': {
    },
    'urls': []
  },
  {
    'id': 1010921,
    'name': 'Doctor Octopus (Ultimate)',
    'description': '',
    'modified': '1969-12-31T19:00:00-0500',
    'thumbnail': {
      'path': 'http://i.annihil.us/u/prod/marvel/i/mg/5/50/4c00344e05ce0',
      'extension': 'jpg'
    },
    'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1010921',
    'comics': {
    },
    'series': {
    },
    'stories': {
    },
    'events': {
    },
    'urls': []
  },
  {
    'id': 1010689,
    'name': 'Doctor Spectrum',
    'description': '',
    'modified': '2011-05-05T13:07:29-0400',
    'thumbnail': {
      'path': 'http://i.annihil.us/u/prod/marvel/i/mg/4/90/4dc2d94978576',
      'extension': 'jpg'
    },
    'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1010689',
    'comics': {
    },
    'series': {
    },
    'stories': {
    },
    'events': {
    },
    'urls': []
  },
  {
    'id': 1009282,
    'name': 'Doctor Strange',
    'description': '',
    'modified': '2016-09-28T12:03:08-0400',
    'thumbnail': {
      'path': 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe',
      'extension': 'jpg'
    },
    'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1009282',
    'comics': {
    },
    'series': {
    },
    'stories': {
    },
    'events': {
    },
    'urls': []
  },
  {
    'id': 1011358,
    'name': 'Doctor Strange (Ultimate)',
    'description': '',
    'modified': '2014-03-05T13:24:09-0500',
    'thumbnail': {
      'path': 'http://i.annihil.us/u/prod/marvel/i/mg/8/f0/53176bbb6dc50',
      'extension': 'jpg'
    },
    'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1011358',
    'comics': {
    },
    'series': {
    },
    'stories': {
    },
    'events': {
    },
    'urls': []
  }
];
