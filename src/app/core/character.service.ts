import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map } from "rxjs";
import { ApiCharacterStructure, CharacterStructure } from "./characters.model";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  private characters = new BehaviorSubject<CharacterStructure[]>([]);
  public characters$ = this.characters.asObservable();

  constructor(private http: HttpClient) {}

  loadCharacters() {
    this.http
      .get<ApiCharacterStructure[]>("http://localhost:4000/characters")
      .pipe(
        map((apiCharacters) => {
          const characters: CharacterStructure[] =
            apiCharacters.map<CharacterStructure>((apiCharacter) => ({
              id: apiCharacter.id,
              name: apiCharacter.name,
              pictureUrl: apiCharacter.url,
            }));
          return characters;
        })
      )
      .subscribe((characters) => {
        this.characters.next([...characters]);
      });
  }
}
