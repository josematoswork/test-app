import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputModule } from 'my-library';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TextInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
