define ([
  "backbone"
], function (
 Bb

) {
  var TestModel = Bb.Model.extend({
    defaults : {
      "firstname" : "Svetlana",
      "lastname" : "Muravieva",
      "age" : 23,
      "occupation" : "student",
      "phone" : "+7-960-555-77-55",
      "hobbies" : ["drawing", "sculpting", "walking", "cycling"],
    },
  });

  return TestModel;
});
