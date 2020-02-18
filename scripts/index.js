// Точка входа. Конфигурация модулей RequireJS, запуск SPA

requirejs.config({
    // Базовая директория от которой все пути относительно
    baseUrl: 'scripts',

    // Проще определить все модули-пути так, чем ломать голову с относительными. К тому же можно задать CDN
    paths: {
        "jquery" : "lib/jquery",
        "popper" : "https://unpkg.com/@popperjs/core@2.0.6/dist/umd/popper",
        "bootstrap" : "lib/bootstrap",
        "handlebars" : "lib/handlebars",
        "underscore" : "lib/underscore",
        "backbone" : "lib/backbone",
        "backbone.radio" : "lib/backbone.radio",
        "backbone-localstorage" : "lib/backbone-localstorage",
        "backbone.marionette" : "lib/backbone.marionette.min",
        "marionette.approuter" : "lib/marionette.approuter",
        "requiretext" : "lib/requiretext",
        "jquery.mask" : "lib/jquery.mask",
        "backbone.stickit" : "lib/backbone.stickit"
    },
});
// Start the main app logic.
requirejs([
  "app",
  "helpers/handlebars",
  "jquery.mask"
],
function (App) {
  (new App()).start();
});
