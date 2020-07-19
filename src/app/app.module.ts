import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    GridLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
