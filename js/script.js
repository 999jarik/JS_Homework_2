function checkU(a) {
    if(a === undefined) {
        a = "";
    }
    return a;
};
const pageBuilder = {
    createItem(type, _class, text) {
        element = document.createElement(type);
        element.className = checkU(_class);
        element.textContent = checkU(text);
        return element;
    },
    createForm(_class, action, method) {
        form = document.createElement('form');
        form.className = checkU(_class);
        form.action = action;
        form.method = method;
        return form;
    },
    createInput(type, _class, typeInput, name, id, value) {
        input = document.createElement(type);
        input.className = _class;
        input.type = typeInput;
        input.name = name;
        input.id = id;
        input.value = value;
        return input;
    },
};
let title = pageBuilder.createItem('h1', 'title', 'Тест по програмуванню');
let wrapper = pageBuilder.createItem('div', 'wrapper');
let formMain = pageBuilder.createForm('form-main', '', 'post');
let ulTest = pageBuilder.createItem('ul', 'test');

document.body.appendChild(title);
document.body.appendChild(wrapper);
wrapper.appendChild(formMain);
formMain.appendChild(ulTest);

for (var q = 1; q < 4; q++) {
    var liQuestion = pageBuilder.createItem('li', 'test_item');
    var subtitle = pageBuilder.createItem('h2', 'subtitle', `${q}. Питання № ${q}`);
    var ulAnswers = pageBuilder.createItem('ul', 'list_answers');
    ulTest.appendChild(liQuestion);
    liQuestion.appendChild(subtitle);
    liQuestion.appendChild(ulAnswers);
    for (var i = 1; i < 4; i++) {
      var liAnswer = pageBuilder.createItem('li', 'answer_item');
      var labelAnswer = pageBuilder.createItem('label', 'label-radio', ` Варіант відповіді № ${i}`);
      var radioAnswer = pageBuilder.createInput('input', 'item_radio', 'radio', `question${q}`, `q${q}_a${i}`, `answ${i}`);
      ulAnswers.appendChild(liAnswer);
      liAnswer.appendChild(labelAnswer);
      labelAnswer.prepend(radioAnswer);
    }
  }

let boxButton = pageBuilder.createItem('div', 'box_button');
formMain.appendChild(boxButton);

let submit = pageBuilder.createItem('button', 'button-submit', 'Перевірити результат');
submit.setAttribute('type', 'submit');
submit.setAttribute('name', 'button-submit');
boxButton.appendChild(submit);