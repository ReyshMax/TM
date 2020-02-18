define (
  [
    "text!./template.tpl",
    "handlebars",
    "backbone.marionette"
  ], function
  (
    navTemplate,
    Handlebars,
    Mn
  ){
    var NavView = Mn.View.extend({
      template : Handlebars.compile(navTemplate),
      templateContext : {},
      initialize : function (options) {
        this.templateContext.contextNav = options.contextNav;
      },
    });

    return NavView;
  });
