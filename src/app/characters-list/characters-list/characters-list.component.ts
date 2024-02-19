import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CharacterService } from "src/app/core/character.service";
import { CharacterStructure } from "src/app/core/characters.model";

@Component({
  selector: "simp-characters-list",
  templateUrl: "./characters-list.component.html",
  styleUrls: ["./characters-list.component.css"],
})
export class CharactersListComponent implements OnInit, OnDestroy {
  public characters!: CharacterStructure[];
  public charactersSubscription!: Subscription;

  constructor(private charactersService: CharacterService) {}

  ngOnInit(): void {
    this.charactersSubscription = this.charactersService.characters$.subscribe(
      (characters) => {
        console.log("toma");
        this.characters = characters;
      }
    );

    this.charactersService.loadCharacters();
  }

  ngOnDestroy(): void {
    this.charactersSubscription.unsubscribe();
  }
}
