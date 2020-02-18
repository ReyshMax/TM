define([
  "text!./template.tpl",
  "backbone.marionette",
  "handlebars"
], function (
  templateText,
  Mn,
  Handlebars
) {
  var View = Mn.View.extend({
    template : Handlebars.compile(templateText),
  });

  return ViewView;
});
