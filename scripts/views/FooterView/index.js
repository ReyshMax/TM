define([
  "text!./template.tpl",
  "backbone.marionette",
  "handlebars"
], function (
  footerTemplate,
  Mn,
  Handlebars
) {
  var FooterView = Mn.View.extend({
    template : Handlebars.compile(footerTemplate),
  });

  return FooterView;
});
