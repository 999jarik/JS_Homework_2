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
        element.textContent = text;
        return element;
    },
    createForm(_class, action, method) {
        form = document.createElement('form');
        form.className = checkU(_class);
        form.action = action;
        form.method = method;
        return form;
    },
    createInput(_class, type, name, id, value) {
        input = document.createElement(type);
        input.className = _class;
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

let liQuestion1 = pageBuilder.createItem('li', 'test_item');
let liQuestion2 = pageBuilder.createItem('li', 'test_item');
let liQuestion3 = pageBuilder.createItem('li', 'test_item');

let subtitleQ1 = pageBuilder.createItem('h2', 'subtitle', '1. Питання №1');
let subtitleQ2 = pageBuilder.createItem('h2', 'subtitle', '2. Питання №2');
let subtitleQ3 = pageBuilder.createItem('h2', 'subtitle', '3. Питання №3');

let ulAnswers1 = pageBuilder.createItem('ul', 'list_answers');
let ulAnswers2 = pageBuilder.createItem('ul', 'list_answers');
let ulAnswers3 = pageBuilder.createItem('ul', 'list_answers');

document.body.appendChild(title);
document.body.appendChild(wrapper);
wrapper.appendChild(formMain);
formMain.appendChild(ulTest);
ulTest.appendChild(liQuestion1);
liQuestion1.appendChild(subtitleQ1);
liQuestion1.appendChild(ulAnswers1);


ulTest.appendChild(liQuestion2);
liQuestion2.appendChild(subtitleQ2);
liQuestion2.appendChild(ulAnswers2);

ulTest.appendChild(liQuestion3);
liQuestion3.appendChild(subtitleQ3);
liQuestion3.appendChild(ulAnswers3);

// Зупинився на li class="answer_item"