import { Component, OnInit } from "@angular/core";
import charactersApi from "src/app/data/characters";

@Component({
  selector: "simp-characters-list",
  templateUrl: "./characters-list.component.html",
  styleUrls: ["./characters-list.component.css"],
})
export class CharactersListComponent {
  public characters = charactersApi;
}
