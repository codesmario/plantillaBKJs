import { Router } from "express"
import routeDefault from './defaultRouter.js'

function routerApi() {
  router.use('/default', routeDefault);
}

module.exports = routerApi;
