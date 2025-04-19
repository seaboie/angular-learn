import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, appConfig, {providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)]})
  .catch((err) => console.error(err));
