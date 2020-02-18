define([
  "text!./template.tpl",
  "backbone.marionette",
  "handlebars",
  "jquery",
  "backbone.stickit"
], function (
  templateText,
  Mn,
  Handlebars,
  $,
  stickit
) {

  var FormView = Mn.View.extend({
    template : Handlebars.compile(templateText),

    initialize : function (options){
      // маска на телефон
      this.phoneMask();

    },

    // маски
    phoneMask : function () {
      this.$("#test-model-phone").mask("+7-(000)-000-00-00", {
        translation : {
          placeholder : "+7-(___)-___-__-__",
        }
      });
      this.$("#test-model-fullname").mask("W", {
        translation : {
          "W" : {
            pattern : /[A-Za-z ]+/g,
            recursive : true,
          },
        },
      });
    },

    // биндинги стикитом

    bindings : {
      "#test-model-firstname" : {
        observe : "firstname",
        attributes : [
          {
            observe : "firstname",
            name : "class",
            onGet : function(val) {
              return val.length < 3 ? "invalid" : "";
            }
          }
        ]
      },
      "#test-model-lastname" : "lastname",
      "#test-model-age" :{
        observe : "age",
        onSet : function(val) {
          return Number(val);
        },
      },
      "#test-model-occupation" : "occupation",
      "#test-model-phone" : "phone",
      "#test-model-fullname" : {
        observe : ["firstname", "lastname"],
        onGet : function (values) {
          return values[0] + ' ' + values[1];
        },
        onSet : function (value) {
          return value.split(" ").map(each => each[0].toUpperCase() + each.slice(1));
        },
      },
      ".test-model-hobby" : {
        observe : "hobbies",
      },
      "#test-model-select-hobby" : {
        observe: ["hobbies", "focus"],
        selectOptions : {
          collection : function () {
            console.log(this.model.get("hobbies").map(each => { return { label : each, value : each } }));
            return this.model.get("hobbies").map(each => { return { label : each, value : each } });
          },
        },
      },
    },
    onRender : function () {
      this.stickit();
      console.log(this.$("#test-model-select-hobby"));
    },

    modelEvents : {
      "change" : "onModelChange",
    },
    onModelChange : function () {
      console.log(this.model.changedAttributes());
      if (!window._model)
       window._model = this.model;
    },

  });

  return FormView;
});
