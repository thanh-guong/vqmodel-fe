// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  aircraftRoute: 'aircraft-classes',
  aircraftModelsRoute: 'aircraft-models',
  factoryRoute: 'factory',
  reviewsRoute: 'reviews',
  distributorsRoute: 'distributors',
  contactUsRoute: 'contact-us',
  remoteHost: '192.168.1.9',
  remotePort: '8000',
  remoteApiPrefix: 'api',
  aircraftClassRemoteRoute: 'aircraftclasses',
  aircraftModelRemoteRoute: 'aircraftmodels',
  aircraftVersionRemoteRoute: 'aircraftversions',
  getAircraftModelsByClass: 'get_aircraft_models_by_class',
  getAircraftVersionsByModel: 'get_aircraft_versions_by_model',
  reviewsRouteRemote: 'reviews',
  distributorsRouteRemote: 'distributors',
  solitary_mode: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

