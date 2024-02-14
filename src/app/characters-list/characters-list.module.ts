import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersListComponent } from "./characters-list/characters-list.component";
import { CharacterModule } from "../character/character.module";

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, CharacterModule],
  exports: [CharactersListComponent],
})
export class CharactersListModule {}
