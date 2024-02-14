import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharactersListComponent } from "./characters-list/characters-list/characters-list.component";
import { AboutComponent } from "./about/about/about.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/characters",
    pathMatch: "full",
  },
  {
    path: "characters",
    component: CharactersListComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
