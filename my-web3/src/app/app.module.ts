import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHeighlightDirective} from './basic-heighlight/basic-heighlight.directive';
import { BetterHeighlightDirective } from './better-heighlight/better-heighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHeighlightDirective,
    BetterHeighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
