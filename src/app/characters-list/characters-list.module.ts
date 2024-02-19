import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersListComponent } from "./characters-list/characters-list.component";
import { CharacterModule } from "../character/character.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, CharacterModule, RouterModule],
  exports: [CharactersListComponent],
})
export class CharactersListModule {}
