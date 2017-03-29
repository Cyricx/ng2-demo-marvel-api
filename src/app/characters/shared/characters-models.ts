export interface ICharacter {
    id: number;
    name: string;
    description: string;
    thumbnail: ICharacterThumbnail;
    series: any;
    stories: any;
    comics: any;
    events: any;
}

export interface ICharacterThumbnail {
    path: string;
    extension: string;
}

export interface ICharacterResults {
    characters: ICharacter[];
    total: number;
}

export interface ICharacterSearch {
    nameStartsWith: string;
    limit: number;
}
