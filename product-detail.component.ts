import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

/**
 * Configuracion de la aplicacion. Habilita HttpClient para que el
 * ProductService pueda leer el archivo products.json.
 */
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};
