import { Injectable } from '@angular/core';

@Injectable()
export class CharactersService {

  constructor() { }

  // typescript does have private and public, unlike c# the presumed is public
  getCharacters(): any[] {
    return CHARACTERS;
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
