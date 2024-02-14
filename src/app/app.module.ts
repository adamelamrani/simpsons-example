import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CharactersListModule } from "./characters-list/characters-list.module";
import { AboutModule } from "./about/about.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AboutModule,
    CharactersListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
