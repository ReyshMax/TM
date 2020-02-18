define([
  "text!./template.tpl",
  "handlebars",
  "backbone.marionette",
  "views/NavView/index",
  "views/FooterView/index",
  "views/IndexView/index",
  "views/FormView/index",

],
function(
  templateText,
  Handlebars,
  Mn,
  NavView,
  FooterView,
  IndexView,
  FormView
){
  var AppView = Mn.View.extend({
    template : Handlebars.compile(templateText),
    regions : {
      "nav" : "#nav-region",
      "content" : "#content-region",
      "footer" : "#footer-region",
    },

    initialize : function (options) {

    },

    // Куски, зависящие от роута

    showIndex : function (options) {
      this.showChildView("content", new IndexView());
    },

    showForm : function (options) {
      this.showChildView("content", new FormView( { model : options.model } ));
    },

    // Обшие куски шаблона

    showNavView : function (options) {
      if (!this.getChildView("nav")){
        this.showChildView("nav", new NavView( { contextNav : options.contextNav } ));
      }
    },
    setActiveNav : function (index){
      var navView = this.getChildView("nav");
      navView.el.querySelectorAll(".nav-item").forEach(function(each){
        each.classList.remove("active");
      });
      navView.el.querySelectorAll(".nav-item")[index].classList.add("active");
    },

    showFooterView : function (options) {
      if (!this.getChildView("footer")){
        this.showChildView("footer", new FooterView( {  } ));
      }
    },

  });

  return AppView;
});
