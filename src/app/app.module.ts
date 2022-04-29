import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { playerModule } from './players/player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'players', pathMatch: 'full' },
      { path: '**', redirectTo: 'players', pathMatch: 'full' }
    ]),
    playerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
