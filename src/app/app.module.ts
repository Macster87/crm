import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { StartModule } from './start/start.module';
import { StartPageComponent } from './start/start-page/start-page.component';
import { LegalModule } from './legal/legal.module';
import { AuthModule } from './features/auth/auth.module';
import { CustomerModule } from './features/customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundPageComponent,
    StartPageComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    CustomerModule,
    StartModule,
    LegalModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
