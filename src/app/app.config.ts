  import { ApplicationConfig } from '@angular/core';
  import { provideRouter } from '@angular/router';
  import { provideAnimations } from '@angular/platform-browser/animations';
  import { routes } from './app.routes';
  import { provideHttpClient } from '@angular/common/http';
  import { FormsModule } from '@angular/forms'; // Import FormsModule

  export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideAnimations(), provideHttpClient(),    FormsModule
  ]
  };
