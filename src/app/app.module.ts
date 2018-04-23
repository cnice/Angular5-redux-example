import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { appStoreProviders } from './app.store';

import { AppComponent } from './app.component';
import { ChildComponent} from './child-component/child.component';
import { SubChildComponent} from './sub-child-component/sub-child.componet';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SubChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ appStoreProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
