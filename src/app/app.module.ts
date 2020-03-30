import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
// import { APP_ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    // PagesModule tiene que estar antes que AppRoutingModule, ya que tiene rutas hijas
    PagesModule,
    AppRoutingModule,
    // APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
