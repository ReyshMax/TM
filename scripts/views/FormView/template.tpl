<form>
  <div class="form-group">
    <label for="test-model-firstname">Имя</label>
    <input type="text" class="form-control" id="test-model-firstname" aria-describedby="test-model-firstname-help" value="{{firstname}}">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="test-model-lastname">Фамилия</label>
    <input type="text" class="form-control" id="test-model-lastname" aria-describedby="test-model-lastname-help" value="{{lastname}}">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="test-model-fullname">Полное имя</label>
    <input type="text" class="form-control" id="test-model-fullname" aria-describedby="test-model-fullname-help" value="{{concat " " firstname lastname}}">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="test-model-phone">Телефон</label>
    <input type="text" class="form-control" id="test-model-phone" aria-describedby="test-model-phone-help" value="{{phone}}">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="test-model-occupation">Занятие</label>
    <input type="text" class="form-control" id="test-model-occupation" aria-describedby="test-model-occupation-help" value="{{occupation}}">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="test-model-age">Возраст (лет)</label>
    <input type="number" class="form-control" id="test-model-age" aria-describedby="test-model-age" value="{{age}}">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  {{#each hobbies}}
  <div class="form-check">
    <input class="test-model-hobby form-check-input" type="checkbox" name="test-model-hobby" value="{{this}}" id="test-model-hobby-{{@index}}">
    <label class="form-check-label" for="test-model-hobby-{{@index}}">{{this}}</label>
  </div>
  {{/each}}
  <div class="form-group">
    <select class="form-control" id="test-model-select-hobby"></select>
  </div>
</form>
