import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/components/counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesModule } from './heroes/heroes.module';
import { ListComponent } from './heroes/list/list.component';
import { MainPageComponent } from './dbz/pages/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
