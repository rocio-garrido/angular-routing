import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MessageModule } from './messages/message.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductData } from './products/product-data';
/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    RouterModule.forRoot([]),
    ProductModule,
    UserModule,
    MessageModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
