/*
 * Providers provided by Angular
 */
import * as ngCore from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { routerConfig } from './app/routes';

/*
 * App Environment Providers
 * providers that only live in certain environment
 */
const ENV_PROVIDERS = [];

if ('production' === process.env.ENV) {
    ngCore.enableProdMode();
    // ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS_PROD_MODE);
} else {
    // ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS);
}

/*
 * App Component
 * our top level component that holds all of our components
 */
import App from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main() {
    return bootstrap(App, [
            ...ENV_PROVIDERS,
            ...HTTP_PROVIDERS,
            provideRouter(routerConfig),
            ngCore.provide(LocationStrategy, { useClass: HashLocationStrategy })
        ])
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
