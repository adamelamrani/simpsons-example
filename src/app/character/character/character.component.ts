import { Component, Input } from "@angular/core";
import { CharacterStructure } from "src/app/core/characters.model";

@Component({
  selector: "simp-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.css"],
})
export class CharacterComponent {
  @Input({
    required: true,
  })
  public character!: CharacterStructure;
}
