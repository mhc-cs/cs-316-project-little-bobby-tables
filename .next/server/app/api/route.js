"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Calyce%5Ccs-316-project-little-bobby-tables%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Calyce%5Ccs-316-project-little-bobby-tables&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Calyce%5Ccs-316-project-little-bobby-tables%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Calyce%5Ccs-316-project-little-bobby-tables&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_alyce_cs_316_project_little_bobby_tables_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/route.ts */ \"(rsc)/./app/api/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\alyce\\\\cs-316-project-little-bobby-tables\\\\app\\\\api\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_alyce_cs_316_project_little_bobby_tables_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNhbHljZSU1Q2NzLTMxNi1wcm9qZWN0LWxpdHRsZS1ib2JieS10YWJsZXMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2FseWNlJTVDY3MtMzE2LXByb2plY3QtbGl0dGxlLWJvYmJ5LXRhYmxlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN3QjtBQUNyRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8/Yjk1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxhbHljZVxcXFxjcy0zMTYtcHJvamVjdC1saXR0bGUtYm9iYnktdGFibGVzXFxcXGFwcFxcXFxhcGlcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGlcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYWx5Y2VcXFxcY3MtMzE2LXByb2plY3QtbGl0dGxlLWJvYmJ5LXRhYmxlc1xcXFxhcHBcXFxcYXBpXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Calyce%5Ccs-316-project-little-bobby-tables%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Calyce%5Ccs-316-project-little-bobby-tables&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/db.ts":
/*!***********************!*\
  !*** ./app/api/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Connect to the database\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://316:316Password@lbt.5zbr4zu.mongodb.net/?retryWrites=true&w=majority&appName=LBT\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(\"connected\", ()=>{\n    console.log(\"Connected to MongoDB\");\n});\n// Define the schema for the data\nconst helloSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    language: String,\n    greeting: String\n});\n// Create a model\nconst HelloModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"messages\", helloSchema);\n// Export the HelloModel directly using ESM syntax\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQywwQkFBMEI7QUFDMUJBLHVEQUFnQixDQUFDLGtHQUFrRztJQUNqSEUsaUJBQWlCO0lBQ2pCQyxvQkFBb0I7QUFDdEI7QUFFQUgsMERBQW1CLENBQUNLLEVBQUUsQ0FBQyxhQUFhO0lBQ2hDQyxRQUFRQyxHQUFHLENBQUM7QUFDZDtBQUVBLGlDQUFpQztBQUNqQyxNQUFNQyxjQUFjLElBQUlSLHdEQUFlLENBQUM7SUFDdENVLFVBQVVDO0lBQ1ZDLFVBQVVEO0FBQ1o7QUFFQSxpQkFBaUI7QUFDakIsTUFBTUUsYUFBYWIscURBQWMsQ0FBQyxZQUFZUTtBQUU5QyxrREFBa0Q7QUFDbEQsaUVBQWVLLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9hcHAvYXBpL2RiLnRzP2IxOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbi8vIENvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXHJcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vMzE2OjMxNlBhc3N3b3JkQGxidC41emJyNHp1Lm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1MQlQnLCB7XHJcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxufSk7XHJcblxyXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREInKTtcclxuICB9KTtcclxuICBcclxuICAvLyBEZWZpbmUgdGhlIHNjaGVtYSBmb3IgdGhlIGRhdGFcclxuICBjb25zdCBoZWxsb1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbGFuZ3VhZ2U6IFN0cmluZyxcclxuICAgIGdyZWV0aW5nOiBTdHJpbmdcclxuICB9KTtcclxuICBcclxuICAvLyBDcmVhdGUgYSBtb2RlbFxyXG4gIGNvbnN0IEhlbGxvTW9kZWwgPSBtb25nb29zZS5tb2RlbCgnbWVzc2FnZXMnLCBoZWxsb1NjaGVtYSk7XHJcbiAgXHJcbiAgLy8gRXhwb3J0IHRoZSBIZWxsb01vZGVsIGRpcmVjdGx5IHVzaW5nIEVTTSBzeW50YXhcclxuICBleHBvcnQgZGVmYXVsdCBIZWxsb01vZGVsO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImxvZyIsImhlbGxvU2NoZW1hIiwiU2NoZW1hIiwibGFuZ3VhZ2UiLCJTdHJpbmciLCJncmVldGluZyIsIkhlbGxvTW9kZWwiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/db.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/route.ts":
/*!**************************!*\
  !*** ./app/api/route.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"(rsc)/./app/api/db.ts\");\n\n\n// Gets all language data from the DB\nasync function GET(request) {\n    try {\n        console.log(\"Before query\");\n        // Query the database\n        const data = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        // Log the result to the console for debugging\n        console.log(\"API Route: After query, result:\", data);\n        // Log the type and structure of 'data' variable\n        console.log(\"API Route: Type of data:\", typeof data);\n        console.log(\"API Route: Structure of data:\", JSON.stringify(data));\n        // Return the result as JSON\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(data || []);\n    } catch (error) {\n        console.error(\"Error querying the database:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNiO0FBRTlCLHFDQUFxQztBQUM5QixlQUFlRSxJQUFJQyxPQUFnQjtJQUN4QyxJQUFJO1FBQ0ZDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLHFCQUFxQjtRQUNyQixNQUFNQyxPQUFPLE1BQU1MLDJDQUFVQSxDQUFDTSxJQUFJLENBQUMsQ0FBQztRQUVwQyw4Q0FBOEM7UUFDOUNILFFBQVFDLEdBQUcsQ0FBQyxtQ0FBbUNDO1FBRS9DLGdEQUFnRDtRQUNoREYsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QixPQUFPQztRQUMvQ0YsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ0csS0FBS0MsU0FBUyxDQUFDSDtRQUU1RCw0QkFBNEI7UUFDNUIsT0FBT04sa0ZBQVlBLENBQUNVLElBQUksQ0FBQ0osUUFBUSxFQUFFO0lBQ3JDLEVBQUUsT0FBT0ssT0FBTztRQUNkUCxRQUFRTyxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPWCxrRkFBWUEsQ0FBQ1csS0FBSztJQUMzQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vYXBwL2FwaS9yb3V0ZS50cz8xNDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IEhlbGxvTW9kZWwgZnJvbSAnLi9kYic7XHJcblxyXG4vLyBHZXRzIGFsbCBsYW5ndWFnZSBkYXRhIGZyb20gdGhlIERCXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZygnQmVmb3JlIHF1ZXJ5Jyk7XHJcblxyXG4gICAgLy8gUXVlcnkgdGhlIGRhdGFiYXNlXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgSGVsbG9Nb2RlbC5maW5kKHt9KTtcclxuXHJcbiAgICAvLyBMb2cgdGhlIHJlc3VsdCB0byB0aGUgY29uc29sZSBmb3IgZGVidWdnaW5nXHJcbiAgICBjb25zb2xlLmxvZygnQVBJIFJvdXRlOiBBZnRlciBxdWVyeSwgcmVzdWx0OicsIGRhdGEpO1xyXG5cclxuICAgIC8vIExvZyB0aGUgdHlwZSBhbmQgc3RydWN0dXJlIG9mICdkYXRhJyB2YXJpYWJsZVxyXG4gICAgY29uc29sZS5sb2coJ0FQSSBSb3V0ZTogVHlwZSBvZiBkYXRhOicsIHR5cGVvZiBkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKCdBUEkgUm91dGU6IFN0cnVjdHVyZSBvZiBkYXRhOicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHJlc3VsdCBhcyBKU09OXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZGF0YSB8fCBbXSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHF1ZXJ5aW5nIHRoZSBkYXRhYmFzZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmVycm9yKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJIZWxsb01vZGVsIiwiR0VUIiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZmluZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Calyce%5Ccs-316-project-little-bobby-tables%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Calyce%5Ccs-316-project-little-bobby-tables&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();