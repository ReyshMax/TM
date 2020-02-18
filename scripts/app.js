define([
  "backbone",
 "backbone.marionette",
 "controllers/AppRouter",
 "views/AppView/index",
],
function (
  Bb,
  Mn,
  AppRouter,
  AppView,
) {
  var App = Mn.Application.extend({
    region : {
      el : "#app",
      replaceElement : false,
    },
    onStart : function(event){
      var appView = new AppView({
        el : $("#app"),
      });
      var appRouter = new AppRouter({
         appView : appView,
      });
      this.showView(appView);

      Bb.history.start();
    }
  });
  return App;
});
