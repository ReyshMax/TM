define(
  [
    "underscore",
    "backbone.marionette",
    "marionette.approuter",
    "models/TestModel"
  ],
  function  (
    _,
    Mn,
    MnRouter,
    TestModel
  ) {

    var routes = [
      {
        title : "Главная",
        route : "",
        action : "actionIndex"
      },
      {
        title : "Форма",
        route : "form",
        action : "actionForm"
      },
    ];

    /// Это пойдет в роутер

    var appRoutes = _.chain(routes)
      .map(function(route) { return [route.route, route.action]; })
      .object()
      .value();

    var AppController = Mn.MnObject.extend({

      initialize : function (options) {
      },

      actionIndex : function (){
        var appView = this.getOption("appView");
        appView.showNavView({
          contextNav : routes
        });
        appView.setActiveNav(0);
        appView.showIndex();
        appView.showFooterView();
      },
      actionForm : function () {
        var appView = this.getOption("appView");
        appView.showNavView({
          contextNav : routes
        });
        appView.setActiveNav(1);

        var model = new TestModel();

        appView.showForm( {model : model} );
        appView.showFooterView();
      },

    });

    var AppRouter = MnRouter.extend({
      initialize : function (options) {
        this.controller = new AppController(options);
      },

      appRoutes : appRoutes,
    });

    return AppRouter;
  }
);
