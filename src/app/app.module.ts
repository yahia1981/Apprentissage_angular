import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent} from './ui/menu.component';
import { ItemenuComponent} from './ui/itemenu.component';
import { HighlightDirective} from './ui/directivespersonaliser'; 







@NgModule({
  declarations: [
    AppComponent, MenuComponent, ItemenuComponent, HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
