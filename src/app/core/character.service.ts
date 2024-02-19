import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CharacterStructure } from "./characters.model";
import charactersApi from "../data/characters";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  private characters = new BehaviorSubject<CharacterStructure[]>([]);
  public characters$ = this.characters.asObservable();

  constructor() {}

  loadCharacters() {
    this.characters.next([...charactersApi]);
  }
}
