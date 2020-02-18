require([ "handlebars" ],
function (Handlebars) {
  Handlebars.registerHelper("concat", function (glue, ...strings) {
    return strings.slice(0, -1).join(glue);
  });

});
