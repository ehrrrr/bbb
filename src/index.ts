import toolkit from 's-app-toolkit';
import { rootHandler, helloHandler } from './handlers';
import 'dotenv/config';

/*
* You can pass the following options to the express application:
* - healthCheck - (Optional) A function that can be used to generate structured
    healthcheck information, the function should return a Promise resolved with an array
    of healthcheck objects
* - goodToGoTest - (Optional) A function that can be used to indicate the good to go status
    of the service, the function should return a Promise resolved with `true` to indicate
    a positive good to go status, and `false` to indicate a negative good to go status
* - routes - (Optional) An array of routes to install. Possible values are:
    "health", "gtg", "about" and "error". Defaults to ["health", "gtg", "about"]
*
* Example:
* getExpressApp({
    healthCheck: healthCheck.checks(),
    goodToGoTest: healthCheck.gtg(),
    routes: ["health", "error"]
  })
*/
const app = toolkit.server.getExpressApp();

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

if (toolkit.meta.isDevelopment) {
  toolkit.logger.info(`🚀 ${toolkit.meta.appName} is alive!`)
}
