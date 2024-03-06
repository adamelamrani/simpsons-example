interface BaseCharacterStructure {
  id: number;
  name: string;
}

export interface CharacterStructure extends BaseCharacterStructure {
  pictureUrl: string;
}

export interface ApiCharacterStructure extends BaseCharacterStructure {
  url: string;
}
