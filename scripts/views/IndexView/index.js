define([
  "text!./template.tpl",
  "backbone.marionette",
  "handlebars"
], function (
  templateText,
  Mn,
  Handlebars
) {
  var IndexView = Mn.View.extend({
    template : Handlebars.compile(templateText),
  });

  return IndexView;
});
