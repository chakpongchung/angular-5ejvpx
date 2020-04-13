import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {TopBarComponent} from './top-bar/top-bar.component';

@NgModule({

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    TopBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
